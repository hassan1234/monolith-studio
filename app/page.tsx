import Link from "next/link";
import Image from "next/image";

const cards = [
  { href: "/design", name: "Design", meta: "Kitchens · Bathrooms · Living", img: "/images/design-living-modern.png" },
  { href: "/build", name: "Build", meta: "Kitchens · Bathrooms · Remodels", img: "/images/build-modern-kitchen.png" },
  { href: "/surfaces", name: "Surfaces", meta: "Microcement · Limewash · Plaster", img: "/images/surfaces-1.png" },
];

const whatWeDo = [
  { h: "Interior Design", p: "Considered, modern interiors designed around how you live — kitchens, bathrooms, bedrooms, living spaces and more, inside and out." },
  { h: "Build & Renovation", p: "Full interior remodels and renovations — from custom layouts to complete rebuilds — delivered by the same team that designed them." },
  { h: "Specialty Surfaces", p: "Seamless microcement, limewash and hand-applied mineral finishes: the final, tactile layer that gives a space its character." },
];

const philosophy = [
  { h: "Seamless Execution", p: "We manage your project from the first concept to the final coat of finish — saving you time, guesswork and the hassle of juggling trades." },
  { h: "Uncompromising Craftsmanship", p: "From structural beams to specialist microcement textures, we demand perfection in every detail, seen and unseen." },
  { h: "Tailored Textures & Styles", p: "No cookie-cutter spaces. We shape environments that reflect exactly how you live and who you are." },
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

      {/* About Us */}
      <section className="capabilities about">
        <div className="about__bg" aria-hidden="true">
          <Image src="/images/about-bg.png" alt="" fill sizes="100vw" />
        </div>
        <span className="about__scrim" aria-hidden="true" />
        <div className="wrap">
          <div className="about__inner">
            <span className="eyebrow">About Us</span>
            <h2>Everything your space needs, in one place.</h2>
            <p>
              We started Monolith to make it simple — everything a home needs,
              handled by one team. Whether it&rsquo;s a complete renovation, a
              custom architectural layout, or a sleek, seamless microcement
              finish, we take care of every detail. We blend structural
              integrity with high-end aesthetics, so you never have to choose
              between a space that looks beautiful and one that is built to last.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="capabilities" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="capabilities__head">
            <span className="eyebrow">What We Do</span>
            <h2>Three disciplines, one team.</h2>
          </div>
          <div className="dgrid">
            {whatWeDo.map((c) => (
              <div className="dgrid__item" key={c.h}>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="capabilities" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="capabilities__head">
            <span className="eyebrow">Our Philosophy</span>
            <h2>How we approach every project.</h2>
          </div>
          <div className="dgrid">
            {philosophy.map((c) => (
              <div className="dgrid__item" key={c.h}>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wrap">
        <div className="callout">
          <div>
            <span className="eyebrow">Start your project</span>
            <h2>Let&rsquo;s build something lasting.</h2>
            <p>
              Tell us about your space — a single room or the whole home — and we
              will take it from first sketch to final finish.
            </p>
          </div>
          <div>
            <Link className="btn" href="/contact">
              Get in touch ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
