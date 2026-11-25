"use client";

import { useState } from "react";
import PhotoCarousel from "@/components/PhotoCarousel";

export type BuildType = { name: string; blurb: string; images: string[] };

export default function BuildTypes({ types }: { types: BuildType[] }) {
  const [active, setActive] = useState(0);
  const t = types[active];

  return (
    <div className="btypes">
      <div className="btypes__filters" role="tablist" aria-label="Choose a remodel type">
        {types.map((ty, i) => (
          <button
            key={ty.name}
            type="button"
            className={`btypes__filter${i === active ? " is-active" : ""}`}
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            role="tab"
          >
            {ty.name}
          </button>
        ))}
      </div>

      {/* key remounts the carousel so a new remodel type starts at photo 1 */}
      <PhotoCarousel
        key={t.name}
        label={`${t.name} photos`}
        images={t.images.map((src, i) => ({ src, alt: `${t.name} — photo ${i + 1}` }))}
      />

      <p className="btypes__blurb">{t.blurb}</p>
    </div>
  );
}
