const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // App router is now default, no need for experimental.appDir
}

module.exports = withContentlayer(nextConfig) 