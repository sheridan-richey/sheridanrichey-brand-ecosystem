import { Mail, MessageSquare, Calendar, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Ready to transform your career? I'm here to help you navigate your next chapter 
              with the ZAG Matrix framework.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
                  Get in Touch
                </h2>
                <p className="mt-6 text-lg leading-8 text-secondary-600">
                  Whether you're looking for executive coaching, speaking opportunities, 
                  or just want to learn more about the ZAG Matrix framework, I'd love to hear from you.
                </p>
                
                <div className="mt-10 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-600">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">Email</h3>
                      <p className="text-secondary-600">sheridan@sheridanrichey.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-accent-600">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">LinkedIn</h3>
                      <p className="text-secondary-600">linkedin.com/in/sheridanrichey</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-secondary-600">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">Speaking</h3>
                      <p className="text-secondary-600">Available for conferences and events</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-900">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="mt-2 block w-full rounded-md border border-secondary-300 px-3 py-2 text-secondary-900 placeholder-secondary-500 focus:border-primary-500 focus:outline-none focus:ring-primary-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-900">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="mt-2 block w-full rounded-md border border-secondary-300 px-3 py-2 text-secondary-900 placeholder-secondary-500 focus:border-primary-500 focus:outline-none focus:ring-primary-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary-900">
                      Subject
                    </label>
                    <select
                      name="subject"
                      id="subject"
                      className="mt-2 block w-full rounded-md border border-secondary-300 px-3 py-2 text-secondary-900 focus:border-primary-500 focus:outline-none focus:ring-primary-500"
                    >
                      <option>Select a topic</option>
                      <option>Executive Coaching</option>
                      <option>Speaking Engagement</option>
                      <option>ZAG Matrix Workshop</option>
                      <option>Partnership Opportunity</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-900">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="mt-2 block w-full rounded-md border border-secondary-300 px-3 py-2 text-secondary-900 placeholder-secondary-500 focus:border-primary-500 focus:outline-none focus:ring-primary-500"
                      placeholder="Tell me about your situation and how I can help..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Transformation?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Join our community of awakened technologists and get exclusive insights, 
              frameworks, and strategies delivered to your inbox.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/newsletter" className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-lg transition-colors">
                Join the Community
              </a>
              <a href="/blog" className="text-white hover:text-primary-100 font-semibold">
                Read the Blog →
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
} 