/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"], // whitelist Unsplash
  },
};

module.exports = nextConfig;
