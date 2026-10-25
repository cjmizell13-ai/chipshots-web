"use client";

import { toastSignup } from "@/lib/site";
import { Icon } from "@/components/ui/icons";

/**
 * Slim VIP Crew email signup strip — the very top of every page, above the
 * promo bar. Opens Toast's hosted signup page, which adds the guest straight
 * to the Toast Marketing email list.
 */
export default function VipBar() {
  function track() {
    const w = window as unknown as {
      gtag?: (...a: unknown[]) => void;
      fbq?: (...a: unknown[]) => void;
    };
    w.gtag?.("event", "generate_lead", { method: "vip_email_topbar" });
    w.fbq?.("track", "Lead");
  }

  return (
    <a
      href={toastSignup.emailUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={track}
      className="group flex w-full items-center justify-center gap-2 bg-green-deep px-4 py-2 text-center text-xs text-cream transition-colors hover:bg-green-deep/80 sm:text-sm"
    >
      <Icon.mail className="h-4 w-4 shrink-0 text-gold" />
      <span>
        <span className="font-semibold text-gold">Chip Shots VIP Crew</span>
        <span className="hidden sm:inline">
          {" "}
          — members-only deals &amp; event invites by email
        </span>
      </span>
      <span className="inline-flex items-center gap-1 font-semibold underline-offset-2 group-hover:underline">
        Sign up
        <Icon.arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}
