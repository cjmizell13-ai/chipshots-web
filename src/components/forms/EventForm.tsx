"use client";

import { useState } from "react";
import { business } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";

const eventOptions = [
  "Birthday Party",
  "Corporate / Team Building",
  "Tournament",
  "Bachelor / Bachelorette",
  "Holiday Party",
  "Something else",
];

const field =
  "w-full rounded-[2px] border border-ink/20 bg-cream px-4 py-3 text-ink placeholder:text-muted/70 outline-none transition focus:border-green focus:ring-2 focus:ring-gold/40";
const label = "eyebrow mb-2 block text-ink/70";

// Jotform "Chip Shots Event Inquiry" form. Submissions land in the Chip Shots
// Jotform inbox and trigger the email notification set up there.
const JOTFORM_ID = "263076889934072";
const JOTFORM_SUBMIT_URL = `https://submit.jotform.com/submit/${JOTFORM_ID}`;

/**
 * Request-an-event form. Posts straight to Jotform so every inquiry is
 * captured (no reliance on the guest's mail app). If the request can't be
 * sent at all, it falls back to a pre-filled email (mailto).
 */
export default function EventForm() {
  const [sent, setSent] = useState<"jotform" | "mailto" | null>(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
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

    // Conversion tracking: GA4 event, imported into Google Ads as the
    // "Event inquiry" conversion, plus a Meta EventInquiry custom event. Kept distinct from generate_lead so VIP
    // email signups are never counted as party leads.
    const trackInquiry = (method: string) => {
      const w = window as typeof window & {
        gtag?: (...a: unknown[]) => void;
        fbq?: (...a: unknown[]) => void;
      };
      w.gtag?.("event", "event_inquiry", {
        event_type: type || "unspecified",
        guests: Number(guests) || undefined,
        method,
        page_path: window.location.pathname,
      });
      // Meta: custom event (not "Lead", which VIP email signups use) so the
      // party campaign optimizes on real event inquiries only.
      w.fbq?.("trackCustom", "EventInquiry", {
        content_category: type || "unspecified",
        num_items: Number(guests) || undefined,
        content_name: method,
      });
    };

    // Map our fields onto the Jotform field names.
    const [first, ...rest] = name.trim().split(/\s+/);
    const [yyyy, mm, dd] = date ? date.split("-") : ["", "", ""];
    const jf = new FormData();
    jf.append("formID", JOTFORM_ID);
    jf.append("simple_spc", `${JOTFORM_ID}-${JOTFORM_ID}`);
    jf.append("q2_q2_fullname0[first]", first || name);
    jf.append("q2_q2_fullname0[last]", rest.join(" ") || "-");
    jf.append("q3_q3_phone1[full]", phone);
    jf.append("q4_q4_dropdown2", type || "Something else");
    jf.append("q5_q5_datetime3[month]", mm);
    jf.append("q5_q5_datetime3[day]", dd);
    jf.append("q5_q5_datetime3[year]", yyyy);
    jf.append("q6_q6_number4", guests);
    jf.append("q7_q7_textarea5", details);

    setSending(true);
    try {
      // Cross-origin POST; the response is opaque, but a resolved promise
      // means the request reached Jotform.
      await fetch(JOTFORM_SUBMIT_URL, {
        method: "POST",
        mode: "no-cors",
        body: jf,
      });
      trackInquiry("jotform");
      setSent("jotform");
    } catch {
      // Network failure: fall back to a pre-filled email.
      trackInquiry("mailto");
      window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      setSent("mailto");
    } finally {
      setSending(false);
    }
  }

  if (sent === "jotform") {
    return (
      <div className="border border-ink/15 bg-cream-2 p-10" role="status">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-deep text-gold-soft">
          <Icon.check className="h-6 w-6" />
        </span>
        <h3 className="font-display mt-6 text-3xl font-semibold text-ink">
          Your request is in.
        </h3>
        <p className="mt-3 max-w-sm text-ink/70">
          Our events team will reach out within one business day. Need us
          sooner? Give us a call.
        </p>
        <a
          href={business.phoneHref}
          className="mt-5 inline-flex items-center gap-2 text-ink hover:text-green-soft"
        >
          <Icon.phone className="h-4 w-4 text-gold" />
          {business.phone}
        </a>
      </div>
    );
  }

  if (sent === "mailto") {
    return (
      <div className="border border-ink/15 bg-cream-2 p-10" role="status">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-deep text-gold-soft">
          <Icon.check className="h-6 w-6" />
        </span>
        <h3 className="font-display mt-6 text-3xl font-semibold text-ink">
          Your email is ready to send.
        </h3>
        <p className="mt-3 max-w-sm text-ink/70">
          We opened a pre-filled message in your mail app. Hit send and our
          events team will get back to you. Prefer to call?
        </p>
        <a
          href={business.phoneHref}
          className="mt-5 inline-flex items-center gap-2 text-ink hover:text-green-soft"
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
      className="border border-ink/15 bg-cream-2 p-7 sm:p-10"
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
            Event type <span className="text-gold">*</span>
          </label>
          <select id="type" name="type" required className={field} defaultValue="">
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
        <p className="text-sm text-ink/60">
          We&apos;ll reply within one business day.
        </p>
        <Button type="submit" variant="gold" size="lg" withArrow disabled={sending}>
          {sending ? "Sending…" : "Request an Event"}
        </Button>
      </div>
    </form>
  );
}
