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
  booking:
    "https://www.yourgolfbooking.com/venues/chip-shots-henderson/booking/simulator-bays",
  giftCards:
    "https://order.toasttab.com/egiftcards/chip-shots-1473-east-lake-mead-parkway-suite-110",
};

// Father's Day eGift card promo. Bonus is fulfilled in-store on the first
// visit (Toast can't auto-apply a bonus), which also drives a return trip.
// Adjust the numbers/deadline here and they update everywhere.
export const giftCardPromo = {
  occasion: "Father's Day",
  deadline: "Sunday, June 21",
  threshold: 100,
  bonus: 25,
  url: "https://order.toasttab.com/egiftcards/chip-shots-1473-east-lake-mead-parkway-suite-110",
};

// VIP Crew email/SMS capture. Submissions POST to a Google Form whose
// responses fill a Google Sheet — export that to CSV and import into Toast
// Marketing (email + SMS). The consent text below is stored verbatim with
// every signup as the TCPA opt-in record. To change fields, edit the Form,
// then refresh these entry IDs from its live HTML (FB_PUBLIC_LOAD_DATA_).
export const vipForm = {
  action:
    "https://docs.google.com/forms/d/e/1FAIpQLSfcx5GdTCdF_SOHGtT5bBjEkYZnuLr02x-FnmmsntcGvC3Fjw/formResponse",
  fields: {
    email: "entry.1896220856",
    phone: "entry.1122805014",
    consent: "entry.319411053",
  },
  consentRecord:
    "Opted in to marketing email + SMS via chipshotshenderson.com VIP Crew form",
};

export const hours = [
  { day: "Monday", time: "11:00 AM – 10:00 PM" },
  { day: "Tuesday", time: "11:00 AM – 10:00 PM" },
  { day: "Wednesday", time: "11:00 AM – 10:00 PM" },
  { day: "Thursday", time: "11:00 AM – 10:00 PM" },
  { day: "Friday", time: "11:00 AM – 12:00 AM" },
  { day: "Saturday", time: "11:00 AM – 12:00 AM" },
  { day: "Sunday", time: "11:00 AM – 10:00 PM" },
];

export const hoursSummary = [
  { label: "Sun – Thu", time: "11 AM – 10 PM" },
  { label: "Fri – Sat", time: "11 AM – Midnight" },
];

