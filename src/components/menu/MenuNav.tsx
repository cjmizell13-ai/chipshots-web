"use client";

import { useEffect, useRef, useState } from "react";
import { business, orderOnlineLive } from "@/lib/site";
import { trackOrderClick } from "@/lib/analytics";

export type MenuNavItem = { id: string; label: string };

/** Distance from the top of the viewport to the reading line, in px: the
 *  fixed header plus this bar, and a little air. */
const READING_LINE = 190;

/**
 * Section bar for the menu page. Sticks under the site header, marks the
 * section being read and keeps that link in view on narrow screens. Without
 * JavaScript it is still a row of working anchor links.
 */
export default function MenuNav({ items }: { items: MenuNavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const rail = useRef<HTMLDivElement>(null);
  const ids = items.map((i) => i.id).join("|");

  useEffect(() => {
    const list = ids.split("|");
    let frame = 0;

    const update = () => {
      frame = 0;
      let current = list[0];
      for (const id of list) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= READING_LINE) current = id;
        else break;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ids]);

  // Keep the active link inside the rail when the rail scrolls sideways.
  useEffect(() => {
    const el = rail.current;
    if (!el || el.scrollWidth <= el.clientWidth) return;
    const link = el.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!link) return;
    const left = link.offsetLeft - (el.clientWidth - link.offsetWidth) / 2;
    el.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }, [active]);

  return (
    <nav
      aria-label="Menu sections"
      className="sticky top-[4.75rem] z-40 border-y border-line bg-cream/95 backdrop-blur-md sm:top-[5.0625rem]"
    >
      <div className="mx-auto flex max-w-7xl items-stretch gap-4 px-5 sm:px-8">
        <div
          ref={rail}
          className="no-scrollbar relative -ml-5 flex min-w-0 flex-1 gap-x-6 overflow-x-auto pl-5 [mask-image:linear-gradient(to_right,transparent,black_1.25rem,black_calc(100%-2.5rem),transparent)]"
        >
          {items.map((item) => {
            const on = item.id === active;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-id={item.id}
                aria-current={on ? "true" : undefined}
                className={`shrink-0 whitespace-nowrap border-b-2 py-4 text-[0.68rem] uppercase tracking-[0.18em] transition-colors last:mr-10 ${
                  on
                    ? "border-gold text-ink"
                    : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
        {orderOnlineLive && (
          <a
            href={business.orderOnline}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackOrderClick("pickup", "menu_nav")}
            className="my-2 inline-flex shrink-0 items-center rounded-[2px] bg-green px-4 text-[0.68rem] uppercase tracking-[0.18em] text-cream transition-colors hover:bg-green-soft"
          >
            Order<span className="hidden sm:inline">&nbsp;pickup</span>
          </a>
        )}
      </div>
    </nav>
  );
}
