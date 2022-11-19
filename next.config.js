/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['static.jojowiki.com']
  }
}

module.exports = nextConfig
