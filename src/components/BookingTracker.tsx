"use client";

import { useEffect } from "react";
import {
  isYgbUrl,
  productFromUrl,
  trackBookingEngaged,
  trackBookingStart,
} from "@/lib/analytics";

/**
 * Site-wide listeners for booking intent (see lib/analytics.ts):
 *  - any click on a link to yourgolfbooking.com fires begin_checkout;
 *  - clicking into an embedded YGB iframe fires booking_engaged. The page
 *    can't see inside a cross-origin iframe, but when the window loses focus
 *    to one, document.activeElement is that iframe.
 */
export default function BookingTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]");
      // the modal's "open in new tab" link was already counted when it opened
      if (!a || a.hasAttribute("data-no-booking-track")) return;
      const href = a.getAttribute("href") ?? "";
      if (!isYgbUrl(href)) return;
      trackBookingStart(productFromUrl(href), "link");
    };

    const onBlur = () => {
      // activeElement updates just after blur fires
      setTimeout(() => {
        const el = document.activeElement;
        if (!(el instanceof HTMLIFrameElement)) return;
        const src = el.getAttribute("src") ?? "";
        if (!isYgbUrl(src)) return;
        const source = el.dataset.bookingSource === "modal" ? "modal" : "inline";
        trackBookingEngaged(productFromUrl(src), source);
      }, 0);
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("blur", onBlur);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  return null;
}
