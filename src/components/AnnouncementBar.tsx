"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { promoBanners } from "@/lib/site";
import { Icon } from "@/components/ui/icons";

/** Slim, always-visible promo strip pinned above the header. Rotates promos. */
export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (promoBanners.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % promoBanners.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  const promo = promoBanners[index];

  return (
    <Link
      href={promo.href}
      className="group flex w-full items-center justify-center gap-2 bg-gold px-4 py-2 text-center text-xs font-medium text-green-deep transition-colors hover:bg-gold-soft sm:text-sm"
    >
      {promo.code && (
        <span className="hidden rounded-full bg-green-deep/10 px-2 py-0.5 font-semibold tracking-wide sm:inline">
          {promo.code}
        </span>
      )}
      <span>{promo.message}</span>
      <span className="inline-flex items-center gap-1 font-semibold underline-offset-2 group-hover:underline">
        {promo.cta}
        <Icon.arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
