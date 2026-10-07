// =============================================================================
// Chip Shots Indoor Golf — single source of truth for site content
// All NAP (name/address/phone), hours, links, menus and pricing live here so
// they stay identical everywhere they appear (important for local SEO).
// =============================================================================

export const business = {
  name: "Chip Shots Indoor Golf Club",
  shortName: "Chip Shots",
  tagline: "Golf • Food • Drinks",
  address: {
    street: "1473 E Lake Mead Pkwy, Suite 110",
    city: "Henderson",
    region: "NV",
    postalCode: "89015",
    full: "1473 E Lake Mead Pkwy, Suite 110, Henderson, NV 89015",
  },
  phone: "(725) 377-8872",
  phoneHref: "tel:+17253778872",
  email: "golf@chipshotshenderson.com",
  website: "https://www.chipshotshenderson.com",
  status: "Now Open",
  founded: "Grand opening May 29, 2026",
  geo: { lat: 36.0398, lng: -114.9817 },
  mapEmbed:
    "https://www.google.com/maps?q=1473+E+Lake+Mead+Pkwy+Suite+110+Henderson+NV+89015&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=1473+E+Lake+Mead+Pkwy+Suite+110+Henderson+NV+89015",
  social: {
    instagram: "https://www.instagram.com/chipshotshenderson",
    facebook: "https://www.facebook.com/chipshotshenderson",
    tiktok: "https://www.tiktok.com/@chipshotshenderson",
    instagramHandle: "@chipshotshenderson",
  },
  // Official GBP review short link (review dialog opens directly).
  reviewUrl: "https://g.page/r/CamJDL5vhQqMEBM/review",
  booking:
    "https://www.yourgolfbooking.com/venues/chip-shots-henderson/booking/simulator-bays",
  // Public YGB booking landing that lists every bookable event — the club
  // nights (Men's / Open / Ladies) plus "Book a Trackman Bay".
  events: "https://www.yourgolfbooking.com/venues/chip-shots-henderson/booking",
  // Free Weekly Nights RSVP (Google Form). One screen, no account — the
  // cold-start funnel decision (playbook §2): form now, deposits later.
  // This is the rebranded league form; it feeds the auto tee sheet.
  nightsRsvp:
    "https://docs.google.com/forms/d/e/1FAIpQLSd8IPkCGaZN2pPiBMPga5wDrod7t4xF6kx3cdb0-WUiMGFZvg/viewform",
  // Public YGB membership signup + checkout (card on file). Only the $239/mo
  // "Member" tier is offered here; other tiers are set up by us on request.
  membershipJoin:
    "https://www.yourgolfbooking.com/venues/chip-shots-henderson/memberships",
  giftCards:
    "https://order.toasttab.com/egiftcards/chip-shots-1473-east-lake-mead-parkway-suite-110",
  // First-party pickup ordering (Toast Online Ordering). Commission-free and
  // it keeps the guest data, so this is the link every channel should point at
  // — not a delivery marketplace.
  orderOnline:
    "https://order.toasttab.com/online/chip-shots-1473-east-lake-mead-parkway-suite-110",
};

// Toast Online Ordering is fully configured but the master toggle in Toast is
// OFF, so the ordering page reads "Currently not accepting online orders."
// Flip this to true the same day that toggle goes on — it reveals the
// "Order Online" CTA in the header and mobile menu. Never turn it on first:
// a live button pointing at a closed ordering page is worse than no button.
export const orderOnlineLive = false;

// VIP Crew capture routes straight into Toast Marketing — no manual CSV step.
// Email: Toast's hosted, branded signup page adds subscribers to the
// "Chip Shots Group" email list. SMS: TCPA opt-ins must be collected by Toast
// itself, so guests join by texting the keyword to the toll-free number
// (mobile = click-to-text link, desktop = scan the QR at the qr path below).
// Email signup URL lives in Toast Web: Marketing → Email marketing →
// Subscribers → Settings → "Email Marketing Signup link". SMS number/keyword
// live under Marketing → SMS marketing.
export const toastSignup = {
  emailUrl:
    "https://www.toasttab.com/chip-shots-1473-east-lake-mead-parkway-suite-110/marketing-signup",
  sms: {
    number: "+18335011238",
    display: "1-833-501-1238",
    keyword: "JOIN",
    // Prefilled click-to-text link for mobile visitors.
    href: "sms:+18335011238?&body=JOIN",
    // Scan-to-text QR (encodes SMSTO:+18335011238:JOIN) for desktop visitors.
    qr: "/images/sms-join-qr.png",
  },
};

// Sat & Sun open an hour early for the Weekend Brunch Buffet (10 AM–1 PM).
export const hours = [
  { day: "Monday", time: "11:00 AM – 10:00 PM" },
  { day: "Tuesday", time: "11:00 AM – 10:00 PM" },
  { day: "Wednesday", time: "11:00 AM – 10:00 PM" },
  { day: "Thursday", time: "11:00 AM – 10:00 PM" },
  { day: "Friday", time: "11:00 AM – 10:00 PM" },
  { day: "Saturday", time: "10:00 AM – 10:00 PM" },
  { day: "Sunday", time: "10:00 AM – 10:00 PM" },
];

export const hoursSummary = [
  { label: "Mon – Fri", time: "11 AM – 10 PM" },
  { label: "Sat & Sun", time: "10 AM – 10 PM" },
];

