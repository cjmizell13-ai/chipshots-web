"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { timezone } from "@/lib/site";

/** Nothing to subscribe to — the weekday is only read once, on mount. */
const noSubscribe = () => () => {};

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** Today's weekday in venue time, as JS getDay() numbers it (0 = Sunday). */
export function venueWeekday(): number {
  const short = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    weekday: "short",
  }).format(new Date());
  return DAYS.indexOf(short);
}

/**
 * Today's weekday in venue time, or -1 on the server and during hydration.
 * Pages are prerendered, so "today" can only be known in the browser.
 */
export function useVenueWeekday(): number {
  return useSyncExternalStore(noSubscribe, venueWeekday, () => -1);
}

/** Shows its children only when today (venue time) is the given weekday. */
export default function OnWeekday({
  dow,
  children,
}: {
  dow: number;
  children: ReactNode;
}) {
  const today = useVenueWeekday();
  if (today !== dow) return null;
  return <>{children}</>;
}
