import { Fragment } from "react";

/**
 * An elegant italic serif ampersand — a small typographic upgrade over a plain
 * "&". Defaults to gold; pass a className to override the color in context.
 */
export function Amp({ className = "text-gold" }: { className?: string }) {
  return (
    <span className={`font-display italic font-normal ${className}`}>&amp;</span>
  );
}

/**
 * Renders a label string, swapping any standalone " & " for the styled <Amp/>.
 * e.g. <AmpText>Food & Drink</AmpText> → Food <em>&</em> Drink
 */
export function AmpText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const parts = children.split(" & ");
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 && (
            <>
              {" "}
              <Amp className={className} />{" "}
            </>
          )}
        </Fragment>
      ))}
    </>
  );
}
