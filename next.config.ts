import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// const nextConfig: NextConfig = {
//   /* config options here */
//   output: "export", // for static export
//   basePath: isProd ? "/your-repo-name" : "",
//   assetPrefix: isProd ? "/your-repo-name/" : "",
// };

const withPWA = require("next-pwa")({
  dest: "public", // service worker files will be generated here
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // disable in dev
  output: "export", // for static export
  basePath: isProd ? "/your-repo-name" : "",
  assetPrefix: isProd ? "/your-repo-name/" : "",
});

export default withPWA({
  reactStrictMode: true,
});
