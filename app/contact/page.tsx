import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us | Regen Creatives | AI-Powered Solutions for Solopreneurs",
  description:
    "Get in touch with Regen Creatives. Contact us for inquiries about our AI-powered tools, business solutions, or partnership opportunities.",
  keywords: "contact Regen Creatives, get in touch, business inquiries, support, AI tools help, solopreneur assistance",
  openGraph: {
    title: "Contact Us | Regen Creatives | AI-Powered Solutions for Solopreneurs",
    description:
      "Get in touch with Regen Creatives. Contact us for inquiries about our AI-powered tools, business solutions, or partnership opportunities.",
    url: "https://regencreatives.com/contact",
    images: [
      {
        url: "/regen-logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Regen Creatives",
      },
    ],
  },
  twitter: {
    title: "Contact Us | Regen Creatives | AI-Powered Solutions for Solopreneurs",
    description:
      "Get in touch with Regen Creatives. Contact us for inquiries about our AI-powered tools, business solutions, or partnership opportunities.",
    images: ["/regen-logo.png"],
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
