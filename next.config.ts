import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/colorful-admin-dashboard' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/colorful-admin-dashboard/' : ''
}

export default nextConfig
