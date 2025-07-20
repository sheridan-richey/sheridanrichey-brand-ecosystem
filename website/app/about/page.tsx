import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Target, Users, TrendingUp, Award, Building, Lightbulb } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              About <span className="gradient-text">Sheridan Richey</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Executive leader, entrepreneur, and guide for awakened technologists seeking 
              purpose-driven transformation through the ZAG Matrix framework.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
                  My Journey
                </h2>
                <p className="mt-6 text-lg leading-8 text-secondary-600">
                  I've spent over two decades in executive leadership roles at companies like 
                  AdvancedMD, SirsiDynix, Extensiv, and Henry Schein One. I've led product 
                  development, managed M&A processes, built high-performing teams, and driven 
                  profitable growth.
                </p>
                <p className="mt-6 text-lg leading-8 text-secondary-600">
                  But like many successful professionals, I hit a point where achievement 
                  wasn't enough. I was successful by conventional standards, but something 
                  was missing. That's when I began developing the ZAG Matrix framework.
                </p>
                <p className="mt-6 text-lg leading-8 text-secondary-600">
                  Today, I help mid-career professionals who've achieved success but crave 
                  greater purpose. Through the ZAG Matrix, I guide them toward holistic 
                  transformation that integrates career growth with personal fulfillment.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">Key Achievements</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-secondary-900">Executive Leadership</h4>
                      <p className="text-secondary-600">Led teams of 100+ across multiple SaaS companies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Building className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-secondary-900">Product Development</h4>
                      <p className="text-secondary-600">Launched successful products serving millions of users</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-secondary-900">Growth & M&A</h4>
                      <p className="text-secondary-600">Managed acquisitions and drove profitable expansion</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-secondary-900">Entrepreneurship</h4>
                      <p className="text-secondary-600">Founded Bring It Forward Investments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZAG Matrix Deep Dive */}
      <section className="bg-secondary-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              The ZAG Matrix Framework
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              A comprehensive system for mid-career transformation that addresses the 
              three critical dimensions of sustainable success.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="card">
                <div className="flex items-center gap-x-3 mb-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary-600">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900">ZEN</h3>
                </div>
                <h4 className="text-lg font-medium text-secondary-900 mb-2">Zeal Evolves Now</h4>
                <p className="text-secondary-600 mb-4">
                  Find clarity, purpose, and mental resilience. Transform your mindset from 
                  reactive to proactive, building the foundation for sustainable growth.
                </p>
                <ul className="space-y-2 text-sm text-secondary-600">
                  <li>• Identify your core drivers and authentic motivation</li>
                  <li>• Develop mental resilience and clarity</li>
                  <li>• Create a purpose-driven vision for your future</li>
                  <li>• Build sustainable habits for long-term success</li>
                </ul>
                <Link href="/zag-matrix/zen" className="inline-block mt-4 text-primary-600 hover:text-primary-500 font-semibold">
                  Learn more →
                </Link>
              </div>
              
              <div className="card">
                <div className="flex items-center gap-x-3 mb-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-accent-600">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900">ACT</h3>
                </div>
                <h4 className="text-lg font-medium text-secondary-900 mb-2">Awaken Core Thrust</h4>
                <p className="text-secondary-600 mb-4">
                  Build physical well-being and strengthen key relationships to generate 
                  momentum. Create the energy and support system needed for breakthrough growth.
                </p>
                <ul className="space-y-2 text-sm text-secondary-600">
                  <li>• Optimize your physical health and energy levels</li>
                  <li>• Strengthen relationships that accelerate your growth</li>
                  <li>• Build momentum through consistent action</li>
                  <li>• Create a support system for sustainable success</li>
                </ul>
                <Link href="/zag-matrix/act" className="inline-block mt-4 text-primary-600 hover:text-primary-500 font-semibold">
                  Learn more →
                </Link>
              </div>
              
              <div className="card">
                <div className="flex items-center gap-x-3 mb-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-secondary-600">
                    <TrendingUp className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900">GEM</h3>
                </div>
                <h4 className="text-lg font-medium text-secondary-900 mb-2">Growth Earns Mastery</h4>
                <p className="text-secondary-600 mb-4">
                  Apply zeal and energy toward strategic career moves, investments, and 
                  entrepreneurial growth. Master the art of compounding success.
                </p>
                <ul className="space-y-2 text-sm text-secondary-600">
                  <li>• Make strategic career decisions that compound</li>
                  <li>• Build wealth through smart investments</li>
                  <li>• Develop entrepreneurial skills and mindset</li>
                  <li>• Create multiple streams of income and impact</li>
                </ul>
                <Link href="/zag-matrix/gem" className="inline-block mt-4 text-primary-600 hover:text-primary-500 font-semibold">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              My Mission
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              To help awakened technologists transform their careers and lives by providing 
              practical frameworks, real-world insights, and a supportive community.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/contact" className="btn-primary">
                Let's Work Together
              </Link>
              <Link href="/newsletter" className="btn-secondary">
                Join the Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 