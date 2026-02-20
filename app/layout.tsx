import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Regen Creatives | AI-Powered Solutions for Solopreneurs",
  description:
    "Regen Creatives provides AI-powered solutions for solopreneurs, helping them grow their businesses with innovative strategies and tools.",
  keywords: "Regen Creatives, AI, solopreneurs, business solutions, marketing, web design, Powder Springs, GA",
  authors: [{ name: "Regen Creatives" }],
  creator: "Regen Creatives",
  publisher: "Regen Creatives",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://regencreatives.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Regen Creatives | AI-Powered Solutions for Solopreneurs",
    description:
      "Regen Creatives provides AI-powered solutions for solopreneurs, helping them grow their businesses with innovative strategies and tools.",
    url: "https://regencreatives.com",
    siteName: "Regen Creatives",
    images: [
      {
        url: "/regen-logo.png",
        width: 1200,
        height: 630,
        alt: "Regen Creatives Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regen Creatives | AI-Powered Solutions for Solopreneurs",
    description:
      "Regen Creatives provides AI-powered solutions for solopreneurs, helping them grow their businesses with innovative strategies and tools.",
    site: "@RegenCreatives",
    creator: "@RegenCreatives",
    images: ["/regen-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/regen-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/regen-logo.png" />
        <meta name="theme-color" content="#e25555" />
        <meta name="msapplication-TileColor" content="#e25555" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
