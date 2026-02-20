import type { Metadata } from "next"
import FixiePageClient from "./FixiePageClient"

export const metadata: Metadata = {
  title: "Fixie | AI DIY Repair Assistant | Regen Creatives | Powder Springs, GA",
  description:
    "Fixie is an AI-powered DIY repair assistant that identifies problems from photos and provides step-by-step solutions. Perfect for Powder Springs, GA homeowners and DIY enthusiasts. Get instant repair guidance with tools and materials lists.",
  keywords:
    "Fixie, DIY repair, home repair assistant, AI repair tool, photo diagnosis, step-by-step repairs, Powder Springs GA, home maintenance, DIY solutions, repair guidance",
  openGraph: {
    title: "Fixie | Smart DIY Repair Assistant | Regen Creatives",
    description:
      "Smart DIY assistant that identifies problems from photos and provides step-by-step repair solutions with tools and materials needed.",
    url: "https://regencreatives.com/tools/fixie",
    images: [
      {
        url: "/regen-logo.png",
        width: 1200,
        height: 630,
        alt: "Fixie DIY Repair Assistant",
      },
    ],
  },
  twitter: {
    title: "Fixie | Smart DIY Repair Assistant | Regen Creatives",
    description:
      "Smart DIY assistant that identifies problems from photos and provides step-by-step repair solutions with tools and materials needed.",
    images: ["/regen-logo.png"],
  },
  alternates: {
    canonical: "/tools/fixie",
  },
}

export default function FixiePage() {
  return <FixiePageClient />
}
