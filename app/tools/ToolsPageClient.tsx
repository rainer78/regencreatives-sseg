"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Sparkles, Zap, Wrench, Eye, Mic, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ToolsPageClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const tools = [
    {
      name: "ChannelBooster",
      description:
        "AI-powered YouTube optimization tool that helps grow your channel with smart analytics and content suggestions.",
      icon: Sparkles,
      href: "/tools/channelbooster",
      color: "text-purple-600",
    },
    {
      name: "AutoSite AI",
      description:
        "Instantly generate professional websites with AI. Perfect for businesses that need a web presence fast.",
      icon: Zap,
      href: "/tools/autosite-ai",
      color: "text-blue-600",
    },
    {
      name: "Fixie",
      description: "Smart home repair assistant that diagnoses issues and provides step-by-step repair guidance.",
      icon: Wrench,
      href: "/tools/fixie",
      color: "text-green-600",
    },
    {
      name: "ViewMatch",
      description: "AI-powered video matching and discovery platform for content creators and viewers.",
      icon: Eye,
      href: "#",
      color: "text-orange-600",
      comingSoon: true,
    },
    {
      name: "REVA AI",
      description: "Revolutionary AI voice assistant for real estate professionals and property management.",
      icon: Mic,
      href: "#",
      color: "text-red-600",
      comingSoon: true,
    },
    {
      name: "Glam Book AI",
      description: "Intelligent booking and scheduling system for beauty and wellness professionals.",
      icon: Calendar,
      href: "#",
      color: "text-pink-600",
      comingSoon: true,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/regenlogo3d.png"
                alt="Regen Creatives Logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
              />
              <span className="text-xl font-bold text-foreground">Regen Creatives</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/tools" className="text-foreground font-medium">
                Tools
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <Button asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:bg-accent rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            className="md:hidden bg-background border-t border-border"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-4 space-y-3">
              <Link
                href="/"
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/tools"
                className="block py-2 text-foreground font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tools
              </Link>
              <Link
                href="/about"
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Our AI Tools
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up delay-100">
            Discover our suite of AI-powered tools designed to transform your business and boost productivity.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => {
              const Icon = tool.icon
              return (
                <Card
                  key={tool.name}
                  className="card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 ${tool.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="flex items-center gap-2">
                      {tool.name}
                      {tool.comingSoon && (
                        <span className="text-xs font-normal text-muted-foreground bg-muted px-2 py-1 rounded">
                          Coming Soon
                        </span>
                      )}
                    </CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {tool.comingSoon ? (
                      <Button variant="outline" disabled className="w-full bg-transparent">
                        Coming Soon
                      </Button>
                    ) : (
                      <Button asChild className="w-full">
                        <Link href={tool.href}>Learn More</Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get started with our AI tools today and see the difference.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/regenlogo3d.png"
                  alt="Regen Creatives Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <span className="text-xl font-bold">Regen Creatives</span>
              </div>
              <p className="text-primary-foreground/80">Transforming businesses with AI-powered solutions.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Tools</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link href="/tools/channelbooster" className="hover:text-primary-foreground transition-colors">
                    ChannelBooster
                  </Link>
                </li>
                <li>
                  <Link href="/tools/autosite-ai" className="hover:text-primary-foreground transition-colors">
                    AutoSite AI
                  </Link>
                </li>
                <li>
                  <Link href="/tools/fixie" className="hover:text-primary-foreground transition-colors">
                    Fixie
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link href="/about" className="hover:text-primary-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-primary-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link href="/privacy" className="hover:text-primary-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-primary-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
            <p>&copy; {new Date().getFullYear()} Regen Creatives. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