// Machine-readable opening hours for the live "Open now" badge.
// Keyed by JS Date.getDay(): 0 = Sunday … 6 = Saturday. Times in 24h venue
// time (America/Los_Angeles). close = 24 means midnight (end of that day).
export const timezone = "America/Los_Angeles";
export const schedule: { open: number; close: number }[] = [
  { open: 10, close: 22 }, // Sun — brunch buffet from 10
  { open: 11, close: 22 }, // Mon
  { open: 11, close: 22 }, // Tue
  { open: 11, close: 22 }, // Wed
  { open: 11, close: 22 }, // Thu
  { open: 11, close: 22 }, // Fri
  { open: 10, close: 22 }, // Sat — brunch buffet from 10
];

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Food & Drink", href: "/food-drink" },
  { label: "Golf & Booking", href: "/golf-booking" },
  { label: "Weekly Nights", href: "/league" },
  { label: "Memberships", href: "/memberships" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

// -----------------------------------------------------------------------------
// Imagery — friendly names mapped to the real venue photos in /public/images
//
// NOTE: the raw filenames are mislabeled (the camera-roll names don't match
// what's actually pictured). These friendly keys are the source of truth and
// point at the *correct* file for what each one shows. Back-of-house shots
// (kitchen doors, restroom hallway) are intentionally retired and unused.
// -----------------------------------------------------------------------------
export const img = {
  // Simulator bays — the strongest, most cinematic shots up front
  heroBay: "/images/bay-coastal-cinematic.jpg", // dark, dramatic — the hero
  bayCinematic: "/images/hero-bay-coastal.jpg", // bright bay + couch
  bayMoody: "/images/bay-coastal-moody.jpg", // two club chairs, moody
  bayLounge: "/images/bay-lounge-chairs.jpg", // lounge couch, low light
  bayLoveseat: "/images/bay-lounge-chairs.jpg", // membership lounge feel
  bayDesertData: "/images/bay-desert-data.jpg", // TrackMan shot data overlay
  bayClubs: "/images/hero-bay-coastal.jpg", // gallery filler (bright bay)
  bayRoomWide: "/images/bay-room-wide.jpg", // TrackMan activity menu
  trackmanActivities: "/images/trackman-competitions.jpg", // competitions screen
  trackmanCompetitions: "/images/trackman-competitions.jpg",

  // Food — real plates
  foodCheesesteak: "/images/cocktail-amber.jpg", // ACTUAL cheesesteak + pretzels
  foodWings: "/images/food-wings.jpg", // ACTUAL wings
  foodBurger: "/images/food-burger.jpg", // ACTUAL bacon cheeseburger + fries

  // Drinks — real cocktails
  cocktailRed: "/images/cocktail-red.jpg",
  cocktailAmber: "/images/dining-room.jpg", // ACTUAL amber cocktail
  cocktailsHighball: "/images/cocktails-highball.jpg",

  // Venue
  diningRoom: "/images/food-cheesesteak.jpg", // ACTUAL dining room
  exterior: "/images/exterior-storefront-2.jpg", // angled, sunlit storefront
  exterior2: "/images/exterior-storefront.jpg",
  entry: "/images/entry-vestibule.jpg",
  logo: "/images/logo-crest.jpg",
};

// -----------------------------------------------------------------------------
// Golf facts & pricing
// -----------------------------------------------------------------------------
export const golf = {
  bays: 5,
  courses: "500+",
  players: 4,
  rates: [
    { name: "Non-Peak", price: "$40", unit: "/hr", note: "All open hours outside peak windows" },
    { name: "Peak", price: "$50", unit: "/hr", note: "Mon–Thu 5–9p · Fri 4p–close · Sat all day · Sun 11a–2p" },
    { name: "Member", price: "$30", unit: "/hr", note: "Additional hours beyond your membership" },
  ],
};

// Leagues — recurring competitive play on TrackMan's competition suite.
export const leagues = {
  eyebrow: "Weekly at Chip Shots",
  title: "Your night to play.",
  intro:
    "Need a reason to get out and play? Pick your night. Three standing weekly nights on TrackMan — Men's Night (Sundays), Ladies Night (Wednesdays) and Open Night (Mondays), all at 5 & 7 PM. It's a standing weekly night, not a season-long league: a standing time to come hit, hang out and make it social, with a fresh leaderboard every week and no season standings to chase. Men's and Ladies Nights play a full 18; Open Night is an easy 9 for newcomers. Happy hour is live the whole time you play — a featured draft and signature cocktail delivered right to your bay. Net scoring keeps it fair for every skill level. No 110° heat.",
  nights: [
    {
      title: "Men's Night",
      day: "Sundays",
      time: "5 PM & 7 PM",
      who: "The guys' standing night out — come play, talk a little trash, grab a beer. All skill levels.",
      format: "18 holes · net Stableford · weekly winners",
      preview: "Bank F&B credit",
    },
    {
      title: "Open Night",
      day: "Mondays",
      time: "5 PM & 7 PM",
      who: "Mixed & casual — an easy 9 with generous gimmes. Total first-timers welcome.",
      format: "Easy 9 · beginner-friendly · weekly winners",
      preview: "Newcomers start here",
    },
    {
      title: "Ladies Night",
      day: "Wednesdays",
      time: "5 PM & 7 PM",
      who: "Henderson's women's night out — come play, bring friends, make it a thing. All skill levels.",
      format: "18 holes · net Stableford · weekly winners",
      preview: "Bank F&B credit",
    },
  ],
  // The fresh weekly leaderboard that runs across all three weekly nights.
  season: {
    eyebrow: "The weekly board",
    title: "Fresh leaderboard. Every week.",
    intro:
      "This is a standing weekly night, not a season-long league — nothing to chase all season, just a fresh board every week. Play any night and your net score lands on that week's combined leaderboard. Net Stableford keeps every skill level and every night fair. Top three net scores each week bank a Chip Shots F&B credit — 🥇 $50, 🥈 $25, 🥉 $15.",
    weeks: [
      { tag: "Every week", both: "A fresh leaderboard", desc: "No season standings to chase — a clean board every week, so this week's game is the only one that matters." },
      { tag: "Any night", both: "Sunday, Monday or Wednesday", desc: "Play whichever night fits your week — Men's and Ladies play a full 18, Open plays an easy 9." },
      { tag: "Fair for all", both: "Net Stableford, handicapped", desc: "Net scoring levels every skill level and every night onto one weekly leaderboard — auto-scored live on TrackMan." },
      { tag: "Win", both: "F&B credit — $50 / $25 / $15", desc: "Top three net scores each week bank a Chip Shots food & drink credit. Fresh board, new shot, every week.", highlight: true },
    ] as {
      tag: string;
      both?: string;
      open?: string;
      league?: string;
      desc: string;
      highlight?: boolean;
    }[],
    sidePots: {
      title: "House-sponsored skill prizes",
      desc: "Some nights we post a closest-to-the-pin or long-drive prize on the house — small optional entry, a set prize Chip Shots puts up, winner takes it. Auto-tracked on TrackMan, all skill levels welcome.",
    },
  },
  // The three-tier hype ladder.
  ladder: [
    { title: "Every week", desc: "A fresh combined leaderboard — top three net scores bank F&B credit ($50 / $25 / $15)." },
    { title: "Every night", desc: "Your night, your crowd — a standing weekly hang with happy hour live the whole time you play." },
    { title: "Every visit", desc: "$40 a player for the night, bay time included — nothing to prepay, just RSVP. Members play free on their membership." },
  ],
  // Quick-reference details for the "how it works" strip.
  details: [
    { label: "The nights", value: "Men's Night (Sun), Ladies Night (Wed), Open Night (Mon) — all 5 & 7 PM, all skill levels" },
    { label: "The cost", value: "$40 per player, bay time included — members play free. RSVP free, pay when you get here." },
    { label: "The round", value: "Men's & Ladies play a full 18 · Open plays an easy 9 — net Stableford, handicapped, generous gimmes" },
    { label: "The prize", value: "Top three net scores each week: $50 / $25 / $15 F&B credit" },
    { label: "Happy hour", value: "Live the whole time you play — featured draft + signature cocktail to your bay" },
  ],
  prizes: [
    { title: "Weekly F&B credit", desc: "Top three net scores each week bank a Chip Shots tab — $50 / $25 / $15 to eat & drink on us." },
    { title: "Happy hour, live", desc: "A featured draft and signature cocktail to your bay the whole time you play — every night." },
    { title: "Members play free", desc: "Every night, every week — the $40 is waived on your membership." },
  ],
  // Night perks — dedicated drink specials + F&B to make the social nights the place to be.
  nightPerks: {
    eyebrow: "Night perks",
    title: "Every night is a hang.",
    intro:
      "Come for a time to play, stay for the night. Every night has its own drink specials and shareables — all delivered right to your bay.",
    perks: [
      { title: "Happy hour, live during play", desc: "A featured draft and a signature cocktail at a deal — running the whole time you play, delivered straight to your bay." },
      { title: "Win F&B credit", desc: "Top three net scores each week bank a Chip Shots tab — $50 / $25 / $15, eat & drink on us." },
      { title: "Squad buckets & shareables", desc: "Beer buckets and foursome bites built to share, delivered straight to your bay." },
    ],
  },
  // "Does membership pay for itself?" — uses real rates from `golf` + `memberships`.
  membershipMath: {
    eyebrow: "Do the math",
    title: "For a weekly player, membership pays for itself.",
    payg: {
      title: "Pay per visit",
      lines: [
        { label: "Weekly night out (2-hr bay)", value: "≈ $400/mo" },
        { label: "Practice 1×/week (2 hrs)", value: "≈ $320/mo" },
        { label: "Food & drink", value: "Full price" },
      ],
      total: "≈ $720/mo to play & practice",
    },
    member: {
      title: "Unlimited Member",
      price: "$239/mo",
      lines: [
        { label: "Every night", value: "Free" },
        { label: "Unlimited bay time, any day", value: "Included" },
        { label: "All food & drink", value: "10% off" },
      ],
      total: "One flat price — play all you want",
    },
    bottomLine:
      "The weekly nights are $40 a player. Play two nights a week and that's $320 a month — Unlimited is $239 and covers every night free, plus unlimited bay time any day and 10% off food and drink. Members play every night on their membership and chase the weekly board every week.",
  },
  points: [
    { title: "Weekly nights", desc: "A standing time to come play, get social and land on the weekly leaderboard." },
    { title: "All skill levels", desc: "Handicapped, net scoring so every player has a real shot at the weekly board." },
    { title: "Food & drinks also available", desc: "Burgers, wings and a full bar without leaving your bay." },
  ],
  cta: "Ask about the clubs",
};

// Last day (inclusive, venue time) the BOGO first-visit offer is valid.
// The announcement banner and the /golf-booking callout both key off this,
// so the promo retires itself on Aug 1 with no site edit needed.
export const bogoUntil = "2026-07-31";

/** True while a promo with an `until` date (YYYY-MM-DD, inclusive) is live in venue time. */
export const promoActive = (until?: string): boolean => {
  if (!until) return true;
  // en-CA formats as YYYY-MM-DD, so plain string compare is date compare.
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: timezone }).format(new Date());
  return today <= until;
};

