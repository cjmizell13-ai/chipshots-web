"use client";

import Image from "next/image";
import { toastSignup } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";

/**
 * VIP Crew capture. Both channels feed Toast Marketing directly — no manual
 * CSV export/import:
 *  - Email opens Toast's hosted, branded signup page (adds to the email list).
 *  - SMS opt-ins are collected by Toast itself for TCPA compliance — visitors
 *    join by texting JOIN to the toll-free number (click-to-text on mobile,
 *    scan-to-text QR on desktop).
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

  const { emailUrl, sms } = toastSignup;

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
              Members-only deals, event invites, club-night news and the
              occasional free-play perk — straight to your inbox and phone. No
              spam, just the good stuff.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Email → Toast hosted signup page */}
            <div className="flex flex-col rounded-3xl border border-cream/15 bg-green-deep/50 p-7 shadow-[var(--shadow-soft)]">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Icon.mail className="h-6 w-6" />
              </span>
              <h3 className="font-display mt-4 text-2xl text-cream">
                Email updates
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/70">
                Deals, events and club-night news in your inbox. Takes ten seconds.
              </p>
              <div className="mt-6">
                <ButtonLink
                  href={emailUrl}
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

            {/* SMS → Toast text-to-join (click-to-text on mobile, QR on desktop) */}
            <div className="flex flex-col rounded-3xl border border-cream/15 bg-green-deep/50 p-7 shadow-[var(--shadow-soft)]">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Icon.phone className="h-6 w-6" />
              </span>
              <h3 className="font-display mt-4 text-2xl text-cream">
                Text alerts
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/70">
                Text{" "}
                <a
                  href={sms.href}
                  onClick={() => track("vip_sms")}
                  className="font-semibold text-gold underline-offset-4 hover:underline"
                >
                  {sms.keyword}
                </a>{" "}
                to{" "}
                <a
                  href={sms.href}
                  onClick={() => track("vip_sms")}
                  className="font-semibold text-gold underline-offset-4 hover:underline"
                >
                  {sms.display}
                </a>{" "}
                to join.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <ButtonLink
                  href={sms.href}
                  external
                  variant="gold"
                  size="lg"
                  className="sm:hidden"
                  onClick={() => track("vip_sms")}
                >
                  Text to join
                </ButtonLink>
                <div className="hidden items-center gap-3 sm:flex">
                  <Image
                    src={sms.qr}
                    alt={`Scan to text ${sms.keyword} to Chip Shots`}
                    width={88}
                    height={88}
                    className="rounded-xl bg-white p-1.5"
                  />
                  <span className="text-xs leading-relaxed text-cream/60">
                    Scan with your phone camera to text us.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-cream/45">
          By texting {sms.keyword}, you agree to receive recurring automated
          marketing texts from Chip Shots at the number provided. Consent is not
          a condition of purchase. Msg &amp; data rates may apply. Reply STOP to
          opt out, HELP for help.
        </p>
      </div>
    </section>
  );
}
