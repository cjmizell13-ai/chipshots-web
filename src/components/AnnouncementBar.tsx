import Link from "next/link";
import { promoBanner } from "@/lib/site";
import { Icon } from "@/components/ui/icons";

/** Slim, always-visible promo strip pinned above the header. */
export default function AnnouncementBar() {
  return (
    <Link
      href={promoBanner.href}
      className="group flex w-full items-center justify-center gap-2 bg-gold px-4 py-2 text-center text-xs font-medium text-green-deep transition-colors hover:bg-gold-soft sm:text-sm"
    >
      <span>{promoBanner.message}</span>
      <span className="inline-flex items-center gap-1 font-semibold underline-offset-2 group-hover:underline">
        {promoBanner.cta}
        <Icon.arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
