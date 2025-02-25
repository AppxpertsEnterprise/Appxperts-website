/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home1',
          permanent: true, // Set to false for temporary redirection
        },
      ];
    },
  };



  module.exports = nextConfig;
  