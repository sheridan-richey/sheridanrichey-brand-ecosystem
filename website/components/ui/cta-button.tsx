import { cn } from "@/lib/utils"
import { ArrowRight, ArrowUpRight, Target, Trophy } from "lucide-react"
import Link from "next/link"
import * as React from "react"

export interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'journey-start' | 'journey-progress' | 'journey-action' | 'journey-complete'
  size?: 'sm' | 'md' | 'lg'
  background?: 'teal' | 'white' | 'light' | 'dark'
  children: React.ReactNode
  className?: string
}

const variantClasses = {
  'journey-start': {
    button: "bg-white text-[#1E1E24] border border-[#D3D6E0] hover:bg-[#EDEFF7] hover:border-[#BCBFCC]",
    icon: "text-[#009696]"
  },
  'journey-progress': {
    button: "bg-[#009696] text-white border border-[#009696] hover:bg-[#70C6C6] hover:border-[#70C6C6]",
    icon: "text-white"
  },
  'journey-action': {
    button: "bg-[#40424D] text-white border border-[#40424D] hover:bg-[#6E7180] hover:border-[#6E7180]",
    icon: "text-white"
  },
  'journey-complete': {
    button: "bg-[#1E1E24] text-white border border-[#1E1E24] hover:bg-[#40424D] hover:border-[#40424D]",
    icon: "text-white"
  }
}

const backgroundClasses = {
  teal: "hover:scale-[1.02]",
  white: "hover:scale-[1.02]",
  light: "hover:scale-[1.02]",
  dark: "hover:scale-[1.02]"
}

const sizeClasses = {
  sm: "h-11 px-5 py-2.5 text-sm",
  md: "h-13 px-7 py-3.5 text-base",
  lg: "h-15 px-9 py-4.5 text-lg"
}

const baseClasses = "group inline-flex items-center justify-center gap-3 font-manrope font-semibold rounded-xl transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009696] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

function renderCTAIcon(variant: CTAButtonProps['variant']) {
  const v = variant ?? 'journey-progress'
  const iconMap = {
    'journey-start': <ArrowUpRight className="h-5 w-5" />,
    'journey-progress': <ArrowRight className="h-5 w-5" />,
    'journey-action': <Target className="h-5 w-5" />,
    'journey-complete': <Trophy className="h-5 w-5" />
  }
  return (
    <span className={cn("transition-transform duration-300 group-hover:translate-x-1", variantClasses[v].icon)}>
      {iconMap[v]}
    </span>
  )
}

function ctaButtonClassName(
  variant: CTAButtonProps['variant'],
  size: CTAButtonProps['size'],
  background: CTAButtonProps['background'],
  className?: string
) {
  const v = variant ?? 'journey-progress'
  const s = size ?? 'md'
  const b = background ?? 'teal'
  return cn(
    baseClasses,
    variantClasses[v].button,
    backgroundClasses[b],
    sizeClasses[s],
    className
  )
}

const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant = 'journey-progress', size = 'md', background = 'teal', children, ...props }, ref) => {
    return (
      <button
        className={ctaButtonClassName(variant, size, background, className)}
        ref={ref}
        {...props}
      >
        {children}
        {renderCTAIcon(variant)}
      </button>
    )
  }
)

CTAButton.displayName = "CTAButton"

export type CTAButtonLinkProps = {
  href: string
  variant?: CTAButtonProps['variant']
  size?: CTAButtonProps['size']
  background?: CTAButtonProps['background']
  className?: string
  children: React.ReactNode
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children' | 'className'>

const CTAButtonLink = React.forwardRef<HTMLAnchorElement, CTAButtonLinkProps>(
  ({ className, variant = 'journey-progress', size = 'md', background = 'teal', href, children, ...anchorProps }, ref) => {
    return (
      <Link
        href={href}
        ref={ref}
        className={ctaButtonClassName(variant, size, background, className)}
        {...anchorProps}
      >
        {children}
        {renderCTAIcon(variant)}
      </Link>
    )
  }
)

CTAButtonLink.displayName = "CTAButtonLink"

export { CTAButton, CTAButtonLink }