// Always-on promo banner shown at the very top of every page.
export const promoBanners: {
  code?: string;
  message: string;
  cta: string;
  href: string;
  until?: string;
}[] = [
  {
    message: "Ribbon Cutting & Opening Celebration — Thursday, July 30, 4–7 PM. A free hour of golf for every guest",
    cta: "RSVP on Facebook",
    href: "https://www.facebook.com/events/914533917674160/",
    until: "2026-07-30",
  },
  {
    code: "BOGO",
    message: "First visit? Book a 2-hour bay and the second hour's on us — through July 31",
    cta: "Redeem the offer",
    href: "/golf-booking",
    until: bogoUntil,
  },
  {
    message: "Weekly nights are live — Men's (Sun), Ladies (Wed) & Open (Mon), all skill levels",
    cta: "See the nights",
    href: "/league",
  },
  {
    message: "Trivia Night every Tuesday at 6 PM — free to play, hosted by RobotBrain",
    cta: "Grab your team",
    href: "/events",
  },
  {
    message: "Weekend Brunch Buffet — Sat & Sun 10 AM–1 PM · prime rib, omelets to order & bottomless mimosas",
    cta: "See the buffet",
    href: "/food-drink#brunch",
  },
];

export const rangeCard = {
  price: "$350",
  detail: "$400 of bay credit",
  // Public YGB topup purchase page — the Range Card topup is customer-visible there.
  buyUrl: "https://www.yourgolfbooking.com/venues/chip-shots-henderson/topups",
};

