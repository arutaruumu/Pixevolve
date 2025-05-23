import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "i.namu.wiki",
      },
      {
        protocol: "https",
        hostname: "www.gimbot.com",
      },
      {
        protocol: "https",
        hostname: "image.ggwp.id",
      },
    ],
  },
};

export default nextConfig;
