type Fbq = (...args: unknown[]) => void;

/** Fire a Meta Pixel standard event, safely no-op if the pixel hasn't loaded. */
export function trackPixel(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const fbq = (window as unknown as { fbq?: Fbq }).fbq;
  if (typeof fbq !== "function") return;
  fbq("track", event, params);
}
