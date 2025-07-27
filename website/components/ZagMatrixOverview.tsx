import { Target, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'

interface ZagMatrixOverviewProps {
  title?: string
  subtitle?: string
  showLearnMoreLinks?: boolean
  className?: string
}

export default function ZagMatrixOverview({
  title = "The ZAG Matrix Framework",
  subtitle = "A proven system for mid-career professionals seeking holistic transformation",
  showLearnMoreLinks = true,
  className = ""
}: ZagMatrixOverviewProps) {
  return (
    <section className={`py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-phantom sm:text-4xl font-manrope">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-graphite font-manrope">
            {subtitle}
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
                  Awaken to your authentic self and true purpose. Transform your mindset from 
                  reactive to proactive, building the foundation for sustainable growth.
                </p>
                {showLearnMoreLinks && (
                  <p className="mt-6">
                    <Link href="/zag-matrix/zen" className="text-primary-500 hover:text-primary-600 font-semibold">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                )}
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-phantom font-manrope">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-500">
                  <Users className="h-6 w-6 text-white" />
                </div>
                ACT (Activate Core Thrust)
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-graphite font-manrope">
                <p className="flex-auto">
                  Align your energy, relationships, and systems. Create the momentum and 
                  support system needed for breakthrough growth.
                </p>
                {showLearnMoreLinks && (
                  <p className="mt-6">
                    <Link href="/zag-matrix/act" className="text-primary-500 hover:text-primary-600 font-semibold">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                )}
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
                  Achieve mastery through strategic career moves, investments, and 
                  entrepreneurial growth. Master the art of compounding success.
                </p>
                {showLearnMoreLinks && (
                  <p className="mt-6">
                    <Link href="/zag-matrix/gem" className="text-primary-500 hover:text-primary-600 font-semibold">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                )}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
} 