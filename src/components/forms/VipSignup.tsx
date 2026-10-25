"use client";

import { toastSignup } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";

/**
 * VIP Crew capture. Opens Toast's hosted, branded signup page, which adds the
 * guest straight to the Toast Marketing email list — no manual CSV
 * export/import.
 */
export default function VipSignup() {
  function track(method: string) {
    if (typeof window === "undefined") return;
    const w = window as unknown as {
      gtag?: (...a: unknown[]) => void;
      fbq?: (...a: unknown[]) => void;
    };
    w.gtag?.("event", "generate_lead", { method });
    w.fbq?.("track", "Lead");
  }

  return (
    <section className="bg-green-deep text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow text-gold-soft">Join the Chip Shots VIP Crew</p>
            <h2 className="font-display mt-3 text-3xl font-light sm:text-4xl">
              First to know. First in the bay.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-cream/75">
              Members-only deals, event invites, club-night news and the
              occasional free-play perk — straight to your inbox. No spam, just
              the good stuff.
            </p>
          </div>

          <div>
            <ButtonLink
              href={toastSignup.emailUrl}
              external
              variant="gold"
              size="lg"
              withArrow
              onClick={() => track("vip_email")}
            >
              Join the email list
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
