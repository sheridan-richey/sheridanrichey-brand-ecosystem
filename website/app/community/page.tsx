import { ArrowRight, Check, Key, MessageCircle, Shield, Users } from 'lucide-react'
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

          {/* Prerequisites Check */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-steel/10 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-arsenic sm:text-4xl mb-8 text-center">
              Prerequisites for Community Access
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-4 w-4 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-arsenic mb-2">Newsletter Subscription</h3>
                  <p className="text-phantom">You're actively receiving and engaging with The ZAG Navigator newsletter.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-4 w-4 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-arsenic mb-2">Active Application</h3>
                  <p className="text-phantom">You're implementing ZAG Matrix principles in your career and life.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Community Access & CTA - Combined Section */}
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-12 text-white text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <Key className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join The ZAG Collective?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              If you've been applying the ZAG Matrix framework and are ready to connect with peers, use this access code to request an invitation.
            </p>
            
            {/* Access Code Display */}
            <div className="bg-white/20 rounded-lg p-6 mb-8 inline-block">
              <p className="text-sm opacity-75 mb-2">Community Access Code</p>
              <code className="text-3xl font-mono font-bold text-white tracking-wider">
                ZAG2025
              </code>
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center">
              <Link
                href="/contact?source=community&code=ZAG2025"
                className="group bg-white text-teal-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
              >
                Request Community Access
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <p className="text-sm opacity-75 mt-4">
              Include this code in your contact form to show you've read this page and understand the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 