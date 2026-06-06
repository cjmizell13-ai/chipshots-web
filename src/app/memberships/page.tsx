import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import MembershipTiers from "@/components/MembershipTiers";
import { business, img, memberBenefits } from "@/lib/site";

export const metadata: Metadata = {
  title: "Memberships & Pricing",
  description:
    "Join Chip Shots in Henderson, NV. Unlimited bay time from $239/mo, $30/hr member rate, priority booking and 24/7 access. Youth, corporate and late-night tiers available.",
};

export default function Memberships() {
  return (
    <>
      <PageHero
        eyebrow="Memberships & Pricing"
        title="Play more. Pay less. Skip the line."
        intro="Members get the $30 bay rate anytime, priority booking and round-the-clock access. There's a tier for every kind of player."
        image={img.bayLoveseat}
      />

      {/* ============================================== BENEFITS ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <div>
              <p className="eyebrow text-gold">Why join</p>
              <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
                The perks pay for themselves.
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-muted">
                If you're playing even a couple times a month, a membership is
                the easy call. No-commitment monthly options available.
              </p>
            </div>
          </Reveal>
          <Stagger className="grid gap-3 sm:grid-cols-2">
            {memberBenefits.map((b) => (
              <StaggerItem
                key={b}
                className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-card)]"
              >
                <Icon.check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm text-green-deep">{b}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============================================== TIERS ===== */}
      <section className="bg-green-deep text-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow text-gold-soft">Choose your tier</p>
              <h2 className="font-display mt-3 text-4xl font-light sm:text-5xl">
                Membership levels
              </h2>
            </div>
          </Reveal>

          <MembershipTiers />

          <Reveal delay={0.05}>
            <p className="mt-10 text-center text-sm text-cream/55">
              Questions on tiers or corporate plans? Call{" "}
              <a href={business.phoneHref} className="text-gold-soft underline">
                {business.phone}
              </a>{" "}
              or email{" "}
              <a href={`mailto:${business.email}`} className="text-gold-soft underline">
                {business.email}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================== CTA ===== */}
      <section className="bg-gold">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 py-14 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-display text-3xl text-green-deep sm:text-4xl">
              Not ready to commit?
            </h2>
            <p className="mt-2 text-green-deep/80">
              Book a bay first — you'll be back. Members start at $30/hr.
            </p>
          </div>
          <ButtonLink href={business.booking} external variant="green" size="lg" withArrow>
            Book a Bay
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
