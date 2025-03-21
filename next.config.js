/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Appxperts',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
