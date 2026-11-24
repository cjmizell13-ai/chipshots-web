// Captions follow the reels: tracked capitals, a small line underneath.
import type { HeroReel } from "@/components/ui/PlateHero";

// One shot per inside page, cut sharper (720x1280) and chosen for that page.
const shotClip = (name: string, label: string, title: string, sub?: string): HeroReel => ({
  src: `/videos/page/${name}.mp4`,
  poster: `/videos/page/${name}.jpg`,
  wideSrc: `/videos/page/${name}-wide.mp4`,
  widePoster: `/videos/page/${name}-wide.jpg`,
  label,
  title,
  sub,
});

export const shot = {
  play: shotClip("play", "A guest lining up a drive in a TrackMan bay", "Every shot, measured", "Ball speed · spin · carry · club path"),
  dine: shotClip("dine", "The dining room and the bar", "Burgers, wings & ribs", "Open daily for lunch & dinner"),
  events: shotClip("events", "Guests raising a toast in the dining room", "Your new local in Henderson", "Golf, food & drinks"),
  members: shotClip("members", "A member swinging in a TrackMan bay", "Unlimited golf", "24/7 · 2 active hours at a time"),
  gifts: shotClip("gifts", "A martini being poured and wine swirled at the bar", "Cocktails, wine & beer", "Good for food, drinks & golf"),
  about: shotClip("about", "The Chip Shots storefront and the clock tower plaza", "Chip Shots Golf Club", "Monument at Calico Ridge · Henderson"),
  parties: shotClip("parties", "A cocktail and a table toasting", "Holiday parties", "From one bay to the whole house"),
  corporate: shotClip("corporate", "Colleagues at a table and a golfer in a bay", "Company outings", "Private bays, food & a full bar"),
  youth: shotClip("youth", "A golf shot landing on a TrackMan course", "Junior golf", "Clubs provided"),
};
