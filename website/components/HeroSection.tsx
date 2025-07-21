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
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Header with Logo */}
      <header className="absolute top-0 left-0 right-0 z-20 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#279595] rounded-lg flex items-center justify-center">
                <span className="font-heading text-white font-bold text-lg">SR</span>
              </div>
              <div className="font-heading text-2xl font-bold text-slate-900">
                SHERIDAN <span className="text-[#279595]">RICHEY</span>
              </div>
            </div>
          </div>

          {/* Trust Indicator - Now directly below logo */}
          <div className="flex justify-start">
            <div
              className={`inline-flex items-center px-4 py-2 bg-[#279595]/10 rounded-full transition-all duration-800 ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? "0.2s" : "0s" }}
            >
              <span className="text-[#279595] font-body text-sm font-medium">20+ Years Executive Leadership</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Hero Content - Pulled way up */}
      <div className="min-h-screen flex items-start justify-center px-4 pt-32 pb-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Enhanced Headline */}
            <div className="mb-6">
              <h1
                className={`font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-3 text-slate-900 leading-tight transition-all duration-1000 ${
                  isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? "0.4s" : "0s" }}
              >
                Stop Chasing Success.
                <br />
                <span className="relative">
                  Start Living <span className="text-[#6366F1]">Z</span>
                  <span className="text-[#279595]">A</span>
                  <span className="text-[#8B5A3C]">G</span>
                </span>
              </h1>

              <p
                className={`font-body text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed transition-all duration-1000 ${
                  isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? "0.6s" : "0s" }}
              >
                The proven framework for awakened technologists ready to integrate
                <span className="text-[#279595] font-semibold"> clarity, momentum, and mastery</span> into their
                purpose-driven careers.
              </p>
            </div>

            {/* Enhanced CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center transition-all duration-1000 ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "0.8s" : "0s" }}
            >
              <Button
                size="lg"
                className="group font-body bg-[#279595] hover:bg-[#1f7a7a] text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
              >
                Discover Your ZAG Path
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="font-body border-2 border-[#279595] text-[#279595] hover:bg-[#279595] hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 bg-transparent hover:shadow-lg"
              >
                Watch Framework Overview
              </Button>
            </div>
          </div>

          {/* Right Column - Photo & ZAG Matrix */}
          <div className="relative flex flex-col items-center -mt-4">
            {/* Professional Photo */}
            <div
              className={`relative transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 transform translate-y-0 scale-100"
                  : "opacity-0 transform translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: isVisible ? "0.3s" : "0s" }}
            >
              <div className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-2xl mb-4">
                <Image
                  src="/sheridan-headshot.jpg"
                  alt="Sheridan Richey - Executive Leadership Coach"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
              </div>
            </div>

            {/* ZAG Matrix - Complete Section in One Container */}
            <div
              className={`w-full max-w-xs bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 p-4 transition-all duration-1000 ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "0.9s" : "0s" }}
            >
              {/* Matrix Header */}
              <div className="text-center mb-4">
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-1">The ZAG Matrix</h3>
                <p className="font-body text-sm text-slate-600">Three interconnected pillars of transformation</p>
              </div>

              {/* 3x3 Rubik's Cube Style Matrix */}
              <div className="grid grid-cols-3 gap-1.5 mb-3 p-1.5 bg-slate-50/50 rounded-xl">
                {/* Row 1 */}
                <div
                  className={`w-20 h-20 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg cursor-pointer ${
                    isVisible
                      ? "opacity-100 transform translate-y-0 rotate-0"
                      : "opacity-0 transform -translate-y-20 rotate-180"
                  }`}
                  style={{ transitionDelay: isVisible ? "1.0s" : "0s" }}
                >
                  <span className="font-heading text-xl font-bold text-white">Z</span>
                </div>
                <div
                  className={`w-20 h-20 bg-gradient-to-br from-[#279595] to-[#34D399] rounded-lg flex items-center justify-center transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg cursor-pointer ${
                    isVisible
                      ? "opacity-100 transform translate-y-0 rotate-0"
                      : "opacity-0 transform -translate-y-20 rotate-180"
                  }`}
                  style={{ transitionDelay: isVisible ? "1.1s" : "0s" }}
                >
                  <span className="font-heading text-xl font-bold text-white">A</span>
                </div>
                <div
                  className={`w-20 h-20 bg-gradient-to-br from-[#8B5A3C] to-[#D97706] rounded-lg flex items-center justify-center transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg cursor-pointer ${
                    isVisible
                      ? "opacity-100 transform translate-y-0 rotate-0"
                      : "opacity-0 transform -translate-y-20 rotate-180"
                  }`}
                  style={{ transitionDelay: isVisible ? "1.2s" : "0s" }}
                >
                  <span className="font-heading text-xl font-bold text-white">G</span>
                </div>

                {/* Row 2 */}
                <div
                  className={`w-20 h-20 bg-gradient-to-br from-[#6366F1]/80 to-[#8B5CF6]/80 rounded-lg flex items-center justify-center transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg cursor-pointer ${
                    isVisible
                      ? "opacity-100 transform translate-y-0 rotate-0"
                      : "opacity-0 transform -translate-y-20 rotate-180"
                  }`}
                  style={{ transitionDelay: isVisible ? "1.3s" : "0s" }}
                >
                  <span className="font-heading text-xl font-bold text-white">E</span>
                </div>
                <div
                  className={`w-20 h-20 bg-gradient-to-br from-[#279595]/80 to-[#34D399]/80 rounded-lg flex items-center justify-center transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg cursor-pointer ${
                    isVisible
                      ? "opacity-100 transform translate-y-0 rotate-0"
                      : "opacity-0 transform -translate-y-20 rotate-180"
                  }`}
                  style={{ transitionDelay: isVisible ? "1.4s" : "0s" }}
                >
                  <span className="font-heading text-xl font-bold text-white">C</span>
                </div>
                <div
                  className={`w-20 h-20 bg-gradient-to-br from-[#8B5A3C]/80 to-[#D97706]/80 rounded-lg flex items-center justify-center transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg cursor-pointer ${
                    isVisible
                      ? "opacity-100 transform translate-y-0 rotate-0"
                      : "opacity-0 transform -translate-y-20 rotate-180"
                  }`}
                  style={{ transitionDelay: isVisible ? "1.5s" : "0s" }}
                >
                  <span className="font-heading text-xl font-bold text-white">E</span>
                </div>

                {/* Row 3 */}
                <div
                  className={`w-20 h-20 bg-gradient-to-br from-[#6366F1]/60 to-[#8B5CF6]/60 rounded-lg flex items-center justify-center transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg cursor-pointer ${
                    isVisible
                      ? "opacity-100 transform translate-y-0 rotate-0"
                      : "opacity-0 transform -translate-y-20 rotate-180"
                  }`}
                  style={{ transitionDelay: isVisible ? "1.6s" : "0s" }}
                >
                  <span className="font-heading text-xl font-bold text-white">N</span>
                </div>
                <div
                  className={`w-20 h-20 bg-gradient-to-br from-[#279595]/60 to-[#34D399]/60 rounded-lg flex items-center justify-center transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg cursor-pointer ${
                    isVisible
                      ? "opacity-100 transform translate-y-0 rotate-0"
                      : "opacity-0 transform -translate-y-20 rotate-180"
                  }`}
                  style={{ transitionDelay: isVisible ? "1.7s" : "0s" }}
                >
                  <span className="font-heading text-xl font-bold text-white">T</span>
                </div>
                <div
                  className={`w-20 h-20 bg-gradient-to-br from-[#8B5A3C]/60 to-[#D97706]/60 rounded-lg flex items-center justify-center transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg cursor-pointer ${
                    isVisible
                      ? "opacity-100 transform translate-y-0 rotate-0"
                      : "opacity-0 transform -translate-y-20 rotate-180"
                  }`}
                  style={{ transitionDelay: isVisible ? "1.8s" : "0s" }}
                >
                  <span className="font-heading text-xl font-bold text-white">M</span>
                </div>
              </div>

              {/* Pillar Descriptors Below Matrix */}
              <div
                className={`flex justify-between px-1 transition-all duration-1000 ${
                  isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
                }`}
                style={{ transitionDelay: isVisible ? "1.9s" : "0s" }}
              >
                <div className="text-center group cursor-pointer flex-1">
                  <h4 className="font-heading text-base font-bold text-[#6366F1] mb-0.5 group-hover:scale-105 transition-transform">
                    Clarity
                  </h4>
                </div>
                <div className="text-center group cursor-pointer flex-1">
                  <h4 className="font-heading text-base font-bold text-[#279595] mb-0.5 group-hover:scale-105 transition-transform">
                    Momentum
                  </h4>
                </div>
                <div className="text-center group cursor-pointer flex-1">
                  <h4 className="font-heading text-base font-bold text-[#8B5A3C] mb-0.5 group-hover:scale-105 transition-transform">
                    Mastery
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#279595] opacity-[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#6366F1] opacity-[0.015] rounded-full blur-3xl" />
      </div>
    </section>
  )
} 