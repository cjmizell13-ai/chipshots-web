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

/** Someone clicked through to reserve a table (Toast Tables). */
export function trackReserveClick(source: string) {
  const { gtag, fbq } = tools();
  gtag?.("event", "reserve_table_click", { reserve_source: source });
  fbq?.("trackCustom", "ReserveTableClick", { content_name: source });
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

/**
 * Contact and RSVP intent.
 *
 * A phone call, Google Maps, a Jotform RSVP or ticket page and the Toast gift
 * card store all happen off this site and none of them report back, so the
 * click is the last thing we can measure. GA4's enhanced measurement already
 * logs outbound links as a generic "click", but it skips tel: links and can't
 * tell an RSVP from any other link, so each gets its own event here.
 */
export type LinkIntent =
  | { event: "phone_click" }
  | { event: "email_click" }
  | { event: "directions_click" }
  | { event: "rsvp_click"; form_id: string }
  | { event: "gift_card_click" };

/** Work out what a link is for, or null when it isn't one we count. */
export function linkIntent(href: string): LinkIntent | null {
  if (/^tel:/i.test(href)) return { event: "phone_click" };
  if (/^mailto:/i.test(href)) return { event: "email_click" };

  let url: URL;
  try {
    url = new URL(href, window.location.href);
  } catch {
    return null;
  }
  const host = url.hostname.toLowerCase();

  if (/(^|\.)jotform\.com$/.test(host)) {
    // form.jotform.com/<id> and pci.jotform.com/form/<id>
    const id = url.pathname.match(/(\d{6,})/)?.[1] ?? "";
    return { event: "rsvp_click", form_id: id };
  }
  if (/(^|\.)google\.com$/.test(host) && url.pathname.startsWith("/maps")) {
    return { event: "directions_click" };
  }
  if (/(^|\.)toasttab\.com$/.test(host) && url.pathname.includes("/egiftcards")) {
    return { event: "gift_card_click" };
  }
  return null;
}

/** Someone clicked to call, email, get directions, RSVP or buy a gift card. */
export function trackLinkIntent(intent: LinkIntent, linkText: string) {
  const { gtag, fbq } = tools();
  const { event, ...params } = intent;
  gtag?.("event", event, { ...params, link_text: linkText.slice(0, 100) });

  // Meta's standard events where one fits. The gift card button already sends
  // InitiateCheckout from its own page, so it is left out here.
  if (event === "phone_click") fbq?.("track", "Contact");
  if (event === "directions_click") fbq?.("track", "FindLocation");
  if (event === "rsvp_click") {
    fbq?.("trackCustom", "RsvpClick", { content_name: linkText.slice(0, 100) });
  }
}
