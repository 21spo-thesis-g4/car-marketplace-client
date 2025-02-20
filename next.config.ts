/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false, // Disables source maps in production
  webpack(config: { devtool: boolean }) {
    config.devtool = false; // Disables source maps in development
    return config;
  },
};

module.exports = nextConfig;
