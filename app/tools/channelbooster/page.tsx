import type { Metadata } from "next"
import ChannelBoosterPageClient from "./ChannelBoosterPageClient"

export const metadata: Metadata = {
  title: "ChannelBooster | YouTube Optimization Tool | Regen Creatives | Powder Springs, GA",
  description:
    "ChannelBooster is an AI-powered YouTube optimization tool that helps content creators in Powder Springs, GA boost views, engagement, and subscriber growth in seconds. Get SEO insights, thumbnail analysis, and content optimization.",
  keywords:
    "ChannelBooster, YouTube optimization, video SEO, content creator tools, YouTube analytics, thumbnail optimization, Powder Springs GA, YouTube growth, video marketing, content optimization",
  openGraph: {
    title: "ChannelBooster | YouTube Optimization Tool | Regen Creatives",
    description:
      "AI-powered YouTube optimization tool that analyzes your content and provides actionable insights to boost views, engagement, and subscriber growth.",
    url: "https://regencreatives.com/tools/channelbooster",
    images: [
      {
        url: "/regen-logo.png",
        width: 1200,
        height: 630,
        alt: "ChannelBooster YouTube Optimization Tool",
      },
    ],
  },
  twitter: {
    title: "ChannelBooster | YouTube Optimization Tool | Regen Creatives",
    description:
      "AI-powered YouTube optimization tool that analyzes your content and provides actionable insights to boost views, engagement, and subscriber growth.",
    images: ["/regen-logo.png"],
  },
  alternates: {
    canonical: "/tools/channelbooster",
  },
}

export default function ChannelBoosterPage() {
  return <ChannelBoosterPageClient />
}
