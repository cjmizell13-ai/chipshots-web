import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem, GoldRule } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import TrackOnClick from "@/components/TrackOnClick";
import { business, img, giftCardPromo } from "@/lib/site";

const total = giftCardPromo.threshold + giftCardPromo.bonus;

export const metadata: Metadata = {
  title: "Father's Day Gift Cards",
  description: `Give Dad golf, food and drinks at Chip Shots in Henderson, NV. Buy a $${giftCardPromo.threshold} eGift card before ${giftCardPromo.deadline} and we'll add a $${giftCardPromo.bonus} bonus card. Delivered instantly by email.`,
  alternates: { canonical: "/gift-cards" },
};

const steps = [
  {
    icon: "check" as const,
    title: "Buy it online",
    desc: "Pick any amount and check out securely through Toast. Takes about a minute.",
  },
  {
    icon: "mail" as const,
    title: "Delivered instantly",
    desc: "The eGift card lands in your inbox right away — print it or forward it to Dad.",
  },
  {
    icon: "star" as const,
    title: "Get the bonus in-store",
    desc: `Spend $${giftCardPromo.threshold}+ and we'll hand over a $${giftCardPromo.bonus} bonus card on the first visit.`,
  },
];

const uses = [
  { icon: "flag" as const, title: "Bay time", desc: "TrackMan simulators — play 50+ courses or take a lesson, any skill level." },
  { icon: "glass" as const, title: "Food & drinks", desc: "Burgers, wings, cheesesteaks and a full bar, brought right to the bay." },
  { icon: "users" as const, title: "Events & leagues", desc: "Put it toward a watch party, a private event, or a league season." },
];

export default function GiftCards() {
  return (
    <>
      <PageHero
        eyebrow={`${giftCardPromo.occasion} · Order by ${giftCardPromo.deadline}`}
        title="Give Dad the good times."
        intro={`Skip the tie. A Chip Shots gift card is golf, great food and a cold drink in his favorite spot — no 110° heat. Buy a $${giftCardPromo.threshold} eGift card before ${giftCardPromo.deadline} and we'll add a $${giftCardPromo.bonus} bonus card on us.`}
        image={img.bayMoody}
      />

      {/* ============================================== OFFER ===== */}
      <section className="bg-gold">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-12 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
          <div>
            <p className="eyebrow text-green-deep/70">
              {giftCardPromo.occasion} bonus · ends {giftCardPromo.deadline}
            </p>
            <h2 className="font-display mt-2 text-3xl text-green-deep sm:text-4xl">
              Buy ${giftCardPromo.threshold}, get ${total}.
            </h2>
            <p className="mt-2 max-w-xl text-green-deep/80">
              Every ${giftCardPromo.threshold} eGift card comes with a free $
              {giftCardPromo.bonus} bonus card — handed to you in-store on the
              first visit. That&rsquo;s a built-in reason for Dad to come back.
            </p>
          </div>
          <TrackOnClick
            event="InitiateCheckout"
            params={{ content_name: "Gift card", content_category: "Father's Day" }}
          >
            <ButtonLink href={business.giftCards} external variant="green" size="lg" withArrow>
              Buy Dad a Card
            </ButtonLink>
          </TrackOnClick>
        </div>
      </section>

      {/* ============================================== HOW IT WORKS ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">How it works</p>
            <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
              Done in under a minute.
            </h2>
          </div>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => {
            const StepIcon = Icon[s.icon];
            return (
              <StaggerItem
                key={s.title}
                className="flex flex-col rounded-3xl border border-line bg-white p-8 shadow-[var(--shadow-card)]"
              >
                <span className="font-display text-sm text-gold">0{i + 1}</span>
                <StepIcon className="mt-3 h-7 w-7 text-gold" />
                <h3 className="font-display mt-4 text-2xl text-green-deep">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-muted">{s.desc}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* ============================================== WHAT DAD GETS ===== */}
      <section className="bg-cream-2">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-gold">What he can spend it on</p>
              <h2 className="font-display mt-3 text-4xl font-light text-green-deep sm:text-5xl">
                More than golf.
              </h2>
            </div>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {uses.map((u) => {
              const UseIcon = Icon[u.icon];
              return (
                <StaggerItem
                  key={u.title}
                  className="flex flex-col rounded-3xl border border-gold/40 bg-white p-8 shadow-[var(--shadow-card)]"
                >
                  <UseIcon className="h-7 w-7 text-gold" />
                  <h3 className="font-display mt-4 text-2xl text-green-deep">
                    {u.title}
                  </h3>
                  <p className="mt-2 flex-1 text-muted">{u.desc}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ============================================== FINAL CTA ===== */}
      <section className="bg-green-deep text-cream">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <Reveal>
            <p className="eyebrow text-gold-soft">
              {giftCardPromo.occasion} · {giftCardPromo.deadline}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-3 text-4xl font-light sm:text-5xl">
              The gift Dad actually wants.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-cream/75">
              Order before {giftCardPromo.deadline} to lock in the $
              {giftCardPromo.bonus} bonus. Delivered to your inbox the moment you
              check out.
            </p>
          </Reveal>
          <GoldRule className="mx-auto mt-7 w-40" />
          <div className="mt-9 flex flex-col items-center gap-4">
            <TrackOnClick
              event="InitiateCheckout"
              params={{ content_name: "Gift card", content_category: "Father's Day" }}
            >
              <ButtonLink href={business.giftCards} external variant="gold" size="lg" withArrow>
                Buy a Gift Card
              </ButtonLink>
            </TrackOnClick>
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 text-cream/80"
            >
              <Icon.phone className="h-4 w-4 text-gold-soft" />
              Questions? Call {business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
