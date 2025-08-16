import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ZEN - Zeal Evolves Now | ZAG Matrix Framework | Sheridan Richey',
  description: 'Discover how ZEN (Zeal Evolves Now) creates mental clarity, purpose, and resilience. Learn practical strategies for mid-career professionals seeking greater meaning.',
  keywords: 'ZEN, Zeal Evolves Now, mental clarity, purpose, resilience, ZAG Matrix, mid-career transformation',
}

export default function ZenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Link 
              href="/zag-matrix" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-4"
            >
              ← Back to ZAG Matrix
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ZEN
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-primary-600 mb-4">
              Zeal Evolves Now
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The foundation of mental clarity, purpose, and resilience that powers your transformation journey.
            </p>
          </div>
          
          {/* ZEN Pillar Icon */}
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-zag-zen-base to-zag-zen-dark rounded-full flex items-center justify-center">
            <span className="text-3xl text-white font-bold">Z</span>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            The Three Pillars of ZEN
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mental Clarity */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-zag-zen-light rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-zag-zen-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mental Clarity</h3>
              <p className="text-gray-600">
                Cut through the noise to identify what truly matters. Develop the focus to see opportunities others miss.
              </p>
            </div>

            {/* Purpose */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-zag-zen-light rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-zag-zen-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Purpose</h3>
              <p className="text-gray-600">
                Connect your daily actions to a larger vision. Find meaning that sustains you through challenges.
              </p>
            </div>

            {/* Resilience */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-zag-zen-light rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-zag-zen-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Resilience</h3>
              <p className="text-gray-600">
                Build the mental toughness to bounce back from setbacks and maintain momentum toward your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why ZEN Matters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why ZEN Matters for Mid-Career Professionals
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                The Clarity Crisis
              </h3>
              <p className="text-gray-600 mb-4">
                Mid-career professionals often face a paradox: they've achieved success, but feel disconnected from their deeper purpose. 
                The daily grind has clouded their vision, making it hard to see the path forward.
              </p>
              <p className="text-gray-600">
                ZEN cuts through this fog, helping you rediscover what truly matters and why you're doing what you're doing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                The Purpose Gap
              </h3>
              <p className="text-gray-600 mb-4">
                When success becomes routine, purpose can fade. ZEN helps you reconnect your daily actions to a larger vision 
                that sustains you through challenges and keeps you motivated for the long haul.
              </p>
              <p className="text-gray-600">
                It's not about working harder—it's about working with greater meaning and intention.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                The Resilience Challenge
              </h3>
              <p className="text-gray-600 mb-4">
                Mid-career transitions require mental toughness. Whether you're pivoting industries, starting a business, 
                or taking on new challenges, ZEN builds the resilience to maintain momentum when things get tough.
              </p>
              <p className="text-gray-600">
                It's about developing the mental framework to see setbacks as stepping stones, not roadblocks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Applications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How to Apply ZEN in Your Life
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Daily Practices</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-zen-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Morning reflection on your core values</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-zen-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Mindful decision-making throughout the day</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-zen-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Evening gratitude and purpose review</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-zen-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Weekly alignment check with your vision</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Career Applications</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-zen-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Evaluate opportunities against your purpose</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-zen-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Build resilience for career transitions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-zen-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Maintain clarity during organizational change</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-zen-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Lead teams with greater purpose and vision</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            ZEN in Action: Real Stories
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              From Executive Burnout to Purpose-Driven Leadership
            </h3>
            <p className="text-gray-600 mb-4">
              A senior executive I worked with was experiencing classic mid-career burnout. Despite professional success, 
              they felt empty and directionless. Through applying ZEN principles, they:
            </p>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li>• Rediscovered their passion for mentoring and developing talent</li>
              <li>• Aligned their role with their core values of growth and contribution</li>
              <li>• Built resilience to handle organizational politics and change</li>
              <li>• Found renewed energy and purpose in their work</li>
            </ul>
            <p className="text-gray-600">
              Within six months, they were leading their most successful team ever and had become a sought-after mentor 
              for other executives facing similar challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Develop Your ZEN?
          </h2>
          
          <div className="space-y-6">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ZEN is the foundation that makes ACT and GEM possible. Start here to build the mental clarity, 
              purpose, and resilience you need for your transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/zag-matrix/act" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Next: ACT (Awaken Core Thrust)
              </Link>
              
              <Link 
                href="/zag-matrix" 
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Back to ZAG Matrix Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
