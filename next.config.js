const { withNextVideo } = require("next-video/process");

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
  // Note: You have 'images' defined twice. Consolidating to the more specific one.
  // If 'images: {unoptimized: true}' was for a specific reason during export, 
  // you might not need it when not exporting statically, or you might want to keep it.
  // For now, I'll keep the remotePatterns and remove the general unoptimized one if that's okay,
  // or we can merge them if you clarify the intent.
  // Let's assume for now remotePatterns is the primary images config.
  // The duplicate 'images: {unoptimized: true}' below the first 'images' block is an issue.
  // I will remove the second, more general one: images: {unoptimized: true}
};

module.exports = withNextVideo(nextConfig); 