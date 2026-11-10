import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/league", destination: "/golf-booking", permanent: true },
      // Old menu addresses still listed on Google, Bing and other directories.
      { source: "/food", destination: "/food-drink", permanent: true },
      { source: "/menu", destination: "/food-drink", permanent: true },
      { source: "/blog/join-golf-league-henderson-first-timer", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
