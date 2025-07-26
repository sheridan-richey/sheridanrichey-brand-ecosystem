'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface Author {
  id: string
  name: string
  title: string
  bio: string
  headshot: string
}

interface AboutAuthorProps {
  author: Author
}

export default function AboutAuthor({ author }: AboutAuthorProps) {
  const [imageError, setImageError] = useState(false)
  const initials = author.name.split(' ').map(n => n[0]).join('')

  return (
    <div className="mt-12 pt-8 border-t border-smoke">
      <div className="bg-light-bg rounded-lg p-6 border border-smoke">
        <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
          {/* Left Column - Headshot */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-smoke">
              {!imageError ? (
                <Image
                  src={author.headshot}
                  alt={author.name}
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

          {/* Right Column - Author Info */}
          <div className="flex-1 min-w-0">
            <h4 className="text-h3 font-manrope font-semibold text-phantom mb-2">
              {author.name}
            </h4>
            <p className="text-body font-manrope text-graphite mb-3 leading-relaxed">
              {author.bio}
            </p>
            <Link 
              href={`/contributors#${author.id}`}
              className="inline-flex items-center text-teal-500 hover:text-teal-600 font-manrope font-medium transition-colors duration-200"
            >
              Read Full Bio →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 