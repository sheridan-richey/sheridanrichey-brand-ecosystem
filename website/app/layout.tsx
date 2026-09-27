import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Load Manrope font from Google Fonts
const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sheridan Richey — Essays on leadership, craft, and the ZAG Matrix',
  description:
    'Blog and frameworks for technologists navigating clarity, momentum, and mastery. Writing from Sheridan Richey on leadership, career, and the ZAG Matrix.',
  keywords:
    'Sheridan Richey, ZAG Matrix, technologist, leadership, career, blog, ZEN ACT GEM',
  authors: [{ name: 'Sheridan Richey' }],
  creator: 'Sheridan Richey',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Sheridan Richey — Essays on leadership and the ZAG Matrix',
    description: 'Blog and frameworks for technologists navigating clarity, momentum, and mastery.',
    url: 'https://sheridanrichey.com',
    siteName: 'Sheridan Richey',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sheridan Richey — Essays on leadership and the ZAG Matrix',
    description: 'Blog and frameworks for technologists navigating clarity, momentum, and mastery.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-light-bg to-white font-manrope">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
} 