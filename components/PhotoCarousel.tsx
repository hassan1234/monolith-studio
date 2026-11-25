"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

export type CarouselImage = { src: string; alt: string };

/**
 * Swipeable photo gallery shared by Build and Design so both behave
 * identically: touch swipe, arrows, dots and arrow keys.
 *
 * `aspect` only changes the slide's shape — "wide" for landscape photos,
 * "portrait" for the taller design shots, which also sit in a narrower
 * column so a 3:4 image doesn't take over the page.
 *
 * Remount it with a React `key` to reset to the first slide.
 */
export default function PhotoCarousel({
  images,
  label,
  aspect = "wide",
}: {
  images: CarouselImage[];
  label: string;
  aspect?: "wide" | "portrait";
}) {
  const [slide, setSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  /* Where we're heading, kept outside React state so two fast arrow clicks
     both land: the second must not read an index that hasn't re-rendered. */
  const targetRef = useRef(0);
  const settleRef = useRef<number | undefined>(undefined);
  const count = images.length;

  const goTo = useCallback(
    (i: number, smooth = true) => {
      const track = trackRef.current;
      if (!track) return;
      const next = Math.max(0, Math.min(i, count - 1));
      targetRef.current = next;
      track.scrollTo({ left: next * track.clientWidth, behavior: smooth ? "smooth" : "auto" });
      setSlide(next);
    },
    [count],
  );

  const step = useCallback((dir: number) => goTo(targetRef.current + dir), [goTo]);

  /* Dots follow the track so a finger swipe moves them too. The target is
     only re-read once scrolling settles, so it isn't clobbered by positions
     sampled mid-animation. */
  const syncFromScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    const i = Math.round(track.scrollLeft / track.clientWidth);
    setSlide((prev) => (i !== prev ? i : prev));
    window.clearTimeout(settleRef.current);
    settleRef.current = window.setTimeout(() => {
      const el = trackRef.current;
      if (el && el.clientWidth) targetRef.current = Math.round(el.scrollLeft / el.clientWidth);
    }, 120);
  }, []);

  useEffect(() => () => window.clearTimeout(settleRef.current), []);

  return (
    <div className={`pcar pcar--${aspect}`}>
      <div className="pcar__frame" role="group" aria-roledescription="carousel" aria-label={label}>
        <div
          className="pcar__track"
          ref={trackRef}
          onScroll={syncFromScroll}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
            if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
          }}
        >
          {images.map((img, i) => (
            <div
              className="pcar__item"
              key={img.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={aspect === "portrait" ? "(max-width: 860px) 100vw, 560px" : "(max-width: 860px) 100vw, 1200px"}
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              className="pcar__nav pcar__nav--prev"
              onClick={() => step(-1)}
              disabled={slide === 0}
              aria-label="Previous photo"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              className="pcar__nav pcar__nav--next"
              onClick={() => step(1)}
              disabled={slide === count - 1}
              aria-label="Next photo"
            >
              <span aria-hidden="true">→</span>
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="pcar__dots">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              className={`pcar__dot${i === slide ? " is-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to photo ${i + 1}`}
              aria-current={i === slide}
            />
          ))}
        </div>
      )}
    </div>
  );
}
