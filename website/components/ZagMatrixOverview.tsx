import { ArrowRight, Target, TrendingUp, Users } from 'lucide-react'
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
  const pillars = [
    {
      icon: Target,
      title: "ZEN (Zeal Evolves Now)",
      description: "Awaken to your authentic self and true purpose. Transform your mindset from reactive to proactive, building the foundation for sustainable growth.",
      href: "/zag-matrix/zen",
      color: "bg-zag-zen-base"
    },
    {
      icon: Users,
      title: "ACT (Activate Core Thrust)",
      description: "Align your energy, relationships, and systems. Create the momentum and support system needed for breakthrough growth.",
      href: "/zag-matrix/act",
      color: "bg-zag-act-base"
    },
    {
      icon: TrendingUp,
      title: "GEM (Growth Earns Mastery)",
      description: "Achieve mastery through strategic career moves, investments, and entrepreneurial growth. Master the art of compounding success.",
      href: "/zag-matrix/gem",
      color: "bg-zag-gem-base"
    }
  ]

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
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Link 
              key={index}
              href={pillar.href}
              className="group block"
            >
              <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-200 h-full flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  {/* Header with Icon and Title */}
                  <div className="flex items-center gap-x-3 mb-4">
                    <div className={`h-10 w-10 flex items-center justify-center rounded-lg ${pillar.color} group-hover:scale-105 transition-transform duration-200`}>
                      <pillar.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold leading-7 text-phantom font-manrope group-hover:text-primary-600 transition-colors duration-200">
                      {pillar.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="flex-1 text-base leading-7 text-graphite font-manrope mb-4">
                    {pillar.description}
                  </p>
                  
                  {/* Learn More Link */}
                  {showLearnMoreLinks && (
                    <div className="mt-auto">
                      <div className="inline-flex items-center text-primary-500 group-hover:text-primary-600 font-semibold transition-colors duration-200">
                        Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 