"use client";

import { useState } from "react";
import { vipForm } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";

/**
 * VIP Crew email/SMS capture. Posts to a Google Form (responses → Sheet →
 * Toast Marketing) using a no-cors fetch so the visitor never leaves the page.
 * The consent checkbox is the TCPA opt-in; its text is stored with every row.
 */
export default function VipSignup() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) return;

    const data = new FormData();
    data.append(vipForm.fields.email, email);
    data.append(vipForm.fields.phone, phone);
    data.append(vipForm.fields.consent, vipForm.consentRecord);

    // no-cors: Google Forms doesn't return CORS headers, but the POST is
    // still recorded. We can't read the response, so we optimistically
    // confirm on the client.
    fetch(vipForm.action, { method: "POST", mode: "no-cors", body: data }).catch(
      () => {}
    );

    if (typeof window !== "undefined") {
      const w = window as unknown as {
        gtag?: (...a: unknown[]) => void;
        fbq?: (...a: unknown[]) => void;
      };
      w.gtag?.("event", "generate_lead", { method: "vip_crew" });
      w.fbq?.("track", "Lead");
    }

    setSent(true);
  }

  return (
    <section className="bg-green-deep text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow text-gold-soft">Join the VIP Crew</p>
            <h2 className="font-display mt-3 text-3xl font-light sm:text-4xl">
              First to know. First in the bay.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-cream/75">
              Drop your info for members-only deals, event invites, league
              openings and the occasional free-play perk — straight to your
              inbox and phone. No spam, just the good stuff.
            </p>
          </div>

          {sent ? (
            <div className="flex flex-col items-start rounded-3xl border border-gold/40 bg-green-deep/60 p-8 sm:p-10">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-green-deep">
                <Icon.check className="h-7 w-7" />
              </span>
              <h3 className="font-display mt-5 text-2xl text-cream">
                You&apos;re in the Crew.
              </h3>
              <p className="mt-2 max-w-sm text-cream/75">
                Thanks for signing up — keep an eye on your inbox for what&apos;s
                next at Chip Shots.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-cream/15 bg-green-deep/50 p-7 shadow-[var(--shadow-soft)] sm:p-9"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="vip-email"
                    className="mb-1.5 block text-sm font-medium text-cream"
                  >
                    Email <span className="text-gold">*</span>
                  </label>
                  <input
                    id="vip-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-cream/20 bg-cream px-4 py-3 text-green-deep placeholder:text-muted/70 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/40"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="vip-phone"
                    className="mb-1.5 block text-sm font-medium text-cream"
                  >
                    Mobile{" "}
                    <span className="font-normal text-cream/55">
                      (for texts)
                    </span>
                  </label>
                  <input
                    id="vip-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-cream/20 bg-cream px-4 py-3 text-green-deep placeholder:text-muted/70 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/40"
                    placeholder="(725) 000-0000"
                  />
                </div>
              </div>

              <label className="mt-5 flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-cream/65">
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-gold"
                />
                <span>
                  I agree to receive marketing emails and recurring automated
                  text messages from Chip Shots at the number provided. Consent
                  is not a condition of purchase. Msg &amp; data rates may apply.
                  Reply STOP to opt out.
                </span>
              </label>

              <div className="mt-6">
                <Button type="submit" variant="gold" size="lg" withArrow>
                  Join the Crew
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
