import { ArrowRight, Key, MessageCircle, Shield, Users } from 'lucide-react'
import Link from 'next/link'

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cloud to-smoke">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-arsenic sm:text-6xl">
              The ZAG Collective
            </h1>
            <p className="mt-6 text-lg leading-8 text-phantom">
              A private, invite-only Slack community for awakened technologists who are actively applying the ZAG Matrix to transform their careers and lives.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/newsletter"
                className="group bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
              >
                Join Newsletter First
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          
          {/* What Makes This Community Special */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-arsenic sm:text-4xl mb-8 text-center">
              What Makes The ZAG Collective Special
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-steel/10">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-500/10 rounded-lg mb-4">
                  <Shield className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-arsenic mb-2">Private & Curated</h3>
                <p className="text-phantom">
                  Invite-only access ensures every member is committed to growth and actively applying ZAG principles in their lives.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-steel/10">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-500/10 rounded-lg mb-4">
                  <MessageCircle className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-arsenic mb-2">Real-Time Support</h3>
                <p className="text-phantom">
                  Get instant feedback, ask questions, and share breakthroughs with others who understand your journey.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-steel/10">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-500/10 rounded-lg mb-4">
                  <Users className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-arsenic mb-2">Peer Learning</h3>
                <p className="text-phantom">
                  Learn from others' experiences, share your own insights, and build meaningful professional relationships.
                </p>
              </div>
            </div>
          </div>

          {/* Community vs Newsletter */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-steel/10 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-arsenic sm:text-4xl mb-8">
              Newsletter vs. Community: How They Work Together
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-arsenic flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary-500" />
                  The ZAG Navigator Newsletter
                </h3>
                <ul className="space-y-2 text-phantom">
                  <li>• Weekly curated insights and strategies</li>
                  <li>• Polished, high-value content</li>
                  <li>• One-way knowledge sharing</li>
                  <li>• Perfect for learning and reflection</li>
                  <li>• Access to exclusive resources</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-arsenic flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary-500" />
                  The ZAG Collective Community
                </h3>
                <ul className="space-y-2 text-phantom">
                  <li>• Real-time peer support and discussion</li>
                  <li>• Interactive learning and feedback</li>
                  <li>• Two-way knowledge sharing</li>
                  <li>• Perfect for implementation and support</li>
                  <li>• Access to like-minded professionals</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to Join */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white mb-16">
            <h2 className="text-3xl font-bold mb-6">
              How to Join The ZAG Collective
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Subscribe to Newsletter</h3>
                <p className="text-white/90 text-sm">
                  Start with the newsletter to understand the ZAG Matrix framework and see if it resonates with you.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Apply the Principles</h3>
                <p className="text-white/90 text-sm">
                  Use the newsletter insights to start implementing ZAG principles in your career and life.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Request Community Access</h3>
                <p className="text-white/90 text-sm">
                  Once you're actively applying the framework, reach out to request an invitation to the Slack community.
                </p>
              </div>
            </div>
          </div>

          {/* Community Access Code Section */}
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 text-white mb-16">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Key className="h-6 w-6 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Community Access Code
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Use this code when requesting community access to show you've read this page and understand the process.
              </p>
              <div className="bg-white/20 rounded-lg p-4 mb-6 inline-block">
                <code className="text-2xl font-mono font-bold text-white tracking-wider">
                  ZAG2025
                </code>
              </div>
              <p className="text-sm opacity-75">
                Include this code in your contact form message when requesting community access.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Begin with the newsletter to learn the framework, then join the community when you're ready to connect with peers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/newsletter"
                className="group bg-white text-teal-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
              >
                Subscribe to Newsletter
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact?source=community&code=ZAG2025"
                className="group border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
              >
                Request Community Access
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 