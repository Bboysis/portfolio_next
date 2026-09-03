/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["10.177.29.140"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
