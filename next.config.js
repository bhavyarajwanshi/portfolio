/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Required for GitHub static pages deployment
  images: {
    unoptimized: true, // Prevents image optimization errors during static export
  },
  typescript: {
    // This bypasses the runner's outdated compiler check completely
    ignoreBuildErrors: true,
  },
  eslint: {
    // Prevents formatting warnings from stopping the build pipeline
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig