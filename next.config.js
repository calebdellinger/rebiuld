const { withNextVideo } = require("next-video/process");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'photos.smugmug.com',
        port: '',
        pathname: '/RebiuldWeb/**',
      },
    ],
  },
  output: 'export',
  distDir: '.next',
  images: {unoptimized: true}
}

module.exports = withNextVideo(nextConfig); 