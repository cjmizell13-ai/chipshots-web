import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { business, img, faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Bay prices, group sizes, clubs, food, hours and more: what to know before visiting Chip Shots Golf Club in Henderson, NV.",
  alternates: { canonical: "/faq" },
};

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Before your first visit."
        intro="What people ask most, from the price of a bay to whether you need to play golf."
        image={img.bayRoomWide}
      />

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <Stagger className="divide-y divide-line">
          {faqs.map((f) => (
            <StaggerItem key={f.q} as="div" className="py-7 first:pt-0">
              <h2 className="font-display text-xl text-green-deep sm:text-2xl">
                {f.q}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <div className="mt-14 rounded-3xl border border-line bg-cream-2 p-8 text-center sm:p-10">
            <h2 className="font-display text-2xl text-green-deep sm:text-3xl">
              Still have a question?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted">
              Give us a call, or book a bay and see Chip Shots Golf Club for
              yourself.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <ButtonLink href={business.booking} external variant="green" size="lg" withArrow>
                Book a Bay
              </ButtonLink>
              <ButtonLink href={business.phoneHref} variant="outline" size="lg">
                Call {business.phone}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
