import type { NextConfig } from "next";

// Toast Online Ordering (pickup). Same address as business.orderOnline in src/lib/site.ts.
const ORDER_ONLINE =
  "https://order.toasttab.com/online/chip-shots-1473-east-lake-mead-parkway-suite-110";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/league", destination: "/golf-booking", permanent: true },
      // Old menu addresses still listed on Google, Bing and other directories.
      { source: "/food", destination: "/food-drink", permanent: true },
      { source: "/menu", destination: "/food-drink", permanent: true },
      { source: "/blog/join-golf-league-henderson-first-timer", destination: "/blog", permanent: true },

      // Short addresses people type, say out loud or still have in old links.
      // Every one of these used to land on the "page not found" screen.
      { source: "/book", destination: "/golf-booking", permanent: true },
      { source: "/booking", destination: "/golf-booking", permanent: true },
      { source: "/golf", destination: "/golf-booking", permanent: true },
      { source: "/leagues", destination: "/golf-booking", permanent: true },
      { source: "/happy-hour", destination: "/food-drink#happy-hour", permanent: true },
      { source: "/happyhour", destination: "/food-drink#happy-hour", permanent: true },
      { source: "/gift-card", destination: "/gift-cards", permanent: true },
      { source: "/giftcard", destination: "/gift-cards", permanent: true },
      { source: "/giftcards", destination: "/gift-cards", permanent: true },
      { source: "/membership", destination: "/memberships", permanent: true },
      { source: "/contact", destination: "/about#visit", permanent: true },
      { source: "/hours", destination: "/about#visit", permanent: true },

      // Temporary (307) on purpose: these may get pages of their own later, and
      // the ordering address belongs to Toast.
      { source: "/trivia", destination: "/events#calendar", permanent: false },
      { source: "/parties", destination: "/events#private", permanent: false },
      { source: "/order", destination: ORDER_ONLINE, permanent: false },
    ];
  },
};

export default nextConfig;
