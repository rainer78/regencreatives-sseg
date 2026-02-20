import type { Metadata } from "next"
import PowderSpringsLandingPageClient from "./PowderSpringsLandingPageClient"

export const metadata: Metadata = {
  title: "Powder Springs Business Automation | Regen Creatives | AI-Powered Solutions for Local Solo Business Owners",
  description:
    "Regen Creatives helps Powder Springs, GA solo business owners automate marketing, customer management, and daily operations with AI-powered tools. Serving zip code 30127.",
  keywords:
    "Powder Springs business automation, GA 30127, solo business owners, AI marketing, local SEO, business process automation, customer management, Powder Springs entrepreneurs",
  openGraph: {
    title: "Powder Springs Business Automation | Regen Creatives | AI-Powered Solutions for Local Solo Business Owners",
    description:
      "Regen Creatives helps Powder Springs, GA solo business owners automate marketing, customer management, and daily operations with AI-powered tools. Serving zip code 30127.",
    url: "https://regencreatives.com/powder-springs",
    images: [
      {
        url: "/regen-logo.png",
        width: 1200,
        height: 630,
        alt: "Regen Creatives Powder Springs Business Automation",
      },
    ],
  },
  twitter: {
    title: "Powder Springs Business Automation | Regen Creatives | AI-Powered Solutions for Local Solo Business Owners",
    description:
      "Regen Creatives helps Powder Springs, GA solo business owners automate marketing, customer management, and daily operations with AI-powered tools. Serving zip code 30127.",
    images: ["/regen-logo.png"],
  },
  alternates: {
    canonical: "/powder-springs",
  },
}

export default function PowderSpringsLandingPage() {
  return <PowderSpringsLandingPageClient />
}
