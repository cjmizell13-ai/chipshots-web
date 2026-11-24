import { business } from "@/lib/site";

// Black Friday & holiday deals (Nov 2026). Every deal carries its own last
// day (inclusive, venue time); banners and cards retire themselves after it.
// Wording rules: "24/7", "2 active hours at a time", $239 is the regular rate,
// annual = $184/mo and $717 saved. Gift cards lead with dinner and drinks.

export type HolidayDeal = {
  key: "first-month" | "annual" | "gift-cards";
  eyebrow: string;
  title: string;
  code?: string;
  body: string;
  fine: string;
  cta: string;
  href: string;
  until: string;
};

export const holidayDeals: HolidayDeal[] = [
  {
    key: "first-month",
    eyebrow: "Black Friday",
    title: "$99 first month",
    code: "BLACKFRIDAY",
    body: "Unlimited bay time, 24/7, 2 active hours at a time, plus 10% off food and drinks.",
    fine: "Then $239/month. New members only. Ends Dec 4.",
    cta: "Join for $99",
    href: business.membershipJoin,
    until: "2026-12-04",
  },
  {
    key: "annual",
    eyebrow: "Annual membership",
    title: "13 months for 12",
    body: "$2,390 for 13 months of membership, just $184/month. Unlimited bay time, 24/7, 2 active hours at a time.",
    fine: "Save $717 compared to paying monthly. Ends Dec 31.",
    cta: "Get 13 months",
    href: business.membershipJoin,
    until: "2026-12-31",
  },
  {
    key: "gift-cards",
    eyebrow: "Gift cards",
    title: "$20 bonus for every $100",
    body: "Give dinner and drinks this year. Gift cards work for food, drinks and bay time, and every $100 comes with a $20 bonus voucher.",
    fine: "Bonus counts up to $500 per purchase; buying more? Split it into separate purchases. Bonus vouchers good Jan 2 – Mar 31. Buy online or in person. Ends Dec 24.",
    cta: "Buy gift cards",
    href: business.giftCards,
    until: "2026-12-24",
  },
];

// Top-of-site strip, above the header. Holiday deals only; each entry hides
// itself after its `until` date and the strip disappears after the last one.
export const holidayBanners: {
  code?: string;
  message: string;
  cta: string;
  href: string;
  until: string;
}[] = [
  {
    code: "BLACKFRIDAY",
    message: "Black Friday sale: your first month of membership is $99, through Dec 4",
    cta: "Join for $99",
    href: business.membershipJoin,
    until: "2026-12-04",
  },
  {
    message: "Gift cards: a $20 bonus for every $100, for dinner, drinks & golf. Through Dec 24",
    cta: "Buy gift cards",
    href: business.giftCards,
    until: "2026-12-24",
  },
  {
    message: "Annual membership: 13 months for the price of 12, just $184/month. Through Dec 31",
    cta: "See the deal",
    href: business.membershipJoin,
    until: "2026-12-31",
  },
];
