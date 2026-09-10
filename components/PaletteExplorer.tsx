"use client";

import Image from "next/image";
import { useState } from "react";
import type { PaletteColor } from "@/lib/services";

export default function PaletteExplorer({
  colors,
  finish,
}: {
  colors: PaletteColor[];
  finish: string;
}) {
  const [active, setActive] = useState(0);
  const current = colors[active];

  return (
    <div className="palette">
      <div className="palette__stage">
        {colors.map((c, i) => (
          <Image
            key={c.name}
            src={c.image}
            alt={`${finish} in ${c.name}`}
            fill
            sizes="(max-width: 860px) 100vw, 70vw"
            className={i === active ? "is-active" : ""}
            priority={i === 0}
          />
        ))}
      </div>

      <div className="palette__bar">
        <div className="palette__swatches" role="tablist" aria-label={`${finish} colors`}>
          {colors.map((c, i) => (
            <button
              key={c.name}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={`palette__swatch${i === active ? " is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="palette__chip" style={{ background: c.hex }} aria-hidden="true" />
              <span className="palette__name">{c.name}</span>
            </button>
          ))}
        </div>
        <p className="palette__note">
          Colors are pigmented into the material. Shown as applied &mdash; final
          tone varies with light and the number of coats.
        </p>
      </div>
    </div>
  );
}
