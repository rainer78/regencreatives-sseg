import { appendFile, mkdir } from "node:fs/promises"
import path from "node:path"
import { NextRequest, NextResponse } from "next/server"
import { ZodError } from "zod"
import { formatZodFieldErrors, normalizeContactSubmission } from "@/lib/contact-schema"

type RateLimitEntry = { count: number; resetAt: number }

const RATE_LIMIT_WINDOW_MS = Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000)
const RATE_LIMIT_MAX = Number(process.env.CONTACT_RATE_LIMIT_MAX || 5)
const STORE_PATH = process.env.CONTACT_STORAGE_PATH || path.join(process.cwd(), "data", "contact-submissions.jsonl")

const rateLimitState = new Map<string, RateLimitEntry>()

function getClientIp(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for")
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown"
  }
  return req.headers.get("x-real-ip") || "unknown"
}

function checkRateLimit(key: string) {
  const now = Date.now()
  const existing = rateLimitState.get(key)

  if (!existing || existing.resetAt < now) {
    rateLimitState.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1, resetAt: now + RATE_LIMIT_WINDOW_MS }
  }

  if (existing.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0, resetAt: existing.resetAt }
  }

  existing.count += 1
  rateLimitState.set(key, existing)
  return { allowed: true, remaining: Math.max(0, RATE_LIMIT_MAX - existing.count), resetAt: existing.resetAt }
}

async function persistSubmission(submission: ReturnType<typeof normalizeContactSubmission>, meta: { ip: string }) {
  const dir = path.dirname(STORE_PATH)
  await mkdir(dir, { recursive: true })

  const record = {
    ...submission,
    submittedAt: new Date().toISOString(),
    ip: meta.ip,
  }

  await appendFile(STORE_PATH, `${JSON.stringify(record)}\n`, "utf8")
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req)
  const rate = checkRateLimit(ip)

  if (!rate.allowed) {
    return NextResponse.json(
      {
        ok: false,
        error: {
          code: "RATE_LIMITED",
          message: "Too many submissions. Please try again later.",
          retryAfterMs: Math.max(0, rate.resetAt - Date.now()),
        },
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil(Math.max(0, rate.resetAt - Date.now()) / 1000)),
        },
      },
    )
  }

  try {
    const json = await req.json()
    const submission = normalizeContactSubmission(json)

    await persistSubmission(submission, { ip })

    return NextResponse.json({
      ok: true,
      data: {
        message: "Thanks for reaching out — we received your message.",
      },
    })
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          ok: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Please correct the highlighted fields.",
            fieldErrors: formatZodFieldErrors(error),
          },
        },
        { status: 400 },
      )
    }

    return NextResponse.json(
      {
        ok: false,
        error: {
          code: "INTERNAL_ERROR",
          message: "Something went wrong while saving your submission.",
        },
      },
      { status: 500 },
    )
  }
}
