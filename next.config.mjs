/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: true, // Add this line
  },

  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },

  async redirects() {
    return [
      {
        source: "/education",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/skills",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
