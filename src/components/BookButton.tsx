"use client";

import type { ComponentProps, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/components/BookingProvider";

type Props = {
  children?: ReactNode;
} & Omit<ComponentProps<typeof Button>, "onClick" | "children">;

/** A "Book a Bay" button that opens the in-page booking modal. */
export default function BookButton({ children = "Book a Bay", ...props }: Props) {
  const { open } = useBooking();
  return (
    <Button onClick={open} {...props}>
      {children}
    </Button>
  );
}
