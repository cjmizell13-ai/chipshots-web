"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { promoActive } from "@/lib/site";

/** Nothing to subscribe to — the date is only read once, on mount. */
const noSubscribe = () => () => {};

/**
 * Shows its children only while `until` (YYYY-MM-DD, inclusive) is still
 * ahead in venue time, then hides them on its own.
 *
 * Pages here are statically prerendered, so a date check in a server
 * component freezes at build time and a dated note outlives its date until
 * someone redeploys. The server snapshot renders the note, matching the
 * static HTML, and the client snapshot drops it once the date has passed.
 */
export default function UntilDate({
  until,
  children,
}: {
  until: string;
  children: ReactNode;
}) {
  const show = useSyncExternalStore(
    noSubscribe,
    () => promoActive(until),
    () => true,
  );

  if (!show) return null;
  return <>{children}</>;
}
