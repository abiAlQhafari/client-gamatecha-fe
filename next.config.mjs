/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "gamatecha.sgp1.digitaloceanspaces.com",
      },
    ],
  },
};

export default nextConfig;
