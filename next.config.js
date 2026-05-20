/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // CRITICAL FIX: Forces Next.js to export pages as 'index.html' files inside separate folders
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
  distDir: 'out',
}

module.exports = nextConfig