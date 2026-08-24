"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

export type Slide = { src: string; label: string; style?: string };

export default function Carousel({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const n = slides.length;
  const startX = useRef<number | null>(null);

  const go = useCallback((idx: number) => setI(((idx % n) + n) % n), [n]);
  const step = useCallback(
    (dir: number) => setI((p) => (((p + dir) % n) + n) % n),
    [n]
  );
  const prev = () => step(-1);
  const next = () => step(1);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  const onDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
  };
  const onUp = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 45) {
      dx < 0 ? next() : prev();
    }
  };

  return (
    <div className="carousel" aria-roledescription="carousel">
      <div
        className="carousel__viewport"
        tabIndex={0}
        onKeyDown={onKey}
        onPointerDown={onDown}
        onPointerUp={onUp}
      >
        <div
          className="carousel__track"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {slides.map((s, idx) => (
            <div className="carousel__slide" key={s.label} aria-hidden={idx !== i}>
              <Image
                src={s.src}
                alt={s.label}
                fill
                sizes="(max-width: 1000px) 100vw, 1100px"
                priority={idx === 0}
              />
              <span className="carousel__scrim" />
              <span className="carousel__caption">
                <span className="carousel__label">{s.label}</span>
                {s.style && <span className="carousel__style">{s.style}</span>}
              </span>
            </div>
          ))}
        </div>

        <button
          className="carousel__arrow carousel__arrow--prev"
          onClick={prev}
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          className="carousel__arrow carousel__arrow--next"
          onClick={next}
          aria-label="Next"
        >
          ›
        </button>

        <span className="carousel__count">
          {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </span>
      </div>

      <div className="carousel__dots" role="tablist" aria-label="Choose a space">
        {slides.map((s, idx) => (
          <button
            key={s.label}
            className={`carousel__dot${idx === i ? " is-active" : ""}`}
            onClick={() => go(idx)}
            aria-label={s.label}
            aria-selected={idx === i}
            role="tab"
          >
            <span>{s.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
