"use client"

import { Button } from "@/components/ui/button"
import { Award, Users, Zap } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background with Instagram design */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
      </div>

      {/* Main Hero Content - 2 Column Layout */}
      <div className="min-h-screen flex items-center justify-center px-4 pt-16 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column - Messaging & CTAs - Centered */}
          <div className="text-center">
            {/* Tagline - Reduced top margin */}
            <div
              className={`mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "0.3s" : "0s" }}
            >
              <h2 className="font-manrope text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                Awaken.
                <br />
                Align.
                <br />
                Achieve.
              </h2>
            </div>

            {/* Headline */}
            <div
              className={`mb-10 transition-all duration-1000 ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "0.5s" : "0s" }}
            >
                             <h1 className="font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                 Beyond Success...
                 <br />
                 <span className="text-primary-200">Find Your Next Chapter</span>
               </h1>
            </div>

            {/* Supporting Text - Shortened */}
            <div
              className={`mb-12 transition-all duration-1000 ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "0.6s" : "0s" }}
            >
              <p className="font-manrope text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                For successful tech leaders who know there's more to life than the next promotion or exit.
              </p>
            </div>

                         {/* Primary CTA */}
             <div
               className={`mb-10 flex justify-center transition-all duration-1000 ${
                 isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
               }`}
               style={{ transitionDelay: isVisible ? "0.7s" : "0s" }}
             >
               <Link href="/newsletter">
                 <Button
                   variant="outline"
                   size="lg"
                   className="group font-manrope border-2 border-white text-white font-bold hover:bg-white hover:text-primary-600 px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                 >
                   Start Your Next Chapter + Get AI Guide
                   <span className="ml-3 group-hover:translate-x-1 transition-transform duration-200 text-xl">→</span>
                 </Button>
               </Link>
             </div>

            {/* ZAG Matrix Introduction - Clearer with link */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "0.8s" : "0s" }}
            >
              <p className="font-manrope text-lg text-white/80 max-w-2xl mx-auto">
                Discover the <Link href="/zag-matrix" className="text-primary-200 hover:text-primary-100 underline transition-colors">ZAG Matrix framework</Link> for your transformation.
              </p>
            </div>
          </div>

          {/* Right Column - Personal Introduction & Social Proof */}
          <div className="text-center lg:text-left">
            {/* Professional Photo - Width matches social proof box */}
            <div
              className={`mb-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 transform translate-y-0 scale-100" : "opacity-0 transform translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: isVisible ? "0.4s" : "0s" }}
            >
              <div className="relative w-full max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/sheridan-headshot.jpg"
                  alt="Sheridan Richey - Executive Leadership Coach"
                  className="object-cover object-top w-full h-80 md:h-88"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    console.error('Image failed to load:', target.src);
                    target.style.display = 'none';
                  }}
                  onLoad={() => {
                    console.log('Image loaded successfully');
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>

            {/* Consolidated Proven Results Box with Icons */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "0.9s" : "0s" }}
            >
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 max-w-sm mx-auto lg:mx-0 border border-white/20">
                <h3 className="font-manrope text-xl font-bold text-white mb-4 text-center lg:text-left">Proven Results</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-primary-200 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-white/90">20+ years of executive leadership in the SaaS industry</p>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-primary-200 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-white/90">Launched dozens of careers to Director, VP, and CTO levels</p>
                  </div>
                  <div className="flex items-start">
                    <Zap className="w-5 h-5 text-primary-200 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-white/90">Integrates career mastery with personal growth and relationships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  )
} 