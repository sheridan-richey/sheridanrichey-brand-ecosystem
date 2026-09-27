import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

/**
 * Blog-led homepage hero: short introduction with paths to writing and context.
 */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 to-primary-600">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-manrope text-sm font-semibold uppercase tracking-wide text-primary-100">
              Sheridan Richey
            </p>
            <h1 className="mt-4 font-manrope text-4xl font-bold leading-tight text-white sm:text-5xl">
              Writing on leadership, craft, and the work of building a life that compounds.
            </h1>
            <p className="mt-6 font-manrope text-lg leading-relaxed text-white/90 sm:text-xl">
              I&apos;m a SaaS executive (CTO at OptConnect), investor at Bring It Forward, and
              creator of the ZAG Matrix—a lens I use in my own career and share here in long-form
              essays.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-manrope text-base font-semibold text-primary-600 shadow-sm transition-colors hover:bg-cloud"
              >
                Read the blog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="font-manrope text-base font-semibold text-white/95 underline-offset-4 hover:underline"
              >
                About me
              </Link>
              <Link
                href="/zag-matrix"
                className="font-manrope text-base font-semibold text-primary-100 underline-offset-4 hover:text-white hover:underline"
              >
                ZAG overview
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/sheridan-headshot.jpg"
                alt="Sheridan Richey"
                className="h-80 w-full object-cover object-top sm:h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
