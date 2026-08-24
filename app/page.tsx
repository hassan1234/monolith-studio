import Link from "next/link";
import Image from "next/image";

const cards = [
  { href: "/design", name: "Design", meta: "Kitchens · Bathrooms · Living", img: "/images/design-living-modern.png" },
  { href: "/build", name: "Build", meta: "Kitchens · Bathrooms · Remodels", img: "/images/build-modern-kitchen.png" },
  { href: "/surfaces", name: "Surfaces", meta: "Microcement · Limewash · Plaster", img: "/images/surfaces-1.png" },
];

export default function Home() {
  return (
    <main>
      <header className="hero">
        <div className="hero__img" aria-hidden="true" />
        <div className="hero__inner">
          <h1 className="wordmark">
            Monolith
            <span className="hero__sub">Design · Build · Surfaces</span>
          </h1>
        </div>
        <div className="hero__scroll" aria-hidden="true">
          <span>Scroll</span>
          <span>↓</span>
        </div>
      </header>

      <section className="intro">
        <div className="wrap">
          <div className="intro__grid">
            <h2>A single hand, from concept to concrete.</h2>
            <p>
              Monolith brings design, construction and finishing under one roof.
              Each project moves through the same team, so intent is never lost
              in translation — the drawing, the structure and the surface all
              speak the same language.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap">
        <div className="cards">
          {cards.map((c) => (
            <Link key={c.href} href={c.href} className="card">
              <Image src={c.img} alt={c.name} fill sizes="(max-width: 860px) 100vw, 33vw" />
              <span className="card__overlay" />
              <span className="card__body">
                <span>
                  <span className="card__name">{c.name}</span>
                  <span className="card__meta" style={{ display: "block" }}>
                    {c.meta}
                  </span>
                </span>
                <span className="card__arrow">↗</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
