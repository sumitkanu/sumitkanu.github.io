/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/sumitkanu.github.io' : '',
  basePath: isProd ? '/sumitkanu.github.io' : '',
  output: 'export',
  reactStrictMode: true,
};

export default nextConfig;

