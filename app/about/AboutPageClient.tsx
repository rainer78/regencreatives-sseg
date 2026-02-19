"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Target, Users, Lightbulb, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPageClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI technology to deliver cutting-edge solutions.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We build tools that solve real problems and drive real results.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "The AI landscape evolves rapidly, and so do we. We stay ahead of the curve to serve you better.",
    },
    {
      icon: Award,
      title: "Quality Driven",
      description: "We don't just build tools—we craft experiences that are reliable, intuitive, and effective.",
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
              <Link href="/tools" className="text-muted-foreground hover:text-foreground transition-colors">
                Tools
              </Link>
              <Link href="/about" className="text-foreground font-medium">
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
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tools
              </Link>
              <Link
                href="/about"
                className="block py-2 text-foreground font-medium"
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
              About Regen Creatives
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up delay-100">
              We're a team of innovators, developers, and AI enthusiasts dedicated to building tools that empower
              businesses to thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Regen Creatives, we believe that artificial intelligence should be accessible, practical, and
            transformative. Our mission is to create AI-powered tools that simplify complex tasks, boost productivity,
            and unlock new opportunities for businesses of all sizes. We're not just building software—we're building
            the future of work.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={value.title}
                  className="card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-8">Our Story</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              Regen Creatives was born from a simple observation: while AI technology was advancing rapidly, most
              businesses struggled to harness its power effectively. We saw an opportunity to bridge this gap.
            </p>
            <p className="mb-4">
              Starting with our first tool, ChannelBooster, we set out to prove that AI could be both powerful and
              accessible. The response was overwhelming, and we knew we were onto something special.
            </p>
            <p>
              Today, we're a growing team of AI specialists, designers, and developers working together to create tools
              that make a real difference. From YouTube optimization to website generation to home repair assistance,
              we're constantly expanding our suite of AI solutions to meet the evolving needs of modern businesses.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Join Us on This Journey</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you're looking to optimize your content, build a website, or explore new AI possibilities, we're
            here to help you succeed.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
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
