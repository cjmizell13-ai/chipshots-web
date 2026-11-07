/**
 * Booking-intent tracking.
 *
 * YourGolfBooking (YGB) has no pixel or GA4 integration and its booking widget
 * is a cross-origin iframe that sends no messages, so a completed booking can't
 * be seen from this site. These events are the closest proxy we can measure:
 *
 *  - begin_checkout / InitiateCheckout: someone opened the booking modal or
 *    clicked through to a YGB page (bays, memberships, range card, events).
 *  - booking_engaged / BookingEngaged: someone actually clicked inside a YGB
 *    booking widget (picked a bay, day or time). Stronger signal than a click
 *    on a button, and the one to optimize ad spend against.
 */

type Gtag = (...args: unknown[]) => void;
type Fbq = (...args: unknown[]) => void;

export type BookingProduct = "bay" | "membership" | "range_card" | "event";
export type BookingSource = "modal" | "link" | "inline";

function tools() {
  if (typeof window === "undefined") return {};
  const w = window as unknown as { gtag?: Gtag; fbq?: Fbq };
  return {
    gtag: typeof w.gtag === "function" ? w.gtag : undefined,
    fbq: typeof w.fbq === "function" ? w.fbq : undefined,
  };
}

/** Classify a YGB URL by what the guest is about to buy. */
export function productFromUrl(href: string): BookingProduct {
  if (/\/memberships/i.test(href)) return "membership";
  if (/\/topups/i.test(href)) return "range_card";
  if (/\/booking\/?(\?|#|$)/i.test(href)) return "event";
  return "bay";
}

export function isYgbUrl(href: string) {
  return /(^|\.)yourgolfbooking\.com/i.test(
    (() => {
      try {
        return new URL(href, window.location.href).hostname;
      } catch {
        return "";
      }
    })(),
  );
}

/** Someone started a booking or purchase on YGB. */
export function trackBookingStart(product: BookingProduct, source: BookingSource) {
  const { gtag, fbq } = tools();
  gtag?.("event", "begin_checkout", {
    item_category: product,
    booking_source: source,
  });
  fbq?.("track", "InitiateCheckout", {
    content_category: product,
    content_name: `ygb_${source}`,
  });
}

export type OrderChannel = "pickup" | "doordash" | "ubereats";

/** Someone clicked through to order food (Toast pickup or a delivery app). */
export function trackOrderClick(channel: OrderChannel, source: string) {
  const { gtag, fbq } = tools();
  gtag?.("event", "order_online_click", {
    order_channel: channel,
    order_source: source,
  });
  fbq?.("trackCustom", "OrderOnlineClick", {
    content_category: channel,
    content_name: source,
  });
}

const engaged = new Set<string>();

/** Someone clicked inside a YGB booking widget. Fires once per widget per page. */
export function trackBookingEngaged(product: BookingProduct, source: BookingSource) {
  const key = `${product}:${source}:${typeof window === "undefined" ? "" : window.location.pathname}`;
  if (engaged.has(key)) return;
  engaged.add(key);
  const { gtag, fbq } = tools();
  gtag?.("event", "booking_engaged", {
    item_category: product,
    booking_source: source,
  });
  fbq?.("trackCustom", "BookingEngaged", {
    content_category: product,
    content_name: `ygb_${source}`,
  });
}
