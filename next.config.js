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
  // CRITICAL STEP FOR NEXT 12 ACTION RUNNERS:
  // Forces the build engine to output the compiler assets directly to the 'out' directory
  distDir: 'out',
}

module.exports = nextConfig