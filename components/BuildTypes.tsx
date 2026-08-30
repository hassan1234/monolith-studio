"use client";

import { useState } from "react";
import Image from "next/image";

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

      <div className="btypes__grid" key={active}>
        {t.images.map((src) => (
          <div className="btypes__item" key={src}>
            <Image src={src} alt={t.name} fill sizes="(max-width: 860px) 100vw, 50vw" />
          </div>
        ))}
      </div>

      <p className="btypes__blurb">{t.blurb}</p>
    </div>
  );
}