// Machine-readable opening hours for the live "Open now" badge.
// Keyed by JS Date.getDay(): 0 = Sunday … 6 = Saturday. Times in 24h venue
// time (America/Los_Angeles). close = 24 means midnight (end of that day).
export const timezone = "America/Los_Angeles";
export const schedule: { open: number; close: number }[] = [
  { open: 11, close: 22 }, // Sun
  { open: 11, close: 22 }, // Mon
  { open: 11, close: 22 }, // Tue
  { open: 11, close: 22 }, // Wed
  { open: 11, close: 22 }, // Thu
  { open: 11, close: 24 }, // Fri
  { open: 11, close: 24 }, // Sat
];

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Food & Drink", href: "/food-drink" },
  { label: "Golf & Booking", href: "/golf-booking" },
  { label: "Leagues", href: "/league" },
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
  eyebrow: "Now forming",
  title: "Find your league.",
  intro:
    "Henderson's indoor golf league season is officially here — three weekly nights on TrackMan, five bays, net scoring and handicaps so every match stays competitive. Week 0 is a free preview, and food and drinks come right to your bay. No 110° heat.",
  nights: [
    {
      title: "Open League",
      day: "Mondays",
      time: "5 PM & 7 PM",
      who: "Mixed & casual — every skill level welcome.",
      format: "Net Stableford, handicapped",
      preview: "Free preview June 22",
    },
    {
      title: "Ladies League",
      day: "Wednesdays",
      time: "5 PM & 7 PM",
      who: "Henderson's women's league — handicapped so every match is a real fight.",
      format: "Net Stableford · live leaderboard",
      preview: "Free preview June 24",
      competitive: true,
    },
    {
      title: "Men's League",
      day: "Sundays",
      time: "5 PM & 7 PM",
      who: "The serious night — handicapped so every skill level competes, with both a gross and a net champion crowned.",
      format: "Net stroke, handicapped · gross + net winners",
      preview: "Free preview June 28",
      competitive: true,
    },
  ],
  // How a single season runs — Week 0 free, four-week race, then a finale.
  season: {
    eyebrow: "How a season works",
    title: "Six weeks. Champions crowned. Then we run it back.",
    intro:
      "The league never stops — it runs in themed seasons. Each one opens with a free Week 0, then a four-week points race with a different game every week — and Open never plays the same one as the Ladies/Men's nights, so it pays to play both. It all ends with a Club Championship.",
    weeks: [
      { tag: "Week 0", both: "Free Kickoff", desc: "Individual stroke play — play on us, we set your handicap, no index needed." },
      { tag: "Week 1", open: "Stableford", league: "Team Best Ball", desc: "Points race opens — every prize doubled.", highlight: true },
      { tag: "Week 2", open: "Team Scramble", league: "Net Medal", desc: "The games flip — play both nights, never the same game." },
      { tag: "Week 3", open: "Match Play", league: "Stableford", desc: "Bracket play on Open; points-race Stableford on league night." },
      { tag: "Week 4", open: "Team Best Ball", league: "Skins", desc: "Best-ball teams on Open, skins shootout on your night — last chance to climb before the finale." },
      { tag: "Finale", both: "Club Championship", desc: "Gross & net champions crowned — week of July 27." },
    ] as {
      tag: string;
      both?: string;
      open?: string;
      league?: string;
      desc: string;
      highlight?: boolean;
    }[],
    sidePots: {
      title: "Side pots every night",
      desc: "On top of the main game, every league night runs a Closest-to-the-Pin and a Long-Drive pot — a few bucks in, winner takes the pile. All auto-scored on TrackMan, all skill levels welcome.",
    },
  },
  // The three-tier hype ladder.
  ladder: [
    { title: "Every week", desc: "A weekly winner plus closest-to-pin and long-drive side pots up for grabs every night." },
    { title: "Every season", desc: "Six weeks builds to a Club Championship — Ladies & Men's each crown a gross and a net champion." },
    { title: "Every year", desc: "Season champs & weekly winners qualify for the year-end Tournament of Champions." },
  ],
  // Quick-reference details for the "how it works" strip.
  details: [
    { label: "The round", value: "18 holes, handicapped, in a 2-hour bay block" },
    { label: "Scoring", value: "Handicapped, net scoring all season — gross & net champions crowned at the finale" },
    { label: "Buy-in", value: "$40 a night · Week 0 free · members play every night free" },
    { label: "The tech", value: "Auto-scored on TrackMan with live season leaderboards" },
  ],
  prizes: [
    { title: "Weekly F&B credits", desc: "Win your night, eat & drink on us next week." },
    { title: "Membership months", desc: "Season champions take home free membership months." },
    { title: "Double Week 1", desc: "Every prize is doubled the first week of the season." },
  ],
  // League-night perks — dedicated league-night drink specials + F&B to make league nights the place to be.
  nightPerks: {
    eyebrow: "Game night perks",
    title: "Every league night is a party.",
    intro:
      "Show up to compete, stay for the night. Every league night has its own drink specials and shareables — all delivered right to your bay.",
    perks: [
      { title: "League drink specials", desc: "A featured draft and a signature league cocktail at a deal — running all league night, delivered straight to your bay." },
      { title: "Win F&B credit", desc: "Take your night and bank a Chip Shots tab — eat & drink on us your next visit." },
      { title: "Squad buckets & shareables", desc: "Beer buckets and foursome bites built to share, delivered straight to your bay." },
    ],
  },
  // "Does membership pay for itself?" — uses real rates from `golf` + `memberships`.
  membershipMath: {
    eyebrow: "Do the math",
    title: "For a weekly player, membership pays for itself.",
    payg: {
      title: "Pay per night",
      lines: [
        { label: "4 league nights", value: "$160/mo" },
        { label: "Practice 1×/week (2 hrs)", value: "$320/mo" },
        { label: "Food & drink", value: "Full price" },
      ],
      total: "≈ $480/mo to play & practice",
    },
    member: {
      title: "Unlimited Member",
      price: "$239/mo",
      lines: [
        { label: "Every league night", value: "Free" },
        { label: "Unlimited bay time, any day", value: "Included" },
        { label: "All food & drink", value: "10% off" },
      ],
      total: "One flat price — play all you want",
    },
    bottomLine:
      "Even with zero practice, four league nights is $160/mo in buy-ins — two-thirds of a membership. Play both your leagues — Open plus your league night — and you're at $320/mo in buy-ins alone, more than Unlimited costs. Add any practice and it's not close.",
  },
  points: [
    { title: "Weekly league nights", desc: "Recurring play with live leaderboards and season-long standings." },
    { title: "All skill levels", desc: "Handicapped, net scoring so every player has a real shot." },
    { title: "Food & drinks also available", desc: "Burgers, wings and a full bar without leaving your bay." },
  ],
  cta: "Ask about leagues",
  form: "https://docs.google.com/forms/d/e/1FAIpQLSd8IPkCGaZN2pPiBMPga5wDrod7t4xF6kx3cdb0-WUiMGFZvg/viewform?embedded=true",
  formLink: "https://docs.google.com/forms/d/e/1FAIpQLSd8IPkCGaZN2pPiBMPga5wDrod7t4xF6kx3cdb0-WUiMGFZvg/viewform",
};

