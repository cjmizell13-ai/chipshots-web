import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/league", destination: "/golf-booking", permanent: true },
      { source: "/blog/join-golf-league-henderson-first-timer", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