// `joinUrl` (optional): tiers that can be purchased + paid for online link
// straight to the YGB signup/checkout. Tiers without it open the inquiry form
// (we set those up by hand). Unlimited Monthly, Unlimited Annual, and Chippin'
// After Dark are self-serve on YGB; Youth + Corporate are inquiry-only.
export type Membership = {
  tier: string;
  price: string;
  per: string;
  note: string;
  featured?: boolean;
  joinUrl?: string;
};

export const memberships: Membership[] = [
  { tier: "Unlimited Annual", price: "$2,390", per: "/yr", note: "Unlimited bay time, billed annually.", featured: true, joinUrl: business.membershipJoin },
  { tier: "Unlimited Monthly", price: "$239", per: "/mo", note: "Unlimited bay time, billed monthly.", joinUrl: business.membershipJoin },
  { tier: "Chip Crew — Youth", price: "$159", per: "/mo", note: "Youth program for players 18 & under." },
  { tier: "Chippin' After Dark", price: "$119", per: "/mo", note: "Evening-focused late-night tier.", joinUrl: business.membershipJoin },
  { tier: "Corporate Club", price: "$449", per: "/mo", note: "Up to 3 users, unlimited three-hour bay sessions, 10% off F&B." },
  { tier: "Corporate Premier", price: "$699", per: "/mo", note: "Up to 5 users, four-hour sessions, a monthly team outing, 15% off F&B." },
];

export const memberBenefits = [
  "Members book bay time free — only pay for extra hours",
  "Priority booking up to 14 days in advance",
  "Up to 2 hours per visit, 2 active reservations",
  "10% off all food & beverage",
  "24/7 access to the bays",
];

// -----------------------------------------------------------------------------
// FOOD — matches the printed "Chip Shots Menu" (prices match the register)
// -----------------------------------------------------------------------------
export type MenuItem = { name: string; price: string; desc?: string };
// `note` is the short label beside the section heading; `blurb` is the longer
// line under it (sauce lists, side upgrades) that doesn't fit on one row.
export type MenuSection = {
  title: string;
  note?: string;
  blurb?: string;
  items: MenuItem[];
};