// Always-on promo banner shown at the very top of every page.
export const promoBanner = {
  message: "Weekly leagues now forming — all skill levels welcome",
  cta: "Join a league",
  href: "/league",
};

export const rangeCard = { price: "$350", detail: "10 hours of bay time" };

export const memberships = [
  { tier: "Unlimited Annual", price: "$2,390", per: "/yr", note: "Unlimited bay time, billed annually.", featured: true },
  { tier: "Unlimited Monthly", price: "$239", per: "/mo", note: "Unlimited bay time, billed monthly." },
  { tier: "Chip Crew — Youth", price: "$159", per: "/mo", note: "Youth program for players 18 & under." },
  { tier: "Chippin' After Dark", price: "$119", per: "/mo", note: "Evening-focused late-night tier." },
  { tier: "Corporate Club", price: "$449", per: "/mo", note: "Business membership for teams." },
  { tier: "Corporate Premier", price: "$699", per: "/mo", note: "Premium business membership." },
];

export const memberBenefits = [
  "Members book bay time free — only pay for extra hours",
  "Priority booking up to 14 days in advance",
  "Up to 2 hours per visit, 2 active reservations",
  "10% off all food & beverage",
  "24/7 access to the bays",
];

// -----------------------------------------------------------------------------
// FOOD — captured from Toast (prices match the register)
// -----------------------------------------------------------------------------
export type MenuItem = { name: string; price: string; desc?: string };
export type MenuSection = { title: string; note?: string; items: MenuItem[] };

