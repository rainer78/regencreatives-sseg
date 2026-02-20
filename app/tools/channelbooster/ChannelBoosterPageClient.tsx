"use client"
import {
  Youtube,
  TrendingUp,
  Eye,
  Users,
  BarChart3,
  ImageIcon,
  Search,
  Target,
  Clock,
  CheckCircle,
  Star,
  MapPin,
  ExternalLink,
} from "lucide-react"
import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function ChannelBoosterPageClient() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Analyze and optimize your video titles, descriptions, and tags for maximum discoverability.",
      benefit: "Increase search visibility by 300%",
    },
    {
      icon: ImageIcon,
      title: "Thumbnail Analysis",
      description: "AI-powered thumbnail scoring and suggestions to improve click-through rates.",
      benefit: "Boost CTR by up to 45%",
    },
    {
      icon: BarChart3,
      title: "Content Insights",
      description: "Deep analytics on trending topics, optimal posting times, and audience engagement patterns.",
      benefit: "Data-driven content strategy",
    },
    {
      icon: Target,
      title: "Competitor Analysis",
      description: "Track competitor performance and identify content gaps in your niche.",
      benefit: "Stay ahead of competition",
    },
  ]

  const useCases = [
    {
      title: "Content Creators in Powder Springs",
      description: "Local YouTubers building their audience and monetizing their passion.",
      example: "Beauty vloggers, fitness coaches, local business owners sharing expertise",
    },
    {
      title: "Small Business Marketing",
      description: "Powder Springs businesses using YouTube for customer acquisition and brand awareness.",
      example: "Real estate agents, contractors, service providers showcasing their work",
    },
    {
      title: "Educational Content",
      description: "Teachers and trainers creating educational content for their community.",
      example: "Tutoring services, skill training, hobby instruction channels",
    },
  ]

  const testimonials = [
    {
      name: "Marcus Johnson",
      business: "Johnson Fitness Studio",
      location: "Powder Springs, GA",
      quote: "ChannelBooster helped me optimize my workout videos. My subscriber count doubled in 3 months!",
      result: "2x Subscriber Growth",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      business: "Beauty by Sarah",
      location: "Powder Springs, GA",
      quote: "The thumbnail analysis feature is incredible. My click-through rates improved by 40% immediately.",
      result: "40% Higher CTR",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen" style={{ background: "var(--dark-gradient-hero)" }}>
      {/* Enhanced Isometric Background Grid */}
      <div className="fixed inset-0 iso-grid-enhanced opacity-40"></div>

      {/* Header */}
      <header className="relative z-50 bg-coral-900/90 backdrop-blur-sm border-b border-coral-700 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <img src="/regenlogo3d.png" alt="Regen Creatives" className="h-10 w-10 rounded-full" />
                <div className="absolute -inset-1 bg-gradient-to-r from-coral-500 to-coral-700 rounded-full opacity-30 blur animate-pulse"></div>
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
                  className={`text-coral-300 hover:text-white transition-colors font-medium relative group ${
                    item.name === "Tools" ? "text-white" : ""
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-coral-500 to-coral-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <section className="relative py-4 px-4 sm:px-6 lg:px-8" style={{ background: "var(--dark-gradient-section)" }}>
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-coral-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-white transition-colors">
              Tools
            </Link>
            <span>/</span>
            <span className="text-white">ChannelBooster</span>
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
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-coral-500/20 text-coral-300 border border-coral-500/30">
                  <MapPin className="h-4 w-4 mr-2" />
                  Serving Content Creators in Powder Springs, GA
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight text-white">
                <span className="text-glow bg-gradient-to-r from-coral-500 to-coral-700 bg-clip-text text-transparent">
                  ChannelBooster
                </span>
                <br />
                YouTube Optimization Made Simple
              </h1>

              <p className="text-xl mb-8 text-coral-300 leading-relaxed max-w-2xl">
                AI-powered YouTube optimization tool that analyzes your content and provides actionable insights to
                boost views, engagement, and subscriber growth in seconds.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <a
                  href="https://channelbooster.regencreatives.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-glow flex items-center justify-center gap-3 text-lg"
                >
                  <Youtube className="h-6 w-6" />
                  Try ChannelBooster Free
                  <ExternalLink className="h-6 w-6" />
                </a>
                <a href="#features" className="cta-secondary flex items-center justify-center gap-3 text-lg">
                  <BarChart3 className="h-6 w-6" />
                  See Features
                </a>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-coral-400" />
                  <span className="text-coral-300">Instant SEO Analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-coral-400" />
                  <span className="text-coral-300">Thumbnail Optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-coral-400" />
                  <span className="text-coral-300">Competitor Insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-coral-400" />
                  <span className="text-coral-300">Growth Analytics</span>
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
                      background: "var(--iso-gradient-1)",
                    }}
                  >
                    <Youtube className="h-14 w-14 text-white" />
                  </div>
                  <div className="face back" style={{ width: "120px", height: "120px" }}></div>
                  <div className="face right" style={{ width: "120px", height: "120px" }}></div>
                  <div className="face left" style={{ width: "120px", height: "120px" }}></div>
                  <div className="face top" style={{ width: "120px", height: "120px" }}></div>
                  <div className="face bottom" style={{ width: "120px", height: "120px" }}></div>
                </div>

                {/* Surrounding Elements */}
                {[
                  { icon: TrendingUp, gradient: "var(--iso-gradient-2)", position: { top: "15%", left: "20%" } },
                  { icon: Eye, gradient: "var(--iso-gradient-3)", position: { top: "15%", right: "20%" } },
                  { icon: Users, gradient: "var(--iso-gradient-4)", position: { bottom: "15%", left: "20%" } },
                  { icon: BarChart3, gradient: "var(--iso-gradient-5)", position: { bottom: "15%", right: "20%" } },
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

      {/* Features Section */}
      <section
        id="features"
        className="relative py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--dark-gradient-section)" }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">Powerful Features for YouTube Success</h2>
            <p className="text-xl text-coral-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to optimize your YouTube channel and grow your audience in Powder Springs and beyond.
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
                      <span className="text-sm font-semibold px-3 py-1 rounded-full bg-coral-500/20 text-coral-300 border border-coral-500/30">
                        {feature.benefit}
                      </span>
                    </div>

                    <p className="text-coral-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ background: "var(--dark-gradient-hero)" }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">
              Perfect for Powder Springs Content Creators
            </h2>
            <p className="text-xl text-coral-300 max-w-3xl mx-auto leading-relaxed">
              Whether you're a local business owner, educator, or creative professional, ChannelBooster helps you reach
              your audience effectively.
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
                  <p className="text-coral-300 mb-6 leading-relaxed">{useCase.description}</p>
                  <div className="border-t border-coral-600 pt-4">
                    <p className="text-sm text-coral-400 italic">{useCase.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ background: "var(--dark-gradient-section)" }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">Success Stories from Local Creators</h2>
            <p className="text-xl text-coral-300 max-w-3xl mx-auto leading-relaxed">
              See how Powder Springs content creators are growing their channels with ChannelBooster.
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
                      <Star key={i} className="h-5 w-5 text-coral-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-coral-300 mb-6 leading-relaxed italic">"{testimonial.quote}"</blockquote>

                  <div className="border-t border-coral-600 pt-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-white">{testimonial.name}</p>
                        <p className="text-sm text-coral-400">{testimonial.business}</p>
                        <p className="text-sm text-coral-400 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {testimonial.location}
                        </p>
                      </div>
                      <span className="text-xs font-semibold px-2 py-1 rounded bg-coral-500/20 text-coral-300 border border-coral-500/30">
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ background: "var(--dark-gradient-hero)" }}>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="iso-card-readable" style={{ "--gradient": "var(--iso-gradient-1)" } as React.CSSProperties}>
            <div className="p-12">
              <div
                className="iso-icon-glow mx-auto mb-8"
                style={{ "--gradient": "var(--iso-gradient-1)" } as React.CSSProperties}
              >
                <div className="iso-icon-face iso-icon-front">
                  <Youtube className="h-8 w-8 text-white" />
                </div>
                <div className="iso-icon-face iso-icon-top"></div>
                <div className="iso-icon-face iso-icon-right"></div>
              </div>

              <h2 className="text-3xl font-black mb-4 text-white">Ready to Boost Your YouTube Channel?</h2>
              <p className="text-coral-300 mb-8 text-lg leading-relaxed">
                Join hundreds of content creators in Powder Springs who are already growing their channels with
                ChannelBooster.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://channelbooster.regencreatives.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-glow flex items-center justify-center gap-3 text-lg"
                >
                  <Youtube className="h-6 w-6" />
                  Start Free Trial
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
      <footer className="relative py-16 px-4 sm:px-6 lg:px-8 bg-coral-950 text-white">
        <div className="absolute inset-0 iso-grid-enhanced opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <Link href="/" className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="relative">
                <img src="/regenlogo3d.png" alt="Regen Creatives" className="rounded-full" style={{ height: "40px" }} />
                <div className="absolute -inset-1 bg-gradient-to-r from-coral-500 to-coral-700 rounded-full opacity-30 blur animate-pulse"></div>
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
                  className="text-coral-300 hover:text-white transition-colors font-medium text-lg relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-coral-500 to-coral-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="border-t border-coral-800 pt-8 text-center">
            <p className="text-coral-400 text-lg">
              © 2025 Regen Creatives · Built in Atlanta · Designed for Solopreneurs
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
