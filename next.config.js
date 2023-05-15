/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: false,
    swcPlugins: [["next-superjson-plugin", { excluded: [] }]],
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es", "ca", "de"],
    defaultLocale: "en",
  },
  images: {
    domains: ["picsum.photos", "i.ibb.co"],
  },
};

module.exports = nextConfig;
