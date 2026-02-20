import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Us | Regen Creatives | AI-Powered Solutions for Solopreneurs",
  description:
    "Learn about Regen Creatives, our founder Lorraine Dukes, and our mission to empower solopreneurs with AI-powered tools and innovative business solutions.",
  keywords:
    "Regen Creatives, about us, Lorraine Dukes, AI tools, solopreneurs, business solutions, product studio, Atlanta",
  openGraph: {
    title: "About Us | Regen Creatives | AI-Powered Solutions for Solopreneurs",
    description:
      "Learn about Regen Creatives, our founder Lorraine Dukes, and our mission to empower solopreneurs with AI-powered tools and innovative business solutions.",
    url: "https://regencreatives.com/about",
    images: [
      {
        url: "/regen-logo.png",
        width: 1200,
        height: 630,
        alt: "Regen Creatives About Us",
      },
    ],
  },
  twitter: {
    title: "About Us | Regen Creatives | AI-Powered Solutions for Solopreneurs",
    description:
      "Learn about Regen Creatives, our founder Lorraine Dukes, and our mission to empower solopreneurs with AI-powered tools and innovative business solutions.",
    images: ["/regen-logo.png"],
  },
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
