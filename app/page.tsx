"use client"
import { ArrowRight, Check, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const tools = [
    {
      name: "ChannelBooster",
      description: "YouTube optimization in seconds. Analyze content, improve thumbnails, and boost engagement.",
      url: "https://channelbooster.regencreatives.com",
    },
    {
      name: "AutoSite AI",
      description: "Launch a professional website in 7 minutes. AI-powered design, content, and optimization.",
      url: "https://autositeai.com",
    },
    {
      name: "Fixie",
      description: "Upload a photo, fix your problem. Smart DIY repair assistant with step-by-step guidance.",
      url: "https://fixie.diy",
    },
    {
      name: "ViewMatch",
      description: "Discover videos that match your vibe. Intelligent recommendation engine for content discovery.",
      url: "https://viewermatch.com",
    },
    {
      name: "REVA AI",
      description: "Qualify leads before they hit your inbox. Advanced AI-powered lead screening and prioritization.",
      url: "https://reva.regencreatives.com",
    },
    {
      name: "Glam Book AI",
      description: "Beauty business automation done right. Complete management suite for beauty professionals.",
      url: "https://glamdm.com",
    },
  ]

  const features = [
    "AI-powered automation",
    "Built for solopreneurs",
    "Launch in minutes, not months",
    "No coding required",
    "Scalable infrastructure",
    "Continuous updates",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/regenlogo3d.png" alt="Regen Creatives" className="h-10 w-10 rounded-full" />
              <span className="text-xl font-medium text-foreground">Regen Creatives</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/tools" className="hover:text-foreground line-animate text-primary">
                Tools
              </Link>
              <Link href="/about" className="hover:text-foreground line-animate text-primary">
                About
              </Link>
              <Link href="/blog" className="hover:text-foreground line-animate text-primary">
                Blog
              </Link>
              <Link href="/contact" className="hover:text-foreground line-animate text-primary">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="md:hidden bg-background border-t border-border"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-6 py-4 space-y-4">
              <Link
                href="/tools"
                className="block text-muted-foreground hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Tools
              </Link>
              <Link
                href="/about"
                className="block text-muted-foreground hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="block text-muted-foreground hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block text-muted-foreground hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Video Background */}
      <section className="hero-section px-6 lg:px-8 pt-20 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(1)" }}
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/softlight-URGcq3nw9bH112ZmAgDVKEHzTfyJOo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Logo - properly sized */}
          <div className="mb-12 animate-fade-in">
            <img src="/regenlogo3d.png" alt="Regen Creatives Logo" className="w-32 h-32 mx-auto rounded-full" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-8 animate-fade-in-up text-primary">
            We build tools for solopreneurs
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto animate-fade-in-up delay-200 text-primary">
            Regen Creatives is a product studio designing AI-powered systems that solve real-world problems for solo
            business owners and small teams.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <Link
              href="/tools"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors shadow-lg"
            >
              Explore Tools
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm text-primary border-primary"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-6 animate-slide-in-left">
                Built for utility. Designed for autonomy.
              </h2>
              <p className="text-lg text-muted-foreground mb-8 animate-slide-in-left delay-200">
                We build tools that replace friction—not people. Each product solves a real pain point for real users,
                whether they're launching a side hustle or automating a daily grind.
              </p>
            </div>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 animate-slide-in-right delay-${(index + 1) * 100}`}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-32 px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-6">The Regen Ecosystem</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of AI-powered tools designed to eliminate friction and amplify your productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <a
                key={index}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 bg-card border border-border rounded-2xl hover:border-primary transition-all card-hover"
              >
                <h3 className="text-2xl font-medium text-card-foreground mb-4 group-hover:text-muted-foreground transition-colors">
                  {tool.name}
                </h3>
                <p className="text-muted-foreground mb-6">{tool.description}</p>
                <div className="flex items-center text-foreground group-hover:translate-x-2 transition-transform">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">Get tool drops and early access</h2>
          <p className="text-xl opacity-90 mb-12">
            Be the first to test new releases, get behind-the-scenes updates, and join Regen's quiet revolution.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email-subscribe" className="sr-only">
              Email address
            </label>
            <input
              id="email-subscribe"
              type="email"
              placeholder="Enter your email"
              required
              aria-required="true"
              className="flex-1 px-6 py-4 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-primary-foreground/40 focus:ring-2 focus:ring-primary-foreground/20"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-background text-foreground rounded-full hover:bg-secondary transition-colors font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-8 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="flex items-center space-x-3">
              <img src="/regenlogo3d.png" alt="Regen Creatives" className="h-8 w-8 rounded-full" />
              <span className="text-lg font-medium text-foreground">Regen Creatives</span>
            </div>

            <nav className="flex items-center space-x-8">
              <Link href="/tools" className="text-muted-foreground hover:text-foreground">
                Tools
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </nav>
          </div>

          <div className="mt-12 text-center text-muted-foreground text-sm">
            © 2000 Regen Creatives · Built in Atlanta · Designed for Solopreneurs and Small Teams
          </div>
        </div>
      </footer>
    </div>
  )
}
