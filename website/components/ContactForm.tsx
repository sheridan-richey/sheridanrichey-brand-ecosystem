'use client'

import { useState } from 'react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.subject || formData.subject === 'Select a topic') {
      newErrors.subject = 'Please select a topic'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // For now, we'll simulate a successful submission
      // In production, this would send to your email service or API
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
      
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-smoke p-8">
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">
            Thank you! Your message has been sent successfully. I'll get back to you soon.
          </p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">
            Sorry, there was an error sending your message. Please try again or email me directly at sheridan@sheridanrichey.com
          </p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-phantom font-manrope">
            Name *
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`mt-2 block w-full rounded-md border px-3 py-2 text-phantom placeholder-graphite focus:outline-none focus:ring-primary-500 font-manrope ${
              errors.name ? 'border-red-300 focus:border-red-500' : 'border-smoke focus:border-primary-500'
            }`}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-phantom font-manrope">
            Email *
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`mt-2 block w-full rounded-md border px-3 py-2 text-phantom placeholder-graphite focus:outline-none focus:ring-primary-500 font-manrope ${
              errors.email ? 'border-red-300 focus:border-red-500' : 'border-smoke focus:border-primary-500'
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-phantom font-manrope">
            Subject *
          </label>
          <select
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className={`mt-2 block w-full rounded-md border px-3 py-2 text-phantom focus:outline-none focus:ring-primary-500 font-manrope ${
              errors.subject ? 'border-red-300 focus:border-red-500' : 'border-smoke focus:border-primary-500'
            }`}
          >
            <option value="">Select a topic</option>
            <option value="Executive Coaching">Executive Coaching</option>
            <option value="Speaking Engagement">Speaking Engagement</option>
            <option value="ZAG Matrix Workshop">ZAG Matrix Workshop</option>
            <option value="Partnership Opportunity">Partnership Opportunity</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-phantom font-manrope">
            Message *
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className={`mt-2 block w-full rounded-md border px-3 py-2 text-phantom placeholder-graphite focus:outline-none focus:ring-primary-500 font-manrope ${
              errors.message ? 'border-red-300 focus:border-red-500' : 'border-smoke focus:border-primary-500'
            }`}
            placeholder="Tell me about your situation and how I can help..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary font-manrope disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
} 