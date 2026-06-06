"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Stagger, StaggerItem } from "@/components/ui/motion";
import { Icon } from "@/components/ui/icons";

export type GalleryImage = { src: string; alt: string };

/** A responsive image grid where any tile opens a full-screen lightbox with
 *  keyboard, swipe and button navigation. */
export default function Gallery({ images }: { images: GalleryImage[] }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = () => setIndex(null);
  const next = () => setIndex((i) => (i === null ? i : (i + 1) % images.length));
  const prev = () =>
    setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, images.length]);

  // Swipe handling
  const [touchX, setTouchX] = useState<number | null>(null);

  return (
    <>
      <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((image, i) => (
          <StaggerItem
            key={image.src + i}
            className={`overflow-hidden rounded-2xl ${
              i === 0 ? "col-span-2 row-span-2" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`View photo ${i + 1}: ${image.alt}`}
              className="group relative block h-full w-full cursor-zoom-in"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={600}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-green-deep/0 transition-colors group-hover:bg-green-deep/15" />
            </button>
          </StaggerItem>
        ))}
      </Stagger>

      <AnimatePresence>
        {open && index !== null && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-green-deep/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX === null) return;
              const dx = e.changedTouches[0].clientX - touchX;
              if (dx > 50) prev();
              else if (dx < -50) next();
              setTouchX(null);
            }}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10"
            >
              <Icon.close className="h-5 w-5" />
            </button>

            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10 sm:left-6"
            >
              <Icon.arrow className="h-5 w-5 rotate-180" />
            </button>

            <motion.div
              key={index}
              className="relative mx-12 max-h-[82vh] w-full max-w-4xl sm:mx-16"
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 0.7, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[index].src}
                alt={images[index].alt}
                width={1400}
                height={1000}
                className="mx-auto max-h-[82vh] w-auto rounded-2xl object-contain shadow-2xl"
              />
              <p className="mt-3 text-center text-sm text-cream/70">
                {images[index].alt} · {index + 1} / {images.length}
              </p>
            </motion.div>

            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10 sm:right-6"
            >
              <Icon.arrow className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
