/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
