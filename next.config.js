/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: false,
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es", "ca"],
    defaultLocale: "en",
  },
  images: {
    domains: ["picsum.photos", "i.ibb.co"],
  },
};

module.exports = nextConfig
