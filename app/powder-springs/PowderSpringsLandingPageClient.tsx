"use client"
import {
  ArrowRight,
  Mail,
  User,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  Calendar,
  Zap,
  Target,
  TrendingUp,
  Users,
  Briefcase,
  Coffee,
  Home,
  Building,
} from "lucide-react"
import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function PowderSpringsLandingPageClient() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    challenge: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Submit to form handler with UTM tracking for Powder Springs
    fetch("https://formspree.io/f/powder-springs-leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        source: "Powder Springs Landing Page",
        utm_campaign: "powder_springs_solo_business",
        zip_code: "30127",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Lead submitted successfully:", data)
        alert("Thank you! We'll contact you within 24 hours to discuss your business needs.")
        setFormData({ name: "", email: "", phone: "", business: "", challenge: "" })
      })
      .catch((error) => {
        console.error("Error submitting lead:", error)
        alert("Error submitting form. Please call us directly at (678) 661-9420")
      })
  }

  const services = [
    {
      icon: Target,
      title: "AI-Powered Marketing Automation",
      description:
        "Stop spending hours on repetitive marketing tasks. Our tools handle social media, email campaigns, and lead nurturing automatically.",
      gradient: "var(--iso-gradient-1)",
      benefit: "Save 15+ hours per week",
    },
    {
      icon: TrendingUp,
      title: "Local SEO & Online Presence",
      description:
        "Get found by Powder Springs customers searching for your services. We optimize your online presence for local discovery.",
      gradient: "var(--iso-gradient-2)",
      benefit: "3x more local leads",
    },
    {
      icon: Zap,
      title: "Business Process Automation",
      description:
        "Streamline invoicing, scheduling, customer follow-ups, and more. Focus on what you do best while we handle the rest.",
      gradient: "var(--iso-gradient-3)",
      benefit: "Reduce admin time by 60%",
    },
    {
      icon: Users,
      title: "Customer Relationship Management",
      description:
        "Never lose track of a lead or customer again. Our CRM systems help you nurture relationships and increase repeat business.",
      gradient: "var(--iso-gradient-4)",
      benefit: "Increase customer retention by 40%",
    },
  ]

  const testimonials = [
    {
      name: "Amari Jordon",
      business: "Jordon Blu Salon",
      location: "Powder Springs, GA",
      quote:
        "Regen Creatives transformed my one-person hair braiding business. I went from manually scheduling everything to having a system that books clients, sends reminders, and follows up automatically. I've doubled my revenue in 6 months!",
      rating: 5,
      result: "2x Revenue Growth",
    },
    {
      name: "Nelson Scott",
      business: "D & S Landscaping",
      location: "Powder Springs, GA",
      quote:
        "As a solo landscaper, I was drowning in paperwork and missed opportunities. Their automation tools handle my estimates, invoicing, and customer communications. Now I can focus on the work I love.",
      rating: 5,
      result: "60% Time Savings",
    },
    {
      name: "Tatyana Wilson",
      business: "Real Estate AgentSaphire Realty",
      location: "Powder Springs, GA",
      quote:
        "The local SEO work they did has been incredible. I'm now the first result when people in Powder Springs search for business consulting. My phone hasn't stopped ringing!",
      rating: 5,
      result: "300% More Local Leads",
    },
  ]

  const challenges = [
    "Spending too much time on administrative tasks",
    "Struggling to find new customers in Powder Springs",
    "Missing leads because you can't respond fast enough",
    "Feeling overwhelmed managing everything alone",
    "Not showing up in local Google searches",
    "Inconsistent follow-up with potential customers",
  ]

  return (
    <div className="min-h-screen" style={{ background: "var(--dark-gradient-hero)" }}>
      {/* Enhanced Isometric Background Grid */}
      <div className="fixed inset-0 iso-grid-enhanced opacity-40"></div>

      {/* Floating Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="iso-float-decoration"
          style={{ "--gradient": "var(--iso-gradient-1)", top: "15%", left: "8%", animationDelay: "0s" }}
        >
          <div className="face front"></div>
          <div className="face top"></div>
          <div className="face right"></div>
        </div>
        <div
          className="iso-float-decoration"
          style={{ "--gradient": "var(--iso-gradient-3)", top: "25%", right: "10%", animationDelay: "2s" }}
        >
          <div className="face front"></div>
          <div className="face top"></div>
          <div className="face right"></div>
        </div>
        <div
          className="iso-float-decoration"
          style={{ "--gradient": "var(--iso-gradient-5)", bottom: "20%", left: "15%", animationDelay: "4s" }}
        >
          <div className="face front"></div>
          <div className="face top"></div>
          <div className="face right"></div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-700 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <img src="/regenlogo3d.png" alt="Regen Creatives" className="h-10 w-10 rounded-full" />
                <div className="absolute -inset-1 bg-gradient-to-r from-coral-500 to-coral-700 rounded-full opacity-30 blur animate-pulse"></div>
              </div>
              <span className="font-bold text-xl text-white">Regen Creatives</span>
            </Link>
            <div className="flex items-center space-x-6">
              <a href="tel:6786619420" className="text-slate-300 hover:text-white transition-colors font-medium">
                <Phone className="h-5 w-5 inline mr-2" />
                (678) 661-9420
              </a>
              <a href="#consultation" className="cta-glow px-6 py-2 text-sm">
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className={`relative z-10 animate-slide-up ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-coral-500/20 text-coral-300 border border-coral-500/30">
                  <MapPin className="h-4 w-4 mr-2" />
                  Serving Powder Springs, GA 30127
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight text-white">
                Start Working{" "}
                <span className="text-glow bg-gradient-to-r from-coral-500 to-coral-700 bg-clip-text text-transparent">
                  Smarter with AI & Automation
                </span>{" "}
              </h1>

              <p className="text-xl mb-8 text-slate-300 leading-relaxed max-w-2xl">
                <strong className="text-white">Powder Springs solo business owners:</strong> Tired of being buried in
                admin work? Our AI-powered tools automate your marketing, customer management, and daily operations so
                you can focus on growing your business.
              </p>

              <div className="mb-12">
                <h3 className="text-lg font-semibold text-white mb-4">Are you struggling with:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {challenges.slice(0, 4).map((challenge, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-coral-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#consultation" className="cta-glow flex items-center justify-center gap-3 text-lg">
                  <Calendar className="h-6 w-6" />
                  Get Free Consultation
                  <ArrowRight className="h-6 w-6" />
                </a>
                <a href="tel:7705550123" className="cta-secondary flex items-center justify-center gap-3 text-lg">
                  <Phone className="h-6 w-6" />
                  Call Now: (678) 661-9420
                </a>
              </div>
            </div>

            {/* Hero Isometric Scene - Local Business */}
            <div className={`animate-slide-up animate-delay-1 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <div className="hero-iso-scene">
                {/* Platform */}
                <div className="hero-platform" style={{ width: "350px", height: "60px" }}></div>

                {/* Central Business Hub */}
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
                    <Briefcase className="h-14 w-14 text-white" />
                  </div>
                  <div className="face back" style={{ width: "120px", height: "120px" }}></div>
                  <div className="face right" style={{ width: "120px", height: "120px" }}></div>
                  <div className="face left" style={{ width: "120px", height: "120px" }}></div>
                  <div className="face top" style={{ width: "120px", height: "120px" }}></div>
                  <div className="face bottom" style={{ width: "120px", height: "120px" }}></div>
                </div>

                {/* Surrounding Business Elements */}
                {[
                  { icon: Home, gradient: "var(--iso-gradient-2)", position: { top: "15%", left: "20%" } },
                  { icon: Coffee, gradient: "var(--iso-gradient-3)", position: { top: "15%", right: "20%" } },
                  { icon: Building, gradient: "var(--iso-gradient-4)", position: { bottom: "15%", left: "20%" } },
                  { icon: Users, gradient: "var(--iso-gradient-5)", position: { bottom: "15%", right: "20%" } },
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

      {/* Services Section */}
      <section
        id="services"
        className="relative py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--dark-gradient-section)" }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">
              How We Help Powder Springs Solo Business Owners
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our AI-powered solutions are specifically designed for solo entrepreneurs who need to maximize efficiency
              and compete with larger businesses in the Powder Springs market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className={`iso-card-readable animate-slide-up animate-delay-${Math.min(index + 1, 3)}`}
                  style={{ "--gradient": service.gradient }}
                >
                  <div className="p-8">
                    {/* 3D Icon */}
                    <div className="iso-icon-glow mb-6" style={{ "--gradient": service.gradient }}>
                      <div className="iso-icon-face iso-icon-front">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="iso-icon-face iso-icon-top"></div>
                      <div className="iso-icon-face iso-icon-right"></div>
                    </div>

                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <span className="text-sm font-semibold px-3 py-1 rounded-full bg-coral-500/20 text-coral-300 border border-coral-500/30">
                        {service.benefit}
                      </span>
                    </div>

                    <p className="text-slate-300 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ background: "var(--dark-gradient-hero)" }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">
              Success Stories from Powder Springs Business Owners
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              See how local solo entrepreneurs transformed their businesses with our automation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`iso-card-readable animate-slide-up animate-delay-${index + 1}`}
                style={{ "--gradient": `var(--iso-gradient-${index + 1})` }}
              >
                <div className="p-8">
                  {/* Rating Stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-slate-300 mb-6 leading-relaxed italic">"{testimonial.quote}"</blockquote>

                  {/* Author Info */}
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

      {/* Consultation Form Section */}
      <section
        id="consultation"
        className="relative py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--dark-gradient-section)" }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">
              Get Your Free Business Automation Consultation
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can help your Powder Springs business save time, increase revenue, and compete more
              effectively.
              <strong className="text-white"> No obligation. No sales pitch. Just actionable insights.</strong>
            </p>
          </div>

          <div className="iso-card-readable" style={{ "--gradient": "var(--iso-gradient-2)" }}>
            <div className="p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Field */}
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-3">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 py-4 bg-slate-800/50 border-2 border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-coral-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-3">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 py-4 bg-slate-800/50 border-2 border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-coral-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Phone Field */}
                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-semibold text-white mb-3">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 py-4 bg-slate-800/50 border-2 border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-coral-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                        placeholder="(678)661-9420"
                      />
                    </div>
                  </div>

                  {/* Business Field */}
                  <div className="relative">
                    <label htmlFor="business" className="block text-sm font-semibold text-white mb-3">
                      Business Type *
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="text"
                        id="business"
                        name="business"
                        value={formData.business}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 py-4 bg-slate-800/50 border-2 border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-coral-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                        placeholder="e.g., Cleaning Service, Landscaping, Consulting"
                      />
                    </div>
                  </div>
                </div>

                {/* Challenge Field */}
                <div className="relative">
                  <label htmlFor="challenge" className="block text-sm font-semibold text-white mb-3">
                    What's your biggest business challenge right now? *
                  </label>
                  <select
                    id="challenge"
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleInputChange}
                    required
                    className="w-full py-4 px-4 bg-slate-800/50 border-2 border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-coral-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                  >
                    <option value="">Select your biggest challenge...</option>
                    <option value="time-management">Too much time on admin tasks</option>
                    <option value="lead-generation">Not enough new customers</option>
                    <option value="customer-management">Losing track of customers/leads</option>
                    <option value="online-presence">Poor online visibility in Powder Springs</option>
                    <option value="follow-up">Inconsistent customer follow-up</option>
                    <option value="scaling">Can't grow without hiring help</option>
                    <option value="other">Other (we'll discuss on the call)</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button type="submit" className="cta-glow flex items-center justify-center gap-3 text-lg mx-auto">
                    <Calendar className="h-6 w-6" />
                    Schedule My Free Consultation
                    <ArrowRight className="h-6 w-6" />
                  </button>
                  <p className="text-slate-400 text-sm mt-4">
                    We'll contact you within 24 hours to schedule your consultation. No spam, ever.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Local Focus Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ background: "var(--dark-gradient-hero)" }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-black mb-8 text-white leading-tight">
                Why Choose{" "}
                <span className="text-glow bg-gradient-to-r from-coral-500 to-coral-700 bg-clip-text text-transparent">
                  Local Experts
                </span>{" "}
                in Powder Springs?
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-coral-500/20 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-coral-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Local Market Knowledge</h3>
                    <p className="text-slate-300">
                      We understand the Powder Springs business landscape, local competition, and what resonates with
                      your community.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-coral-500/20 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-coral-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Quick Response Times</h3>
                    <p className="text-slate-300">
                      Being local means faster support, quicker implementations, and the ability to meet in person when
                      needed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-coral-500/20 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-coral-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Solo Business Specialists</h3>
                    <p className="text-slate-300">
                      We exclusively work with solo entrepreneurs and small teams. We get the unique challenges you
                      face.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map/Location Visual */}
            <div className="relative">
              <div className="iso-card-readable" style={{ "--gradient": "var(--iso-gradient-3)" }}>
                <div className="p-8 text-center">
                  <div className="iso-icon-glow mx-auto mb-6" style={{ "--gradient": "var(--iso-gradient-3)" }}>
                    <div className="iso-icon-face iso-icon-front">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <div className="iso-icon-face iso-icon-top"></div>
                    <div className="iso-icon-face iso-icon-right"></div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">Serving Powder Springs</h3>
                  <p className="text-slate-300 mb-6">
                    <strong>Zip Code:</strong> 30127
                    <br />
                    <strong>Service Area:</strong> Powder Springs & surrounding areas
                    <br />
                    <strong>Response Time:</strong> Same day for urgent requests
                  </p>

                  <div className="space-y-3">
                    <a
                      href="tel:6786619420"
                      className="block w-full py-3 px-4 bg-coral-500/20 text-coral-300 rounded-lg hover:bg-coral-500/30 transition-colors"
                    >
                      <Phone className="h-4 w-4 inline mr-2" />
                      (678)661-9420
                    </a>
                    <a
                      href="mailto:ld@regencreatives.com"
                      className="block w-full py-3 px-4 bg-coral-500/20 text-coral-300 rounded-lg hover:bg-coral-500/30 transition-colors"
                    >
                      <Mail className="h-4 w-4 inline mr-2" />
                      hello@regencreatives.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white">
        <div className="absolute inset-0 iso-grid-enhanced opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center space-x-4 mb-8">
              <div className="relative">
                <img src="/regenlogo3d.png" alt="Regen Creatives" style={{ height: "40px" }} className="rounded-full" />
                <div className="absolute -inset-1 bg-gradient-to-r from-coral-500 to-coral-700 rounded-full opacity-30 blur animate-pulse"></div>
              </div>
              <span className="font-bold text-2xl">Regen Creatives</span>
            </Link>

            <p className="text-slate-400 text-lg mb-8">
              Helping Powder Springs solo business owners automate, grow, and thrive since 2024
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
              <a href="tel:7705550123" className="flex items-center text-slate-300 hover:text-white transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                (678) 661-9420
              </a>
              <a
                href="mailto:ld@regencreatives.com"
                className="flex items-center text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                hello@regencreatives.com
              </a>
              <span className="flex items-center text-slate-300">
                <MapPin className="h-5 w-5 mr-2" />
                Powder Springs, GA 30127
              </span>
            </div>

            <div className="border-t border-slate-800 pt-8">
              <p className="text-slate-400">© 2025 Regen Creatives · Powder Springs Business Automation Specialists</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
