/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  trailingSlash: true,
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
