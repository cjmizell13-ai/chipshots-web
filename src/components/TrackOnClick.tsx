"use client";

import type { ReactNode } from "react";
import { trackPixel } from "@/lib/pixel";

/**
 * Wraps a clickable element and fires a Meta Pixel event when clicked,
 * without altering layout (display: contents). Used for high-intent CTAs
 * like the league sign-up buttons (Lead).
 */
export default function TrackOnClick({
  event,
  params,
  children,
}: {
  event: string;
  params?: Record<string, unknown>;
  children: ReactNode;
}) {
  return (
    <span
      className="contents"
      onClick={() => trackPixel(event, params)}
    >
      {children}
    </span>
  );
}
