
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async redirects() {
      return [
        {
          source: '/',
          destination: '/Appxperts',
          permanent: true, // Set to false for temporary redirection
        },
      ];
    },
  };



  module.exports = nextConfig;

  