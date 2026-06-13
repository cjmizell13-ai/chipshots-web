"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { business, memberships } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";

const tierOptions = [
  ...memberships.map((m) => m.tier),
  "Range Card",
  "Not sure yet — help me choose",
];

const field =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-green-deep placeholder:text-muted/70 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/40";
const label = "mb-1.5 block text-sm font-medium text-green-deep";

/** The dialog body — mounted only while open so state resets on each open. */
function Dialog({ tier, onClose }: { tier: string; onClose: () => void }) {
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Lock scroll, close on Escape, focus the panel on open.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const selectedTier = String(data.get("tier") || "");
    const message = String(data.get("message") || "");

    const subject = `Membership inquiry — ${selectedTier}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Interested in: ${selectedTier}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-end justify-center sm:items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-green-deep/70 backdrop-blur-sm"
      />

      {/* Panel */}
      <motion.div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="membership-form-title"
        className="relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-cream p-7 shadow-[var(--shadow-soft)] outline-none sm:m-6 sm:max-w-lg sm:rounded-3xl sm:p-9"
        initial={reduce ? { opacity: 0 } : { y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={reduce ? { opacity: 0 } : { y: 40, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 0.7, 0.2, 1] }}
      >
        <button
          type="button"
          aria-label="Close form"
          onClick={onClose}
          className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-green-deep transition-colors hover:bg-cream-2"
        >
          <Icon.close className="h-5 w-5" />
        </button>

        {sent ? (
          <div className="flex flex-col items-center py-6 text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-deep text-gold">
              <Icon.check className="h-7 w-7" />
            </span>
            <h3 className="font-display mt-5 text-2xl text-green-deep">
              Your request is ready to send.
            </h3>
            <p className="mt-2 max-w-sm text-muted">
              We opened a pre-filled email in your mail app — hit send and our
              team will follow up to get you set up. Prefer to call?
            </p>
            <a
              href={business.phoneHref}
              className="mt-4 inline-flex items-center gap-2 font-medium text-green"
            >
              <Icon.phone className="h-4 w-4 text-gold" />
              {business.phone}
            </a>
          </div>
        ) : (
          <>
            <p className="eyebrow text-gold">Join Chip Shots</p>
            <h3
              id="membership-form-title"
              className="font-display mt-2 text-3xl text-green-deep"
            >
              Request your membership
            </h3>
            <p className="mt-2 text-sm text-muted">
              Tell us a little about you and we'll get you signed up.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
              <div>
                <label htmlFor="m-tier" className={label}>
                  Membership <span className="text-gold">*</span>
                </label>
                <select
                  id="m-tier"
                  name="tier"
                  required
                  defaultValue={tier}
                  className={field}
                >
                  {tierOptions.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="m-name" className={label}>
                    Name <span className="text-gold">*</span>
                  </label>
                  <input
                    id="m-name"
                    name="name"
                    required
                    className={field}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="m-phone" className={label}>
                    Phone <span className="text-gold">*</span>
                  </label>
                  <input
                    id="m-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className={field}
                    placeholder="(725) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="m-email" className={label}>
                  Email <span className="text-gold">*</span>
                </label>
                <input
                  id="m-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={field}
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="m-message" className={label}>
                  Anything else? <span className="text-muted/70">(optional)</span>
                </label>
                <textarea
                  id="m-message"
                  name="message"
                  rows={3}
                  className={`${field} resize-y`}
                  placeholder="Questions, preferred start date, etc."
                />
              </div>
              <Button type="submit" variant="gold" size="lg" withArrow className="w-full">
                Submit Request
              </Button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function MembershipForm({
  open,
  tier,
  onClose,
}: {
  open: boolean;
  tier: string;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && <Dialog tier={tier} onClose={onClose} />}
    </AnimatePresence>
  );
}