export const foodMenu: MenuSection[] = [
  {
    title: "Shareables",
    items: [
      { name: "Slider Trio", price: "$13", desc: "Mini cheeseburgers, American, pickles & house sauce" },
      { name: "Loaded Totchos", price: "$13", desc: "Cheddar, bacon, green onions & ranch drizzle" },
      { name: "Chicken Quesadilla", price: "$14", desc: "Grilled chicken, melted cheese, salsa & sour cream" },
      { name: "Buffalo Chicken Dip", price: "$13", desc: "Warm, with pork rinds or pita chips" },
      { name: "Crispy Pickle Spears", price: "$13", desc: "Fried dill pickle spears with ranch" },
      { name: "Mac & Cheese Bites", price: "$13", desc: "With ranch, BBQ or buffalo sauce" },
      { name: "Pretzel Bites", price: "$12", desc: "Warm, with beer cheese & house golden sauce" },
      { name: "Pimento Cheese Dip", price: "$12", desc: "Warm & creamy, with pork rinds or pita chips" },
      { name: "Mozzarella Sticks", price: "$12", desc: "Fried, with marinara" },
      { name: "Mini Corn Dogs", price: "$11", desc: "Bite-sized, with mustard & ketchup" },
    ],
  },
  {
    title: "Wings & Tenders",
    note: "Sauces, rubs & glazes",
    items: [
      { name: "Bone-In Wings", price: "$14 / $24", desc: "Six or twelve · choice of sauce or dry rub" },
      { name: "Boneless Wings", price: "$12 / $19", desc: "Six or twelve · choice of sauce or dry rub" },
      { name: "Crispy Chicken Tenders", price: "$13", desc: "Breaded, with your choice of sauce or rub" },
    ],
  },
  {
    title: "Salads & Wraps",
    note: "Add chicken +$4",
    items: [
      { name: "House Salad", price: "$9", desc: "Romaine, cheese, tomatoes & croutons" },
      { name: "Caesar Salad", price: "$10", desc: "Romaine, parmesan & croutons" },
      { name: "BLTA Salad", price: "$14", desc: "Bacon, tomato, avocado & croutons with ranch" },
      { name: "Buffalo Chicken Wrap", price: "$13", desc: "Romaine, tomato & ranch, grilled or breaded" },
      { name: "Chicken Caesar Wrap", price: "$13", desc: "Romaine, parmesan & Caesar dressing" },
      { name: "Clubhouse Wrap", price: "$13", desc: "Turkey, bacon, lettuce, tomato & mayo" },
    ],
  },
  {
    title: "Signature Burgers",
    note: "Served with fries or tots",
    items: [
      { name: "The Chip Shots Classic", price: "$16", desc: "Cheddar, lettuce, tomato, pickles, onion & house sauce" },
      { name: "The Mulligan Melt", price: "$17", desc: "Swiss, caramelized onions & Thousand Island on rye" },
      { name: "BBQ Burger", price: "$17", desc: "BBQ, cheddar, bacon, onion rings & pickles" },
      { name: "Mushroom & Swiss", price: "$18", desc: "Sautéed mushrooms & melted Swiss" },
      { name: "Guacamole Burger", price: "$18", desc: "Guacamole, pepper jack & chipotle mayo" },
      { name: "Beer Cheese Bacon Burger", price: "$18", desc: "Bacon, caramelized onions & pickles in warm beer cheese" },
      { name: "Spicy Jalapeño Burger", price: "$18", desc: "Pepper jack, jalapeños, bacon & chipotle mayo" },
    ],
  },
  {
    title: "Classics",
    note: "Served with fries or tots",
    items: [
      { name: "All-Beef Hot Dog", price: "$9", desc: "Grilled, with your choice of toppings" },
      { name: "Clubhouse Sandwich", price: "$14", desc: "Turkey, bacon, lettuce, tomato & mayo" },
      { name: "Crispy Chicken Sandwich", price: "$15", desc: "Breaded golden, with lettuce, tomato & mayo" },
      { name: "Philly Cheesesteak", price: "$17", desc: "Thin-sliced beef, onions, peppers & provolone" },
      { name: "French Dip Sandwich", price: "$17", desc: "Sliced beef & grilled onions with au jus" },
    ],
  },
];

export const desserts: MenuItem[] = [
  { name: "Chocolate Lava Cake", price: "$9", desc: "Warm molten center, vanilla ice cream & powdered sugar" },
  { name: "Basque Cheesecake", price: "$10", desc: "Caramelized & velvety, with strawberry topping" },
  { name: "S'mores Cake", price: "$12", desc: "Chocolate cake, marshmallow & graham with vanilla ice cream" },
];

export const shakes: MenuItem[] = [
  { name: "Cookie Butter Crunch", price: "$10", desc: "Vanilla, cookie butter & cookie crumble" },
  { name: "Fudge Brownie Bliss", price: "$10", desc: "Chocolate shake with brownie bites" },
  { name: "Campfire S'mores", price: "$10", desc: "Chocolate-marshmallow with graham crumble" },
  { name: "Strawberry Shortcake", price: "$10", desc: "Strawberry shake with cake crumbles" },
  { name: "Peanut Butter Cup", price: "$10", desc: "Peanut butter & chocolate" },
];

