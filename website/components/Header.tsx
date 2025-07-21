'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false)
    }

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange)
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md border-b border-secondary-200 sticky top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Sheridan Richey</span>
              <div className="flex items-center space-x-2">
                <span className="font-heading text-2xl font-bold text-slate-900 uppercase tracking-wide">SHERIDAN</span>
                <span className="font-heading text-2xl font-bold text-[#279595] uppercase tracking-wide">RICHEY</span>
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary-700"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open main menu"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-secondary-900 hover:text-primary-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/newsletter" className="btn-primary">
              Join Community
            </Link>
          </div>
        </nav>
      </header>
      
      {/* Mobile menu - Fixed positioning outside header */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100]">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          
          {/* Menu panel */}
          <div className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-secondary-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={closeMobileMenu}>
                <span className="sr-only">Sheridan Richey</span>
                <div className="flex items-center space-x-2">
                  <span className="font-heading text-2xl font-bold text-slate-900 uppercase tracking-wide">SHERIDAN</span>
                  <span className="font-heading text-2xl font-bold text-[#279595] uppercase tracking-wide">RICHEY</span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-secondary-700 hover:bg-secondary-100 transition-colors"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-secondary-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-secondary-900 hover:bg-secondary-50 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/newsletter"
                    className="btn-primary w-full text-center"
                    onClick={closeMobileMenu}
                  >
                    Join Community
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 