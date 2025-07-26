import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-phantom text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <Image
                src="/assets/SVG/Logo-1.svg"
                alt="Sheridan Richey"
                width={120}
                height={36}
                className="h-9 w-auto"
              />
            </div>
            <p className="text-smoke text-sm leading-6">
              Helping awakened technologists transform their careers and lives through the ZAG Matrix framework.
            </p>
            <div className="flex space-x-6">
              <Link href="https://linkedin.com/in/sheridanrichey" className="text-smoke hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              <Link href="https://twitter.com/sheridanrichey" className="text-smoke hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Content</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/blog" className="text-sm leading-6 text-smoke hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className="text-sm leading-6 text-smoke hover:text-white transition-colors">
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link href="/newsletter" className="text-sm leading-6 text-smoke hover:text-white transition-colors">
                      Newsletter
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/about" className="text-sm leading-6 text-smoke hover:text-white transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contributors" className="text-sm leading-6 text-smoke hover:text-white transition-colors">
                      Contributors
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm leading-6 text-smoke hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/speaking" className="text-sm leading-6 text-smoke hover:text-white transition-colors">
                      Speaking
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">ZAG Matrix</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/zag-matrix/zen" className="text-sm leading-6 text-smoke hover:text-white transition-colors">
                      ZEN Framework
                    </Link>
                  </li>
                  <li>
                    <Link href="/zag-matrix/act" className="text-sm leading-6 text-smoke hover:text-white transition-colors">
                      ACT Framework
                    </Link>
                  </li>
                  <li>
                    <Link href="/zag-matrix/gem" className="text-sm leading-6 text-smoke hover:text-white transition-colors">
                      GEM Framework
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/privacy" className="text-sm leading-6 text-smoke hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-sm leading-6 text-smoke hover:text-white transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-arsenic pt-8">
          <p className="text-xs leading-5 text-smoke">
            &copy; {new Date().getFullYear()} Sheridan Richey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 