export const foodMenu: MenuSection[] = [
  {
    title: "Breakfast All Day",
    items: [
      { name: "Breakfast Burrito", price: "$13", desc: "Scrambled eggs, cheddar, your choice of bacon or sausage & potatoes O'Brien in a warm flour tortilla, with salsa & sour cream. Add guacamole $2." },
      { name: "Chicken & Waffles", price: "$16", desc: "Crispy chicken tenders over waffles with butter & maple syrup. Hot honey on request." },
      { name: "Breakfast Burger", price: "$17", desc: "Beef patty with bacon, cheddar, a fried egg & crispy smashed tater tots on a toasted bun" },
    ],
  },
  {
    title: "Shareables",
    items: [
      { name: "Mini Corn Dogs", price: "$11", desc: "Bite-sized, with mustard & ketchup" },
      { name: "Potato Skins", price: "$12", desc: "Bacon-oil-brushed & fried golden, topped with bacon, cheddar & green onion, with sour cream" },
      { name: "Pretzel Bites", price: "$12", desc: "Warm, with beer cheese & house golden sauce" },
      { name: "Pimento Cheese Dip", price: "$12", desc: "Creamy, with pork rinds or pita chips" },
      { name: "Mozzarella Sticks", price: "$12", desc: "Fried, with marinara" },
      { name: "Slider Trio", price: "$13", desc: "Three mini cheeseburgers with melted American, pickles & house sauce on toasted buns" },
      { name: "Loaded Totchos", price: "$13", desc: "Crispy tots with nacho cheese, bacon, green onions & ranch drizzle. Pico on request. Add chicken $4 or steak $5." },
      { name: "Buffalo Chicken Dip", price: "$13", desc: "Warm, with pork rinds or pita chips" },
      { name: "Crispy Pickle Spears", price: "$13", desc: "Fried dill pickle spears with ranch" },
      { name: "Taco Trio", price: "$14", desc: "Three tacos with your choice of grilled or battered cod, steak, chicken or shrimp" },
      { name: "Chicken Quesadilla", price: "$14", desc: "Grilled chicken, melted cheese & pico in a toasted tortilla, with salsa & sour cream" },
      { name: "Nachos", price: "$15", desc: "Fresh-fried chips with nacho cheese, pico, salsa & sour cream, with grilled chicken or seasoned ground beef. Upgrade to steak +$4." },
    ],
  },
  {
    title: "Salads & Wraps",
    items: [
      { name: "House Salad", price: "$9", desc: "Romaine, cheese, tomatoes, red onion & croutons with your choice of dressing. Add chicken $4 or hard-boiled egg $1." },
      { name: "Caesar Salad", price: "$10", desc: "Romaine, parmesan & croutons in creamy Caesar. Add chicken $4, salmon $9 or shrimp $6." },
      { name: "Steakhouse Chopped Salad", price: "$17", desc: "Romaine with sliced steak, crispy bacon, tomatoes, blue cheese crumbles & crispy onions" },
      { name: "Warm Spinach Salad", price: "$14", desc: "Spinach in housemade bacon dressing with steak strips, red onion & blue cheese crumbles" },
      { name: "Buffalo Chicken Wrap", price: "$13", desc: "Romaine, tomato & ranch with grilled or breaded buffalo chicken in a soft tortilla" },
      { name: "Caesar Chicken Wrap", price: "$13", desc: "Romaine, parmesan & Caesar with grilled or breaded chicken in a soft tortilla" },
    ],
  },
  {
    title: "Soups",
    note: "Cup / bowl",
    items: [
      { name: "New England Clam Chowder", price: "$7 / $13", desc: "Creamy New England-style, with tender clams & potatoes" },
      { name: "Soup of the Day", price: "$6 / $10", desc: "Ask your server about today's selection" },
    ],
  },
  {
    title: "Wings & Tenders",
    note: "Sauces, rubs & glazes",
    blurb: "Sauces — Buffalo · BBQ · Honey BBQ · Sweet Chili · Garlic Parm · Mango Habanero · Thai BBQ · Sweet Teriyaki · Hot Honey · Sweet Tea Lemon Glaze. Rubs — Lemon Pepper · Honey Chipotle · Honey Garlic.",
    items: [
      { name: "Boneless Wings", price: "$12 / $20", desc: "Six or twelve · crispy all-white chicken bites tossed in your choice of sauce or dry rub" },
      { name: "Bone-In Wings", price: "$14 / $24", desc: "Six or twelve · crispy, juicy wings tossed in your choice of sauce or dry rub" },
      { name: "Crispy Chicken Tenders", price: "$16", desc: "Breaded, with your choice of sauce or dry rub" },
    ],
  },
  {
    title: "Signature Burgers",
    note: "Served with a standard side",
    blurb: "Upgrade to a premium side $2 · substitute a veggie patty $3",
    items: [
      { name: "The Chip Shots Classic", price: "$16", desc: "Melted cheddar, lettuce, tomato, pickles, onion & house sauce" },
      { name: "The Mulligan Melt", price: "$17", desc: "Provolone, caramelized onions & Thousand Island on toasted rye" },
      { name: "BBQ Burger", price: "$17", desc: "BBQ sauce, cheddar, bacon, onion rings & pickles" },
      { name: "Mushroom Burger", price: "$18", desc: "Sautéed mushrooms & melted provolone with lettuce, tomato & mayo" },
      { name: "Guacamole Burger", price: "$18", desc: "Guacamole, pepper jack, lettuce, tomato & chipotle mayo" },
      { name: "Spicy Jalapeño Burger", price: "$18", desc: "Pepper jack, jalapeños, bacon, lettuce, tomato & chipotle mayo" },
      { name: "Smashburger", price: "$16", desc: "Two beef patties, American cheese, grilled onions, Thousand Island & pickles" },
    ],
  },
  {
    title: "Classics",
    items: [
      { name: "Fish & Chips", price: "$18", desc: "Beer-battered cod fried golden, with fries, coleslaw & fresh dill tartar sauce" },
      { name: "Baby Back Ribs", price: "$22", desc: "Slow-roasted & glazed with hickory BBQ, with hickory ranch-style beans & coleslaw" },
      { name: "Sweet Tea Lemon Glazed Salmon", price: "$23", desc: "Grilled salmon brushed with our sweet tea lemon glaze, with broccoli & rice" },
      { name: "Chicken Parmesan", price: "$19", desc: "Golden pan-fried chicken with marinara, mozzarella & parmesan on a bed of pasta" },
      { name: "Fettuccine Alfredo", price: "$16", desc: "Creamy garlic parmesan sauce finished with cracked black pepper. Add chicken $4 or shrimp $6." },
      { name: "Ribeye", price: "$26", desc: "10 oz grilled to order with garlic herb butter, a baked potato & broccoli" },
      { name: "Loaded Baked Potato", price: "$9", desc: "Cheddar, bacon, green onion, butter & sour cream. Add chicken $4 or steak $7." },
    ],
  },
  {
    title: "Handhelds",
    note: "Served with a standard side",
    blurb: "Upgrade to a premium side $2",
    items: [
      { name: "Clubhouse Sandwich", price: "$14", desc: "Turkey, crispy bacon, cheddar, lettuce, tomato & mayo on sourdough" },
      { name: "Crispy Chicken Sandwich", price: "$15", desc: "Breaded golden with lettuce, tomato & mayo. Toss it in your favorite wing sauce at no charge." },
      { name: "Philly Cheesesteak", price: "$17", desc: "Thin-sliced beef, grilled onions, peppers, mushrooms, provolone & American on a hoagie · substitute chicken at no charge" },
      { name: "French Dip Sandwich", price: "$17", desc: "Sliced beef, grilled onions & provolone on a hoagie, served with au jus" },
      { name: "Grilled Cheese", price: "$12", desc: "Cheddar & provolone melted with sliced tomato on grilled sourdough" },
    ],
  },
  {
    title: "A La Carte Sides",
    note: "Standard $5 · premium $7",
    items: [
      { name: "Seasoned Fries", price: "$5" },
      { name: "Tater Tots", price: "$5" },
      { name: "Hickory Ranch-Style Beans", price: "$5" },
      { name: "Rice", price: "$5" },
      { name: "Broccoli", price: "$5" },
      { name: "Sweet Potato Fries", price: "$7" },
      { name: "Onion Rings", price: "$7" },
      { name: "Side Salad", price: "$7" },
      { name: "Baked Potato", price: "$7" },
    ],
  },
  {
    title: "Kids Meals",
    note: "Ages 12 & under",
    blurb: "Every kids meal includes a juice box & applesauce. Upgrade to a standard side $2 · substitute a fountain drink $2.",
    items: [
      { name: "Grilled Cheese Sandwich", price: "$8" },
      { name: "Chicken Tenders", price: "$8" },
      { name: "Mini Corn Dogs", price: "$8" },
      { name: "Pasta Alfredo", price: "$8" },
    ],
  },
];

