import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Blog | Regen Creatives | AI-Powered Solutions for Solopreneurs",
  description:
    "Stay updated with the latest insights, tutorials, and news from Regen Creatives. Discover AI trends, solopreneur tips, and behind-the-scenes stories.",
  keywords:
    "Regen Creatives blog, AI insights, solopreneur tips, business automation, product development, design tutorials",
  openGraph: {
    title: "Blog | Regen Creatives | AI-Powered Solutions for Solopreneurs",
    description:
      "Stay updated with the latest insights, tutorials, and news from Regen Creatives. Discover AI trends, solopreneur tips, and behind-the-scenes stories.",
    url: "https://regencreatives.com/blog",
    images: [
      {
        url: "/regen-logo.png",
        width: 1200,
        height: 630,
        alt: "Regen Creatives Blog",
      },
    ],
  },
  twitter: {
    title: "Blog | Regen Creatives | AI-Powered Solutions for Solopreneurs",
    description:
      "Stay updated with the latest insights, tutorials, and news from Regen Creatives. Discover AI trends, solopreneur tips, and behind-the-scenes stories.",
    images: ["/regen-logo.png"],
  },
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogPage() {
  return <BlogClientPage />
}
