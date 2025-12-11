import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    if (!dev) {
      // Prevent Hostinger caching old JS bundles
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
