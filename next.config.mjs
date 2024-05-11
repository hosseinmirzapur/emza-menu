/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            hostname: "api.emza.cafe",
            pathname: "/public/**/*",
            protocol: "https",
         },
      ],
   },
}

export default nextConfig
