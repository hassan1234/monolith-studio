"use client";

import { useState } from "react";
import PhotoCarousel from "@/components/PhotoCarousel";

export type StyleItem = { src: string; style: string; alt: string };

export default function StyleGrid({
  items,
  styles,
}: {
  items: StyleItem[];
  styles: string[];
}) {
  const [active, setActive] = useState(styles[0]);
  const shown = items.filter((i) => i.style === active);

  return (
    <div className="stylegrid">
      <div className="stylegrid__filters" role="tablist" aria-label="Filter by style">
        {styles.map((f) => (
          <button
            key={f}
            type="button"
            className={`stylegrid__filter${active === f ? " is-active" : ""}`}
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            role="tab"
          >
            {f}
          </button>
        ))}
      </div>

      {/* key remounts the carousel so a new style starts at photo 1 */}
      <PhotoCarousel
        key={active}
        label={`${active} interiors`}
        aspect="portrait"
        images={shown.map((i) => ({ src: i.src, alt: i.alt }))}
      />
    </div>
  );
}
