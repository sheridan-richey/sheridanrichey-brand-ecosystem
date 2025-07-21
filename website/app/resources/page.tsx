import Link from 'next/link'
import { ArrowRight, BookOpen, Tool, Users, FileText, ExternalLink, Download } from 'lucide-react'

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Resources for Awakened Technologists
            </h1>
            <p className="font-body text-xl text-slate-600 max-w-3xl mx-auto">
              Curated tools, books, and frameworks that have shaped my journey and can accelerate yours. 
              Everything here has been personally tested and proven valuable.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* The Bookshelf */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-slate-900">The Bookshelf</h2>
                <p className="font-body text-slate-600">Foundational books that shaped the ZAG Matrix</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-heading font-bold text-slate-900 mb-2">The First 90 Days</h3>
                <p className="font-body text-sm text-slate-600 mb-3">Michael Watkins</p>
                <p className="font-body text-sm text-slate-700 mb-3">
                  The definitive guide for executive transitions. Essential for anyone stepping into new leadership roles.
                </p>
                <Link 
                  href="https://www.amazon.com/First-90-Days-Strategies-Expanded/dp/1422188612"
                  className="inline-flex items-center text-[#279595] hover:text-[#1f7a7a] font-body text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Amazon <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-heading font-bold text-slate-900 mb-2">Atomic Habits</h3>
                <p className="font-body text-sm text-slate-600 mb-3">James Clear</p>
                <p className="font-body text-sm text-slate-700 mb-3">
                  The science of building systems that compound over time. Core to the ACT pillar of the ZAG Matrix.
                </p>
                <Link 
                  href="https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299"
                  className="inline-flex items-center text-[#279595] hover:text-[#1f7a7a] font-body text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Amazon <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-heading font-bold text-slate-900 mb-2">Deep Work</h3>
                <p className="font-body text-sm text-slate-600 mb-3">Cal Newport</p>
                <p className="font-body text-sm text-slate-700 mb-3">
                  How to focus in a distracted world. Essential for building the concentration needed for mastery.
                </p>
                <Link 
                  href="https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692"
                  className="inline-flex items-center text-[#279595] hover:text-[#1f7a7a] font-body text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Amazon <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-heading font-bold text-slate-900 mb-2">Buy Back Your Time</h3>
                <p className="font-body text-sm text-slate-600 mb-3">Dan Martell</p>
                <p className="font-body text-sm text-slate-700 mb-3">
                  How to delegate, automate, and focus on what matters most. Perfect for the GEM pillar.
                </p>
                <Link 
                  href="https://www.amazon.com/Buy-Back-Your-Time-Delegation/dp/1400238004"
                  className="inline-flex items-center text-[#279595] hover:text-[#1f7a7a] font-body text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Amazon <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* The Toolkit */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#279595] to-[#34D399] rounded-xl flex items-center justify-center">
                <Tool className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-slate-900">The Toolkit</h2>
                <p className="font-body text-slate-600">Software and tools I use and trust</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-heading font-bold text-slate-900 mb-2">Cursor</h3>
                <p className="font-body text-sm text-slate-600 mb-3">AI-powered code editor</p>
                <p className="font-body text-sm text-slate-700 mb-3">
                  My primary development environment. The AI integration has transformed my coding workflow.
                </p>
                <Link 
                  href="https://cursor.sh"
                  className="inline-flex items-center text-[#279595] hover:text-[#1f7a7a] font-body text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Cursor <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-heading font-bold text-slate-900 mb-2">Beehiiv</h3>
                <p className="font-body text-sm text-slate-600 mb-3">Newsletter platform</p>
                <p className="font-body text-sm text-slate-700 mb-3">
                  The best platform for building a newsletter business. Used by top creators and thought leaders.
                </p>
                <Link 
                  href="https://beehiiv.com"
                  className="inline-flex items-center text-[#279595] hover:text-[#1f7a7a] font-body text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Beehiiv <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-heading font-bold text-slate-900 mb-2">v0.dev</h3>
                <p className="font-body text-sm text-slate-600 mb-3">AI UI generator</p>
                <p className="font-body text-sm text-slate-700 mb-3">
                  Generate beautiful UI components with AI. Perfect for rapid prototyping and design iteration.
                </p>
                <Link 
                  href="https://v0.dev"
                  className="inline-flex items-center text-[#279595] hover:text-[#1f7a7a] font-body text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit v0.dev <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-heading font-bold text-slate-900 mb-2">NotebookLM</h3>
                <p className="font-body text-sm text-slate-600 mb-3">AI research assistant</p>
                <p className="font-body text-sm text-slate-700 mb-3">
                  Google's AI-powered research tool. Excellent for synthesizing information and generating insights.
                </p>
                <Link 
                  href="https://notebooklm.google.com"
                  className="inline-flex items-center text-[#279595] hover:text-[#1f7a7a] font-body text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit NotebookLM <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Recommended Thinkers */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#8B5A3C] to-[#D97706] rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-slate-900">Recommended Thinkers</h2>
                <p className="font-body text-slate-600">Newsletters, blogs, and podcasts worth your time</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-heading font-bold text-slate-900 mb-2">Sahil Bloom</h3>
                <p className="font-body text-sm text-slate-600 mb-3">The Curiosity Chronicle</p>
                <p className="font-body text-sm text-slate-700 mb-3">
                  One of the best newsletters for high-performers. Sahil's insights on growth and mindset are invaluable.
                </p>
                <Link 
                  href="https://www.sahilbloom.com/newsletter"
                  className="inline-flex items-center text-[#279595] hover:text-[#1f7a7a] font-body text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subscribe <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-heading font-bold text-slate-900 mb-2">Ali Abdaal</h3>
                <p className="font-body text-sm text-slate-600 mb-3">Sunday Snippets</p>
                <p className="font-body text-sm text-slate-700 mb-3">
                  Weekly insights on productivity, learning, and building a life you love. Always practical and actionable.
                </p>
                <Link 
                  href="https://aliabdaal.com/newsletter"
                  className="inline-flex items-center text-[#279595] hover:text-[#1f7a7a] font-body text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subscribe <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-heading font-bold text-slate-900 mb-2">Tim Ferriss</h3>
                <p className="font-body text-sm text-slate-600 mb-3">5-Bullet Friday</p>
                <p className="font-body text-sm text-slate-700 mb-3">
                  Curated recommendations from books to gadgets. Tim's taste in resources is consistently excellent.
                </p>
                <Link 
                  href="https://tim.blog/5-bullet-friday"
                  className="inline-flex items-center text-[#279595] hover:text-[#1f7a7a] font-body text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subscribe <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-heading font-bold text-slate-900 mb-2">Naval Ravikant</h3>
                <p className="font-body text-sm text-slate-600 mb-3">Almanack & Podcast</p>
                <p className="font-body text-sm text-slate-700 mb-3">
                  Deep insights on wealth, happiness, and living well. Naval's thinking has influenced my ZEN pillar.
                </p>
                <Link 
                  href="https://nav.al"
                  className="inline-flex items-center text-[#279595] hover:text-[#1f7a7a] font-body text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Your Frameworks */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#279595] to-[#6366F1] rounded-xl flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-slate-900">Your Frameworks</h2>
                <p className="font-body text-slate-600">Downloadable guides and tools I've created</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-gradient-to-br from-[#279595]/5 to-[#6366F1]/5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading font-bold text-slate-900">The Prompt Architect's Toolkit</h3>
                  <span className="inline-flex items-center px-2 py-1 bg-[#279595]/10 rounded-full">
                    <span className="text-[#279595] font-body text-xs font-medium">New</span>
                  </span>
                </div>
                <p className="font-body text-sm text-slate-700 mb-4">
                  Master the art of AI prompt engineering. This comprehensive toolkit includes templates, frameworks, and strategies for getting the best results from AI tools like ChatGPT, Claude, and more.
                </p>
                <div className="flex items-center gap-3">
                  <Link 
                    href="/downloads/prompt-architects-toolkit"
                    className="inline-flex items-center font-body bg-[#279595] hover:bg-[#1f7a7a] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Free
                  </Link>
                  <span className="font-body text-xs text-slate-500">PDF • 45 pages</span>
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-heading font-bold text-slate-900 mb-2">ZAG Matrix Assessment</h3>
                <p className="font-body text-sm text-slate-700 mb-4">
                  Discover your current ZAG score and identify which pillar needs the most attention in your journey.
                </p>
                <div className="flex items-center gap-3">
                  <Link 
                    href="/zag-assessment"
                    className="inline-flex items-center font-body bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Take Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <span className="font-body text-xs text-slate-500">5 minutes</span>
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-heading font-bold text-slate-900 mb-2">Weekly ZAG Planner</h3>
                <p className="font-body text-sm text-slate-700 mb-4">
                  A weekly planning template that integrates all three pillars of the ZAG Matrix into your routine.
                </p>
                <div className="flex items-center gap-3">
                  <Link 
                    href="/downloads/weekly-zag-planner"
                    className="inline-flex items-center font-body bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Link>
                  <span className="font-body text-xs text-slate-500">PDF • 12 pages</span>
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-heading font-bold text-slate-900 mb-2">Executive Transition Checklist</h3>
                <p className="font-body text-sm text-slate-700 mb-4">
                  Based on my experience with multiple executive transitions, this checklist ensures you hit the ground running.
                </p>
                <div className="flex items-center gap-3">
                  <Link 
                    href="/downloads/executive-transition-checklist"
                    className="inline-flex items-center font-body bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Link>
                  <span className="font-body text-xs text-slate-500">PDF • 8 pages</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-br from-[#279595]/5 to-[#6366F1]/5 rounded-2xl p-8 border border-slate-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4">
              Get Weekly ZAG Insights
            </h3>
            <p className="font-body text-slate-600 mb-6">
              Join other awakened technologists receiving weekly insights, tools, and strategies for integrating clarity, momentum, and mastery into their careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#279595] focus:border-transparent"
              />
              <button className="font-body bg-[#279595] hover:bg-[#1f7a7a] text-white px-6 py-3 rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="font-body text-xs text-slate-500 mt-3">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 