import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Studio — Monolith",
  description:
    "Monolith is one studio across three disciplines — design, build and surfaces — handled by a single team from first concept to final finish.",
};

const beliefs = [
  { h: "One Team, Start to Finish", p: "Design, construction and finishing sit under one roof, so intent is never lost in translation between trades." },
  { h: "Structure Meets Aesthetics", p: "We refuse the choice between a space that looks beautiful and one that is built to last — you get both." },
  { h: "Made for How You Live", p: "No cookie-cutter schemes. Every space is shaped around the people who will actually use it." },
];

export default function StudioPage() {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">The Studio</span>
          <h1>Studio</h1>
          <p className="lead">
            Monolith is one studio across three disciplines — design, build and
            surfaces — handled by a single team from first concept to final coat.
          </p>
        </div>
      </header>

      {/* Story */}
      <section className="capabilities about" style={{ paddingTop: 0 }}>
        <div className="about__bg" aria-hidden="true">
          <Image src="/images/about-scene.jpg" alt="" fill sizes="100vw" />
        </div>
        <span className="about__scrim" aria-hidden="true" />
        <div className="wrap">
          <div className="about__inner">
            <span className="eyebrow">Why One Team</span>
            <h2>Everything your space needs, in one place.</h2>
            <p>
              We started Monolith to make it simple — everything a home needs,
              handled by one team. Whether it&rsquo;s a complete renovation, a
              custom architectural layout, or a flawless, hand-applied finish, we
              take care of every detail, so you never have to project-manage a
              string of separate trades who have never met.
            </p>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="capabilities" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="capabilities__head">
            <span className="eyebrow">What We Believe</span>
            <h2>The principles behind every project.</h2>
          </div>
          <div className="dgrid">
            {beliefs.map((b) => (
              <div className="dgrid__item" key={b.h}>
                <h3>{b.h}</h3>
                <p>{b.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process teaser */}
      <section className="intro" style={{ paddingTop: 0 }}>
        <div className="wrap intro__grid">
          <h2>Three disciplines, one continuous process.</h2>
          <p>
            Design, build and surfaces each follow their own journey — but they
            are joined end to end into a single, considered path from first
            sketch to final finish.{" "}
            <Link href="/studio/process" style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>
              See the full process ↗
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="wrap">
        <div className="callout">
          <div>
            <span className="eyebrow">Work with us</span>
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
