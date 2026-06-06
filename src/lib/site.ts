// =============================================================================
// Chip Shots Indoor Golf — single source of truth for site content
// All NAP (name/address/phone), hours, links, menus and pricing live here so
// they stay identical everywhere they appear (important for local SEO).
// =============================================================================

export const business = {
  name: "Chip Shots Indoor Golf",
  shortName: "Chip Shots",
  tagline: "Golf • Burgers • Beer",
  address: {
    street: "1473 E Lake Mead Pkwy, Suite 110",
    city: "Henderson",
    region: "NV",
    postalCode: "89011",
    full: "1473 E Lake Mead Pkwy, Suite 110, Henderson, NV 89011",
  },
  phone: "(725) 377-8872",
  phoneHref: "tel:+17253778872",
  email: "golf@chipshotshenderson.com",
  website: "https://www.chipshotshenderson.com",
  status: "Now Open",
  founded: "Grand opening May 29, 2026",
  geo: { lat: 36.0398, lng: -114.9817 },
  mapEmbed:
    "https://www.google.com/maps?q=1473+E+Lake+Mead+Pkwy+Suite+110+Henderson+NV+89011&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=1473+E+Lake+Mead+Pkwy+Suite+110+Henderson+NV+89011",
  social: {
    instagram: "https://www.instagram.com/chipshotshenderson",
    facebook: "https://www.facebook.com/chipshotshenderson",
    instagramHandle: "@chipshotshenderson",
  },
  booking:
    "https://www.yourgolfbooking.com/venues/chip-shots-henderson/booking/simulator-bays",
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

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Food & Drink", href: "/food-drink" },
  { label: "Golf & Booking", href: "/golf-booking" },
  { label: "Memberships", href: "/memberships" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
];

// -----------------------------------------------------------------------------
// Imagery — friendly names mapped to the real venue photos in /public/images
// -----------------------------------------------------------------------------
export const img = {
  heroBay: "/images/hero-bay-coastal.jpg",
  diningRoom: "/images/dining-room.jpg",
  bayLounge: "/images/bay-lounge-chairs.jpg",
  bayDesertData: "/images/bay-desert-data.jpg",
  bayLoveseat: "/images/bay-desert-loveseat.jpg",
  bayMoody: "/images/bay-coastal-moody.jpg",
  bayCinematic: "/images/bay-coastal-cinematic.jpg",
  bayRoomWide: "/images/bay-room-wide.jpg",
  trackmanActivities: "/images/trackman-activities.jpg",
  trackmanCompetitions: "/images/trackman-competitions.jpg",
  bayClubs: "/images/bay-desert-clubs.jpg",
  cocktailRed: "/images/cocktail-red.jpg",
  cocktailAmber: "/images/cocktail-amber.jpg",
  cocktailsHighball: "/images/cocktails-highball.jpg",
  foodCheesesteak: "/images/food-cheesesteak.jpg",
  foodWings: "/images/food-wings.jpg",
  exterior: "/images/exterior-storefront.jpg",
  exterior2: "/images/exterior-storefront-2.jpg",
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
    { name: "Member", price: "$30", unit: "/hr", note: "Members, anytime" },
  ],
  promos: [
    { title: "Buy One Hour, Get One Free", code: "BOGO", detail: "Grand-opening offer — booked through YourGolfBooking." },
    { title: "One Free Hour", code: "CMC626", detail: "$50 off (one free hour at the flat rate). One use per customer." },
  ],
};

export const rangeCard = { price: "$350", detail: "10 hours of bay time" };

export const memberships = [
  { tier: "Founders", price: "$3,000", per: "/yr", note: "Limited to 10 spots — enrollment closed May 28, 2026.", soldOut: true },
  { tier: "Unlimited Annual", price: "$2,390", per: "/yr", note: "Unlimited bay time, billed annually.", featured: true },
  { tier: "Unlimited Monthly", price: "$239", per: "/mo", note: "Unlimited bay time, billed monthly." },
  { tier: "Chip Crew — Youth", price: "$159", per: "/mo", note: "Youth program for players 18 & under." },
  { tier: "Chippin' After Dark", price: "$119", per: "/mo", note: "Evening-focused late-night tier." },
  { tier: "Corporate Club", price: "$449", per: "/mo", note: "Business membership for teams." },
  { tier: "Corporate Premier", price: "$699", per: "/mo", note: "Premium business membership." },
];

