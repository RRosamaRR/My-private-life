/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/My-private-life' : '',
  assetPrefix: isProd ? '/My-private-life/' : '',
};

module.exports = nextConfig;
