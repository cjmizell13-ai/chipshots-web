/**
 * Campaign tags for the booking links.
 *
 * Ad, email and text links reach this site carrying utm_ tags and click ids.
 * The site used to drop them before the booking widget (YourGolfBooking, "YGB")
 * and Toast Tables, so YGB's Web Traffic Report showed nearly every booking as
 * (direct). This keeps the tags from the landing URL for the rest of the visit
 * and puts them on the outgoing YGB and Toast Tables URLs.
 *
 *  - Captured on first landing and kept in sessionStorage. First touch wins:
 *    once a tagged landing is stored, later tags in the same tab session don't
 *    replace it.
 *  - utm_ values are lowercased to match the live tag names (sources linktree,
 *    google, meta, toast; mediums social, organic, paid_social, cpc, email,
 *    sms). Click ids keep their case, because they are case-sensitive tokens.
 *  - With no utm_ tags, a gclid reads as google / cpc / google-ads, an fbclid as
 *    meta / social / meta, and anything else as chipshotshenderson.com /
 *    website / website. That last default is never stored, so a tagged landing
 *    later in the same tab still counts as the first touch.
 *  - Nothing here throws. If anything fails the plain URL is used, and blocked
 *    storage falls back to memory for the life of the page load.
 *  - Safe to import anywhere: nothing touches window on the server. Pages are
 *    prerendered, so the tags can only be known in the browser; components read
 *    them with useAttribution() (lib/useAttribution.ts), which is null on the
 *    server and while hydrating.
 */

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

/** Every tag that is captured and passed along, in the order they are written. */
export const TAG_KEYS = [...UTM_KEYS, "gclid", "fbclid"] as const;

export type TagKey = (typeof TAG_KEYS)[number];
export type Attribution = Partial<Record<TagKey, string>>;

/** A visit that carries no tags and no click id. */
const WEBSITE: Attribution = Object.freeze({
  utm_source: "chipshotshenderson.com",
  utm_medium: "website",
  utm_campaign: "website",
});

/** A Google Ads click that arrived with a gclid but no utm_ tags. */
const GOOGLE_ADS: Attribution = Object.freeze({
  utm_source: "google",
  utm_medium: "cpc",
  utm_campaign: "google-ads",
});

/** A Meta click that arrived with an fbclid but no utm_ tags. */
const META: Attribution = Object.freeze({
  utm_source: "meta",
  utm_medium: "social",
  utm_campaign: "meta",
});

/** Adds nothing to a URL. What a failed read falls back to. */
const NONE: Attribution = Object.freeze({});

const STORAGE_KEY = "cs_attribution";

// GA4 cuts event parameter values at 100 characters, so longer utm_ values
// would only ever be half-reported. Click ids run longer and aren't reported.
const MAX_UTM_LENGTH = 100;
const MAX_CLICK_ID_LENGTH = 300;

/** A tag value worth keeping, or undefined. */
function clean(key: TagKey, raw: unknown): string | undefined {
  if (typeof raw !== "string") return undefined;
  const isUtm = key.startsWith("utm_");
  const value = isUtm ? raw.trim().toLowerCase() : raw.trim();
  if (!value) return undefined;
  return value.slice(0, isUtm ? MAX_UTM_LENGTH : MAX_CLICK_ID_LENGTH);
}

/** Pick the known tags out of anything shaped like a record. */
function pickTags(source: (key: TagKey) => unknown): Attribution {
  const found: Attribution = {};
  for (const key of TAG_KEYS) {
    const value = clean(key, source(key));
    if (value) found[key] = value;
  }
  return found;
}

/**
 * The tags a landing URL carries, with the click-id fallbacks filled in, or
 * null when it carries no tag and no click id at all.
 */
function fromSearch(search: string): Attribution | null {
  const params = new URLSearchParams(search);
  const found = pickTags((key) => params.get(key));

  if (UTM_KEYS.some((key) => found[key])) return found;
  if (found.gclid) return { ...GOOGLE_ADS, ...found };
  if (found.fbclid) return { ...META, ...found };
  return null;
}