export const shakes21: MenuItem[] = [
  { name: "Peanut Butter Whiskey Cup", price: "$15", desc: "PB chocolate shake with peanut butter whiskey" },
  { name: "Frozen Baileys Cream", price: "$15", desc: "Frozen Baileys & vanilla, chocolate drizzle" },
  { name: "Strawberry Daiquiri", price: "$15", desc: "Strawberry shake blended with rum" },
];

export const foodMore =
  "Kids Meals & a la carte sides also available — just ask your server.";

// -----------------------------------------------------------------------------
// DRINK
// -----------------------------------------------------------------------------
export const drafts: MenuItem[] = [
  { name: "Coors Light", price: "$6" },
  { name: "Blue Moon", price: "$7" },
  { name: "Modelo Especial", price: "$7" },
  { name: "Firestone 805", price: "$8" },
  { name: "Angry Orchard Cider", price: "$8" },
  { name: "Atomic Duck IPA", price: "$10", desc: "Able Baker Brewing — Las Vegas" },
];

export const bottlesCans: MenuItem[] = [
  { name: "Miller Lite", price: "$5" },
  { name: "Stella Artois", price: "$6" },
  { name: "Mike's Hard Lemonade", price: "$6" },
  { name: "Guinness", price: "$7" },
  { name: "Long Drink", price: "$8", desc: "Peach · Pineapple · Traditional" },
  { name: "Heineken 0.0", price: "$5", desc: "Non-alcoholic" },
];

export const wine: MenuItem[] = [
  { name: "House Pours", price: "$9", desc: "19 Crimes Red · SeaGlass Pinot Grigio · Josh Rosé" },
  { name: "Josh Cellars Cabernet", price: "$12" },
  { name: "Kim Crawford Sauvignon Blanc", price: "$12" },
  { name: "Ruffino Prosecco", price: "$12" },
  { name: "La Crema Chardonnay", price: "$13" },
];

export const cocktails: MenuItem[] = [
  { name: "Transfusion", price: "$12", desc: "Tito's vodka, grape juice & ginger ale — the golfer's classic" },
  { name: "Azalea", price: "$12", desc: "Tito's vodka, lemonade & a grenadine sink" },
  { name: "Peach Palmer", price: "$12", desc: "Tito's vodka, peach purée, lemonade & iced tea" },
  { name: "Blue Lagoon", price: "$12", desc: "Tito's vodka, blue curaçao & lemonade" },
  { name: "Crown Peach Mule", price: "$15", desc: "Crown Peach whiskey, lime, peach purée & ginger beer" },
  { name: "Blueberry Blush", price: "$15", desc: "Stoli Blueberry vodka, lime & a splash of cranberry" },
  { name: "Espresso Martini", price: "$15", desc: "Stoli Vanilla vodka, espresso liqueur & fresh espresso" },
  { name: "Margarita", price: "$15", desc: "El Cristiano Silver tequila, lime & agave" },
  { name: "Cucumber Paloma", price: "$15", desc: "El Cristiano Silver tequila, grapefruit, lime & cucumber" },
  { name: "Raspberry Lemon Drop", price: "$14", desc: "Stoli Razz, fresh lemon & a sugar rim" },
  { name: "Par Old Fashioned", price: "$14", desc: "Buffalo Trace bourbon, sugar & Angostura bitters" },
  { name: "Birdie Old Fashioned", price: "$16", desc: "Woodford Reserve bourbon, sugar & Angostura bitters" },
  { name: "Eagle Old Fashioned", price: "$16", desc: "Eagle Rare bourbon, sugar & orange bitters" },
  { name: "Albatross Old Fashioned", price: "$25", desc: "El Cristiano Extra Añejo tequila, agave & orange bitters" },
];

