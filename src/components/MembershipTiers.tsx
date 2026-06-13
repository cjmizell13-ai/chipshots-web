"use client";

import { useState } from "react";
import { Stagger, StaggerItem } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import MembershipForm from "@/components/forms/MembershipForm";
import { memberships, rangeCard } from "@/lib/site";

export default function MembershipTiers() {
  const [open, setOpen] = useState(false);
  const [tier, setTier] = useState(memberships[0]?.tier ?? "");

  function openForm(selected: string) {
    setTier(selected);
    setOpen(true);
  }

  return (
    <>
      <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {memberships.map((m) => (
          <StaggerItem
            key={m.tier}
            as="article"
            className={`relative flex flex-col rounded-3xl border p-7 ${
              m.featured
                ? "border-gold bg-green-soft/25 shadow-[var(--shadow-soft)]"
                : "border-cream/12 bg-green-deep/50"
            }`}
          >
            {m.featured && (
              <span className="eyebrow absolute -top-3 left-7 rounded-full bg-gold px-3 py-1 text-[0.62rem] text-green-deep">
                Best value
              </span>
            )}
            <h3 className="font-display text-2xl text-cream">{m.tier}</h3>
            <p className="mt-3 font-display text-4xl text-gold">
              {m.price}
              <span className="ml-1 text-base font-sans text-cream/60">
                {m.per}
              </span>
            </p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-cream/70">
              {m.note}
            </p>
            <div className="mt-6">
              <Button
                onClick={() => openForm(m.tier)}
                variant={m.featured ? "gold" : "ghost-light"}
                className="w-full"
              >
                Join now
              </Button>
            </div>
          </StaggerItem>
        ))}

        {/* Range card as a tile */}
        <StaggerItem
          as="article"
          className="flex flex-col rounded-3xl border border-gold/40 bg-green-deep/50 p-7"
        >
          <h3 className="font-display text-2xl text-cream">Range Card</h3>
          <p className="mt-3 font-display text-4xl text-gold">{rangeCard.price}</p>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-cream/70">
            {rangeCard.detail} of pre-paid bay time at a discount — no membership
            required, never expires.
          </p>
          <div className="mt-6">
            <Button
              onClick={() => openForm("Range Card")}
              variant="ghost-light"
              className="w-full"
            >
              Request a card
            </Button>
          </div>
        </StaggerItem>
      </Stagger>

      <MembershipForm open={open} tier={tier} onClose={() => setOpen(false)} />
    </>
  );
}
