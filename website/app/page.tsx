import HeroSection from '@/components/HeroSection'
import LatestInsights from '@/components/LatestInsights'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LatestInsights
        title="Latest from the blog"
        subtitle="Signal over noise—essays on clarity, momentum, and mastery for technologists."
        postCount={3}
      />
      <section className="border-t border-smoke bg-light-bg py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="font-manrope text-lg text-graphite">
            Want to go deeper on the framework behind these posts?{' '}
            <Link href="/zag-matrix" className="font-semibold text-primary-600 hover:text-primary-500">
              Read the ZAG Matrix overview
            </Link>
            {' '}or{' '}
            <Link href="/contact" className="font-semibold text-primary-600 hover:text-primary-500">
              get in touch
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
