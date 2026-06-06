"use client";

import { useState } from "react";
import { business } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";

const eventOptions = [
  "Birthday Party",
  "Corporate / Team Building",
  "League or Tournament",
  "Bachelor / Bachelorette",
  "Holiday Party",
  "Something else",
];

const field =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-green-deep placeholder:text-muted/70 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/40";
const label = "mb-1.5 block text-sm font-medium text-green-deep";

/**
 * Request-an-event form. With no backend wired up, it composes a pre-filled
 * email to the venue (mailto), which works everywhere and needs no server.
 */
export default function EventForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const type = String(data.get("type") || "");
    const date = String(data.get("date") || "");
    const guests = String(data.get("guests") || "");
    const phone = String(data.get("phone") || "");
    const details = String(data.get("details") || "");

    const subject = `Event inquiry — ${type || "Chip Shots"}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Event type: ${type}`,
      `Preferred date: ${date}`,
      `Estimated guests: ${guests}`,
      "",
      "Details:",
      details,
    ].join("\n");

    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-gold/40 bg-cream-2 p-10 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-deep text-gold">
          <Icon.check className="h-7 w-7" />
        </span>
        <h3 className="font-display mt-5 text-2xl text-green-deep">
          Your email is ready to send.
        </h3>
        <p className="mt-2 max-w-sm text-muted">
          We opened a pre-filled message in your mail app — just hit send and our
          events team will get right back to you. Prefer to call?
        </p>
        <a
          href={business.phoneHref}
          className="mt-4 inline-flex items-center gap-2 font-medium text-green"
        >
          <Icon.phone className="h-4 w-4 text-gold" />
          {business.phone}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-soft)] sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Name <span className="text-gold">*</span>
          </label>
          <input id="name" name="name" required className={field} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            Phone <span className="text-gold">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={field}
            placeholder="(725) 000-0000"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="type" className={label}>
            Event type
          </label>
          <select id="type" name="type" className={field} defaultValue="">
            <option value="" disabled>
              Select an event type
            </option>
            {eventOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date" className={label}>
            Preferred date
          </label>
          <input id="date" name="date" type="date" className={field} />
        </div>
        <div>
          <label htmlFor="guests" className={label}>
            Estimated guests
          </label>
          <input
            id="guests"
            name="guests"
            type="number"
            min={1}
            inputMode="numeric"
            className={field}
            placeholder="e.g. 12"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="details" className={label}>
            Tell us about it
          </label>
          <textarea
            id="details"
            name="details"
            rows={4}
            className={`${field} resize-y`}
            placeholder="Occasion, food & drink ideas, anything special…"
          />
        </div>
      </div>

      <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          We'll reply within one business day.
        </p>
        <Button type="submit" variant="gold" size="lg" withArrow>
          Request an Event
        </Button>
      </div>
    </form>
  );
}
