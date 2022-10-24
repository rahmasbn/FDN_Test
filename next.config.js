/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["imgcdn.femaledaily.com", "static.femaledaily.com"],
  },
};

module.exports = nextConfig;
