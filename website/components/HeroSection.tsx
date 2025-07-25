"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background with Instagram design */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600">
        {/* Background geometric elements would be added here via CSS or SVG */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
      </div>

      {/* Trust Indicator */}
      <div className="absolute top-0 left-0 right-0 z-20 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            <div
              className={`inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full transition-all duration-800 ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "0.2s" : "0s" }}
            >
              <span className="text-white font-manrope text-sm font-medium">20+ Years Executive Leadership</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Content - Single Column */}
      <div className="min-h-screen flex items-center justify-center px-4 pt-32 pb-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <div
            className={`mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "0.3s" : "0s" }}
          >
            <h2 className="font-manrope text-2xl md:text-3xl font-bold text-white mb-2">
              Awaken. Align. Achieve.
            </h2>
          </div>

          {/* Professional Photo */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0 scale-100" : "opacity-0 transform translate-y-8 scale-95"
            }`}
            style={{ transitionDelay: isVisible ? "0.4s" : "0s" }}
          >
            <div className="relative w-48 h-56 md:w-56 md:h-64 mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/sheridan-headshot.jpg"
                alt="Sheridan Richey - Executive Leadership Coach"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>

          {/* Headline */}
          <div
            className={`mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "0.5s" : "0s" }}
          >
            <h1 className="font-manrope text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight">
              From 'Meh' to Mastery:
              <br />
              <span className="text-primary-200">The ZAG Matrix Transformation</span>
            </h1>
          </div>

          {/* Subheadline */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "0.6s" : "0s" }}
          >
            <p className="font-manrope text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              The proven framework that transforms mid-career technologists into energized, purpose-driven leaders through balanced growth.
            </p>
          </div>

          {/* Three Pillars Introduction */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "0.7s" : "0s" }}
          >
            <p className="font-manrope text-lg text-white/80 max-w-2xl mx-auto">
              The ZAG Matrix: Three interconnected pillars (ZEN, ACT, GEM) that guide your transformation from clarity to momentum to mastery.
            </p>
          </div>

          {/* Social Proof */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "0.8s" : "0s" }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-2xl mx-auto">
              <p className="font-manrope text-lg text-white font-medium">
                6 acquisitions, 3 successful exits | 60-point NPS improvements | Launched dozens of careers to Director, VP, and CTO levels
              </p>
            </div>
          </div>

          {/* Mentorship Focus */}
          <div
            className={`mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "0.9s" : "0s" }}
          >
            <p className="font-manrope text-lg text-white/90 max-w-2xl mx-auto">
              From executive leadership to career mentorship - helping technologists find their path to energized, purpose-driven success.
            </p>
          </div>

          {/* Balanced Growth Emphasis */}
          <div
            className={`mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "1.0s" : "0s" }}
          >
            <p className="font-manrope text-lg text-white/90 max-w-2xl mx-auto">
              Because life isn't all about work. The ZAG Matrix integrates career mastery with personal growth, relationships, and holistic well-being.
            </p>
          </div>

          {/* AI Integration */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "1.1s" : "0s" }}
          >
            <p className="font-manrope text-lg text-white/90 max-w-2xl mx-auto">
              Plus, learn how to leverage AI to accelerate your transformation and amplify your impact.
            </p>
          </div>

          {/* Value Proposition */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "1.2s" : "0s" }}
          >
            <p className="font-manrope text-xl text-white font-semibold max-w-2xl mx-auto">
              Join me in building the next generation of energized technologists using the ZAG Matrix framework.
            </p>
          </div>

          {/* Enhanced CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "1.3s" : "0s" }}
          >
            <Button
              size="lg"
              className="group font-manrope bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              Join Community + Get AI Prompt Engineer Guide
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="font-manrope border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 bg-transparent hover:shadow-lg"
            >
              Learn About ZAG Matrix
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="font-manrope border-2 border-white/50 text-white/90 hover:bg-white/10 px-6 py-4 text-base rounded-xl transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              Download Framework Overview
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 