export const memberBenefits = [
  "$30 / hour bay rate, anytime",
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
      { name: "Slider Trio", price: "$14" },
      { name: "Loaded Totchos", price: "$14", desc: "Cheddar, bacon, green onion, ranch" },
      { name: "Chicken Quesadilla", price: "$14" },
      { name: "Buffalo Chicken Dip", price: "$13" },
      { name: "Pretzel Bites", price: "$12", desc: "Warm, beer cheese & house golden sauce" },
      { name: "Crispy Pickle Spears", price: "$12" },
      { name: "Mozzarella Sticks", price: "$12" },
      { name: "Mini Corn Dogs", price: "$12" },
      { name: "Mac & Cheese Bites", price: "$12" },
      { name: "Clubhouse Pimento Dip", price: "$12", desc: "Pork rinds or seasoned pita chips" },
    ],
  },
  {
    title: "Wings & Tenders",
    items: [
      { name: "Bone-In Wings", price: "$14 / $24", desc: "Six or twelve · choice of sauce or dry rub" },
      { name: "Boneless Wings", price: "$12 / $21", desc: "Six or twelve · choice of sauce or dry rub" },
      { name: "Crispy Chicken Tenders", price: "$13" },
    ],
  },
  {
    title: "Salads & Wraps",
    items: [
      { name: "House Salad", price: "$9" },
      { name: "Caesar Salad", price: "$10", desc: "Add grilled chicken +$5" },
      { name: "BLT Avocado Chicken Salad", price: "$15" },
      { name: "Buffalo Chicken Wrap", price: "$13" },
      { name: "Chicken Caesar Wrap", price: "$13" },
      { name: "Clubhouse Wrap", price: "$13" },
    ],
  },
  {
    title: "Burgers",
    note: "Smash-style, served with fries",
    items: [
      { name: "The Chip Shots Classic", price: "$16" },
      { name: "Mushroom & Swiss", price: "$17" },
      { name: "The Mulligan Melt", price: "$17" },
      { name: "BBQ Burger", price: "$18" },
      { name: "Guacamole Burger", price: "$18" },
      { name: "Beer Cheese Bacon Burger", price: "$19" },
      { name: "Spicy Jalapeño Burger", price: "$19" },
    ],
  },
  {
    title: "Classics",
    note: "Served with fries",
    items: [
      { name: "All-Beef Hot Dog", price: "$9" },
      { name: "Crispy Chicken Sandwich", price: "$14" },
      { name: "Clubhouse Sandwich", price: "$14" },
      { name: "Philly Cheesesteak", price: "$15" },
      { name: "French Dip Sandwich", price: "$16" },
    ],
  },
];

export const foodMore =
  "Kids Meals · Sides · Desserts · Milkshakes · Milkshakes 21+ — ask your server, or see the full menu at the bay.";

// -----------------------------------------------------------------------------
// DRINK
// -----------------------------------------------------------------------------
export const drafts: MenuItem[] = [
  { name: "Modelo Especial", price: "$7" },
  { name: "Coors Light", price: "$7" },
  { name: "Blue Moon", price: "$7" },
  { name: "Firestone 805", price: "$8" },
  { name: "Atomic Duck IPA", price: "$8" },
  { name: "Angry Orchard", price: "$8", desc: "Hard cider" },
];

export const bottlesCans: MenuItem[] = [
  { name: "Stella Artois", price: "$5" },
  { name: "Guinness", price: "$6" },
  { name: "Mike's Hard Lemonade", price: "$5" },
  { name: "Heineken 0.0", price: "$4", desc: "Non-alcoholic" },
];

export const wine: MenuItem[] = [
  { name: "Josh Cabernet Sauvignon", price: "$10 / $38", desc: "By the glass / bottle" },
  { name: "19 Crimes Red", price: "$9", desc: "By the glass" },
  { name: "SeaGlass Pinot Grigio", price: "$9", desc: "By the glass" },
  { name: "Josh Rosé", price: "$9", desc: "By the glass" },
];

export const cocktails: MenuItem[] = [
  { name: "The Transfusion", price: "$11", desc: "Vodka, grape, ginger, lime — the clubhouse classic" },
  { name: "The Azalea", price: "$11", desc: "Gin, lemon, pineapple, grenadine" },
  { name: "Peach Palmer", price: "$11", desc: "Peach, tea & lemonade, spiked" },
  { name: "Old Fashioned", price: "$12", desc: "Bourbon, bitters, orange" },
  { name: "Espresso Martini", price: "$12", desc: "Vodka, espresso, coffee liqueur" },
];

