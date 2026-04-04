import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/daosoon-website-v2" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