function readStored(): Attribution | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data: unknown = JSON.parse(raw);
    if (!data || typeof data !== "object") return null;
    const found = pickTags((key) => (data as Record<string, unknown>)[key]);
    return Object.keys(found).length ? found : null;
  } catch {
    return null;
  }
}

function writeStored(tags: Attribution) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(tags));
  } catch {
    // Storage is blocked or full. The tags still live in memory for this page
    // load; a later page load in the tab only knows its own landing URL.
  }
}

/**
 * What this page load resolved to. Settled once, on first use, so the same
 * object is returned every time (React needs a stable snapshot) and a later
 * client-side navigation can't change the answer. `saved` is false only when
 * the tags came from this landing URL and haven't been written to storage yet.
 */
let state: { tags: Attribution; saved: boolean } | undefined;

function resolve(): { tags: Attribution; saved: boolean } {
  if (state) return state;

  const stored = readStored();
  if (stored) return (state = { tags: stored, saved: true });

  const landing = fromSearch(window.location.search);
  if (landing) return (state = { tags: landing, saved: false });

  return (state = { tags: WEBSITE, saved: true });
}

/**
 * Remember this visit's tags for the rest of the tab session. Call once per
 * page load, from an effect. A no-op when there is nothing to remember or a
 * first touch is already stored.
 */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const current = resolve();
    if (!current.saved) {
      writeStored(current.tags);
      current.saved = true;
    }
  } catch {
    // Attribution is never worth breaking a page for.
  }
}

/**
 * The tags to send along: the stored first touch, else this landing URL's,
 * else the website defaults. Null on the server, where nothing is known. Never
 * throws.
 */
export function getAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;
  try {
    return resolve().tags;
  } catch {
    return NONE;
  }
}

/** Whether a URL is one that takes campaign tags: YGB or Toast Tables. */
export function takesCampaignTags(url: string): boolean {
  try {
    const { protocol, hostname } = new URL(url);
    if (protocol !== "https:" && protocol !== "http:") return false;
    const host = hostname.toLowerCase();
    return (
      host === "yourgolfbooking.com" ||
      host.endsWith(".yourgolfbooking.com") ||
      host === "tables.toasttab.com"
    );
  } catch {
    // Relative and malformed URLs are never ours.
    return false;
  }
}

/**
 * The URL with the campaign tags added, when it is a YGB or Toast Tables URL.
 *
 * An existing query string is kept as it is and the tags go after it. A URL
 * that already carries any tag of its own is returned untouched, so a link
 * written with its own campaign is never mixed with the visitor's. Pass null
 * (the server, hydration) to get the plain URL back; leave the second argument
 * out to use the current visit's tags.
 */
export function withAttribution(
  url: string,
  attribution: Attribution | null = getAttribution(),
): string {
  try {
    if (!attribution || !takesCampaignTags(url)) return url;

    const { searchParams } = new URL(url);
    if (TAG_KEYS.some((key) => searchParams.has(key))) return url;

    const added = TAG_KEYS.flatMap((key) => {
      const value = attribution[key];
      return value ? [`${key}=${encodeURIComponent(value)}`] : [];
    });
    if (!added.length) return url;

    const hashAt = url.indexOf("#");
    const head = hashAt === -1 ? url : url.slice(0, hashAt);
    const hash = hashAt === -1 ? "" : url.slice(hashAt);
    const joiner = !head.includes("?") ? "?" : /[?&]$/.test(head) ? "" : "&";
    return head + joiner + added.join("&") + hash;
  } catch {
    return url;
  }
}

/**
 * The visit's campaign as analytics event parameters: utm_source, utm_medium,
 * utm_campaign, and utm_content / utm_term when there are any. Click ids are
 * left out; they identify a click, not a campaign. Empty on the server.
 */
export function campaignParams(): Record<string, string> {
  const tags = getAttribution();
  const params: Record<string, string> = {};
  if (!tags) return params;
  for (const key of UTM_KEYS) {
    const value = tags[key];
    if (value) params[key] = value;
  }
  return params;
}
