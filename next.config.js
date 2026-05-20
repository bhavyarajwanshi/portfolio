/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // REMOVE distDir: 'out' from here entirely! 
  // Next 12's 'next export' command naturally creates the 'out/' folder automatically.

  basePath: '/portfolio',
  assetPrefix: '/portfolio',
}

module.exports = nextConfig