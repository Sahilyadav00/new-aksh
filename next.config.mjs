/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/seo-strategies",
        destination: "/services/seo/",
        permanent: true,
      },
      {
        source: "/services/social-media",
        destination: "/services/social-media-marketing/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
