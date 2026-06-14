"use client";

import { useEffect } from "react";
import { trackPixel } from "@/lib/pixel";

/** Fires a Meta Pixel event once when the page mounts (e.g. ViewContent). */
export default function PixelEvent({
  event,
  params,
}: {
  event: string;
  params?: Record<string, unknown>;
}) {
  useEffect(() => {
    trackPixel(event, params);
  }, [event, params]);
  return null;
}
