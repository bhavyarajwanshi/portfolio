/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio', // Maps assets precisely to your sub-folder repository name
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;