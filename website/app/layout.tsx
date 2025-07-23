import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
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
  title: 'Sheridan Richey - ZAG Matrix Leadership & Personal Branding',
  description: 'Transform your career and life with the ZAG Matrix framework. Executive leadership insights, personal branding strategies, and entrepreneurial growth for awakened technologists.',
  keywords: 'leadership, personal branding, ZAG Matrix, executive coaching, entrepreneurship, career transformation',
  authors: [{ name: 'Sheridan Richey' }],
  creator: 'Sheridan Richey',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Sheridan Richey - ZAG Matrix Leadership & Personal Branding',
    description: 'Transform your career and life with the ZAG Matrix framework.',
    url: 'https://sheridanrichey.com',
    siteName: 'Sheridan Richey',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sheridan Richey - ZAG Matrix Leadership & Personal Branding',
    description: 'Transform your career and life with the ZAG Matrix framework.',
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
      </body>
    </html>
  )
} 