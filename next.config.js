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
    unoptimized: true,
  },
  // output: 'export', // Commented out to enable API routes and server-side features
  distDir: '.next',
};

module.exports = nextConfig; 