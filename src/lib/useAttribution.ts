import { useSyncExternalStore } from "react";
import { getAttribution, type Attribution } from "@/lib/attribution";

/** Nothing to subscribe to: the tags are settled for the life of a page load. */
const noSubscribe = () => () => {};

/** What the server, and the browser while it hydrates, know: nothing. */
const unknown = () => null;

/**
 * This visit's campaign tags, or null on the server and during hydration.
 *
 * Pages are prerendered, so the tags can only be read in the browser. The
 * server snapshot matches the static HTML (plain URLs), and React swaps in the
 * real tags right after hydrating, with no mismatch. Same pattern as
 * UntilDate and OnWeekday. Client components only.
 */
export function useAttribution(): Attribution | null {
  return useSyncExternalStore(noSubscribe, getAttribution, unknown);
}
