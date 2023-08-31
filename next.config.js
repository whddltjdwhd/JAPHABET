/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    headers: async () => [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, max-age=99999',
          },
        ],
      },
    ],
  };
  
  module.exports = nextConfig;