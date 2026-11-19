"use client";

import { withAttribution } from "@/lib/attribution";
import { useAttribution } from "@/lib/useAttribution";

/**
 * The YourGolfBooking widget, loaded with this visit's campaign tags on its
 * URL so YGB's Web Traffic Report can tell the booking came from an ad, email
 * or text instead of showing it as (direct).
 *
 * The tags are only known in the browser, so the iframe is added right after
 * hydrating. Loading the plain URL first and swapping it would reach YGB as a
 * second, untagged visit. `className` sizes the frame (and the empty box that
 * holds its place until then).
 *
 * Fail open: if the tags can't be read the frame still loads, with the plain
 * URL, and with scripts off the <noscript> copy loads the plain URL.
 */
export default function YgbFrame({
  src,
  title,
  className,
  loading,
}: {
  src: string;
  title: string;
  className?: string;
  loading?: "lazy" | "eager";
}) {
  const attribution = useAttribution();

  if (!attribution) {
    return (
      <div className={className}>
        <noscript>
          <iframe src={src} title={title} loading={loading} className="h-full w-full" />
        </noscript>
      </div>
    );
  }

  return (
    <iframe
      src={withAttribution(src, attribution)}
      title={title}
      loading={loading}
      className={className}
    />
  );
}
