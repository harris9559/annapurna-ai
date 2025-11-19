/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',   // <-- REQUIRED for Render static site
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL ||
      "https://annapurna-backend-e0ww.onrender.com/api",
  },
};

module.exports = nextConfig;
