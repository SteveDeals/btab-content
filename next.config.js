/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  compress: true,
  images: {
    domains: ['cdn.btab.app'],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig
