import { z } from "zod"

export const contactSubmissionSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120, "Name is too long"),
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address"),
  phone: z.string().trim().max(40, "Phone number is too long").optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(4000, "Message is too long"),
})

export type ContactSubmissionInput = z.input<typeof contactSubmissionSchema>
export type ContactSubmission = z.output<typeof contactSubmissionSchema>

export function normalizeContactSubmission(input: ContactSubmissionInput): ContactSubmission {
  const parsed = contactSubmissionSchema.parse(input)
  return {
    ...parsed,
    phone: parsed.phone || "",
  }
}

export function formatZodFieldErrors(error: z.ZodError) {
  return error.flatten().fieldErrors
}
