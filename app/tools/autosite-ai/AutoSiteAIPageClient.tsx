"use client"
import {
  Rocket,
  Zap,
  Globe,
  Smartphone,
  Search,
  Palette,
  Code,
  Clock,
  CheckCircle,
  Star,
  MapPin,
  ExternalLink,
  Monitor,
} from "lucide-react"
import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function AutoSiteAIPageClient() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: Zap,
      title: "AI Content Generation",
      description: "Automatically generates compelling copy, headlines, and content tailored to your business.",
      benefit: "Save 20+ hours of writing",
    },
    {
      icon: Palette,
      title: "Smart Design System",
      description: "AI selects colors, fonts, and layouts that match your brand and industry best practices.",
      benefit: "Professional design instantly",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Responsive",
      description: "Every site is optimized for mobile, tablet, and desktop viewing automatically.",
      benefit: "Perfect on all devices",
    },
    {
      icon: Search,
      title: "Built-in SEO Optimization",
      description: "Meta tags, structured data, and SEO best practices applied automatically for better rankings.",
      benefit: "Ready for search engines",
    },
  ]

  const useCases = [
    {
      title: "Local Businesses in Powder Springs",
      description: "Restaurants, salons, contractors, and service providers needing professional online presence.",
      example: "Hair salons, HVAC companies, landscapers, restaurants, retail stores",
    },
    {
      title: "Professional Services",
      description: "Consultants, coaches, and freelancers who need credible websites to attract clients.",
      example: "Business consultants, life coaches, photographers, accountants",
    },
    {
      title: "Startups & Entrepreneurs",
      description: "New businesses that need to launch quickly with a professional web presence.",
      example: "E-commerce stores, SaaS products, local services, online courses",
    },
  ]

  const testimonials = [
    {
      name: "David Chen",
      business: "Chen's Auto Repair",
      location: "Powder Springs, GA",
      quote:
        "I needed a website fast for my auto shop. AutoSite AI created a professional site in minutes that brings in new customers every week.",
      result: "Live in 7 minutes",
      rating: 5,
    },
    {
      name: "Lisa Rodriguez",
      business: "Rodriguez Real Estate",
      location: "Powder Springs, GA",
      quote:
        "The AI understood my real estate business perfectly. The site looks like I paid thousands for it, but it was done in minutes.",
      result: "Professional results",
      rating: 5,
    },
  ]

  const steps = [
    {
      step: "1",
      title: "Describe Your Business",
      description: "Tell our AI about your business, services, and goals in simple terms.",
      time: "1 minute",
    },
    {
      step: "2",
      title: "AI Builds Your Site",
      description: "Our AI creates content, selects design, and optimizes for your industry.",
      time: "5 minutes",
    },
    {
      step: "3",
      title: "Review & Launch",
      description: "Make any final tweaks and launch your professional website.",
      time: "1 minute",
    },
  ]

  return (
    <div className="min-h-screen" style={{ background: "var(--dark-gradient-hero)" }}>
      {/* Enhanced Isometric Background Grid */}
      <div className="fixed inset-0 iso-grid-enhanced opacity-40"></div>

      {/* Header */}
      <header className="relative z-50 bg-coral/90 backdrop-blur-sm border-b border-coral-dark sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <img src="/regenlogo3d.png" alt="Regen Creatives" className="h-10 w-10 rounded-full" />
                <div className="absolute -inset-1 bg-gradient-to-r from-coral to-coral-light rounded-full opacity-30 blur animate-pulse"></div>
              </div>
              <span className="font-bold text-xl text-white">Regen Creatives</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: "Tools", href: "/tools" },
                { name: "About", href: "/about" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-coral-dark hover:text-white transition-colors font-medium relative group ${
                    item.name === "Tools" ? "text-white" : ""
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-coral to-coral-light transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <section className="relative py-4 px-4 sm:px-6 lg:px-8" style={{ background: "var(--dark-gradient-section)" }}>
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-coral-dark">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-white transition-colors">
              Tools
            </Link>
            <span>/</span>
            <span className="text-white">AutoSite AI</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className={`relative z-10 animate-slide-up ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-coral/20 text-coral border border-coral/30">
                  <MapPin className="h-4 w-4 mr-2" />
                  Serving Powder Springs, GA Businesses
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight text-white">
                <span className="text-glow bg-gradient-to-r from-coral to-coral-light bg-clip-text text-transparent">
                  AutoSite AI
                </span>
                <br />
                Launch Your Website in 7 Minutes
              </h1>

              <p className="text-xl mb-8 text-coral-dark leading-relaxed max-w-2xl">
                Revolutionary website builder that creates fully functional websites using AI, complete with content,
                design, and optimization. Perfect for Powder Springs businesses that need to get online fast.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <a
                  href="https://autositeai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-glow flex items-center justify-center gap-3 text-lg"
                >
                  <Rocket className="h-6 w-6" />
                  Create Your Website Now
                  <ExternalLink className="h-6 w-6" />
                </a>
                <a href="#how-it-works" className="cta-secondary flex items-center justify-center gap-3 text-lg">
                  <Clock className="h-6 w-6" />
                  See How It Works
                </a>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-coral" />
                  <span className="text-coral-dark">7-Minute Setup</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-coral" />
                  <span className="text-coral-dark">AI-Generated Content</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-coral" />
                  <span className="text-coral-dark">Mobile Responsive</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-coral" />
                  <span className="text-coral-dark">SEO Optimized</span>
                </div>
              </div>
            </div>

            {/* Hero Isometric Scene */}
            <div className={`animate-slide-up animate-delay-1 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <div className="hero-iso-scene">
                <div className="hero-platform" style={{ width: "350px", height: "60px" }}></div>
                <div
                  className="hero-cube"
                  style={{
                    top: "30%",
                    left: "50%",
                    transform: "translate(-50%, -50%) rotateX(30deg) rotateY(-30deg)",
                    width: "120px",
                    height: "120px",
                    animation: "heroRotate 20s linear infinite",
                  }}
                >
                  <div
                    className="face front"
                    style={{
                      width: "120px",
                      height: "120px",
                      background: "var(--iso-gradient-2)",
                    }}
                  >
                    <Rocket className="h-14 w-14 text-white" />
                  </div>
                  <div className="face back" style={{ width: "120px", height: "120px" }}></div>
                  <div className="face right" style={{ width: "120px", height: "120px" }}></div>
                  <div className="face left" style={{ width: "120px", height: "120px" }}></div>
                  <div className="face top" style={{ width: "120px", height: "120px" }}></div>
                  <div className="face bottom" style={{ width: "120px", height: "120px" }}></div>
                </div>

                {/* Surrounding Elements */}
                {[
                  { icon: Globe, gradient: "var(--iso-gradient-1)", position: { top: "15%", left: "20%" } },
                  { icon: Monitor, gradient: "var(--iso-gradient-3)", position: { top: "15%", right: "20%" } },
                  { icon: Smartphone, gradient: "var(--iso-gradient-4)", position: { bottom: "15%", left: "20%" } },
                  { icon: Code, gradient: "var(--iso-gradient-5)", position: { bottom: "15%", right: "20%" } },
                ].map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <div
                      key={index}
                      className="hero-cube"
                      style={{
                        width: "80px",
                        height: "80px",
                        ...item.position,
                        animation: `float 6s ease-in-out infinite`,
                        animationDelay: `${index * 0.5}s`,
                      }}
                    >
                      <div
                        className="face front"
                        style={{
                          width: "80px",
                          height: "80px",
                          background: item.gradient,
                        }}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="face back" style={{ width: "80px", height: "80px" }}></div>
                      <div className="face right" style={{ width: "80px", height: "80px" }}></div>
                      <div className="face left" style={{ width: "80px", height: "80px" }}></div>
                      <div className="face top" style={{ width: "80px", height: "80px" }}></div>
                      <div className="face bottom" style={{ width: "80px", height: "80px" }}></div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="relative py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--dark-gradient-section)" }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">From Idea to Live Website in 7 Minutes</h2>
            <p className="text-xl text-coral-dark max-w-3xl mx-auto leading-relaxed">
              Our AI handles everything - content creation, design, and optimization - so you can focus on running your
              business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`iso-card-readable animate-slide-up animate-delay-${index + 1}`}
                style={{ "--gradient": `var(--iso-gradient-${index + 1})` } as React.CSSProperties}
              >
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center text-2xl font-black text-white mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                  <p className="text-coral-dark mb-4 leading-relaxed">{step.description}</p>
                  <span className="inline-block px-3 py-1 bg-coral/20 text-coral border border-coral/30 rounded-full text-sm font-semibold">
                    {step.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ background: "var(--dark-gradient-hero)" }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">
              Powerful AI Features for Professional Results
            </h2>
            <p className="text-xl text-coral-dark max-w-3xl mx-auto leading-relaxed">
              Every website comes with enterprise-level features that would normally cost thousands and take weeks to
              implement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className={`iso-card-readable animate-slide-up animate-delay-${Math.min(index + 1, 3)}`}
                  style={{ "--gradient": `var(--iso-gradient-${index + 1})` } as React.CSSProperties}
                >
                  <div className="p-8">
                    <div
                      className="iso-icon-glow mb-6"
                      style={{ "--gradient": `var(--iso-gradient-${index + 1})` } as React.CSSProperties}
                    >
                      <div className="iso-icon-face iso-icon-front">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="iso-icon-face iso-icon-top"></div>
                      <div className="iso-icon-face iso-icon-right"></div>
                    </div>

                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                      <span className="text-sm font-semibold px-3 py-1 rounded-full bg-coral/20 text-coral border border-coral/30">
                        {feature.benefit}
                      </span>
                    </div>

                    <p className="text-coral-dark leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ background: "var(--dark-gradient-section)" }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">
              Perfect for Every Powder Springs Business
            </h2>
            <p className="text-xl text-coral-dark max-w-3xl mx-auto leading-relaxed">
              Whether you're just starting out or need to modernize your online presence, AutoSite AI creates the
              perfect website for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className={`iso-card-readable animate-slide-up animate-delay-${index + 1}`}
                style={{ "--gradient": `var(--iso-gradient-${index + 2})` } as React.CSSProperties}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">{useCase.title}</h3>
                  <p className="text-coral-dark mb-6 leading-relaxed">{useCase.description}</p>
                  <div className="border-t border-coral-dark pt-4">
                    <p className="text-sm text-coral italic">{useCase.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ background: "var(--dark-gradient-hero)" }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">Success Stories from Powder Springs</h2>
            <p className="text-xl text-coral-dark max-w-3xl mx-auto leading-relaxed">
              Local businesses are launching professional websites in minutes and seeing immediate results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`iso-card-readable animate-slide-up animate-delay-${index + 1}`}
                style={{ "--gradient": `var(--iso-gradient-${index + 1})` } as React.CSSProperties}
              >
                <div className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-coral fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-coral-dark mb-6 leading-relaxed italic">"{testimonial.quote}"</blockquote>

                  <div className="border-t border-coral-dark pt-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-white">{testimonial.name}</p>
                        <p className="text-sm text-coral-dark">{testimonial.business}</p>
                        <p className="text-sm text-coral-dark flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {testimonial.location}
                        </p>
                      </div>
                      <span className="text-xs font-semibold px-2 py-1 rounded bg-coral/20 text-coral border border-coral/30">
                        {testimonial.result}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ background: "var(--dark-gradient-section)" }}>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="iso-card-readable" style={{ "--gradient": "var(--iso-gradient-2)" } as React.CSSProperties}>
            <div className="p-12">
              <div
                className="iso-icon-glow mx-auto mb-8"
                style={{ "--gradient": "var(--iso-gradient-2)" } as React.CSSProperties}
              >
                <div className="iso-icon-face iso-icon-front">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <div className="iso-icon-face iso-icon-top"></div>
                <div className="iso-icon-face iso-icon-right"></div>
              </div>

              <h2 className="text-3xl font-black mb-4 text-white">Ready to Launch Your Website?</h2>
              <p className="text-coral-dark mb-8 text-lg leading-relaxed">
                Join hundreds of Powder Springs businesses who launched their professional websites in minutes with
                AutoSite AI.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://autositeai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-glow flex items-center justify-center gap-3 text-lg"
                >
                  <Rocket className="h-6 w-6" />
                  Create Website Now
                  <ExternalLink className="h-6 w-6" />
                </a>
                <Link href="/contact" className="cta-secondary flex items-center justify-center gap-3 text-lg">
                  <Clock className="h-6 w-6" />
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 sm:px-6 lg:px-8 bg-coral-dark text-white">
        <div className="absolute inset-0 iso-grid-enhanced opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <Link href="/" className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="relative">
                <img src="/regenlogo3d.png" alt="Regen Creatives" style={{ height: "40px" }} className="rounded-full" />
                <div className="absolute -inset-1 bg-gradient-to-r from-coral to-coral-light rounded-full opacity-30 blur animate-pulse"></div>
              </div>
              <span className="font-bold text-2xl">Regen Creatives</span>
            </Link>

            <nav className="flex items-center space-x-10">
              {[
                { name: "Tools", href: "/tools" },
                { name: "About", href: "/about" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-coral hover:text-white transition-colors font-medium text-lg relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-coral to-coral-light transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="border-t border-coral pt-8 text-center">
            <p className="text-coral-dark text-lg">
              © 2025 Regen Creatives · Built in Atlanta · Designed for Solopreneurs
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
