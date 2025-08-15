import HeroSection from '@/components/HeroSection'
import LatestInsights from '@/components/LatestInsights'
import ZagMatrixOverview from '@/components/ZagMatrixOverview'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      {/* ZAG Matrix Overview */}
      <ZagMatrixOverview />
      {/* Featured Content */}
      <LatestInsights />
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
                Join the Newsletter
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