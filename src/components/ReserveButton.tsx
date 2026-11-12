"use client";

import { ButtonLink } from "@/components/ui/button";
import { business, reservationsLive } from "@/lib/site";
import { trackReserveClick } from "@/lib/analytics";

type Props = Omit<React.ComponentProps<typeof ButtonLink>, "href" | "external" | "onClick" | "children"> & {
  source: string;
  children?: React.ReactNode;
};

/** "Reserve a table" — opens the Toast Tables booking page. Renders nothing
 *  when reservations are switched off in site.ts. */
export default function ReserveButton({ source, children = "Reserve a Table", ...rest }: Props) {
  if (!reservationsLive) return null;
  return (
    <ButtonLink
      href={business.reservations}
      external
      onClick={() => trackReserveClick(source)}
      {...rest}
    >
      {children}
    </ButtonLink>
  );
}
