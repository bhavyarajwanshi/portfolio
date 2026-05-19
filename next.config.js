/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hokage-terminal', // Replace with your exact GitHub repository name
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;