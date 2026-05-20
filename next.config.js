/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // If you are using Next 12, static exports use 'next export' command, 
  // but if you have trailing slash or image configs, let's keep it clean:
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    // This tells Next.js to completely ignore TypeScript compilation checks during production builds
    ignoreBuildErrors: true,
  },
  eslint: {
    // This ignores ESLint rules so warnings don't throw exit flags
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig