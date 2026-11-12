"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { business, liveDelivery, nav, orderOnlineLive, reservationsLive } from "@/lib/site";
import { trackOrderClick, trackReserveClick } from "@/lib/analytics";
import { Wordmark } from "@/components/ui/brand";
import { Button, ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { AmpText } from "@/components/ui/amp";
import BookButton from "@/components/BookButton";
import { useBooking } from "@/components/BookingProvider";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const { open: openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,0.7,0.2,1)] ${
          scrolled
            ? "bg-green-deep/95 backdrop-blur-md border-b border-cream/10"
            : "bg-gradient-to-b from-green-deep/70 to-transparent"
        }`}
      >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Wordmark />

        <div className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`link-underline pb-1 text-[0.72rem] font-normal uppercase tracking-[0.18em] transition-colors ${
                  active ? "text-gold" : "text-cream/85 hover:text-cream"
                }`}
              >
                <AmpText className="text-white">{item.label}</AmpText>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          {reservationsLive && (
            <span className="hidden whitespace-nowrap md:block lg:hidden xl:block">
              <ButtonLink
                href={business.reservations}
                external
                variant="ghost-light"
                size="md"
                onClick={() => trackReserveClick("header")}
              >
                Reserve a Table
              </ButtonLink>
            </span>
          )}
          {/* The header only fits two buttons next to the nav. While
              reservations are live, "Reserve a Table" takes the second slot;
              pickup ordering stays in the mobile menu and on /food-drink. */}
          {orderOnlineLive && !reservationsLive && (
            <span className="hidden whitespace-nowrap md:block lg:hidden xl:block">
              <ButtonLink
                href={business.orderOnline}
                external
                variant="ghost-light"
                size="md"
                onClick={() => trackOrderClick("pickup", "header")}
              >
                Order Pickup
              </ButtonLink>
            </span>
          )}
          <span className="hidden sm:block">
            <BookButton variant="gold" size="md" />
          </span>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[2px] border border-cream/25 text-cream transition-colors hover:bg-cream/10 lg:hidden"
          >
            <Icon.menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-0 bg-green-deep/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-green-deep px-7 pb-10 pt-6 shadow-2xl"
              initial={reduce ? { opacity: 0 } : { x: "100%" }}
              animate={reduce ? { opacity: 1 } : { x: 0 }}
              exit={reduce ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 0.7, 0.2, 1] }}
            >
              <div className="flex items-center justify-between">
                <Wordmark />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-[2px] border border-cream/25 text-cream hover:bg-cream/10"
                >
                  <Icon.close className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-10 flex flex-col gap-1">
                {[{ label: "Home", href: "/" }, ...nav].map((item, i) => {
                  const active = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={reduce ? false : { opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`block border-b border-cream/10 py-4 font-display text-2xl ${
                          active ? "text-gold" : "text-cream"
                        }`}
                      >
                        <AmpText className="text-white">{item.label}</AmpText>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-auto flex flex-col gap-4 pt-8">
                <Button
                  variant="gold"
                  size="lg"
                  withArrow
                  onClick={() => {
                    setOpen(false);
                    openBooking();
                  }}
                >
                  Book a Bay
                </Button>
                {reservationsLive && (
                  <ButtonLink
                    href={business.reservations}
                    external
                    variant="ghost-light"
                    size="lg"
                    onClick={() => {
                      setOpen(false);
                      trackReserveClick("mobile_menu");
                    }}
                  >
                    Reserve a Table
                  </ButtonLink>
                )}
                {orderOnlineLive && (
                  <ButtonLink
                    href={business.orderOnline}
                    external
                    variant="ghost-light"
                    size="lg"
                    onClick={() => {
                      setOpen(false);
                      trackOrderClick("pickup", "mobile_menu");
                    }}
                  >
                    Order Food for Pickup
                  </ButtonLink>
                )}
                {orderOnlineLive && liveDelivery.length > 0 && (
                  <p className="text-center text-sm text-cream/70">
                    Delivery on{" "}
                    {liveDelivery.map((d, i) => (
                      <span key={d.key}>
                        {i > 0 && " or "}
                        <a
                          href={d.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            setOpen(false);
                            trackOrderClick(d.key, "mobile_menu");
                          }}
                          className="text-cream underline decoration-gold/60 underline-offset-4 hover:text-gold"
                        >
                          {d.name}
                        </a>
                      </span>
                    ))}
                  </p>
                )}
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center gap-2 text-cream/80"
                >
                  <Icon.phone className="h-4 w-4 text-gold" />
                  {business.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
