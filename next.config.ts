/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mrzlaw5vnrlhbacg.public.blob.vercel-storage.com",
      }
    ]
  },
  productionBrowserSourceMaps: false, // Disables source maps in production
  webpack(config: { devtool: boolean }) {
    config.devtool = false; // Disables source maps in development
    return config;
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",
  },
};

export default nextConfig;
