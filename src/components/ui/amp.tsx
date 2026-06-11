import { Fragment } from "react";

/**
 * A classic italic serif ampersand — a small typographic upgrade over a plain
 * "&". Defaults to white; pass a className to override the color in context
 * (e.g. on light backgrounds where white would be invisible).
 */
export function Amp({ className = "text-white" }: { className?: string }) {
  return (
    <span
      className={`italic font-normal ${className}`}
      style={{
        fontFamily:
          "Baskerville, 'Hoefler Text', 'Goudy Old Style', Garamond, 'Times New Roman', serif",
      }}
    >
      &amp;
    </span>
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
