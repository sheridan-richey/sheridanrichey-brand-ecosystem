import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ACT - Awaken Core Thrust | ZAG Matrix Framework | Sheridan Richey',
  description: 'Discover how ACT (Awaken Core Thrust) builds physical well-being, strengthens relationships, and generates momentum for your transformation journey.',
  keywords: 'ACT, Awaken Core Thrust, physical well-being, relationships, momentum, ZAG Matrix, mid-career transformation',
}

export default function ActPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
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
              ACT
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-primary-600 mb-4">
              Awaken Core Thrust
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The energy and momentum engine that transforms your mental clarity into tangible action and results.
            </p>
          </div>
          
          {/* ACT Pillar Icon */}
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-zag-act-base to-zag-act-dark rounded-full flex items-center justify-center">
            <span className="text-3xl text-white font-bold">A</span>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            The Three Pillars of ACT
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Physical Well-being */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-zag-act-light rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-zag-act-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Physical Well-being</h3>
              <p className="text-gray-600">
                Build the physical foundation that sustains your energy and focus. Your body is your vehicle for achievement.
              </p>
            </div>

            {/* Relationships */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-zag-act-light rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-zag-act-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Relationships</h3>
              <p className="text-gray-600">
                Strengthen the key relationships that support your growth. Success is never a solo journey.
              </p>
            </div>

            {/* Momentum */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-zag-act-light rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-zag-act-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Momentum</h3>
              <p className="text-gray-600">
                Create and maintain forward motion. Small consistent actions compound into massive results over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why ACT Matters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why ACT Matters for Mid-Career Professionals
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                The Energy Crisis
              </h3>
              <p className="text-gray-600 mb-4">
                Mid-career professionals often hit a wall where their mental clarity (ZEN) exists but they lack the physical 
                energy and momentum to act on it. They're stuck in a cycle of thinking without doing.
              </p>
              <p className="text-gray-600">
                ACT bridges this gap by building the physical foundation and momentum needed to turn insights into action.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                The Relationship Gap
              </h3>
              <p className="text-gray-600 mb-4">
                Success can isolate you. As you climb the ladder, maintaining authentic relationships becomes harder but more 
                important. ACT helps you build and nurture the connections that accelerate your growth.
              </p>
              <p className="text-gray-600">
                It's about creating a support network that believes in your vision and helps you achieve it.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                The Momentum Challenge
              </h3>
              <p className="text-gray-600 mb-4">
                Mid-career transitions require sustained effort over time. ACT helps you build the momentum that makes 
                progress feel effortless and sustainable, rather than like pushing a boulder uphill.
              </p>
              <p className="text-gray-600">
                It's about creating systems and habits that generate forward motion automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Physical Well-being Deep Dive */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Physical Well-being: Your Foundation for Success
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Energy Management</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-act-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Optimize sleep quality and consistency</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-act-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Fuel your body with nutrient-dense foods</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-act-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Move your body daily for energy and focus</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-act-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Manage stress through recovery practices</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Performance Optimization</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-act-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Identify your peak performance windows</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-act-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Build sustainable exercise routines</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-act-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Optimize your work environment</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-act-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Create recovery and renewal rituals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Relationships Deep Dive */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Relationships: Your Success Multiplier
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                The Three Types of Relationships You Need
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mentors</h4>
                  <p className="text-gray-600 text-sm">
                    People who've walked the path ahead of you and can guide your journey.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Peers</h4>
                  <p className="text-gray-600 text-sm">
                    Colleagues and friends who understand your challenges and celebrate your wins.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Supporters</h4>
                  <p className="text-gray-600 text-sm">
                    Family and friends who believe in your vision and provide emotional support.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Building Authentic Connections
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-act-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Show genuine interest in others' goals and challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-act-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Offer value before asking for help</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-act-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Maintain regular contact and follow through on commitments</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-act-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Be vulnerable and share your own challenges</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Momentum Deep Dive */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Momentum: The Compound Effect of Small Actions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Building Momentum</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-act-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Start with tiny, achievable actions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-act-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Create daily and weekly rituals</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-act-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Track progress to see compounding effects</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-act-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Celebrate small wins to maintain motivation</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Sustaining Momentum</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-act-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Design systems that work without willpower</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-act-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Build in recovery and renewal periods</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-act-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Adjust your approach based on results</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zag-act-base rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Connect daily actions to long-term vision</span>
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
            ACT in Action: Real Stories
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              From Stuck to Unstoppable: The Executive Transformation
            </h3>
            <p className="text-gray-600 mb-4">
              A VP of Product I coached was experiencing classic mid-career paralysis. They had clarity about their goals 
              but couldn't seem to make progress. Through ACT principles, they:
            </p>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li>• Implemented a morning routine that increased their daily energy by 40%</li>
              <li>• Built a network of 5 key mentors who accelerated their learning curve</li>
              <li>• Created a 90-day momentum plan that led to a major promotion</li>
              <li>• Developed the physical stamina to handle increased responsibilities</li>
            </ul>
            <p className="text-gray-600">
              Within a year, they were leading a team of 50+ people and had become the go-to person for strategic initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Activate Your Core Thrust?
          </h2>
          
          <div className="space-y-6">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ACT transforms your mental clarity into tangible results. Build the physical foundation, strengthen your 
              relationships, and create unstoppable momentum for your transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/zag-matrix/gem" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Next: GEM (Growth Earns Mastery)
              </Link>
              
              <Link 
                href="/zag-matrix/zen" 
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Previous: ZEN (Zeal Evolves Now)
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
