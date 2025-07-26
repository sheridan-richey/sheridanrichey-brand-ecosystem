import Link from 'next/link'
import { ArrowRight, Users, MessageCircle, Zap, Shield } from 'lucide-react'

export default function ZagCollectivePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cloud to-smoke">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-teal-500 mr-2" />
              <span className="text-sm font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                Private Community
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-arsenic sm:text-6xl">
              The ZAG Collective
            </h1>
            <p className="mt-6 text-lg leading-8 text-phantom">
              A private Slack workspace where Awakened Technologists come together to apply the ZAG Matrix framework in real-time.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="mailto:sheridan@sheridanrichey.com?subject=ZAG Collective Invitation Request&body=Hi Sheridan,%0D%0A%0D%0AI'd like to request an invitation to The ZAG Collective.%0D%0A%0D%0APlease let me know if you have any questions about my background or how I plan to contribute to the community.%0D%0A%0D%0ABest regards,"
                className="group bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
              >
                Request Invitation
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          
          {/* What Makes This Different */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-arsenic sm:text-4xl mb-8">
              The Workshop vs. The Stage
            </h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-steel/10">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-8 w-8 text-teal-500 mr-3" />
                  <h3 className="text-xl font-semibold text-arsenic">The ZAG Navigator (Newsletter)</h3>
                </div>
                <p className="text-phantom mb-4">
                  <strong>The Stage</strong> - Where I share polished insights and strategies with a broad audience.
                </p>
                <ul className="text-phantom space-y-2">
                  <li>• One-to-many content delivery</li>
                  <li>• Polished, high-value insights</li>
                  <li>• Weekly structured content</li>
                  <li>• Public platform</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border border-steal-10 bg-gradient-to-br from-teal-50 to-teal-100">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-teal-600 mr-3" />
                  <h3 className="text-xl font-semibold text-arsenic">The ZAG Collective (Slack)</h3>
                </div>
                <p className="text-phantom mb-4">
                  <strong>The Workshop</strong> - Where members actively participate and apply the framework together.
                </p>
                <ul className="text-phantom space-y-2">
                  <li>• Many-to-many real-time discussion</li>
                  <li>• Peer-to-peer support and insights</li>
                  <li>• Direct access to collaborators</li>
                  <li>• Private, invitation-only</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Community Structure */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-steel/10 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-arsenic sm:text-4xl mb-8">
              Community Structure
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="border-l-4 border-zen-gradient pl-4">
                <h3 className="font-semibold text-arsenic mb-2">#zen-awaken</h3>
                <p className="text-phantom text-sm">
                  Discussions on finding clarity and awakening to a new path. Share breakthroughs, ask questions, and support others in their mental clarity journey.
                </p>
              </div>
              
              <div className="border-l-4 border-act-gradient pl-4">
                <h3 className="font-semibold text-arsenic mb-2">#act-align</h3>
                <p className="text-phantom text-sm">
                  Building momentum and aligning your life. Physical well-being, relationship building, and creating sustainable momentum in your career and life.
                </p>
              </div>
              
              <div className="border-l-4 border-gem-gradient pl-4">
                <h3 className="font-semibold text-arsenic mb-2">#gem-achieve</h3>
                <p className="text-phantom text-sm">
                  Strategic growth and achieving your goals. Career moves, investments, entrepreneurial ventures, and long-term strategic planning.
                </p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-arsenic mb-2">#wins-and-learnings</h3>
                <p className="text-phantom text-sm">
                  Celebrate successes and share lessons learned. This is where we build each other up and learn from real-world applications of the ZAG Matrix.
                </p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-arsenic mb-2">#introductions</h3>
                <p className="text-phantom text-sm">
                  Get to know your fellow Awakened Technologists. Share your background, current challenges, and what you hope to achieve through the community.
                </p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-arsenic mb-2">#ask-sheridan</h3>
                <p className="text-phantom text-sm">
                  Direct access to ask questions and get insights from my executive experience and ZAG Matrix expertise.
                </p>
              </div>
            </div>
          </div>

          {/* Who Should Join */}
          <div className="bg-gradient-to-r from-arsenic to-phantom rounded-2xl p-8 text-white mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Who Should Join The ZAG Collective?
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold mb-4">You're Ready If You:</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>• Have achieved success but feel a pull toward greater purpose</li>
                  <li>• Want to apply the ZAG Matrix framework in your life</li>
                  <li>• Are willing to actively participate and contribute</li>
                  <li>• Value peer-to-peer learning and support</li>
                  <li>• Are committed to personal and professional growth</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">What You'll Get:</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>• Real-time discussion with like-minded professionals</li>
                  <li>• Direct access to my insights and experience</li>
                  <li>• Accountability and support for your goals</li>
                  <li>• Early access to new ideas and strategies</li>
                  <li>• A network of Awakened Technologists</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-arsenic mb-4">
              Ready to Join The Workshop?
            </h2>
            <p className="text-xl text-phantom mb-8">
              The ZAG Collective is invitation-only to maintain quality and intimacy. 
              If you're ready to move from reading about the framework to living it with others, 
              let's start a conversation.
            </p>
            <a
              href="mailto:sheridan@sheridanrichey.com?subject=ZAG Collective Invitation Request&body=Hi Sheridan,%0D%0A%0D%0AI'd like to request an invitation to The ZAG Collective.%0D%0A%0D%0APlease let me know if you have any questions about my background or how I plan to contribute to the community.%0D%0A%0D%0ABest regards,"
              className="group bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
            >
              Request Your Invitation
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 