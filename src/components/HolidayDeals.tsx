import { Reveal } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import UntilDate from "@/components/ui/UntilDate";
import { golf } from "@/lib/site";
import { holidayDeals, type HolidayDeal } from "@/lib/holiday";

type Variant = "default" | "booking" | "gift-cards";

const peakRate = golf.rates.find((r) => r.name === "Peak")?.price ?? "$50";

// Latest end date across all deals — the whole section hides after it.
const lastDay = holidayDeals.reduce((max, d) => (d.until > max ? d.until : max), "");

/**
 * Black Friday & holiday deals banner. Each card hides itself after its own
 * `until` date and the section disappears after the last one (UntilDate
 * checks in the browser, so it works on prerendered pages without a deploy).
 */
export default function HolidayDeals({ variant = "default" }: { variant?: Variant }) {
  const firstMonth = holidayDeals.find((d) => d.key === "first-month");

  // On the booking page, lead with the membership pitch: $99 is less than
  // two peak hours, so anyone booking should just join.
  if (variant === "booking") {
    if (!firstMonth) return null;
    return (
      <UntilDate until={firstMonth.until}>
        <section className="bg-green-deep text-cream">
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
            <Reveal>
              <div className="rounded-3xl border border-gold/50 bg-green-soft/25 p-8 sm:p-10">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="eyebrow text-gold-soft">Black Friday sale</p>
                    <h2 className="font-display mt-3 text-3xl font-light sm:text-4xl">
                      Booking a bay? Join for $99 instead.
                    </h2>
                    <p className="mt-4 max-w-2xl leading-relaxed text-cream/80">
                      Your first month of membership is{" "}
                      <span className="font-semibold text-gold">$99</span> with
                      code <span className="font-semibold text-gold">BLACKFRIDAY</span>
                      {" "}— less than two peak hours of bay time ({peakRate}/hr).
                      Then $239/month for unlimited bay time, 24/7, 2 active
                      hours at a time, plus 10% off food and drinks.
                    </p>
                    <p className="mt-3 text-sm text-cream/60">
                      New members only, one per person. Ends Friday, Dec 4.
                      Join online or at the front desk.
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col items-start gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
                    <span className="inline-flex items-center justify-center gap-3 rounded-2xl border border-gold/40 bg-green-deep/60 px-6 py-4">
                      <span className="text-sm uppercase tracking-wide text-cream/60">
                        Code
                      </span>
                      <span className="font-display text-2xl text-gold sm:text-3xl">
                        BLACKFRIDAY
                      </span>
                    </span>
                    <ButtonLink href={firstMonth.href} external variant="gold" size="lg" withArrow>
                      Join for $99
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </UntilDate>
    );
  }

  const ordered =
    variant === "gift-cards"
      ? [...holidayDeals].sort((a, b) =>
          a.key === "gift-cards" ? -1 : b.key === "gift-cards" ? 1 : 0,
        )
      : holidayDeals;

  return (
    <UntilDate until={lastDay}>
      <section className="bg-green-deep text-cream">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
          <Reveal>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow text-gold-soft">Black Friday &amp; holiday deals</p>
                <h2 className="font-display mt-3 text-3xl font-light sm:text-4xl">
                  Our best deals of the year.
                </h2>
              </div>
              <p className="text-sm text-cream/60">Buy online or in person.</p>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ordered.map((d) => (
              <UntilDate key={d.key} until={d.until}>
                <DealCard deal={d} />
              </UntilDate>
            ))}
          </div>
        </div>
      </section>
    </UntilDate>
  );
}

function DealCard({ deal }: { deal: HolidayDeal }) {
  return (
    <Reveal>
      <div className="flex h-full flex-col rounded-3xl border border-gold/40 bg-green-soft/25 p-7">
        <p className="eyebrow text-gold-soft">{deal.eyebrow}</p>
        <h3 className="font-display mt-3 text-3xl font-light text-cream">{deal.title}</h3>
        {deal.code && (
          <p className="mt-4 inline-flex w-fit items-center gap-2 rounded-xl border border-gold/50 bg-green-deep/60 px-4 py-2">
            <span className="text-xs uppercase tracking-wide text-cream/60">Code</span>
            <span className="font-semibold tracking-wide text-gold">{deal.code}</span>
          </p>
        )}
        <p className="mt-4 leading-relaxed text-cream/80">{deal.body}</p>
        <p className="mt-2 text-sm text-cream/60">{deal.fine}</p>
        <div className="mt-auto pt-6">
          <ButtonLink href={deal.href} external variant="gold" size="md" withArrow>
            {deal.cta}
          </ButtonLink>
        </div>
      </div>
    </Reveal>
  );
}
