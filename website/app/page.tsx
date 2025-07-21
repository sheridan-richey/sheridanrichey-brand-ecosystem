import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import { ArrowRight, Target, Users, TrendingUp } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* ZAG Matrix Overview */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              The ZAG Matrix Framework
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              A proven system for mid-career professionals seeking holistic transformation
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-secondary-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-600">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  ZEN (Zeal Evolves Now)
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-secondary-600">
                  <p className="flex-auto">
                    Find clarity, purpose, and mental resilience. Transform your mindset from 
                    reactive to proactive, building the foundation for sustainable growth.
                  </p>
                  <p className="mt-6">
                    <Link href="/zag-matrix/zen" className="text-primary-600 hover:text-primary-500 font-semibold">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-secondary-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-accent-600">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  ACT (Awaken Core Thrust)
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-secondary-600">
                  <p className="flex-auto">
                    Build physical well-being and strengthen key relationships to generate 
                    momentum. Create the energy and support system needed for breakthrough growth.
                  </p>
                  <p className="mt-6">
                    <Link href="/zag-matrix/act" className="text-primary-600 hover:text-primary-500 font-semibold">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-secondary-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-secondary-600">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  GEM (Growth Earns Mastery)
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-secondary-600">
                  <p className="flex-auto">
                    Apply zeal and energy toward strategic career moves, investments, and 
                    entrepreneurial growth. Master the art of compounding success.
                  </p>
                  <p className="mt-6">
                    <Link href="/zag-matrix/gem" className="text-primary-600 hover:text-primary-500 font-semibold">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="bg-secondary-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Latest Insights
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Practical wisdom for your transformation journey
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Featured Blog Post Placeholders */}
            <article className="card hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2024-01-16" className="text-secondary-500">
                  Jan 16, 2024
                </time>
                <span className="relative z-10 rounded-full bg-primary-50 px-3 py-1.5 font-medium text-primary-600 hover:bg-primary-100">
                  ZEN
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-secondary-900 group-hover:text-primary-600">
                  <Link href="/blog/finding-clarity-mid-career">
                    <span className="absolute inset-0" />
                    Finding Clarity When You're Stuck in Success
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-secondary-600">
                  How to break through the plateau of achievement and discover what truly drives you forward.
                </p>
              </div>
            </article>

            <article className="card hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2024-01-10" className="text-secondary-500">
                  Jan 10, 2024
                </time>
                <span className="relative z-10 rounded-full bg-accent-50 px-3 py-1.5 font-medium text-accent-600 hover:bg-accent-100">
                  ACT
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-secondary-900 group-hover:text-primary-600">
                  <Link href="/blog/building-momentum-through-relationships">
                    <span className="absolute inset-0" />
                    Building Momentum Through Strategic Relationships
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-secondary-600">
                  The power of surrounding yourself with people who accelerate your growth.
                </p>
              </div>
            </article>

            <article className="card hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2024-01-05" className="text-secondary-500">
                  Jan 5, 2024
                </time>
                <span className="relative z-10 rounded-full bg-secondary-50 px-3 py-1.5 font-medium text-secondary-600 hover:bg-secondary-100">
                  GEM
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-secondary-900 group-hover:text-primary-600">
                  <Link href="/blog/strategic-career-moves">
                    <span className="absolute inset-0" />
                    Strategic Career Moves That Compound Success
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-secondary-600">
                  How to make career decisions that build upon each other for exponential growth.
                </p>
              </div>
            </article>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/blog" className="btn-primary">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Career?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Join our community of awakened technologists and get exclusive insights, 
              frameworks, and strategies delivered to your inbox.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/newsletter" className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-lg transition-colors">
                Join the Community
              </Link>
              <Link href="/contact" className="text-white hover:text-primary-100 font-semibold">
                Let's Talk <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
} 