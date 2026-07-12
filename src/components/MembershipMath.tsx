import { Reveal } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { leagues } from "@/lib/site";

/**
 * The "does membership pay for itself?" comparison. Shared by /league and
 * /memberships — pass a cta to point the bottom line somewhere useful for
 * that page (omit it to show the text alone).
 */
export default function MembershipMath({
  cta,
}: {
  cta?: { href: string; label: string; external?: boolean };
}) {
  const math = leagues.membershipMath;
  return (
    <section className="bg-cream-2">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">{math.eyebrow}</p>
            <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
              {math.title}
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Pay as you go */}
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-8">
              <h3 className="font-display text-2xl text-green-deep">
                {math.payg.title}
              </h3>
              <dl className="mt-6 flex-1 divide-y divide-line/70">
                {math.payg.lines.map((line) => (
                  <div
                    key={line.label}
                    className="flex items-baseline justify-between gap-4 py-3"
                  >
                    <dt className="text-muted">{line.label}</dt>
                    <dd className="font-display tabular-nums text-green-deep">
                      {line.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 font-display text-xl text-green-deep/70">
                {math.payg.total}
              </p>
            </div>
          </Reveal>

          {/* Member — featured */}
          <Reveal delay={0.1}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-gold bg-green-deep p-8 text-cream shadow-[var(--shadow-soft)]">
              <span className="absolute right-6 top-6 rounded-full bg-gold px-3 py-1 text-xs font-medium uppercase tracking-wide text-green-deep">
                Best value
              </span>
              <h3 className="font-display text-2xl">{math.member.title}</h3>
              <p className="font-display mt-1 text-3xl text-gold">
                {math.member.price}
              </p>
              <dl className="mt-5 flex-1 divide-y divide-cream/12">
                {math.member.lines.map((line) => (
                  <div
                    key={line.label}
                    className="flex items-center justify-between gap-4 py-3"
                  >
                    <dt className="flex items-center gap-2 text-cream/80">
                      <Icon.check className="h-4 w-4 shrink-0 text-gold" />
                      {line.label}
                    </dt>
                    <dd className="font-display tabular-nums text-gold">
                      {line.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 font-display text-xl">{math.member.total}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-col items-start gap-5 rounded-3xl border border-gold/40 bg-white p-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl leading-relaxed text-green-deep">
              {math.bottomLine}
            </p>
            {cta && (
              <ButtonLink
                href={cta.href}
                external={cta.external}
                variant="gold"
                size="lg"
                withArrow
              >
                {cta.label}
              </ButtonLink>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
