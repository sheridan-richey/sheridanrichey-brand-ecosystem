import { cn } from '@/lib/utils'
import Link from 'next/link'

interface NewsletterCTAProps {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  ctaSource: string
  children: React.ReactNode
  className?: string
}

const variantClasses: Record<NonNullable<NewsletterCTAProps['variant']>, string> = {
  default: 'bg-primary-600 text-white hover:bg-primary-700',
  outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary-600 underline-offset-4 hover:underline'
}

const sizeClasses: Record<NonNullable<NewsletterCTAProps['size']>, string> = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-11 rounded-md px-8',
  icon: 'h-10 w-10'
}

const baseClasses =
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

export default function NewsletterCTA({
  variant = 'default',
  size = 'default',
  ctaSource,
  children,
  className = ''
}: NewsletterCTAProps) {
  const newsletterUrl = `/newsletter?cta=${encodeURIComponent(ctaSource)}`
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className)

  return (
    <Link href={newsletterUrl} className={classes}>
      {children}
    </Link>
  )
}
