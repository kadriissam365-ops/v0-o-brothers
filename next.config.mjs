/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
  },
  // ESLint not configured in this project (v0 generated)
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
