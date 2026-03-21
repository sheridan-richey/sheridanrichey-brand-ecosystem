'use client'

import { Download, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const TOOLKIT_PDF_PATH = '/downloads/prompt-architects-toolkit.pdf'

export default function PromptArchitectsToolkitPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name: '',
          role: '',
          ctaSource: 'lead_magnet_toolkit',
        }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setMessage(data.message || 'You’re in! Use the link below to download.')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-bg to-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link href="/resources" className="font-manrope text-primary-500 hover:text-primary-600 text-sm mb-8 inline-block">
          ← Back to Resources
        </Link>
        <div className="bg-white rounded-2xl shadow-sm border border-smoke p-8 md:p-12">
          <h1 className="font-manrope text-3xl md:text-4xl font-bold text-phantom mb-4">
            The Prompt Architect&apos;s Toolkit
          </h1>
          <p className="font-manrope text-graphite mb-6">
            Master the art of AI prompt engineering. This toolkit includes templates, frameworks, and strategies for getting the best results from AI tools like ChatGPT, Claude, and more.
          </p>

          {status === 'success' ? (
            <div className="rounded-lg bg-primary-500/10 border border-primary-500/20 p-6">
              <div className="flex items-center gap-2 text-primary-600 font-manrope font-medium mb-4">
                <CheckCircle className="h-5 w-5" />
                {message}
              </div>
              <a
                href={TOOLKIT_PDF_PATH}
                download
                className="inline-flex items-center font-manrope bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Download className="mr-2 h-5 w-5" />
                Download the Toolkit (PDF)
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="font-manrope text-phantom text-sm font-medium">
                Enter your email to unlock the free download and join The ZAG Navigator for weekly insights.
              </p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 border border-smoke rounded-lg font-manrope focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                disabled={status === 'loading'}
              />
              {message && status === 'error' && (
                <p className="font-manrope text-sm text-red-600">{message}</p>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full font-manrope bg-primary-500 hover:bg-primary-600 disabled:bg-graphite text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe & Download Free'}
              </button>
            </form>
          )}

          <p className="font-manrope text-xs text-graphite mt-6">
            By subscribing you’ll receive The ZAG Navigator newsletter. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  )
}
