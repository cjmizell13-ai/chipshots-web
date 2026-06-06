import Link from "next/link";
import { business, hoursSummary, nav } from "@/lib/site";
import { Wordmark } from "@/components/ui/brand";
import { Icon } from "@/components/ui/icons";
import { AmpText } from "@/components/ui/amp";
import OpenStatus from "@/components/ui/OpenStatus";

export default function Footer() {
  return (
    <footer className="bg-green-deep text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + tagline */}
          <div>
            <Wordmark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
              Five TrackMan simulator bays, a full bar and a from-scratch
              kitchen — in the heart of Henderson. Veteran-owned.
            </p>
            <p className="eyebrow mt-5 text-gold-soft">{business.tagline}</p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h3 className="eyebrow text-gold-soft">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/80">
              <li>
                <Link href="/" className="link-underline pb-0.5 hover:text-cream">
                  Home
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline pb-0.5 hover:text-cream"
                  >
                    <AmpText className="text-gold-soft">{item.label}</AmpText>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/food-drink"
                  className="link-underline pb-0.5 text-gold hover:text-gold-soft"
                >
                  View the Menu
                </Link>
              </li>
            </ul>
          </nav>

          {/* Visit */}
          <div>
            <h3 className="eyebrow text-gold-soft">Visit</h3>
            <ul className="mt-5 space-y-4 text-sm text-cream/80">
              <li className="flex gap-3">
                <Icon.pin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={business.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
                  {business.address.street}
                  <br />
                  {business.address.city}, {business.address.region}{" "}
                  {business.address.postalCode}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon.phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={business.phoneHref} className="hover:text-cream">
                  {business.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon.mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${business.email}`} className="hover:text-cream">
                  {business.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="eyebrow text-gold-soft">Hours</h3>
            <OpenStatus className="mt-4 text-cream/90" />
            <ul className="mt-4 space-y-3 text-sm text-cream/80">
              {hoursSummary.map((h) => (
                <li key={h.label} className="flex items-center gap-3">
                  <Icon.clock className="h-4 w-4 shrink-0 text-gold" />
                  <span className="flex-1">{h.label}</span>
                  <span className="text-cream/90">{h.time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chip Shots on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/85 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon.instagram className="h-5 w-5" />
              </a>
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chip Shots on Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/85 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon.facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/12 pt-7 text-xs text-cream/55 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <Icon.flag className="h-4 w-4 text-gold" />
            Veteran-owned · Henderson, Nevada
          </p>
        </div>
      </div>
    </footer>
  );
}
