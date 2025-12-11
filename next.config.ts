import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    // Prevent Hostinger from caching old chunks
    if (!dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
