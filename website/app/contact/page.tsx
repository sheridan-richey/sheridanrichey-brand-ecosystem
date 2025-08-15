import ContactForm from '@/components/ContactForm'
import { Calendar, Mail, MessageSquare } from 'lucide-react'

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
                  <a 
                    href="mailto:sheridan@sheridanrichey.com" 
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                  >
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-500 group-hover:bg-primary-600 transition-colors">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-phantom font-manrope group-hover:text-primary-500 transition-colors">Email</h3>
                      <p className="text-graphite font-manrope group-hover:text-primary-500 transition-colors">
                        sheridan@sheridanrichey.com
                      </p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/sheridanrichey" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                  >
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-500 group-hover:bg-primary-600 transition-colors">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-phantom font-manrope group-hover:text-primary-500 transition-colors">LinkedIn</h3>
                      <p className="text-graphite font-manrope group-hover:text-primary-500 transition-colors">
                        linkedin.com/in/sheridanrichey
                      </p>
                    </div>
                  </a>
                  
                  <a 
                    href="/speaking" 
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                  >
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-500 group-hover:bg-primary-600 transition-colors">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-phantom font-manrope group-hover:text-primary-500 transition-colors">Speaking</h3>
                      <p className="text-graphite font-manrope group-hover:text-primary-500 transition-colors">Available for conferences and events</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <ContactForm />
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
                Join the Newsletter
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