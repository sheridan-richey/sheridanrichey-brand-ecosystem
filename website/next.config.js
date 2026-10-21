const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Monorepo local/CI builds: silence duplicate lockfile warning. Omit on Vercel (Root Directory
  // is already website/) — setting this there breaks output file tracing (ENOENT on routes-manifest).
  ...(process.env.VERCEL !== '1' && {
    outputFileTracingRoot: path.join(__dirname, '..'),
  }),
  trailingSlash: false,
  assetPrefix: '',
  basePath: '',
  async redirects() {
    return [
      { source: '/newsletter', destination: '/blog', permanent: true },
      { source: '/resources', destination: '/blog', permanent: true },
      { source: '/community', destination: '/blog', permanent: true },
      { source: '/contributors', destination: '/about', permanent: true },
      {
        source: '/downloads/prompt-architects-toolkit',
        destination: '/blog',
        permanent: true,
      },
      { source: '/zag-matrix/zen', destination: '/zag-matrix', permanent: true },
      { source: '/zag-matrix/act', destination: '/zag-matrix', permanent: true },
      { source: '/zag-matrix/gem', destination: '/zag-matrix', permanent: true },
      { source: '/zag-collective', destination: '/blog', permanent: true },
    ]
  },
}

module.exports = nextConfig
