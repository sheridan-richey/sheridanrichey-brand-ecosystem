import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GEM - Growth Earns Mastery | ZAG Matrix Framework | Sheridan Richey',
  description: 'Discover how GEM (Growth Earns Mastery) applies your zeal and energy toward strategic career moves, investments, and entrepreneurial growth.',
  keywords: 'GEM, Growth Earns Mastery, strategic career moves, investments, entrepreneurship, ZAG Matrix, mid-career transformation',
}

export default function GemPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
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
              GEM
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-primary-600 mb-4">
              Growth Earns Mastery
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The strategic application of your zeal and energy toward career advancement, wealth building, and entrepreneurial success.
            </p>
          </div>
          
          {/* GEM Pillar Icon */}
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-zag-gem-base to-zag-gem-dark rounded-full flex items-center justify-center">
            <span className="text-3xl text-white font-bold">G</span>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            The Three Pillars of GEM
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Strategic Career Moves */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-zag-gem-light rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-zag-gem-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Career Moves</h3>
              <p className="text-gray-600">
                Make calculated career decisions that accelerate your growth and maximize your impact and compensation.
              </p>
            </div>

            {/* Investments */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-zag-gem-light rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-zag-gem-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Investments</h3>
              <p className="text-gray-600">
                Build wealth through strategic investments in yourself, your skills, and financial assets that compound over time.
              </p>
            </div>

            {/* Entrepreneurship */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-zag-gem-light rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-zag-gem-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Entrepreneurship</h3>
              <p className="text-gray-600">
                Create and scale businesses that generate wealth, impact, and the freedom to live life on your terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why GEM Matters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why GEM Matters for Mid-Career Professionals
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                The Plateau Problem
              </h3>
              <p className="text-gray-600 mb-4">
                Mid-career professionals often hit a plateau where incremental improvements in their current role 
                no longer provide meaningful growth. They need strategic moves that create step-function improvements.
              </p>
              <p className="text-gray-600">
                GEM provides the framework for making these strategic career decisions that can multiply your impact and income.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                The Wealth Gap
              </h3>
              <p className="text-gray-600 mb-4">
                Relying solely on salary income limits your wealth-building potential. GEM helps you develop multiple 
                income streams and investment strategies that can create financial freedom faster than traditional career progression.
              </p>
              <p className="text-gray-600">
                It's about building assets that work for you, not just trading time for money.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                The Freedom Challenge
              </h3>
              <p className="text-gray-600 mb-4">
                Many mid-career professionals feel trapped by golden handcuffs or organizational constraints. 
                GEM provides pathways to create the freedom to work on what matters most to you.
              </p>
              <p className="text-gray-600">
                It's about building options and the ability to choose your next chapter rather than having it chosen for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Career Moves Deep Dive */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Strategic Career Moves: Beyond the Ladder
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">When to Make a Move</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-gem-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>You've mastered your current role</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-gem-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Growth opportunities are limited</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-gem-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>You're not learning new skills</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-gem-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Compensation growth has stalled</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Types of Strategic Moves</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-gem-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Industry pivots to higher-growth sectors</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-gem-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Functional role transitions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-gem-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Geographic moves for opportunity</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-gem-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Startup or scale-up transitions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investments Deep Dive */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Investments: Building Wealth Beyond Salary
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                The Three Types of Investments
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Self-Investment</h4>
                  <p className="text-gray-600 text-sm">
                    Skills, education, and experiences that increase your earning potential and market value.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Financial Assets</h4>
                  <p className="text-gray-600 text-sm">
                    Stocks, bonds, real estate, and other assets that generate passive income and appreciate over time.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Business Assets</h4>
                  <p className="text-gray-600 text-sm">
                    Ownership stakes, intellectual property, and business interests that can scale beyond your time.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Investment Principles for Mid-Career Professionals
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-gem-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Start with self-investment for highest ROI</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-gem-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Diversify across asset classes and time horizons</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-gem-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Focus on assets that compound over time</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-gem-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Reinvest returns to accelerate wealth building</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Entrepreneurship Deep Dive */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Entrepreneurship: Creating Your Own Path
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Why Entrepreneurship?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-gem-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Unlimited income potential</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-gem-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Complete control over your work</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-gem-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Ability to scale beyond your time</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-gem-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Building something that outlives you</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Entrepreneurial Pathways</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-gem-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Side hustles and consulting</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-gem-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Product-based businesses</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-gem-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Service businesses</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-gem-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Investment and acquisition</span>
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
            GEM in Action: Real Stories
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              From Corporate Executive to Multi-Company Owner
            </h3>
            <p className="text-gray-600 mb-4">
              A senior executive I worked with was earning $200K+ but felt limited by corporate constraints. 
              Through applying GEM principles, they:
            </p>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li>• Made a strategic move to a high-growth startup for equity and learning</li>
              <li>• Started a consulting business on the side using their expertise</li>
              <li>• Invested in real estate and other entrepreneurs' businesses</li>
              <li>• Built a portfolio of income-generating assets</li>
            </ul>
            <p className="text-gray-600">
              Within three years, they had multiple income streams totaling over $500K annually and the freedom 
              to work on projects they were passionate about.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Earn Your Mastery?
          </h2>
          
          <div className="space-y-6">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              GEM is where your ZEN clarity and ACT momentum translate into tangible wealth, impact, and freedom. 
              Start building the strategic foundation for your next chapter today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/zag-matrix" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Back to ZAG Matrix Overview
              </Link>
              
              <Link 
                href="/zag-matrix/act" 
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Previous: ACT (Awaken Core Thrust)
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
