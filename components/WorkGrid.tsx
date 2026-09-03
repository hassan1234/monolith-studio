"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects, projectCategories } from "@/lib/projects";

export default function WorkGrid() {
  const [active, setActive] = useState<string>("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="work">
      <div className="work__filters" role="tablist" aria-label="Filter projects">
        {projectCategories.map((c) => (
          <button
            key={c}
            type="button"
            className={`work__filter${active === c ? " is-active" : ""}`}
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            role="tab"
          >
            {c}
          </button>
        ))}
      </div>

      <div className="work__grid" key={active}>
        {shown.map((p) => (
          <Link key={p.slug} href={`/work/${p.slug}`} className="work__card">
            <span className="work__media">
              <Image src={p.hero} alt={p.title} fill sizes="(max-width: 860px) 100vw, 50vw" />
            </span>
            <span className="work__meta">
              <span className="work__title">{p.title}</span>
              <span className="work__sub">{p.location} · {p.category}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
