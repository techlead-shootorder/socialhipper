import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config, { isServer }: { isServer: boolean }) {
    if (!isServer) {
      config.devtool = 'source-map'; // This ensures source maps are generated in development
    }
    return config;
  },
};

export default nextConfig;
