import { Mail, MessageSquare, Calendar, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-light-bg via-white to-light-teal/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-phantom sm:text-6xl font-manrope">
              Let's <span className="text-primary-500">Connect</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-graphite font-manrope">
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
                <div className="flex justify-center mb-8">
                  <img src="/sheridan-contact.jpg" alt="Sheridan Richey" className="rounded-2xl shadow-xl w-64 h-80 object-cover object-top" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-phantom sm:text-4xl font-manrope">
                  Get in Touch
                </h2>
                <p className="mt-6 text-lg leading-8 text-graphite font-manrope">
                  Whether you're looking for executive coaching, speaking opportunities, 
                  or just want to learn more about the ZAG Matrix framework, I'd love to hear from you.
                </p>
                
                <div className="mt-10 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-500">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-phantom font-manrope">Email</h3>
                      <p className="text-graphite font-manrope">sheridan@sheridanrichey.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-500">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-phantom font-manrope">LinkedIn</h3>
                      <p className="text-graphite font-manrope">linkedin.com/in/sheridanrichey</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-500">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-phantom font-manrope">Speaking</h3>
                      <p className="text-graphite font-manrope">Available for conferences and events</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl border border-smoke p-8">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-phantom font-manrope">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="mt-2 block w-full rounded-md border border-smoke px-3 py-2 text-phantom placeholder-graphite focus:border-primary-500 focus:outline-none focus:ring-primary-500 font-manrope"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-phantom font-manrope">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="mt-2 block w-full rounded-md border border-smoke px-3 py-2 text-phantom placeholder-graphite focus:border-primary-500 focus:outline-none focus:ring-primary-500 font-manrope"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-phantom font-manrope">
                      Subject
                    </label>
                    <select
                      name="subject"
                      id="subject"
                      className="mt-2 block w-full rounded-md border border-smoke px-3 py-2 text-phantom focus:border-primary-500 focus:outline-none focus:ring-primary-500 font-manrope"
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
                    <label htmlFor="message" className="block text-sm font-medium text-phantom font-manrope">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="mt-2 block w-full rounded-md border border-smoke px-3 py-2 text-phantom placeholder-graphite focus:border-primary-500 focus:outline-none focus:ring-primary-500 font-manrope"
                      placeholder="Tell me about your situation and how I can help..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary font-manrope"
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
      <section className="bg-primary-500">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-manrope">
              Ready to Start Your Transformation?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90 font-manrope">
              Join our community of awakened technologists and get exclusive insights, 
              frameworks, and strategies delivered to your inbox.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/newsletter" className="bg-white text-primary-500 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors font-manrope">
                Join the Community
              </a>
              <a href="/blog" className="text-white hover:text-white/80 font-semibold font-manrope">
                Read the Blog →
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
} 