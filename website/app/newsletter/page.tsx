'use client'

import ZagMatrixSidebar from '@/components/ZagMatrixSidebar'
import { ArrowRight, CheckCircle, Target, Users, Zap } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function NewsletterPage() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    role: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage(result.message)
        setFormData({ email: '', name: '', role: '' })
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.error || 'Failed to subscribe')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-bg to-white">
      {/* Header */}
      <div className="bg-white border-b border-smoke">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img 
                  src="./sheridan-blog.jpg" 
                  alt="Sheridan Richey" 
                  className="rounded-full shadow-lg w-24 h-24 object-cover object-top border-4 border-white" 
                />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-smoke">
                  <img
                    src="/assets/Emblem/SVG/Asset 4.svg"
                    alt="SR"
                    className="w-4 h-4"
                  />
                </div>
              </div>
            </div>
            <h1 className="font-manrope text-4xl md:text-5xl font-bold text-phantom mb-4">
              Join the ZAG Community
            </h1>
            <p className="font-manrope text-xl text-graphite">
              Connect with awakened technologists on their transformation journey. 
              Get weekly insights, strategies, and stories delivered to your inbox.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Benefits & Features */}
          <div>
            <h2 className="font-manrope text-3xl font-bold text-phantom mb-6">
              What You'll Get
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-manrope text-xl font-bold text-phantom mb-2">
                    Weekly ZAG Insights
                  </h3>
                  <p className="font-manrope text-graphite">
                    Practical strategies for integrating clarity, momentum, and mastery into your career. 
                    Real stories from technologists who've transformed their professional lives.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-manrope text-xl font-bold text-phantom mb-2">
                    Exclusive Resources
                  </h3>
                  <p className="font-manrope text-graphite">
                    Access to frameworks, templates, and tools that help you apply the ZAG Matrix 
                    to your specific situation. Plus early access to new content and courses.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-manrope text-xl font-bold text-phantom mb-2">
                    Community Connection
                  </h3>
                  <p className="font-manrope text-graphite">
                    Connect with like-minded professionals who understand the challenges of mid-career 
                    transformation. Share experiences and learn from others on similar journeys.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 p-6 bg-cloud rounded-xl">
              <h3 className="font-manrope text-lg font-bold text-phantom mb-4">
                What Our Community Says
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-500 mt-0.5" />
                  <p className="font-manrope text-graphite">
                    "The ZAG framework helped me find clarity in my career direction and build the momentum 
                    I needed to make meaningful changes."
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-500 mt-0.5" />
                  <p className="font-manrope text-graphite">
                    "Sheridan's insights are practical and actionable. I've implemented several strategies 
                    that have already made a difference in my professional life."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Signup Form */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-xl border border-smoke p-8">
              <h3 className="font-manrope text-2xl font-bold text-phantom mb-2">
                Start Your ZAG Journey
              </h3>
              <p className="font-manrope text-graphite mb-6">
                Join 500+ awakened technologists transforming their careers.
              </p>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <p className="font-manrope text-green-800">{submitMessage}</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="font-manrope text-red-800">{submitMessage}</p>
                </div>
              )}

              {/* Newsletter Signup Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block font-manrope text-sm font-medium text-phantom mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-smoke rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-manrope"
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block font-manrope text-sm font-medium text-phantom mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-smoke rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-manrope"
                    placeholder="Your first name"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block font-manrope text-sm font-medium text-phantom mb-2">
                    Current Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-smoke rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-manrope"
                    disabled={isSubmitting}
                  >
                    <option value="">Select your role</option>
                    <option value="software-engineer">Software Engineer</option>
                    <option value="product-manager">Product Manager</option>
                    <option value="engineering-manager">Engineering Manager</option>
                    <option value="executive">Executive/C-Level</option>
                    <option value="consultant">Consultant</option>
                    <option value="entrepreneur">Entrepreneur</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-manrope bg-primary-500 hover:bg-primary-600 disabled:bg-graphite text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Joining...' : 'Join the Community'}
                  {!isSubmitting && <ArrowRight className="inline ml-2 h-4 w-4" />}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="font-manrope text-xs text-graphite">
                  Powered by Beehiiv • No spam, unsubscribe anytime
                </p>
              </div>
            </div>

            {/* ZAG Matrix Preview */}
            <div className="mt-8">
              <ZagMatrixSidebar />
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-br from-primary-500/5 to-light-teal/5 border-t border-smoke">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h2 className="font-manrope text-3xl font-bold text-phantom mb-4">
              Ready to Transform Your Career?
            </h2>
            <p className="font-manrope text-xl text-graphite mb-8 max-w-2xl mx-auto">
              Join hundreds of technologists who've already started their ZAG journey. 
              Your transformation begins with one click.
            </p>
            <Link 
              href="#top"
              className="inline-flex items-center font-manrope bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg transition-colors duration-200 font-medium text-lg"
            >
              Join the Community Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 