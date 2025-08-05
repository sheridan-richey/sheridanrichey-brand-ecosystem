const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // App router is now default, no need for experimental.appDir
  images: {
    unoptimized: true
  }
}

module.exports = withContentlayer(nextConfig) 