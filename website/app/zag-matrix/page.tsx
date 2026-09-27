import ZagMatrixOverview from '@/components/ZagMatrixOverview'
import { CTAButtonLink } from '@/components/ui/cta-button'

export default function ZagMatrixPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-bg to-white">
      <div className="bg-white border-b border-smoke">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 rounded-full mb-6">
              <span className="text-primary-500 font-manrope text-sm font-medium">Framework overview</span>
            </div>
            <h1 className="font-manrope text-4xl md:text-5xl font-bold text-phantom mb-6">
              The ZAG Matrix
            </h1>
            <p className="font-manrope text-xl text-graphite mb-8">
              A practical lens for mid-career technologists: clarity (ZEN), momentum (ACT), and
              mastery (GEM)—integrated, not siloed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButtonLink href="/blog" variant="journey-progress" size="md" background="white">
                Read related posts
              </CTAButtonLink>
              <CTAButtonLink href="/about" variant="journey-action" size="md" background="white">
                About Sheridan
              </CTAButtonLink>
            </div>
          </div>
        </div>
      </div>

      <ZagMatrixOverview
        title="The Three Pillars of Transformation"
        subtitle="Each pillar reinforces the others; explore how they show up in the blog."
        showLearnMoreLinks={false}
      />

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
              <div className="w-16 h-16 bg-zag-zen-base rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-manrope text-2xl font-bold">1</span>
              </div>
              <h3 className="font-manrope text-xl font-bold text-phantom mb-4">Start with ZEN</h3>
              <p className="font-manrope text-graphite">
                Begin by finding clarity about who you are and what you truly want.
                This foundation is essential for all other growth.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zag-act-base rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-manrope text-2xl font-bold">2</span>
              </div>
              <h3 className="font-manrope text-xl font-bold text-phantom mb-4">Build ACT</h3>
              <p className="font-manrope text-graphite">
                With clarity in place, focus on building physical well-being and
                strengthening key relationships for sustainable momentum.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zag-gem-base rounded-full flex items-center justify-center mx-auto mb-6">
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

      <section className="py-24 sm:py-32 bg-white border-t border-smoke">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-manrope text-3xl md:text-4xl font-bold text-phantom mb-6">
              See it in practice
            </h2>
            <p className="font-manrope text-lg text-graphite mb-8">
              The blog is where I apply ZAG to real leadership decisions, career transitions, and
              personal growth—not theory in a vacuum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButtonLink href="/blog" variant="journey-progress" size="lg" background="white">
                Browse the blog
              </CTAButtonLink>
              <CTAButtonLink href="/contact" variant="journey-complete" size="lg" background="white">
                Get in touch
              </CTAButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
