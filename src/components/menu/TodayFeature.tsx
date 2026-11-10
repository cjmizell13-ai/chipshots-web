"use client";

import { weekFeatures } from "@/lib/site";
import { useVenueWeekday } from "@/components/ui/OnWeekday";

/**
 * One line under the menu hero naming today's feature, with a jump to the
 * full week. Before the browser knows what day it is at the venue, it shows a
 * neutral line of the same height so nothing shifts.
 */
export default function TodayFeature() {
  const today = useVenueWeekday();
  const feature = weekFeatures.find((f) => f.dow === today);

  return (
    <a
      href="#week"
      className="group flex flex-wrap items-baseline gap-x-5 gap-y-1 border-b border-line py-5 text-ink transition-colors hover:text-green-soft"
    >
      <span className="eyebrow text-muted">
        {feature ? `Today · ${feature.day}` : "Every day"}
      </span>
      <span className="font-display text-xl font-semibold">
        {feature ? feature.headline : "A different feature each night"}
      </span>
      {feature && (
        <span className="text-sm text-ink/70">{feature.detail}</span>
      )}
      <span className="ml-auto text-sm text-ink/60 transition-transform group-hover:translate-x-1">
        The week <span aria-hidden>→</span>
      </span>
    </a>
  );
}
