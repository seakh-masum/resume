import type { NextConfig } from "next";
const withPWA = require("next-pwa")({
  dest: "public", // service worker files will be generated here
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // disable in dev
});

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/ruhi-birthday/**",
      },
    ],
  },
};

export default withPWA(nextConfig);
