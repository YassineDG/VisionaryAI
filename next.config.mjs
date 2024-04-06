/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'replicate.delivery',
        pathname: '/**' // Allows all paths from replicate.delivery
      },
      {
        protocol: 'https',
        hostname: 'media1.tenor.com',
        pathname: '/**' // Allows all paths from media1.tenor.com
      }
    ],
  },
  // other Next.js configuration options
};

export default nextConfig;

