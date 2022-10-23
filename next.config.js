/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://static.femaledaily.com", "static.femaledaily.com"]
  }
}

module.exports = nextConfig
