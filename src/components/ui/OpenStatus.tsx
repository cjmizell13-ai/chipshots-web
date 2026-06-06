"use client";

import { useEffect, useState } from "react";
import { schedule, timezone } from "@/lib/site";

type Status = { open: boolean; label: string };

/** Current hour (fractional) and weekday in the venue's timezone. */
function venueNow(): { day: number; hour: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(new Date());

  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const dayMap: Record<string, number> = {
    Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
  };
  const day = dayMap[get("weekday")] ?? 0;
  // Intl can emit "24" for midnight — normalize to 0.
  const rawHour = parseInt(get("hour"), 10) % 24;
  const hour = rawHour + parseInt(get("minute"), 10) / 60;
  return { day, hour };
}

function computeStatus(): Status {
  const { day, hour } = venueNow();
  const today = schedule[day];

  if (hour >= today.open && hour < today.close) {
    const closesAt = today.close % 24;
    const closeLabel =
      today.close >= 24
        ? "midnight"
        : `${((closesAt + 11) % 12) + 1}${closesAt >= 12 ? " PM" : " AM"}`;
    return { open: true, label: `Open now · until ${closeLabel}` };
  }

  // Closed — find the next opening.
  if (hour < today.open) {
    const opensAt = today.open;
    return {
      open: false,
      label: `Closed · opens ${((opensAt + 11) % 12) + 1} ${opensAt >= 12 ? "PM" : "AM"}`,
    };
  }
  return { open: false, label: "Closed · opens 11 AM" };
}

export default function OpenStatus({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    setStatus(computeStatus());
    const id = setInterval(() => setStatus(computeStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  // Render nothing until mounted to avoid a hydration mismatch.
  if (!status) return null;

  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-medium ${className}`}
      aria-live="polite"
    >
      <span className="relative flex h-2.5 w-2.5">
        {status.open && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
        )}
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            status.open ? "bg-emerald-400" : "bg-cream/40"
          }`}
        />
      </span>
      {status.label}
    </span>
  );
}
