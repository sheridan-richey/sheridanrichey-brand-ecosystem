'use client'

import { useState } from 'react'
import { Button } from './ui/button'

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'hero'
  title?: string
  description?: string
  showName?: boolean
  showRole?: boolean
  className?: string
  onSuccess?: () => void
}

export default function NewsletterSignup({
  variant = 'default',
  title = 'Join The ZAG Navigator',
  description = 'Weekly insights for awakened technologists. Get strategies for clarity, momentum, and mastery.',
  showName = true,
  showRole = true,
  className = '',
  onSuccess
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name: showName ? name : undefined,
          role: showRole ? role : undefined,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        setMessage(data.message || 'Successfully subscribed!')
        setEmail('')
        setName('')
        setRole('')
        onSuccess?.()
      } else {
        setIsSuccess(false)
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setIsSuccess(false)
      setMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const getVariantStyles = () => {
    switch (variant) {
      case 'compact':
        return 'max-w-md mx-auto'
      case 'hero':
        return 'max-w-2xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200'
      default:
        return 'max-w-lg mx-auto'
    }
  }

  const getTitleStyles = () => {
    switch (variant) {
      case 'hero':
        return 'text-3xl font-bold text-gray-900 mb-4'
      case 'compact':
        return 'text-xl font-semibold text-gray-900 mb-2'
      default:
        return 'text-2xl font-bold text-gray-900 mb-3'
    }
  }

  const getDescriptionStyles = () => {
    switch (variant) {
      case 'hero':
        return 'text-lg text-gray-600 mb-6'
      case 'compact':
        return 'text-sm text-gray-600 mb-4'
      default:
        return 'text-base text-gray-600 mb-6'
    }
  }

  if (isSuccess) {
    return (
      <div className={`${getVariantStyles()} ${className}`}>
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Welcome to The ZAG Navigator!</h3>
          <p className="text-gray-600 mb-4">
            You're now part of our community of awakened technologists. Check your email for your first resource.
          </p>
          <Button
            onClick={() => {
              setIsSuccess(false)
              setMessage('')
            }}
            variant="outline"
            className="mt-2"
          >
            Subscribe Another Email
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className={`${getVariantStyles()} ${className}`}>
      <div className="text-center mb-6">
        <h3 className={getTitleStyles()}>{title}</h3>
        <p className={getDescriptionStyles()}>{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          {showName && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your first name"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>

          {showRole && (
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Current Role
              </label>
              <input
                type="text"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Software Engineer, Product Manager"
              />
            </div>
          )}
        </div>

        {message && (
          <div className={`p-3 rounded-lg text-sm ${
            isSuccess 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {message}
          </div>
        )}

        <Button
          type="submit"
          disabled={isLoading || !email}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Subscribing...
            </div>
          ) : (
            'Join The ZAG Navigator'
          )}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          Get weekly insights on career transformation, leadership, and the ZAG Matrix framework. 
          Unsubscribe at any time.
        </p>
      </form>

      {variant === 'hero' && (
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-3">🎁 Free Resource: AI Prompt Engineer's Guide</p>
          <p className="text-xs text-gray-500">
            New subscribers get instant access to my comprehensive guide on using AI for career transformation
          </p>
        </div>
      )}
    </div>
  )
} 