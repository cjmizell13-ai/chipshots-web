import { ButtonLink } from "@/components/ui/button";
import type { PostBlock } from "@/lib/blog";

/** Renders a post's typed body blocks as styled article content. */
export default function PostBody({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="font-display mt-12 text-3xl font-light text-green-deep first:mt-0 sm:text-4xl"
              >
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p key={i} className="text-lg leading-relaxed text-green-deep/80">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-lg text-green-deep/80">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "cta":
            return (
              <div key={i} className="pt-1">
                <ButtonLink href={block.href} external={block.external} variant="green" withArrow>
                  {block.label}
                </ButtonLink>
              </div>
            );
        }
      })}
    </div>
  );
}
