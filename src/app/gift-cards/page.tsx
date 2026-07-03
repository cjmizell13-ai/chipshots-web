import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem, GoldRule } from "@/components/ui/motion";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import TrackOnClick from "@/components/TrackOnClick";
import { business, img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gift Cards",
  description:
    "Give golf, food and drinks at Chip Shots in Henderson, NV. Pick any amount — an eGift card delivered instantly by email, good toward bay time, the kitchen and the bar.",
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
    desc: "The eGift card lands in the inbox right away — print it or forward it on.",
  },
  {
    icon: "star" as const,
    title: "Spend it any time",
    desc: "Good toward bay time, food, drinks and events — whenever they drop in.",
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
        eyebrow="Gift Cards"
        title="The gift that always fits."
        intro="A Chip Shots gift card is golf, great food and a cold drink in one of Henderson's best spots — no 110° heat. Pick any amount, delivered instantly by email."
        image={img.bayMoody}
      />

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

      {/* ============================================== WHAT IT COVERS ===== */}
      <section className="bg-cream-2">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-gold">What it covers</p>
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
            <p className="eyebrow text-gold-soft">Chip Shots Gift Cards</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-3 text-4xl font-light sm:text-5xl">
              Give the good times.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-cream/75">
              Pick any amount and it's delivered to your inbox the moment you
              check out — ready to print or forward on.
            </p>
          </Reveal>
          <GoldRule className="mx-auto mt-7 w-40" />
          <div className="mt-9 flex flex-col items-center gap-4">
            <TrackOnClick
              event="InitiateCheckout"
              params={{ content_name: "Gift card", content_category: "Gift card" }}
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
