// @ts-check

/**
 * @typedef {import('next').NextConfig} NextConfig
 */

/** @type {NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    /**
     * The build process has to be throttled to ensure that Queries Per Second limit
     * of SportRadar's API is not exceeded.
     */
    cpus: 1,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/results',
        permanent: true,
      },
      {
        source: '/404',
        destination: '/results',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
