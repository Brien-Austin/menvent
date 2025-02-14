

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
      },
      {
        protocol : 'https',
        hostname : 'lh3.googleusercontent.com'
      }
     
    ],
    dangerouslyAllowSVG: true,
  }
};

export default nextConfig;