import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import { ArrowRight, Target, Users, TrendingUp } from 'lucide-react'
import { allPosts } from 'contentlayer/generated'
import BlogCard, { BlogCardPost } from '@/components/BlogCard'

function getLatestFeaturedPosts(posts: any[], count: number): BlogCardPost[] {
  // Sort by date descending
  const sorted = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(post => ({
      ...post,
      date: new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
      featured: post.featured === true,
    }))
  const featured = sorted.filter(p => p.featured)
  const rest = sorted.filter(p => !p.featured)
  return [...featured.slice(0, count), ...rest].slice(0, count)
}

export default function HomePage() {
  const latestPosts = getLatestFeaturedPosts(allPosts, 3)
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      {/* ZAG Matrix Overview */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-phantom sm:text-4xl font-manrope">
              The ZAG Matrix Framework
            </h2>
            <p className="mt-4 text-lg leading-8 text-graphite font-manrope">
              A proven system for mid-career professionals seeking holistic transformation
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-phantom font-manrope">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-500">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  ZEN (Zeal Evolves Now)
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-graphite font-manrope">
                  <p className="flex-auto">
                    Find clarity, purpose, and mental resilience. Transform your mindset from 
                    reactive to proactive, building the foundation for sustainable growth.
                  </p>
                  <p className="mt-6">
                    <Link href="/zag-matrix/zen" className="text-primary-500 hover:text-primary-600 font-semibold">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-phantom font-manrope">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-500">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  ACT (Awaken Core Thrust)
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-graphite font-manrope">
                  <p className="flex-auto">
                    Build physical well-being and strengthen key relationships to generate 
                    momentum. Create the energy and support system needed for breakthrough growth.
                  </p>
                  <p className="mt-6">
                    <Link href="/zag-matrix/act" className="text-primary-500 hover:text-primary-600 font-semibold">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-phantom font-manrope">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-500">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  GEM (Growth Earns Mastery)
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-graphite font-manrope">
                  <p className="flex-auto">
                    Apply zeal and energy toward strategic career moves, investments, and 
                    entrepreneurial growth. Master the art of compounding success.
                  </p>
                  <p className="mt-6">
                    <Link href="/zag-matrix/gem" className="text-primary-500 hover:text-primary-600 font-semibold">
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
      <section className="bg-cloud py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-phantom sm:text-4xl font-manrope">
              Latest Insights
            </h2>
            <p className="mt-4 text-lg leading-8 text-graphite font-manrope">
              Practical wisdom for your transformation journey
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {latestPosts.map(post => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/blog" className="btn-primary inline-flex items-center">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-primary-500">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-manrope">
              Ready to Transform Your Career?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90 font-manrope">
              Join our community of awakened technologists and get exclusive insights, 
              frameworks, and strategies delivered to your inbox.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/newsletter" className="bg-white text-primary-500 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors font-manrope">
                Join the Community
              </Link>
              <Link href="/contact" className="text-white hover:text-white/80 font-semibold font-manrope">
                Let's Talk <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 