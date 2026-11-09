"use client";

import Image from "next/image";
import {
  business,
  img,
  liveDelivery,
  orderHours,
  orderOnlineLive,
} from "@/lib/site";
import { trackOrderClick } from "@/lib/analytics";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/motion";

/**
 * "Order online" block: Toast pickup first (menu prices, commission-free),
 * delivery apps second. Renders nothing if online ordering is switched off.
 * `source` tags the analytics event with where on the site the click came from.
 */
export default function OrderOptions({
  source,
  kicker = "To go",
}: {
  source: string;
  /** Section label, so a page can number it in sequence. */
  kicker?: string;
}) {
  if (!orderOnlineLive) return null;

  return (
    <section id="order" className="scroll-mt-32 bg-cream-2">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal>
          <p className="kicker text-muted">{kicker}</p>
          <h2 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
            Order ahead, <span className="text-green-soft">skip the wait.</span>
          </h2>
          <p className="mt-6 max-w-md text-ink/75">
            Pickup is the regular menu at regular prices, with no app markup.
            Order online, come inside and give your name at the bar. Your food
            will be bagged and ready.
          </p>

          <dl className="mt-8 max-w-md">
            <div className="flex items-baseline gap-4 border-b border-ink/15 py-3.5">
              <dt className="eyebrow text-ink/60">Online orders</dt>
              <span className="leader" aria-hidden />
              <dd className="text-right text-sm text-ink/80">{orderHours}</dd>
            </div>
            {liveDelivery.length > 0 && (
              <div className="flex items-baseline gap-4 border-b border-ink/15 py-3.5">
                <dt className="eyebrow text-ink/60">Delivery</dt>
                <span className="leader" aria-hidden />
                <dd className="text-sm text-ink/80">
                  {liveDelivery.map((d, i) => (
                    <span key={d.key}>
                      {i > 0 && " · "}
                      <a
                        href={d.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackOrderClick(d.key, source)}
                        className="text-ink underline decoration-gold decoration-1 underline-offset-4 hover:text-green-soft"
                      >
                        {d.name}
                      </a>
                    </span>
                  ))}
                </dd>
              </div>
            )}
          </dl>
          {liveDelivery.length > 0 && (
            <p className="mt-3 max-w-md text-xs text-ink/55">
              App prices and fees apply on delivery.
            </p>
          )}

          <div className="mt-9">
            <ButtonLink
              href={business.orderOnline}
              external
              variant="green"
              size="lg"
              withArrow
              onClick={() => trackOrderClick("pickup", source)}
            >
              Order pickup
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden bg-green-deep">
              <Image
                src={img.clubNachos}
                alt="Loaded nachos with salsa, sour cream and jalapeños at Chip Shots"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[0.65rem] uppercase tracking-[0.2em] text-muted">
              Nachos, from the shareables
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
