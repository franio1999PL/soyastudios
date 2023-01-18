/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      process.env.NEXT_PUBLIC_WORDPRESS_SITE_HOSTNAME,
      'via.placeholder.com'
    ]
  }
}

module.exports = nextConfig
