/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables strict mode in React
  swcMinify: true, // Enables faster builds with SWC minification
  images: {
    domains: ["example.com"], // Allows loading external images from specified domains
  },
};

export default nextConfig;