// The printed menu lists no fixed dessert selection — it rotates daily.
export const dessertsNote = "Ask your server about today's selection.";

export const shakes: MenuItem[] = [
  { name: "Classic Shake", price: "$8", desc: "Vanilla, strawberry or chocolate" },
  { name: "Fudge Brownie Bliss", price: "$10", desc: "Chocolate shake with brownie bites, whipped cream & chocolate drizzle" },
  { name: "Campfire S'mores", price: "$10", desc: "Chocolate-marshmallow shake with graham crumble, whipped cream & chocolate drizzle" },
  { name: "Peanut Butter Cup", price: "$10", desc: "Vanilla shake blended with peanut butter cups & chocolate, whipped cream & chocolate drizzle" },
];

export const shakes21: MenuItem[] = [
  { name: "Peanut Butter Whiskey", price: "$15", desc: "Vanilla shake blended with peanut butter whiskey & chocolate peanut butter cups" },
  { name: "Frozen Baileys Cream Shake", price: "$15", desc: "A smooth frozen blend of Baileys & vanilla, whipped cream & chocolate drizzle" },
  { name: "Strawberry Daiquiri Shake", price: "$15", desc: "Strawberry shake blended with rum, whipped cream & strawberry drizzle" },
];

export const foodMore =
  "Ask your server about today's specials. Parties of 8 or more are charged a 20% service fee · prices do not include tax.";

// -----------------------------------------------------------------------------
// WEEKEND BRUNCH BUFFET — Sat & Sun, 10 AM–1 PM. Featured at the top of
// /food-drink and in the sitewide promo banner rotation.
// -----------------------------------------------------------------------------
export const brunch = {
  title: "Weekend Brunch Buffet",
  days: "Saturday & Sunday",
  time: "10 AM – 1 PM",
  intro:
    "Carved prime rib, omelets made to order and a shrimp cocktail bar — every Saturday and Sunday morning. Add bottomless mimosas and Bloody Marys and stay for the back nine.",
  spread: [
    "Prime Rib",
    "Made-to-Order Omelets",
    "Chicken & Waffles",
    "Scrambled Eggs",
    "Bacon",
    "Sausage",
    "Breakfast Potatoes",
    "Shrimp Cocktail",
    "Fresh Fruit",
    "Pastries",
  ],
  spreadMore: "and more",
  pricing: [
    { label: "Adult Buffet", price: "$35" },
    {
      label: "Adult Bottomless Buffet",
      price: "$50",
      note: "Includes unlimited mimosas & Bloody Marys",
    },
    { label: "Kids 6–12", price: "$17" },
    { label: "Kids 5 & under", price: "Free" },
  ],
};

// Health-department consumer advisory (the * items on the printed menu).
export const foodAdvisory =
  "Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.";

// -----------------------------------------------------------------------------
// DRINK
// -----------------------------------------------------------------------------
export const drafts: MenuItem[] = [
  { name: "Coors Light", price: "$6" },
  { name: "Modelo", price: "$7" },
  { name: "805", price: "$8" },
  { name: "Angry Orchard", price: "$8" },
  { name: "Cali Squeeze", price: "$9" },
  { name: "Able Baker Atomic Duck IPA", price: "$10", desc: "Able Baker Brewing — Las Vegas" },
];

export const pitchers: MenuItem[] = [
  { name: "Coors Pitcher", price: "$20" },
  { name: "Modelo Pitcher", price: "$20" },
  { name: "805 Pitcher", price: "$25" },
  { name: "Angry Orchard Pitcher", price: "$25" },
  { name: "Cali Squeeze Pitcher", price: "$30" },
  { name: "Atomic Duck Pitcher", price: "$30" },
];

export const bottlesCans: MenuItem[] = [
  { name: "Ginger Beer", price: "$4" },
  { name: "Heineken 0.0", price: "$6", desc: "Non-alcoholic" },
  { name: "Miller Lite", price: "$6" },
  { name: "Stella Artois", price: "$6" },
  { name: "Modelo Oro", price: "$7" },
  { name: "Corona", price: "$7" },
  { name: "Guinness", price: "$7" },
  { name: "Mike's Hard Lemonade", price: "$7" },
  { name: "Long Drink", price: "$8", desc: "Peach · Pineapple · Traditional" },
];

export const wine: MenuItem[] = [
  { name: "House Pours", price: "$9", desc: "19 Crimes Red · SeaGlass Pinot Grigio · Josh Rosé · Mark West Pinot Grigio" },
  { name: "Josh Cabernet Sauvignon", price: "$12" },
  { name: "Kim Crawford Sauvignon Blanc", price: "$12" },
  { name: "Ruffino Prosecco", price: "$12" },
  { name: "La Crema Chardonnay", price: "$13" },
];

export const wineBottles: MenuItem[] = [
  { name: "19 Crimes Red", price: "$36" },
  { name: "Josh Rosé", price: "$36" },
  { name: "SeaGlass Pinot Grigio", price: "$36" },
  { name: "Kim Crawford Sauvignon Blanc", price: "$48" },
  { name: "Josh Cabernet", price: "$48" },
  { name: "Ruffino Prosecco", price: "$48" },
  { name: "La Crema Chardonnay", price: "$52" },
];

