import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/rizkiakbar74/rizkiakbar74.github.io/main/**",
      },
    ],
  },
};

export default nextConfig;
