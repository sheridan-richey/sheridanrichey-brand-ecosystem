import ZagMatrixOverview from '@/components/ZagMatrixOverview'
import { Award, Building, Lightbulb, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      
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
                         <div className="flex justify-center mt-8">
               <img src="/sheridan-about.jpg" alt="Sheridan Richey" className="rounded-2xl shadow-xl w-64 h-80 object-cover object-top" />
             </div>
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
      <ZagMatrixOverview className="bg-secondary-50" />

      {/* Contributors Section */}
      <section className="py-24 sm:py-32 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Meet the talented strategists, architects, and storytellers dedicated to helping 
              you navigate your journey of transformation.
            </p>
            <div className="mt-10">
              <Link href="/contributors" className="btn-primary">
                Meet Our Contributors
              </Link>
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

    </div>
  )
} 