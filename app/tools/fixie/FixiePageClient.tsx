"use client"
import {
  Wrench,
  Camera,
  List,
  ShoppingCart,
  Home,
  Zap,
  CheckCircle,
  Star,
  MapPin,
  ExternalLink,
  Clock,
  PenTool as Tool,
  Lightbulb,
} from "lucide-react"
import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function FixiePageClient() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: Camera,
      title: "Photo Recognition",
      description: "Upload a photo of your problem and our AI instantly identifies the issue and root cause.",
      benefit: "Instant problem diagnosis",
    },
    {
      icon: List,
      title: "Step-by-Step Guides",
      description: "Get detailed, easy-to-follow repair instructions tailored to your specific problem.",
      benefit: "Clear repair roadmap",
    },
    {
      icon: Tool,
      title: "Tool Recommendations",
      description: "Know exactly which tools you need before starting, with alternatives for different budgets.",
      benefit: "No surprise tool needs",
    },
    {
      icon: ShoppingCart,
      title: "Materials List",
      description: "Complete shopping list with part numbers, quantities, and local store availability.",
      benefit: "One-trip shopping",
    },
  ]

  const useCases = [
    {
      title: "Powder Springs Homeowners",
      description: "Fix common household issues without calling expensive repair services.",
      example: "Leaky faucets, squeaky doors, loose tiles, electrical outlets, paint touch-ups",
    },
    {
      title: "DIY Enthusiasts",
      description: "Tackle more complex projects with confidence using AI-guided instructions.",
      example: "Deck repairs, appliance fixes, plumbing updates, home improvements",
    },
    {
      title: "Rental Property Owners",
      description: "Handle tenant maintenance requests quickly and cost-effectively.",
      example: "Quick fixes between tenants, emergency repairs, routine maintenance",
    },
  ]

  const testimonials = [
    {
      name: "Mike Thompson",
      business: "Thompson Property Management",
      location: "Powder Springs, GA",
      quote:
        "Fixie saved me hundreds on repair calls. I fixed a tenant's garbage disposal in 20 minutes using just the photo and instructions.",
      result: "Saved $200+ per repair",
      rating: 5,
    },
    {
      name: "Jennifer Davis",
      business: "Homeowner",
      location: "Powder Springs, GA",
      quote:
        "I'm not handy at all, but Fixie made fixing my leaky kitchen faucet so easy. The step-by-step photos were perfect.",
      result: "DIY confidence boost",
      rating: 5,
    },
  ]

  const repairCategories = [
    {
      category: "Plumbing",
      examples: ["Leaky faucets", "Clogged drains", "Running toilets", "Low water pressure"],
      icon: Wrench,
    },
    {
      category: "Electrical",
      examples: ["Outlet issues", "Light switches", "Ceiling fans", "Circuit breakers"],
      icon: Zap,
    },
    {
      category: "Home Maintenance",
      examples: ["Squeaky hinges", "Stuck windows", "Loose handles", "Wall repairs"],
      icon: Home,
    },
    {
      category: "Appliances",
      examples: ["Dishwasher problems", "Dryer issues", "Refrigerator fixes", "Garbage disposals"],
      icon: Tool,
    },
  ]

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to right, #ff0000, #ff99cc)" }}>
      {/* Enhanced Isometric Background Grid */}
      <div className="fixed inset-0 iso-grid-enhanced opacity-40"></div>

      {/* Header */}
      <header className="relative z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-700 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <img src="/regenlogo3d.png" alt="Regen Creatives" className="h-10 w-10 rounded-full" />
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full opacity-30 blur animate-pulse"></div>
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
                  className={`text-slate-300 hover:text-white transition-colors font-medium relative group ${
                    item.name === "Tools" ? "text-white" : ""
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <section
        className="relative py-4 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(to right, #ff0000, #ff99cc)" }}
      >
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-white transition-colors">
              Tools
            </Link>
            <span>/</span>
            <span className="text-white">Fixie</span>
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
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-red-500/20 text-red-300 border border-red-500/30">
                  <MapPin className="h-4 w-4 mr-2" />
                  Helping Powder Springs, GA DIY Enthusiasts
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight text-white">
                <span className="text-glow bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                  Fixie
                </span>
                <br />
                Upload a Photo. Fix Your Problem.
              </h1>

              <p className="text-xl mb-8 text-slate-300 leading-relaxed max-w-2xl">
                Smart DIY assistant that identifies problems from photos and provides step-by-step repair solutions with
                tools and materials needed. Perfect for Powder Springs homeowners who want to fix things themselves.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <a
                  href="https://fixie.diy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-glow flex items-center justify-center gap-3 text-lg"
                >
                  <Camera className="h-6 w-6" />
                  Try Fixie Now
                  <ExternalLink className="h-6 w-6" />
                </a>
                <a href="#repair-categories" className="cta-secondary flex items-center justify-center gap-3 text-lg">
                  <Wrench className="h-6 w-6" />
                  See What We Fix
                </a>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Photo Diagnosis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Step-by-Step Guides</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Tool Lists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-slate-300">Material Shopping</span>
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
                      background: "linear-gradient(to right, #ff0000, #ff99cc)",
                    }}
                  >
                    <Wrench className="h-14 w-14 text-white" />
                  </div>
                  <div className="face back" style={{ width: "120px", height: "120px" }}></div>
                  <div className="face right" style={{ width: "120px", height: "120px" }}></div>
                  <div className="face left" style={{ width: "120px", height: "120px" }}></div>
                  <div className="face top" style={{ width: "120px", height: "120px" }}></div>
                  <div className="face bottom" style={{ width: "120px", height: "120px" }}></div>
                </div>

                {/* Surrounding Elements */}
                {[
                  {
                    icon: Camera,
                    gradient: "linear-gradient(to right, #ff0000, #ff99cc)",
                    position: { top: "15%", left: "20%" },
                  },
                  {
                    icon: Tool,
                    gradient: "linear-gradient(to right, #ff0000, #ff99cc)",
                    position: { top: "15%", right: "20%" },
                  },
                  {
                    icon: Lightbulb,
                    gradient: "linear-gradient(to right, #ff0000, #ff99cc)",
                    position: { bottom: "15%", left: "20%" },
                  },
                  {
                    icon: Home,
                    gradient: "linear-gradient(to right, #ff0000, #ff99cc)",
                    position: { bottom: "15%", right: "20%" },
                  },
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

      {/* Repair Categories Section */}
      <section
        id="repair-categories"
        className="relative py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(to right, #ff0000, #ff99cc)" }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">What Can Fixie Help You Repair?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              From simple household fixes to complex repairs, Fixie provides expert guidance for Powder Springs
              homeowners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <div
                  key={index}
                  className={`iso-card-readable animate-slide-up animate-delay-${Math.min(index + 1, 3)}`}
                  style={{ "--gradient": `linear-gradient(to right, #ff0000, #ff99cc)` } as React.CSSProperties}
                >
                  <div className="p-6 text-center">
                    <div
                      className="iso-icon-glow mb-6"
                      style={{ "--gradient": `linear-gradient(to right, #ff0000, #ff99cc)` } as React.CSSProperties}
                    >
                      <div className="iso-icon-face iso-icon-front">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="iso-icon-face iso-icon-top"></div>
                      <div className="iso-icon-face iso-icon-right"></div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-white">{category.category}</h3>
                    <ul className="text-slate-300 text-sm space-y-2">
                      {category.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(to right, #ff0000, #ff99cc)" }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">How Fixie Makes DIY Repairs Simple</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Advanced AI technology combined with practical repair knowledge to guide you through any fix.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className={`iso-card-readable animate-slide-up animate-delay-${Math.min(index + 1, 3)}`}
                  style={{ "--gradient": `linear-gradient(to right, #ff0000, #ff99cc)` } as React.CSSProperties}
                >
                  <div className="p-8">
                    <div
                      className="iso-icon-glow mb-6"
                      style={{ "--gradient": `linear-gradient(to right, #ff0000, #ff99cc)` } as React.CSSProperties}
                    >
                      <div className="iso-icon-face iso-icon-front">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="iso-icon-face iso-icon-top"></div>
                      <div className="iso-icon-face iso-icon-right"></div>
                    </div>

                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                      <span className="text-sm font-semibold px-3 py-1 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
                        {feature.benefit}
                      </span>
                    </div>

                    <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(to right, #ff0000, #ff99cc)" }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">
              Perfect for Every Powder Springs Resident
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Whether you're a first-time homeowner or experienced DIYer, Fixie adapts to your skill level and needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className={`iso-card-readable animate-slide-up animate-delay-${index + 1}`}
                style={{ "--gradient": `linear-gradient(to right, #ff0000, #ff99cc)` } as React.CSSProperties}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">{useCase.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{useCase.description}</p>
                  <div className="border-t border-slate-600 pt-4">
                    <p className="text-sm text-slate-400 italic">{useCase.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(to right, #ff0000, #ff99cc)" }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">Success Stories from Powder Springs</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Local residents are saving money and gaining confidence with Fixie's AI-powered repair guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`iso-card-readable animate-slide-up animate-delay-${index + 1}`}
                style={{ "--gradient": `linear-gradient(to right, #ff0000, #ff99cc)` } as React.CSSProperties}
              >
                <div className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-slate-300 mb-6 leading-relaxed italic">"{testimonial.quote}"</blockquote>

                  <div className="border-t border-slate-600 pt-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-white">{testimonial.name}</p>
                        <p className="text-sm text-slate-400">{testimonial.business}</p>
                        <p className="text-sm text-slate-400 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {testimonial.location}
                        </p>
                      </div>
                      <span className="text-xs font-semibold px-2 py-1 rounded bg-green-500/20 text-green-300 border border-green-500/30">
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
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(to right, #ff0000, #ff99cc)" }}
      >
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div
            className="iso-card-readable"
            style={{ "--gradient": "linear-gradient(to right, #ff0000, #ff99cc)" } as React.CSSProperties}
          >
            <div className="p-12">
              <div
                className="iso-icon-glow mx-auto mb-8"
                style={{ "--gradient": "linear-gradient(to right, #ff0000, #ff99cc)" } as React.CSSProperties}
              >
                <div className="iso-icon-face iso-icon-front">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <div className="iso-icon-face iso-icon-top"></div>
                <div className="iso-icon-face iso-icon-right"></div>
              </div>

              <h2 className="text-3xl font-black mb-4 text-white">Ready to Fix It Yourself?</h2>
              <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                Join thousands of Powder Springs residents who are saving money and gaining confidence with Fixie's AI
                repair assistant.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://fixie.diy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-glow flex items-center justify-center gap-3 text-lg"
                >
                  <Camera className="h-6 w-6" />
                  Upload Photo & Get Help
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
      <footer className="relative py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white">
        <div className="absolute inset-0 iso-grid-enhanced opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <Link href="/" className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="relative">
                <img src="/regenlogo3d.png" alt="Regen Creatives" style={{ height: "40px" }} className="rounded-full" />
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full opacity-30 blur animate-pulse"></div>
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
                  className="text-slate-300 hover:text-white transition-colors font-medium text-lg relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400 text-lg">
              © 2025 Regen Creatives · Built in Atlanta · Designed for Solopreneurs
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
