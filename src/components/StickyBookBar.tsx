"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { business } from "@/lib/site";
import { Icon } from "@/components/ui/icons";

/**
 * Mobile-only sticky action bar that slides up once the user scrolls past the
 * hero. Two big, thumb-friendly targets: Book a Bay and Call.
 */
export default function StickyBookBar() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 lg:hidden"
          initial={reduce ? { opacity: 0 } : { y: 80, opacity: 0 }}
          animate={reduce ? { opacity: 1 } : { y: 0, opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 0.7, 0.2, 1] }}
        >
          <div className="mx-auto flex max-w-md items-stretch gap-2 rounded-2xl border border-cream/15 bg-green-deep/95 p-2 shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <a
              href={business.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3.5 text-sm font-medium text-green-deep transition-colors hover:bg-gold-soft"
            >
              Book a Bay
              <Icon.arrow className="h-4 w-4" />
            </a>
            <a
              href={business.phoneHref}
              aria-label={`Call ${business.phone}`}
              className="inline-flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-xl border border-cream/25 text-cream transition-colors hover:bg-cream/10"
            >
              <Icon.phone className="h-5 w-5 text-gold" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
