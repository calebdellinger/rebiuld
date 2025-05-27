import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
};
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "photos.smugmug.com",
        port: "",
        pathname: "/RebiuldWeb/**",
        search: "",
      },
    ],
  },
};

export default withNextVideo(nextConfig);