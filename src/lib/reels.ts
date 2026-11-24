// Short silent loops cut from the finished Instagram reels (540x960).
// Captions follow the reels: tracked capitals, a small line underneath.
import type { HeroReel } from "@/components/ui/PlateHero";

const clip = (name: string, label: string, title: string, sub?: string): HeroReel => ({
  src: `/videos/reel/${name}.mp4`,
  poster: `/videos/reel/${name}.jpg`,
  label,
  title,
  sub,
});

export const reel = {
  golf: clip("golf", "Guests swinging in a TrackMan bay", "Play the world’s great courses", "500+ courses on 5 TrackMan bays"),
  golf2: clip("golf2", "A guest driving in a TrackMan bay", "Every shot, measured", "Ball speed · spin · carry"),
  food: clip("food", "Burgers, wings and ribs from the kitchen", "Burgers, wings & ribs", "Open daily for lunch & dinner"),
  bar: clip("bar", "Cocktails and wine being poured at the bar", "Cocktails, wine & beer", "Happy hour Mon–Fri, 3–6 PM"),
  place: clip("place", "The dining room, the bar and guests toasting", "Your new local in Henderson", "Golf, food & drinks"),
};
