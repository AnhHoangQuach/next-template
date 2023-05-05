/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: false, // enabling this will enable SSR for Tailwind
  },
};
