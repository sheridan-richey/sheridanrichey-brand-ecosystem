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

      {/* SVG/CSS Background Elements */}
      {/* Large white arc, top left */}
      <svg className="absolute -top-32 -left-32 w-96 h-96 opacity-30 pointer-events-none" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M400,200a200,200 0 1,0 -200,200" stroke="white" strokeWidth="32" fill="none" />
      </svg>
      {/* Concentric arcs, bottom right */}
      <svg className="absolute bottom-0 right-0 w-80 h-80 opacity-30 pointer-events-none" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="160" cy="160" r="120" stroke="white" strokeWidth="2" fill="none" />
        <circle cx="160" cy="160" r="90" stroke="white" strokeWidth="2" fill="none" />
        <circle cx="160" cy="160" r="60" stroke="white" strokeWidth="2" fill="none" />
        <circle cx="160" cy="160" r="30" stroke="white" strokeWidth="2" fill="none" />
      </svg>
      {/* Dot grid, top right */}
      <svg className="absolute top-8 right-8 w-32 h-32 opacity-20 pointer-events-none" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: 5 }).map((_, row) => (
          Array.from({ length: 5 }).map((_, col) => (
            <circle key={`dot-tr-${row}-${col}`} cx={8 + col * 12} cy={8 + row * 12} r="2.5" fill="white" />
          ))
        ))}
      </svg>
      {/* Dot grid, bottom left */}
      <svg className="absolute bottom-8 left-8 w-32 h-32 opacity-20 pointer-events-none" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: 5 }).map((_, row) => (
          Array.from({ length: 5 }).map((_, col) => (
            <circle key={`dot-bl-${row}-${col}`} cx={8 + col * 12} cy={8 + row * 12} r="2.5" fill="white" />
          ))
        ))}
      </svg>

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
      <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline - Reduced spacing, larger size */}
          <div
            className={`mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "0.3s" : "0s" }}
          >
            <h2 className="font-manrope text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              Awaken. Align. Achieve.
            </h2>
          </div>

          {/* Professional Photo - Larger size */}
          <div
            className={`mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0 scale-100" : "opacity-0 transform translate-y-8 scale-95"
            }`}
            style={{ transitionDelay: isVisible ? "0.4s" : "0s" }}
          >
            <div className="relative w-56 h-64 md:w-64 md:h-72 mx-auto rounded-2xl overflow-hidden shadow-2xl">
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

          {/* Primary CTA - Above the fold */}
          <div
            className={`mb-8 flex justify-center transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "0.55s" : "0s" }}
          >
            <Button
              variant="outline"
              size="lg"
              className="group font-manrope border-2 border-white text-white font-bold hover:bg-white hover:text-primary-600 px-10 py-5 text-xl rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Join Community + Get AI Prompt Engineer Guide
              <span className="ml-3 group-hover:translate-x-1 transition-transform duration-200 text-2xl">→</span>
            </Button>
          </div>

          {/* Subheadline - Simplified */}
          <div
            className={`mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "0.6s" : "0s" }}
          >
            <p className="font-manrope text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Transform mid-career technologists into energized, purpose-driven leaders.
            </p>
          </div>

          {/* Three Pillars Introduction - Simplified */}
          <div
            className={`mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "0.7s" : "0s" }}
          >
            <p className="font-manrope text-lg text-white/80 max-w-2xl mx-auto">
              Three interconnected pillars: <span className="text-white font-semibold">ZEN • ACT • GEM</span>
            </p>
          </div>

          {/* Social Proof - Simplified and more prominent */}
          <div
            className={`mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "0.8s" : "0s" }}
          >
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 max-w-2xl mx-auto border border-white/20">
              <p className="font-manrope text-lg text-white font-semibold">
                6 acquisitions • 3 successful exits • 60-point NPS improvements
              </p>
            </div>
          </div>

          {/* Key Benefits - Bullet points for better readability */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "0.9s" : "0s" }}
          >
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-manrope text-lg font-bold text-white mb-2">Career Launcher</h3>
                <p className="font-manrope text-sm text-white/90">Launched dozens of careers to Director, VP, and CTO levels</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-manrope text-lg font-bold text-white mb-2">Balanced Growth</h3>
                <p className="font-manrope text-sm text-white/90">Integrates career mastery with personal growth and relationships</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-manrope text-lg font-bold text-white mb-2">AI-Powered</h3>
                <p className="font-manrope text-sm text-white/90">Leverage AI to accelerate your transformation and impact</p>
              </div>
            </div>
          </div>

          {/* Value Proposition - Simplified */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "1.0s" : "0s" }}
          >
            <p className="font-manrope text-xl text-white font-semibold max-w-2xl mx-auto">
              Join me in building the next generation of energized technologists.
            </p>
          </div>

          {/* Enhanced CTAs - Below the fold */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ${
              isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "1.1s" : "0s" }}
          >
            {/* Only show the secondary and tertiary CTAs here */}
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