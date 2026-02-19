"use client"
import { ArrowLeft, Calendar, User, Tag, Clock } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string

  // This would typically fetch the blog post data based on the slug
  // For now, we'll use placeholder content that matches the blog post titles
  const getPostData = (slug: string) => {
    const posts = {
      "the-future-of-ai-powered-tools-for-solopreneurs": {
        title: "The Future of AI-Powered Tools for Solopreneurs",
        content: `
          <p>Artificial Intelligence is revolutionizing the way individual creators and entrepreneurs build their businesses. In this comprehensive guide, we'll explore how AI-powered tools are becoming essential for solopreneurs who want to scale their operations without scaling their team.</p>
          
          <h2>The Current Landscape</h2>
          <p>Today's solopreneurs face unique challenges. They need to wear multiple hats - from marketing and sales to product development and customer service. Traditional solutions often require entire teams or significant financial investment, putting them out of reach for individual creators.</p>
          
          <h2>How AI Changes the Game</h2>
          <p>AI-powered tools are democratizing access to sophisticated business capabilities. What once required a team of specialists can now be accomplished by a single person with the right tools.</p>
          
          <h3>Key Areas of Impact:</h3>
          <ul>
            <li><strong>Content Creation:</strong> AI can help generate ideas, write copy, and create visuals</li>
            <li><strong>Customer Service:</strong> Chatbots and automated responses handle routine inquiries</li>
            <li><strong>Data Analysis:</strong> AI tools can analyze customer behavior and market trends</li>
            <li><strong>Process Automation:</strong> Repetitive tasks can be automated, freeing up time for strategic work</li>
          </ul>
          
          <h2>The Regen Approach</h2>
          <p>At Regen Creatives, we believe in building AI tools that enhance human capability rather than replace it. Our tools are designed to handle the tedious, time-consuming tasks so creators can focus on what they do best - creating.</p>
          
          <p>The future belongs to those who can effectively leverage AI to amplify their capabilities. The question isn't whether AI will change how we work - it's how quickly we can adapt to use these powerful new tools.</p>
        `,
        author: "Alex Chen",
        date: "January 15, 2025",
        readTime: "5 min read",
        category: "AI & Technology",
        tags: ["AI", "Solopreneurs", "Future"],
        image: "/placeholder.svg?height=400&width=800&text=AI+Tools+Future",
      },
      "building-autosite-ai-lessons-from-our-journey": {
        title: "Building AutoSite AI: Lessons from Our Journey",
        content: `
          <p>Building AutoSite AI has been one of our most ambitious projects to date. In this post, we'll share the lessons we learned, the challenges we overcame, and the insights that shaped our approach to AI-powered website creation.</p>
          
          <h2>The Vision</h2>
          <p>We set out to create a tool that could generate fully functional websites in minutes, not hours or days. The goal was to democratize web development and make it accessible to anyone with an idea.</p>
          
          <h2>Technical Challenges</h2>
          <p>The biggest challenge was training our AI to understand not just design principles, but also user experience, accessibility, and performance optimization. We had to teach it to think like both a designer and a developer.</p>
          
          <h3>Key Learnings:</h3>
          <ul>
            <li><strong>Start Simple:</strong> We began with basic layouts and gradually added complexity</li>
            <li><strong>User Feedback is Gold:</strong> Early beta testers helped us identify critical gaps</li>
            <li><strong>Performance Matters:</strong> Fast generation times were crucial for user adoption</li>
            <li><strong>Customization is Key:</strong> Users wanted control over the final output</li>
          </ul>
          
          <p>The journey taught us that building AI tools isn't just about the technology - it's about understanding human needs and creating solutions that truly serve them.</p>
        `,
        author: "Sarah Johnson",
        date: "January 12, 2025",
        readTime: "8 min read",
        category: "Product Development",
        tags: ["AutoSite AI", "Development", "Lessons"],
        image: "/placeholder.svg?height=400&width=800&text=AutoSite+AI+Development",
      },
    }

    return posts[slug as keyof typeof posts] || posts["the-future-of-ai-powered-tools-for-solopreneurs"]
  }

  const post = getPostData(slug)

  return (
    <div className="min-h-screen" style={{ background: "var(--dark-gradient-hero)" }}>
      {/* Enhanced Isometric Background Grid */}
      <div className="fixed inset-0 iso-grid-enhanced opacity-40"></div>

      {/* Header */}
      <header className="relative z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-700 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <img src="/regenlogo3d.png" alt="Regen Creatives" className="h-10 w-10 rounded-full" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-30 blur animate-pulse"></div>
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
                    item.name === "Blog" ? "text-white" : ""
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Back to Blog */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <div className="iso-card-readable mb-12" style={{ "--gradient": "var(--iso-gradient-1)" }}>
            <div className="p-8">
              {/* Featured Image */}
              <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-slate-300">
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-semibold">
                  {post.category}
                </span>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl font-black mb-6 text-white leading-tight">{post.title}</h1>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-800/50 text-slate-300 text-sm rounded border border-slate-600 flex items-center gap-1"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="iso-card-readable" style={{ "--gradient": "var(--iso-gradient-2)" }}>
            <div
              className="p-8 prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-ul:text-slate-300 prose-li:text-slate-300"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="relative py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white">
        <div className="absolute inset-0 iso-grid-enhanced opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <Link href="/" className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="relative">
                <img src="/regenlogo3d.png" alt="Regen Creatives" className="rounded-full" style={{ height: "40px" }} />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-30 blur animate-pulse"></div>
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
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
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
