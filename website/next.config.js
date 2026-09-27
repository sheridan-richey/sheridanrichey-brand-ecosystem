/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ]
  },
}

module.exports = nextConfig