export type SpiritGroup = { type: string; items: MenuItem[] };
export const spirits: SpiritGroup[] = [
  {
    type: "Vodka",
    items: [
      { name: "Tito's", price: "$10" }, { name: "Ketel One", price: "$10" },
      { name: "Stoli Vanilla", price: "$10" }, { name: "Belvedere", price: "$10" },
      { name: "Grey Goose", price: "$11" },
    ],
  },
  {
    type: "Gin",
    items: [
      { name: "Bombay Dry", price: "$9" }, { name: "Bombay Sapphire", price: "$10" },
      { name: "Tanqueray", price: "$10" }, { name: "Hendrick's", price: "$12" },
    ],
  },
  {
    type: "Tequila",
    items: [
      { name: "Cuervo", price: "$9" }, { name: "Herradura", price: "$12" },
      { name: "Patrón Silver", price: "$12" }, { name: "Casamigos Blanco", price: "$13" },
      { name: "Don Julio Blanco", price: "$13" }, { name: "Casamigos Reposado", price: "$14" },
      { name: "Don Julio Reposado", price: "$14" }, { name: "Clase Azul Reposado", price: "$30" },
    ],
  },
  {
    type: "Whiskey & Bourbon",
    items: [
      { name: "Jim Beam", price: "$9" }, { name: "Maker's Mark", price: "$9" },
      { name: "Buffalo Trace", price: "$9" }, { name: "Jameson", price: "$9" },
      { name: "Jack Daniel's", price: "$10" }, { name: "Bulleit Bourbon", price: "$10" },
      { name: "Bulleit Rye", price: "$10" }, { name: "Crown Royal", price: "$10" },
      { name: "Woodford Reserve", price: "$14" }, { name: "Eagle Rare", price: "$15" },
      { name: "Basil Hayden", price: "$16" }, { name: "Blanton's", price: "$20" },
      { name: "Fireball", price: "$7" },
    ],
  },
  {
    type: "Scotch & Cognac",
    items: [
      { name: "Dewar's White Label", price: "$8" }, { name: "Johnnie Walker Black", price: "$11" },
      { name: "Hennessy", price: "$11" },
    ],
  },
  {
    type: "Cordials & Liqueurs",
    items: [
      { name: "Kahlúa", price: "$9" }, { name: "Disaronno Amaretto", price: "$9" },
      { name: "Baileys Irish Cream", price: "$9" }, { name: "Grand Marnier", price: "$10" },
    ],
  },
];

// -----------------------------------------------------------------------------
// Happy Hour & Lunch
// -----------------------------------------------------------------------------
export const happyHour = {
  window: "Monday – Friday · 3–6 PM",
  note: "Happy-hour pricing runs in the bays too — play, eat & drink without getting up.",
  drinks: [
    { name: "Draft Beer", price: "$4", desc: "Coors Light · Blue Moon · Modelo Especial" },
    { name: "Craft & Cider", price: "$6", desc: "Atomic Duck IPA · Firestone 805 · Angry Orchard" },
    { name: "House Wine", price: "$6", desc: "19 Crimes Red · SeaGlass Pinot Grigio · Josh Rosé" },
    { name: "Signature Cocktails", price: "$2 off", desc: "Transfusion, Azalea, Peach Palmer & more" },
  ],
  bites: [
    { name: "Pretzel Bites", price: "$9" },
    { name: "Loaded Totchos", price: "$10" },
    { name: "Boneless Wings (6)", price: "$9" },
    { name: "Bone-In Wings (6)", price: "$11" },
    { name: "Clubhouse Pimento Dip", price: "$9" },
  ],
};

export const lunch = {
  window: "Weekdays · 11 AM – 3 PM",
  combos: [
    { name: "Burger Combo", price: "$15", desc: "Any burger + fries + a drink" },
    { name: "Wrap & Salad Combo", price: "$14", desc: "Any wrap or salad — the lighter option" },
    { name: "Wings & Shareables Combo", price: "$12", desc: "Boneless wings (6) or any shareable" },
    { name: "Half Lunch", price: "$10", desc: "Half wrap + fries or side salad" },
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

export const eventPackages = [
  {
    name: "The Front Nine",
    price: "From $45 / guest",
    items: ["2 hours of private bay time", "Choice of two shareable platters", "One drink ticket per guest", "Up to 12 guests"],
  },
  {
    name: "The Clubhouse",
    price: "From $65 / guest",
    items: ["3 hours of private bay time", "Burger bar + three shareables", "Two drink tickets per guest", "Reserved lounge seating"],
    featured: true,
  },
  {
    name: "The Masters Table",
    price: "Custom quote",
    items: ["Full or partial venue buyout", "Curated food & bar package", "Hosted bar tab options", "Dedicated event captain"],
  },
];

export const owners = "Mark, Roseanne & Cameron Mizell";
