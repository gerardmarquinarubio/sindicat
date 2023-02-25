/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es', 'ca'],
    defaultLocale: 'en',
  }
}

module.exports = nextConfig