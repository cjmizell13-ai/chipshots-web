import type { Metadata } from "next";
import { shot } from "@/lib/reels";
import PageHero from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { Icon } from "@/components/ui/icons";
import MembershipTiers from "@/components/MembershipTiers";
import MembershipMath from "@/components/MembershipMath";
import BookButton from "@/components/BookButton";
import PixelEvent from "@/components/PixelEvent";
import HolidayDeals from "@/components/HolidayDeals";
import { business, img, memberBenefits } from "@/lib/site";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Membership at Chip Shots Golf Club in Henderson, NV: bay time included from $239/mo, priority booking and 24/7 access, with youth, night-only and corporate tiers. Extra hours $30/hr.",
  alternates: { canonical: "/memberships" },
};

export default function Memberships() {
  return (
    <>
      <PixelEvent event="ViewContent" params={{ content_name: "Memberships" }} />
      <PageHero
        eyebrow="Membership"
        title="Membership at the club."
        intro="The club is open to the public. Members have bay time included, first call on booking and extra hours at $30."
        image={img.bayLoveseat}
        shot={shot.members}
      />

      {/* ============================ HOLIDAY DEALS (auto-expires) ===== */}
      <HolidayDeals />

      {/* ============================================== BENEFITS ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <div>
              <p className="eyebrow text-gold">Membership</p>
              <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
                What members get.
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-muted">
                Month-to-month or annual, with no long contracts.
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

      {/* ============================================== HOW IT WORKS ===== */}
      <section className="bg-black text-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-gold">How it works</p>
              <h2 className="font-display mt-3 text-4xl font-light text-cream sm:text-5xl">
                How it works.
              </h2>
              <p className="mt-5 leading-relaxed text-cream/65">
                What membership includes, and how playing works once you are
                in.
              </p>
            </div>
          </Reveal>

          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Icon.target,
                title: "Bay time included",
                body: "Book online at no charge. Hours beyond your plan are $30, against $40 to $50 for guests.",
              },
              {
                icon: Icon.clock,
                title: "Fair use",
                body: "Up to 2 hours per visit and 2 active reservations at a time, so a bay is there when you want one.",
              },
              {
                icon: Icon.star,
                title: "On every visit",
                body: "Priority booking up to 14 days out, 10% off food and drink, and 24/7 access to the bays from the day you join.",
              },
            ].map((step, i) => {
              const StepIcon = step.icon;
              return (
                <StaggerItem
                  key={step.title}
                  as="article"
                  className="border border-cream/12 bg-green-deep/60 p-7"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-black text-gold">
                      <StepIcon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-3xl text-cream/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-xl text-cream">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">
                    {step.body}
                  </p>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal delay={0.05}>
            <p className="mt-8 text-sm text-cream/65">
              <span className="font-medium text-cream">Billing:</span>{" "}
              monthly tiers renew month to month and can be cancelled any time.
              Annual tiers are billed once, up front, and cost less over the
              year.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================== TIERS ===== */}
      <section className="bg-green-deep text-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow text-gold-soft">The tiers</p>
              <h2 className="font-display mt-3 text-4xl font-light sm:text-5xl">
                Membership levels
              </h2>
            </div>
          </Reveal>

          <MembershipTiers />

          <Reveal delay={0.05}>
            <p className="mt-10 text-center text-sm text-cream/55">
              Questions about a tier or a corporate plan? Call{" "}
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

      {/* ============================================== DO THE MATH ===== */}
      <MembershipMath
        cta={{ href: business.membershipJoin, label: "Join online", external: true }}
      />

      {/* ============================================== CTA ===== */}
      <section className="bg-gold">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 py-14 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-display text-3xl text-green-deep sm:text-4xl">
              Not ready to join?
            </h2>
            <p className="mt-2 text-green-deep/80">
              Any guest may book a bay. Membership can wait.
            </p>
          </div>
          <BookButton variant="green" size="lg" withArrow />
        </div>
      </section>
    </>
  );
}
