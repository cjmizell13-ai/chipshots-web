"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { promoActive } from "@/lib/site";
import { holidayBanners } from "@/lib/holiday";
import { Icon } from "@/components/ui/icons";

/** Nothing to subscribe to — the date is only read once, on mount. */
const noSubscribe = () => () => {};
const serverSnapshot = () => holidayBanners;
let clientCache: typeof holidayBanners | null = null;
const clientSnapshot = () =>
  (clientCache ??= holidayBanners.filter((b) => promoActive(b.until)));

/**
 * Slim strip pinned above the header that rotates the holiday deals. The
 * server renders every deal (matching the static HTML); in the browser,
 * expired deals drop out and the strip disappears after the last one.
 */
export default function AnnouncementBar() {
  const banners = useSyncExternalStore(noSubscribe, clientSnapshot, serverSnapshot);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (banners.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % banners.length), 5000);
    return () => clearInterval(id);
  }, [banners.length]);

  if (banners.length === 0) return null;
  const promo = banners[index % banners.length];

  return (
    <a
      href={promo.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full items-center justify-center gap-2 bg-gold px-4 py-2 text-center text-xs font-medium text-green-deep transition-colors hover:bg-gold-soft sm:text-sm"
    >
      {promo.code && (
        <span className="hidden rounded-full bg-green-deep/10 px-2 py-0.5 font-semibold tracking-wide sm:inline">
          {promo.code}
        </span>
      )}
      <span>{promo.message}</span>
      <span className="inline-flex shrink-0 items-center gap-1 font-semibold underline-offset-2 group-hover:underline">
        {promo.cta}
        <Icon.arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}
