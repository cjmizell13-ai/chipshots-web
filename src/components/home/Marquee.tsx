"use client";

import { useReducedMotion } from "motion/react";

const items = [
  "5 TrackMan Simulator Bays",
  "500+ Championship Courses",
  "Burgers · Wings · Sandwiches & Shareables",
  "Full Bar · Signature Cocktails · Cold Drafts",
  "Veteran-Owned",
  "Henderson, Nevada",
];

/** Continuous ticker of brand facts. Static (no scroll) when reduced-motion. */
export default function Marquee() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="border-y border-green-soft/40 bg-green-deep py-4">
        <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 text-center">
          {items.map((t) => (
            <li key={t} className="eyebrow text-gold-soft/90">
              {t}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="overflow-hidden border-y border-green-soft/40 bg-green-deep py-4">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <ul
            key={dup}
            className="flex shrink-0 items-center"
            aria-hidden={dup === 1}
          >
            {items.map((t) => (
              <li
                key={t}
                className="eyebrow flex items-center gap-8 px-8 text-gold-soft/90"
              >
                {t}
                <span className="h-1 w-1 rounded-full bg-gold/60" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
