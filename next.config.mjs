/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          { hostname: 'cdn.sanity.io' }
        ],
        dangerouslyAllowSVG: true,
      },
};

export default nextConfig;
