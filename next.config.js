/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'photos.smugmug.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'export',
  distDir: '.next',
}

module.exports = nextConfig 