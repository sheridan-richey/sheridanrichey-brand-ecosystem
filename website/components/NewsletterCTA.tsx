'use client'

import Link from 'next/link'
import { Button } from './ui/button'

interface NewsletterCTAProps {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  ctaSource: string
  children: React.ReactNode
  className?: string
}

export default function NewsletterCTA({
  variant = 'default',
  size = 'default',
  ctaSource,
  children,
  className = ''
}: NewsletterCTAProps) {
  const newsletterUrl = `/newsletter?cta=${encodeURIComponent(ctaSource)}`
  
  return (
    <Link href={newsletterUrl}>
      <Button variant={variant} size={size} className={className}>
        {children}
      </Button>
    </Link>
  )
}
