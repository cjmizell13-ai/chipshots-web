"use client";

import type { ComponentProps } from "react";
import { withAttribution } from "@/lib/attribution";
import { useAttribution } from "@/lib/useAttribution";

type Props = Omit<ComponentProps<"a">, "href"> & { href: string };

/**
 * An <a> that carries this visit's campaign tags when it points at
 * YourGolfBooking or Toast Tables (lib/attribution.ts); any other URL is left
 * as it is.
 *
 * The static HTML, and the first pass while the browser hydrates, hold the
 * plain URL. Right after hydrating the href becomes the tagged one, so the tags
 * are in the DOM for a click, a middle-click or "copy link address".
 */
export default function AttributedLink({ href, children, ...rest }: Props) {
  const attribution = useAttribution();
  return (
    <a href={withAttribution(href, attribution)} {...rest}>
      {children}
    </a>
  );
}
