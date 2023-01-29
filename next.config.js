/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['upload.wikimedia.org'],
    // loader: 'imgix',
  },
};

module.exports = nextConfig
