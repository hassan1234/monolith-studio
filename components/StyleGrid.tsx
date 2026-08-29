"use client";

import { useState } from "react";
import Image from "next/image";

export type StyleItem = { src: string; style: string; alt: string };

export default function StyleGrid({
  items,
  styles,
}: {
  items: StyleItem[];
  styles: string[];
}) {
  const [active, setActive] = useState(styles[0]);
  const filters = styles;
  const shown = items.filter((i) => i.style === active);

  return (
    <div className="stylegrid">
      <div className="stylegrid__filters" role="tablist" aria-label="Filter by style">
        {filters.map((f) => (
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

      <div className="stylegrid__grid" key={active}>
        {shown.map((i) => (
          <div className="stylegrid__item" key={i.src}>
            <Image src={i.src} alt={i.alt} fill sizes="(max-width: 520px) 100vw, (max-width: 860px) 50vw, 33vw" />
          </div>
        ))}
      </div>
    </div>
  );
}