export const cocktails: MenuItem[] = [
  { name: "Transfusion", price: "$12", desc: "Weber Ranch vodka, grape juice & ginger ale — the golfer's classic" },
  { name: "Azalea", price: "$12", desc: "Weber Ranch vodka, lemonade & a grenadine sink" },
  { name: "Peach Palmer", price: "$12", desc: "Weber Ranch vodka, peach purée, lemonade & iced tea" },
  { name: "Blue Lagoon", price: "$12", desc: "Weber Ranch vodka, blue curaçao & lemonade" },
  { name: "Bloody Mary", price: "$14" },
  { name: "Raspberry Lemon Drop", price: "$14", desc: "Stoli Razz, fresh lemon & a sugar rim" },
  { name: "Par Old Fashioned", price: "$14", desc: "Buffalo Trace bourbon, sugar & Angostura bitters" },
  { name: "Crown Peach Mule", price: "$15", desc: "Crown Peach whiskey, lime, peach purée & ginger beer" },
  { name: "Blueberry Blush", price: "$15", desc: "Stoli Blueberry vodka, lime & a splash of cranberry" },
  { name: "Espresso Martini", price: "$15", desc: "Stoli Vanilla vodka, espresso liqueur & fresh espresso" },
  { name: "Margarita", price: "$15", desc: "El Cristiano Silver tequila, lime & agave" },
  { name: "Cucumber Paloma", price: "$15", desc: "El Cristiano Silver tequila, grapefruit, lime & cucumber" },
  { name: "Birdie Old Fashioned", price: "$16", desc: "Woodford Reserve bourbon, sugar & Angostura bitters" },
  { name: "Eagle Old Fashioned", price: "$16", desc: "Eagle Rare bourbon, sugar & orange bitters" },
  { name: "Albatross Old Fashioned", price: "$25", desc: "El Cristiano Extra Añejo tequila, agave & Angostura bitters" },
];

export type SpiritGroup = { type: string; items: MenuItem[] };
export const spirits: SpiritGroup[] = [
  {
    type: "Bourbon & Whiskey",
    items: [
      { name: "Fireball Cinnamon Whiskey", price: "$7" }, { name: "Jack Daniel's", price: "$11" },
      { name: "Jameson Irish", price: "$11" }, { name: "Crown Royal", price: "$11" },
      { name: "Maker's Mark", price: "$11" }, { name: "Horse Soldier", price: "$12" },
      { name: "Buffalo Trace", price: "$12" }, { name: "Bulleit Bourbon", price: "$12" },
      { name: "Jack Daniel's Honey", price: "$13" }, { name: "Woodford Reserve", price: "$13" },
      { name: "Pendleton Midnight", price: "$13" }, { name: "Basil Hayden", price: "$14" },
      { name: "Eagle Rare 10 Year", price: "$15" }, { name: "Weller Antique 107", price: "$17" },
      { name: "Weller Special Reserve", price: "$17" }, { name: "Blanton's Single Barrel", price: "$20" },
    ],
  },
  {
    type: "Tequila & Mezcal",
    items: [
      { name: "Espolón Blanco (Well)", price: "$9" }, { name: "Patrón Silver", price: "$13" },
      { name: "El Cristiano Silver", price: "$13" }, { name: "Casamigos Blanco", price: "$13" },
      { name: "Del Maguey Vida Mezcal", price: "$13" }, { name: "Casamigos Reposado", price: "$14" },
      { name: "Don Julio Blanco", price: "$14" }, { name: "Don Julio Reposado", price: "$15" },
      { name: "Don Julio Añejo", price: "$17" }, { name: "El Cristiano Extra Añejo", price: "$22" },
      { name: "Clase Azul Reposado", price: "$38" },
    ],
  },
  {
    type: "Scotch & Cognac",
    items: [
      { name: "Dewar's White Label", price: "$10" }, { name: "Hennessy V.S.", price: "$12" },
      { name: "Johnnie Walker Black", price: "$14" }, { name: "Macallan 12 Year", price: "$20" },
      { name: "Johnnie Walker Blue", price: "$45" },
    ],
  },
  {
    type: "Vodka",
    items: [
      { name: "Weber Ranch 1902 (Well)", price: "$9" }, { name: "Tito's", price: "$11" },
      { name: "Ketel One", price: "$11" }, { name: "Grey Goose", price: "$12" },
      { name: "Belvedere", price: "$12" },
    ],
  },
  {
    type: "Gin",
    items: [
      { name: "Bombay Dry (Well)", price: "$9" }, { name: "Bombay Sapphire", price: "$10" },
      { name: "Tanqueray", price: "$11" },
    ],
  },
  {
    type: "Rum",
    items: [
      { name: "Bacardi Superior (Well)", price: "$8" }, { name: "Captain Morgan", price: "$8" },
      { name: "Malibu", price: "$8" }, { name: "Sailor Jerry", price: "$9" },
    ],
  },
  {
    type: "Liqueurs & Cordials",
    items: [
      { name: "Baileys Irish Cream", price: "$9" }, { name: "DiSaronno Amaretto", price: "$10" },
      { name: "Grand Marnier", price: "$11" },
    ],
  },
];

// -----------------------------------------------------------------------------
// Happy Hour
// -----------------------------------------------------------------------------
export const happyHour = {
  window: "Mon–Fri · 3–6 PM",
  lateWindow: "The Night Cap · Sun–Wed · 8 PM–close",
  note: "No clubs, no tee time, no problem — pull up to the bar, grab a table, or take a bay. Happy-hour pricing runs in the bays too, so you can eat, drink and play without getting up. And it comes back around late: The Night Cap runs the same happy-hour pricing Sunday through Wednesday from 8 PM to close — the second session of every weekly night rolls straight into it.",
  drinks: [
    { name: "Domestic Drafts", price: "$5", desc: "Coors Light · Modelo · Cali Squeeze" },
    { name: "Well Drinks", price: "$6", desc: "Vodka · gin · tequila · rum · bourbon" },
    { name: "Craft, Cider & Wine", price: "$7", desc: "805 · Angry Orchard · House Wine" },
    { name: "House Cocktails", price: "$10", desc: "Par Old Fashioned · Transfusion · Azalea · Peach Palmer · Blue Lagoon" },
    { name: "All Other Cocktails", price: "$2 off", desc: "Crown Peach Mule, Espresso Martini, Margarita, Paloma & more" },
  ],
  bites: [
    { name: "Pretzel Bites", price: "$8" },
    { name: "Mozzarella Sticks", price: "$8" },
    { name: "Mini Corn Dogs", price: "$8" },
    { name: "Crispy Pickle Spears", price: "$8" },
    { name: "Boneless Wings (6)", price: "$8" },
    { name: "Pimento Cheese Dip", price: "$8" },
    { name: "Loaded Totchos", price: "$10" },
    { name: "Buffalo Chicken Dip", price: "$10" },
    { name: "Slider Trio", price: "$10" },
    { name: "Caddie's Combo · draft + 6 boneless wings", price: "$12" },
    { name: "Add Fries or Tots to anything", price: "+$4" },
  ],
};

