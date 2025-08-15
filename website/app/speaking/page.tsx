import { ArrowRight, MessageSquare, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'

export default function SpeakingPage() {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-light-bg via-white to-light-teal/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-phantom sm:text-6xl font-manrope">
              Speaking <span className="text-primary-500">Engagements</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-graphite font-manrope">
              Transform your audience with insights from two decades of executive leadership, 
              entrepreneurship, and the ZAG Matrix framework.
            </p>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-phantom sm:text-4xl font-manrope">
              Keynote Topics
            </h2>
            <p className="mt-6 text-lg leading-8 text-graphite font-manrope">
              From executive leadership to personal transformation, I deliver compelling 
              insights that inspire action and drive results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* ZAG Matrix Framework */}
            <div className="bg-white rounded-2xl shadow-xl border border-smoke p-8">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary-500 mb-6">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-phantom font-manrope mb-4">
                The ZAG Matrix: A Framework for Mid-Career Transformation
              </h3>
              <p className="text-graphite font-manrope mb-6">
                Discover how the ZEN, ACT, GEM framework can help technologists navigate 
                career plateaus and build lives of purpose and financial independence.
              </p>
              <div className="text-sm text-graphite font-manrope">
                <p><strong>Duration:</strong> 45-60 minutes</p>
                <p><strong>Audience:</strong> Tech professionals, executives, career changers</p>
              </div>
            </div>

            {/* Executive Leadership */}
            <div className="bg-white rounded-2xl shadow-xl border border-smoke p-8">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary-500 mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-phantom font-manrope mb-4">
                From Individual Contributor to Executive Leader
              </h3>
              <p className="text-graphite font-manrope mb-6">
                Lessons learned from leading teams at AdvancedMD, SirsiDynix, Extensiv, 
                and Henry Schein One. Practical strategies for scaling yourself and your organization.
              </p>
              <div className="text-sm text-graphite font-manrope">
                <p><strong>Duration:</strong> 30-45 minutes</p>
                <p><strong>Audience:</strong> Managers, directors, aspiring executives</p>
              </div>
            </div>

            {/* Entrepreneurship */}
            <div className="bg-white rounded-2xl shadow-xl border border-smoke p-8">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary-500 mb-6">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-phantom font-manrope mb-4">
                Building Wealth Through Strategic Investments
              </h3>
              <p className="text-graphite font-manrope mb-6">
                How to leverage your tech career to build passive income streams and 
                achieve financial independence through Bring It Forward Investments.
              </p>
              <div className="text-sm text-graphite font-manrope">
                <p><strong>Duration:</strong> 30-45 minutes</p>
                <p><strong>Audience:</strong> High-earning professionals, investors</p>
              </div>
            </div>

            {/* Personal Transformation */}
            <div className="bg-white rounded-2xl shadow-xl border border-smoke p-8">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary-500 mb-6">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-phantom font-manrope mb-4">
                The Awakened Technologist: Finding Purpose Beyond Success
              </h3>
              <p className="text-graphite font-manrope mb-6">
                How to break through the plateau of achievement and discover what truly 
                drives you forward in your career and life.
              </p>
              <div className="text-sm text-graphite font-manrope">
                <p><strong>Duration:</strong> 45-60 minutes</p>
                <p><strong>Audience:</strong> Mid-career professionals, life coaches</p>
              </div>
            </div>

            {/* SaaS Growth */}
            <div className="bg-white rounded-2xl shadow-xl border border-smoke p-8">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary-500 mb-6">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-phantom font-manrope mb-4">
                Scaling SaaS Companies: Product, People, and Profit
              </h3>
              <p className="text-graphite font-manrope mb-6">
                Real-world strategies for growing SaaS companies from startup to scale-up, 
                including M&A, team building, and product development.
              </p>
              <div className="text-sm text-graphite font-manrope">
                <p><strong>Duration:</strong> 45-60 minutes</p>
                <p><strong>Audience:</strong> SaaS founders, product leaders, investors</p>
              </div>
            </div>

            {/* Custom Topics */}
            <div className="bg-white rounded-2xl shadow-xl border border-smoke p-8">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary-500 mb-6">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-phantom font-manrope mb-4">
                Custom Keynotes & Workshops
              </h3>
              <p className="text-graphite font-manrope mb-6">
                Tailored presentations and interactive workshops designed specifically 
                for your organization's unique challenges and objectives.
              </p>
              <div className="text-sm text-graphite font-manrope">
                <p><strong>Duration:</strong> Flexible</p>
                <p><strong>Audience:</strong> Custom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Experience */}
      <section className="bg-light-bg py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-phantom sm:text-4xl font-manrope">
              Speaking Experience
            </h2>
            <p className="mt-6 text-lg leading-8 text-graphite font-manrope">
              I've delivered keynotes and workshops at leading tech conferences, 
              executive retreats, and corporate events.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 font-manrope mb-2">50+</div>
              <p className="text-graphite font-manrope">Speaking Engagements</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 font-manrope mb-2">10,000+</div>
              <p className="text-graphite font-manrope">Audience Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 font-manrope mb-2">4.9/5</div>
              <p className="text-graphite font-manrope">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-500">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-manrope">
              Ready to Transform Your Audience?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90 font-manrope">
              Let's discuss how I can help inspire and educate your team, conference attendees, 
              or community with actionable insights from the ZAG Matrix framework.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link 
                href="/contact?subject=Speaking%20Engagement&source=speaking" 
                className="bg-white text-primary-500 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors font-manrope inline-flex items-center gap-2"
              >
                Book a Speaking Engagement <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-white/80 font-semibold font-manrope flex items-center gap-2"
              >
                Contact Me <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
} 