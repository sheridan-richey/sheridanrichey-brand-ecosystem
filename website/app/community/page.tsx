import Link from 'next/link'
import { ArrowRight, Mail, Users, BookOpen, Zap } from 'lucide-react'

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cloud to-smoke">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-arsenic sm:text-6xl">
              Join The ZAG Navigator
            </h1>
            <p className="mt-6 text-lg leading-8 text-phantom">
              Your weekly guide to awakening clarity, building momentum, and achieving mastery in your career and life.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/newsletter"
                className="group bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
              >
                Subscribe to Newsletter
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          
          {/* What You'll Get */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-arsenic sm:text-4xl mb-8">
              What You'll Get Every Week
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-steel/10">
                <div className="flex items-center justify-center w-12 h-12 bg-zen-gradient rounded-lg mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-arsenic mb-2">ZEN Insights</h3>
                <p className="text-phantom">
                  Mental clarity strategies, purpose discovery, and resilience building techniques from my executive career.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-steel/10">
                <div className="flex items-center justify-center w-12 h-12 bg-act-gradient rounded-lg mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-arsenic mb-2">ACT Strategies</h3>
                <p className="text-phantom">
                  Physical well-being tips, relationship building frameworks, and momentum creation methods.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-steel/10">
                <div className="flex items-center justify-center w-12 h-12 bg-gem-gradient rounded-lg mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-arsenic mb-2">GEM Guidance</h3>
                <p className="text-phantom">
                  Strategic career moves, investment insights, and entrepreneurial growth strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter vs Community */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-steel/10 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-arsenic sm:text-4xl mb-8">
              The ZAG Navigator: Your Weekly Compass
            </h2>
            <div className="prose prose-lg max-w-none text-phantom">
              <p className="text-xl leading-relaxed mb-6">
                The ZAG Navigator newsletter is your <strong>weekly compass</strong> for navigating the journey of the "Awakened Technologist." 
                Every week, I share insights, strategies, and actionable frameworks from my executive career and the ZAG Matrix methodology.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                This is where you'll find <strong>polished, high-value content</strong> that helps you understand the framework, 
                implement the principles, and see real examples of how ZEN, ACT, and GEM work in practice.
              </p>
              <p className="text-xl leading-relaxed">
                Think of it as your <strong>personal mentorship</strong> delivered directly to your inbox—no fluff, 
                just actionable insights that help you move from reading about success to living it.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of professionals who are already applying the ZAG Matrix to transform their careers and lives.
            </p>
            <Link
              href="/newsletter"
              className="group bg-white text-teal-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
            >
              Subscribe to The ZAG Navigator
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 