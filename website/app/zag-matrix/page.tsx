import Link from 'next/link'
import { ArrowRight, Target, Users, TrendingUp, BookOpen, Calendar, Users as UsersIcon } from 'lucide-react'
import ZagMatrixOverview from '@/components/ZagMatrixOverview'

export default function ZagMatrixPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-bg to-white">
      {/* Hero Section */}
      <div className="bg-white border-b border-smoke">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 rounded-full mb-6">
              <span className="text-primary-500 font-manrope text-sm font-medium">Your Transformation Framework</span>
            </div>
            <h1 className="font-manrope text-4xl md:text-5xl font-bold text-phantom mb-6">
              The ZAG Matrix
            </h1>
            <p className="font-manrope text-xl text-graphite mb-8">
              A proven system for mid-career professionals seeking holistic transformation. 
              Integrate clarity, momentum, and mastery into your purpose-driven career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog"
                className="inline-flex items-center font-manrope bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Read the Blog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/newsletter"
                className="inline-flex items-center font-manrope border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Get Weekly Insights
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ZAG Matrix Overview */}
      <ZagMatrixOverview 
        title="The Three Pillars of Transformation"
        subtitle="Each pillar builds upon the previous one, creating a comprehensive framework for sustainable growth"
        showLearnMoreLinks={false}
      />

      {/* How It Works */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-phantom sm:text-4xl font-manrope">
              How the ZAG Matrix Works
            </h2>
            <p className="mt-4 text-lg leading-8 text-graphite font-manrope">
              The framework is designed to be applied sequentially, with each pillar building the foundation for the next.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-manrope text-2xl font-bold">1</span>
              </div>
              <h3 className="font-manrope text-xl font-bold text-phantom mb-4">Start with ZEN</h3>
              <p className="font-manrope text-graphite">
                Begin by finding clarity about who you are and what you truly want. 
                This foundation is essential for all other growth.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-manrope text-2xl font-bold">2</span>
              </div>
              <h3 className="font-manrope text-xl font-bold text-phantom mb-4">Build ACT</h3>
              <p className="font-manrope text-graphite">
                With clarity in place, focus on building physical well-being and 
                strengthening key relationships for sustainable momentum.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-manrope text-2xl font-bold">3</span>
              </div>
              <h3 className="font-manrope text-xl font-bold text-phantom mb-4">Execute GEM</h3>
              <p className="font-manrope text-graphite">
                Apply your clarity and energy toward strategic career moves, 
                investments, and entrepreneurial growth opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-primary-500/5 to-light-teal/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-phantom sm:text-4xl font-manrope">
              Resources to Support Your Journey
            </h2>
            <p className="mt-4 text-lg leading-8 text-graphite font-manrope">
              Access tools, templates, and insights to help you apply the ZAG Matrix framework.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-smoke hover:shadow-lg transition-shadow duration-200">
                <BookOpen className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="font-manrope text-lg font-bold text-phantom mb-2 group-hover:text-primary-500 transition-colors">
                  Blog Articles
                </h3>
                <p className="font-manrope text-graphite text-sm">
                  Deep dives into each pillar with practical strategies and real-world examples.
                </p>
              </div>
            </Link>
            
            <Link href="/newsletter" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-smoke hover:shadow-lg transition-shadow duration-200">
                <Calendar className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="font-manrope text-lg font-bold text-phantom mb-2 group-hover:text-primary-500 transition-colors">
                  Weekly Newsletter
                </h3>
                <p className="font-manrope text-graphite text-sm">
                  Get actionable insights and strategies delivered to your inbox every week.
                </p>
              </div>
            </Link>
            
            <Link href="/resources" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-smoke hover:shadow-lg transition-shadow duration-200">
                <UsersIcon className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="font-manrope text-lg font-bold text-phantom mb-2 group-hover:text-primary-500 transition-colors">
                  Tools & Templates
                </h3>
                <p className="font-manrope text-graphite text-sm">
                  Practical resources to help you implement the ZAG Matrix in your daily life.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-manrope text-3xl md:text-4xl font-bold text-phantom mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="font-manrope text-lg text-graphite mb-8">
              Join other awakened technologists who are applying the ZAG Matrix framework 
              to create purpose-driven careers and lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center font-manrope bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg transition-colors duration-200"
              >
                Let's Talk
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/newsletter"
                className="inline-flex items-center font-manrope border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg transition-colors duration-200"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 