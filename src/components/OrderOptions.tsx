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
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/motion";

/**
 * "Order online" block: Toast pickup first (menu prices, commission-free),
 * delivery apps second. Renders nothing if online ordering is switched off.
 * `source` tags the analytics event with where on the site the click came from.
 */
export default function OrderOptions({ source }: { source: string }) {
  if (!orderOnlineLive) return null;

  return (
    <section
      id="order"
      className="mx-auto max-w-7xl scroll-mt-28 px-5 pt-16 sm:px-8 sm:pt-20"
    >
      <Reveal>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-gold">Order online</p>
            <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
              Take it to go.
            </h2>
          </div>
          <span className="hidden text-sm text-muted sm:block">
            Online orders {orderHours}
          </span>
        </div>
      </Reveal>

      <div
        className={`mt-10 grid gap-5 ${liveDelivery.length ? "md:grid-cols-[1.25fr_1fr]" : ""}`}
      >
        <Reveal>
          <article
            className={`relative h-full overflow-hidden rounded-3xl bg-green-deep text-cream shadow-[var(--shadow-card)] ${
              liveDelivery.length ? "" : "md:grid md:grid-cols-2"
            }`}
          >
            <div className="flex h-full flex-col p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <Icon.burger className="h-6 w-6 text-gold" />
                <p className="eyebrow text-gold-soft">Pickup · best price</p>
              </div>
              <h3 className="font-display mt-4 text-3xl font-light">
                Order ahead, skip the wait.
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-cream/75">
                Regular menu prices, no app markup. Order online, then come
                inside and give your name at the bar. Your food will be bagged
                and ready.
              </p>
              <div className="mt-auto pt-8">
                <ButtonLink
                  href={business.orderOnline}
                  external
                  size="lg"
                  withArrow
                  onClick={() => trackOrderClick("pickup", source)}
                >
                  Order pickup
                </ButtonLink>
              </div>
            </div>
            {/* With no delivery card beside it, fill the wide card's empty half. */}
            {!liveDelivery.length && (
              <div className="relative hidden min-h-[320px] md:block">
                <Image
                  src={img.foodBurger}
                  alt="A bacon cheeseburger with seasoned fries"
                  fill
                  sizes="(min-width: 1280px) 600px, 50vw"
                  className="object-cover"
                />
              </div>
            )}
          </article>
        </Reveal>

        {liveDelivery.length > 0 && (
          <Reveal delay={0.08}>
            <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-8 shadow-[var(--shadow-card)] sm:p-10">
              <div className="flex items-center gap-3">
                <Icon.pin className="h-6 w-6 text-gold" />
                <p className="eyebrow text-gold">Delivery</p>
              </div>
              <h3 className="font-display mt-4 text-3xl font-light text-green-deep">
                Delivered to your door.
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Find us on the delivery apps. App prices and fees apply.
              </p>
              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                {liveDelivery.map((d) => (
                  <ButtonLink
                    key={d.key}
                    href={d.href}
                    external
                    variant="outline"
                    size="md"
                    onClick={() => trackOrderClick(d.key, source)}
                  >
                    {d.name}
                  </ButtonLink>
                ))}
              </div>
            </article>
          </Reveal>
        )}
      </div>

      <p className="mt-4 text-center text-sm text-muted sm:hidden">
        Online orders {orderHours}
      </p>
    </section>
  );
}
