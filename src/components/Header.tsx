"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { business, nav } from "@/lib/site";
import { Wordmark } from "@/components/ui/brand";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { AmpText } from "@/components/ui/amp";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,0.7,0.2,1)] ${
        scrolled
          ? "bg-green-deep/95 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]"
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
                className={`link-underline pb-1 text-sm tracking-wide transition-colors ${
                  active ? "text-gold" : "text-cream/85 hover:text-cream"
                }`}
              >
                <AmpText className="text-gold/90">{item.label}</AmpText>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:block">
            <ButtonLink
              href={business.booking}
              external
              variant="gold"
              size="md"
            >
              Book a Bay
            </ButtonLink>
          </span>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10 lg:hidden"
          >
            <Icon.menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

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
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream hover:bg-cream/10"
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
                        <AmpText className="text-gold">{item.label}</AmpText>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-auto flex flex-col gap-4 pt-8">
                <ButtonLink
                  href={business.booking}
                  external
                  variant="gold"
                  size="lg"
                  withArrow
                >
                  Book a Bay
                </ButtonLink>
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
    </header>
  );
}
