"use client";

import { useState } from "react";
import { business } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";

const field =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-green-deep placeholder:text-muted/70 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/40";
const label = "mb-1.5 block text-sm font-medium text-green-deep";

/** Contact form — composes a pre-filled email (mailto), no backend needed. */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
      `Message from ${name}`
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
          Thanks — your message is ready to send.
        </h3>
        <p className="mt-2 max-w-sm text-muted">
          We opened a pre-filled email in your mail app. Hit send and we'll be in
          touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-soft)] sm:p-9"
    >
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="c-name" className={label}>
              Name <span className="text-gold">*</span>
            </label>
            <input id="c-name" name="name" required className={field} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="c-email" className={label}>
              Email <span className="text-gold">*</span>
            </label>
            <input
              id="c-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={field}
              placeholder="you@email.com"
            />
          </div>
        </div>
        <div>
          <label htmlFor="c-message" className={label}>
            Message <span className="text-gold">*</span>
          </label>
          <textarea
            id="c-message"
            name="message"
            rows={5}
            required
            className={`${field} resize-y`}
            placeholder="How can we help?"
          />
        </div>
      </div>
      <div className="mt-7 flex justify-end">
        <Button type="submit" variant="gold" size="lg" withArrow>
          Send Message
        </Button>
      </div>
    </form>
  );
}
