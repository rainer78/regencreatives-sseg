import type { Metadata } from "next"
import ToolsPageClient from "./ToolsPageClient"

export const metadata: Metadata = {
  title: "AI Tools | Regen Creatives | AI-Powered Solutions for Solopreneurs",
  description:
    "Explore our collection of AI-powered tools designed to help solopreneurs automate tasks, boost productivity, and grow their businesses efficiently.",
  keywords:
    "AI tools, ChannelBooster, AutoSite AI, Fixie, ViewMatch, REVA AI, Glam Book AI, solopreneurs, automation, productivity",
  openGraph: {
    title: "AI Tools | Regen Creatives | AI-Powered Solutions for Solopreneurs",
    description:
      "Explore our collection of AI-powered tools designed to help solopreneurs automate tasks, boost productivity, and grow their businesses efficiently.",
    url: "https://regencreatives.com/tools",
    images: [
      {
        url: "/regen-logo.png",
        width: 1200,
        height: 630,
        alt: "Regen Creatives AI Tools",
      },
    ],
  },
  twitter: {
    title: "AI Tools | Regen Creatives | AI-Powered Solutions for Solopreneurs",
    description:
      "Explore our collection of AI-powered tools designed to help solopreneurs automate tasks, boost productivity, and grow their businesses efficiently.",
    images: ["/regen-logo.png"],
  },
  alternates: {
    canonical: "/tools",
  },
}

export default function ToolsPage() {
  return <ToolsPageClient />
}
