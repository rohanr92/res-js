/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
      },
         {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },

  redirects() {
    return [
      {
        source: '/food-detail/:path*', // old URL pattern
        destination: '/menu/:path*',   // new URL pattern
        permanent: true,               // 301 redirect
      },
    ];
  },
};

export default nextConfig;