export type SpiritGroup = { type: string; items: MenuItem[] };
export const spirits: SpiritGroup[] = [
  {
    type: "Bourbon & Whiskey",
    items: [
      { name: "Jack Daniel's", price: "$11" }, { name: "Jameson Irish", price: "$11" },
      { name: "Crown Royal", price: "$11" }, { name: "Maker's Mark", price: "$11" },
      { name: "Bulleit Bourbon", price: "$12" }, { name: "Woodford Reserve", price: "$13" },
      { name: "Pendleton Midnight", price: "$13" }, { name: "Basil Hayden", price: "$14" },
      { name: "Eagle Rare 10 Year", price: "$15" }, { name: "Blanton's Single Barrel", price: "$20" },
    ],
  },
  {
    type: "Tequila",
    items: [
      { name: "Patrón Silver", price: "$13" }, { name: "Casamigos Blanco", price: "$13" },
      { name: "Casamigos Reposado", price: "$14" }, { name: "Don Julio Blanco", price: "$14" },
      { name: "Don Julio Reposado", price: "$15" }, { name: "Don Julio Añejo", price: "$17" },
      { name: "El Cristiano Extra Añejo", price: "$22" }, { name: "Clase Azul Reposado", price: "$38" },
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
      { name: "Ketel One", price: "$11" }, { name: "Grey Goose", price: "$12" },
      { name: "Belvedere", price: "$12" },
    ],
  },
  {
    type: "Gin",
    items: [
      { name: "Bombay Sapphire", price: "$10" }, { name: "Tanqueray", price: "$11" },
    ],
  },
  {
    type: "Rum",
    items: [
      { name: "Captain Morgan", price: "$8" }, { name: "Malibu", price: "$8" },
      { name: "Sailor Jerry", price: "$9" },
    ],
  },
];

// -----------------------------------------------------------------------------
// Happy Hour
// -----------------------------------------------------------------------------
export const happyHour = {
  window: "Mon–Fri · 3–6 PM",
  note: "No clubs, no tee time, no problem — pull up to the bar, grab a table, or take a bay. Happy-hour pricing runs in the bays too, so you can eat, drink and play without getting up.",
  drinks: [
    { name: "Domestic Drafts", price: "$5", desc: "Coors Light · Blue Moon · Modelo" },
    { name: "Well Drinks", price: "$6", desc: "Vodka · gin · tequila · rum · bourbon" },
    { name: "Craft, Cider & Wine", price: "$7", desc: "Firestone 805 · Angry Orchard · House Wine" },
    { name: "Signature Cocktails", price: "$10", desc: "Par Old Fashioned · Transfusion · Azalea · Peach Palmer · Blue Lagoon" },
  ],
  bites: [
    { name: "Pretzel Bites", price: "$7" },
    { name: "Mozzarella Sticks", price: "$7" },
    { name: "Mini Corn Dogs", price: "$7" },
    { name: "Crispy Pickle Spears", price: "$7" },
    { name: "Boneless Wings (6)", price: "$7" },
    { name: "Pimento Cheese Dip", price: "$7" },
    { name: "Loaded Totchos", price: "$10" },
    { name: "Buffalo Chicken Dip", price: "$10" },
    { name: "Slider Trio", price: "$10" },
    { name: "Caddie's Combo · draft + 6 boneless wings", price: "$12" },
    { name: "Add Fries or Tots to anything", price: "+$4" },
  ],
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
    a: "We have a full kitchen and a full bar. Burgers, wings, shareables, sandwiches, shakes, craft drafts, wine and signature cocktails all come straight to your bay. Happy hour runs Monday–Friday, 3–6 PM, with bays included.",
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
    a: "Sunday–Thursday, 11 AM–10 PM, and Friday–Saturday, 11 AM–midnight.",
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
    q: "What are the leagues and how do I join?",
    a: "We run weekly handicapped leagues on TrackMan — Open (Mondays), Ladies (Wednesdays) and Men's (Sundays) — so every skill level competes. Each season opens with a free Week 0 preview; after that it's $40 a night, or free for members.",
  },
  {
    q: "Is there a membership?",
    a: "Yes. Unlimited bay time is $239/month or $2,390/year, plus youth, late-night and corporate tiers. Members get priority booking, 10% off food and drink, and play every league night free.",
  },
];

export const owners = "Mark, Roseanne & Cameron Mizell";
