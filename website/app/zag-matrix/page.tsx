import ZagMatrixOverview from '@/components/ZagMatrixOverview'
import { CTAButtonLink } from '@/components/ui/cta-button'

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
              <CTAButtonLink href="/blog" variant="journey-progress" size="md" background="white">
                Read the Blog
              </CTAButtonLink>
              <CTAButtonLink href="/newsletter" variant="journey-action" size="md" background="white">
                Master the Framework
              </CTAButtonLink>
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
              <CTAButtonLink href="/contact" variant="journey-progress" size="lg" background="white">
                Let's Talk
              </CTAButtonLink>
              <CTAButtonLink href="/newsletter" variant="journey-complete" size="lg" background="white">
                Start Your Journey
              </CTAButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 