// -----------------------------------------------------------------------------
// Trivia Night — recurring weekly event, hosted by RobotBrain every Tuesday.
// Prize ladder matches the in-store promo (see /trivia-story marketing asset).
// -----------------------------------------------------------------------------
export const trivia = {
  eyebrow: "Every Tuesday Night",
  title: "Trivia Night",
  host: "Hosted by RobotBrain",
  day: "Tuesday",
  time: "6 PM",
  intro:
    "Grab your team and settle in — free live trivia every Tuesday at 6 PM, hosted by RobotBrain. Full bar, full kitchen and no golf required. No cover, no sign-up: just show up early and grab a table.",
  prizes: [
    { place: "1st", label: "Winner", reward: "$50 Gift Card" },
    { place: "2nd", label: "Runner-Up", reward: "$25 Gift Card" },
  ],
  note: "Full bar · Kitchen open · No golf required",
};

// -----------------------------------------------------------------------------
// Events
// -----------------------------------------------------------------------------
export const eventTypes = [
  { title: "Birthday Parties", desc: "Adults and kids alike — bays, burgers and cake. Ties to our Chip Crew youth program." },
  { title: "Corporate & Team Building", desc: "Off-sites, client outings and team nights with private bays and catering." },
  { title: "Leagues & Tournaments", desc: "Weekly leagues and bracketed tournaments on TrackMan’s competition suite." },
  { title: "Bachelor & Bachelorette", desc: "A standout stop on the celebration circuit — drinks, golf and good company." },
  { title: "Holiday Parties", desc: "Climate-controlled, festive and easy to host for groups of any size." },
];

// -----------------------------------------------------------------------------
// FAQ — answers the real questions people search before visiting. Rendered on
// /faq and emitted as FAQPage structured data for "People Also Ask" / AI search.
// -----------------------------------------------------------------------------
export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Do I need to know how to golf?",
    a: "Not at all. The TrackMan simulators read your swing, keep score and handicap the games automatically, so total beginners and seasoned golfers have a great time in the same group. Clubs are provided — just show up.",
  },
  {
    q: "How much does a bay cost?",
    a: "Bays are billed by the hour, not per person, and hold up to four players — so splitting one with friends is the most affordable way to play. Non-peak time is $40/hour and peak time is $50/hour. Members pay $30/hour for any hours beyond their plan.",
  },
  {
    q: "How many people can play in one bay?",
    a: "Up to four players per bay. We have five climate-controlled bays, each with its own screen, comfortable seating and a server who brings food and drinks right to you.",
  },
  {
    q: "Do you provide golf clubs?",
    a: "Yes — clubs are available to use at no extra charge, so you can come empty-handed. You're welcome to bring your own if you prefer.",
  },
  {
    q: "Do you serve food and drinks?",
    a: "We have a full kitchen and a full bar. Burgers, wings, shareables, sandwiches, shakes, craft drafts, wine and signature cocktails all come straight to your bay. Happy hour runs Monday–Friday 3–6 PM, plus The Night Cap — the same happy-hour pricing Sunday–Wednesday from 8 PM to close. Bays included, both windows.",
  },
  {
    q: "Is Chip Shots family-friendly? Can kids play?",
    a: "Yes. Indoor golf is great for all ages, and we host kids' birthday parties tied to our Chip Crew youth program. Families are welcome any time during open hours.",
  },
  {
    q: "Do I need a reservation, or can I walk in?",
    a: "Walk-ins are welcome whenever a bay is open, but booking ahead is the surest way to get the time you want — especially on evenings and weekends. You can reserve a bay online in about a minute.",
  },
  {
    q: "What are your hours?",
    a: "We're open every day, 11 AM–10 PM.",
  },
  {
    q: "Where are you located?",
    a: "1473 E Lake Mead Pkwy, Suite 110, Henderson, NV 89015 — in the heart of Henderson, just off Lake Mead Parkway.",
  },
  {
    q: "Do you host parties and corporate events?",
    a: "Absolutely. Private bays, catered food and a full bar make Chip Shots an easy yes for birthdays, corporate team nights, bachelor/bachelorette groups and holiday parties. Tell us what you're celebrating and we'll tailor it.",
  },
  {
    q: "What are the weekly clubs and how do I join?",
    a: "We run three standing weekly nights on TrackMan — Men's Night (Sundays) and Ladies Night (Wednesdays) play a full 18, and Open Night (Mondays) is an easy 9 for newcomers, all at 5 & 7 PM. It's a standing weekly night, not a season-long league — a fresh leaderboard every week, nothing to chase all season. Happy hour is live the whole time you play. Play any night and your net score lands on that week's combined board; the top three net scores each week bank a Chip Shots F&B credit ($50 / $25 / $15). It's $40 per player for the night with your bay time included — RSVP free and pay when you get here; members play free on their membership.",
  },
  {
    q: "Is there a membership?",
    a: "Yes. Unlimited bay time is $239/month or $2,390/year, plus youth, late-night and corporate tiers. Members get priority booking, 10% off food and drink, and play every night free.",
  },
];

export const owners = "Mark, Roseanne & Cameron Mizell";
