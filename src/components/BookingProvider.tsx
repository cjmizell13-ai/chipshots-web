"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { business } from "@/lib/site";
import { Icon } from "@/components/ui/icons";

type BookingContextValue = { open: () => void; close: () => void };

const BookingContext = createContext<BookingContextValue | null>(null);

/** Access the global booking modal. */
export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within <BookingProvider>");
  return ctx;
}

/**
 * Provides a site-wide booking modal so any "Book a Bay" action opens the
 * YourGolfBooking flow in-page — no new tab, no context switch.
 */
export default function BookingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  return (
    <BookingContext.Provider value={{ open, close }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[300] flex items-center justify-center bg-green-deep/95 p-3 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Book a simulator bay"
          >
            <motion.div
              className="relative flex h-full max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-gold/25 bg-white shadow-2xl"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 0.7, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 border-b border-line bg-green-deep px-5 py-3.5 text-cream">
                <div className="min-w-0">
                  <p className="font-display text-lg leading-tight text-cream">
                    Book a Bay
                  </p>
                  <p className="truncate text-xs text-cream/65">
                    Pick your bay, day and time
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Close booking"
                  onClick={close}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10"
                >
                  <Icon.close className="h-5 w-5" />
                </button>
              </div>

              <div className="relative flex-1">
                {!loaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-cream-2">
                    <span className="h-9 w-9 animate-spin rounded-full border-2 border-line border-t-gold" />
                  </div>
                )}
                <iframe
                  src={business.booking}
                  title="Book a simulator bay at Chip Shots"
                  onLoad={() => setLoaded(true)}
                  className="h-full w-full"
                />
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-line bg-cream-2 px-5 py-3 text-sm">
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center gap-2 text-green-deep"
                >
                  <Icon.phone className="h-4 w-4 text-gold" />
                  {business.phone}
                </a>
                <a
                  href={business.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted hover:text-green-deep"
                >
                  Open in new tab
                  <Icon.arrow className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BookingContext.Provider>
  );
}
