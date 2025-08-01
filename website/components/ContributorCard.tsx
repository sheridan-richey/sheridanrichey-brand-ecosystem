'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface AuthoredPost {
  title: string
  slug: string
  date: string
}

interface Contributor {
  id: string
  name: string
  title: string
  bio: string
  headshot: string
  linkedin?: string
  twitter?: string
  authoredPosts: AuthoredPost[]
}

interface ContributorCardProps {
  contributor: Contributor
}

export default function ContributorCard({ contributor }: ContributorCardProps) {
  const [imageError, setImageError] = useState(false)
  const initials = contributor.name.split(' ').map(n => n[0]).join('')

  return (
    <div className="bg-white border border-smoke rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      {/* Top Section - Headshot and Basic Info */}
      <div className="p-6 border-b border-smoke">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-smoke">
              {!imageError ? (
                <Image
                  src={contributor.headshot}
                  alt={contributor.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-smoke flex items-center justify-center">
                  <span className="text-graphite font-manrope font-medium text-sm">
                    {initials}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-h3 font-manrope font-semibold text-phantom mb-1">
              {contributor.name}
            </h3>
            <p className="text-body font-manrope text-graphite">
              {contributor.title}
            </p>
          </div>
        </div>
      </div>

      {/* Middle Section - Bio */}
      <div className="p-6 border-b border-smoke">
        <p className="text-body font-manrope text-phantom leading-relaxed">
          {contributor.bio}
        </p>
      </div>

      {/* Bottom Section - Social Links */}
      <div className="p-6 border-b border-smoke">
        <div className="flex space-x-4">
          {contributor.linkedin && (
            <Link 
              href={contributor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-graphite hover:text-teal-500 transition-colors duration-200"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
          )}
        </div>
      </div>

      {/* Content Section - Authored Posts */}
      <div className="p-6">
        <h4 className="text-h3 font-manrope font-semibold text-phantom mb-4">
          Authored Posts
        </h4>
        <div className="space-y-3">
          {contributor.authoredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <div className="p-3 rounded-lg border border-smoke hover:border-teal-500 transition-colors duration-200">
                <h5 className="text-body font-manrope font-medium text-phantom group-hover:text-teal-500 transition-colors duration-200 mb-1">
                  {post.title}
                </h5>
                <p className="text-caption font-manrope text-graphite">
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 