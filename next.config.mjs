/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`
      },
    ]
  },
  images: {
    domains: ["www.plnipservices.co.id"], // Tambahkan hostname ini
  },
}

export default nextConfig;
