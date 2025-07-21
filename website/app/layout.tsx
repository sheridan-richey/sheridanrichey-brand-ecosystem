import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Sheridan Richey - ZAG Matrix Leadership & Personal Branding',
  description: 'Transform your career and life with the ZAG Matrix framework. Executive leadership insights, personal branding strategies, and entrepreneurial growth for awakened technologists.',
  keywords: 'leadership, personal branding, ZAG Matrix, executive coaching, entrepreneurship, career transformation',
  authors: [{ name: 'Sheridan Richey' }],
  creator: 'Sheridan Richey',
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
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-secondary-50 to-white">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 