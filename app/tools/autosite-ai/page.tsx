import type { Metadata } from "next"
import AutoSiteAIPageClient from "./AutoSiteAIPageClient"

export const metadata: Metadata = {
  title: "AutoSite AI | Website Builder | Regen Creatives | Powder Springs, GA",
  description:
    "AutoSite AI is a revolutionary AI-powered website builder that creates fully functional websites in 7 minutes. Perfect for Powder Springs, GA businesses needing professional websites fast. Complete with content, design, and SEO optimization.",
  keywords:
    "AutoSite AI, AI website builder, website creation, web design, Powder Springs GA, business websites, AI web development, fast website builder, automated web design, small business websites",
  openGraph: {
    title: "AutoSite AI | Revolutionary Website Builder | Regen Creatives",
    description:
      "Revolutionary website builder that creates fully functional websites using AI, complete with content, design, and optimization in just 7 minutes.",
    url: "https://regencreatives.com/tools/autosite-ai",
    images: [
      {
        url: "/regen-logo.png",
        width: 1200,
        height: 630,
        alt: "AutoSite AI Website Builder",
      },
    ],
  },
  twitter: {
    title: "AutoSite AI | Revolutionary Website Builder | Regen Creatives",
    description:
      "Revolutionary website builder that creates fully functional websites using AI, complete with content, design, and optimization in just 7 minutes.",
    images: ["/regen-logo.png"],
  },
  alternates: {
    canonical: "/tools/autosite-ai",
  },
}

export default function AutoSiteAIPage() {
  return <AutoSiteAIPageClient />
}
