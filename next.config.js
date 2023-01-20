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
};

module.exports = nextConfig;
