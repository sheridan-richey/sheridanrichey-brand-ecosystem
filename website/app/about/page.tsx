import { Award, Building, Lightbulb, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-50 via-white to-light-bg py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-phantom font-manrope sm:text-6xl">
              About <span className="gradient-text">Sheridan Richey</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-graphite font-manrope">
              SaaS executive, investor, and writer on the intersection of technology leadership
              and a purposeful next chapter.
            </p>
            <div className="flex justify-center mt-8">
              <img src="/sheridan-about.jpg" alt="Sheridan Richey" className="rounded-2xl shadow-xl w-64 h-80 object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-phantom font-manrope sm:text-4xl">
                  My Journey
                </h2>
                <p className="mt-6 text-lg leading-8 text-graphite font-manrope">
                  I&apos;ve spent over two decades in executive leadership at companies including
                  AdvancedMD, SirsiDynix, Extensiv, and Henry Schein One. Today I serve as{' '}
                  <strong>CTO at OptConnect</strong>, where I focus on product strategy, AI adoption,
                  and building teams that ship.
                </p>
                <p className="mt-6 text-lg leading-8 text-graphite font-manrope">
                  Alongside that role, I co-founded{' '}
                  <strong>Bring It Forward Investments</strong>—acquiring and operating businesses
                  whose owners are ready to transition. That operator-investor lens shows up often in
                  my writing on career moves and compounding growth.
                </p>
                <p className="mt-6 text-lg leading-8 text-graphite font-manrope">
                  I developed the <Link href="/zag-matrix" className="text-primary-600 font-semibold hover:text-primary-500">ZAG Matrix</Link>{' '}
                  (ZEN, ACT, GEM) as a practical way to think about clarity, momentum, and mastery when
                  conventional success stops feeling like enough. The blog is where I explore those
                  ideas in depth.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/blog" className="btn-primary">
                    Read the blog
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Contact
                  </Link>
                </div>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold text-phantom font-manrope mb-4">At a glance</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-phantom font-manrope">Executive leadership</h4>
                      <p className="text-graphite font-manrope">20+ years across SaaS product and engineering</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Building className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-phantom font-manrope">OptConnect</h4>
                      <p className="text-graphite font-manrope">Chief Technology Officer</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-phantom font-manrope">Bring It Forward</h4>
                      <p className="text-graphite font-manrope">Co-founder and managing partner</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-phantom font-manrope">ZAG Matrix</h4>
                      <p className="text-graphite font-manrope">Framework for purpose-driven technologists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
