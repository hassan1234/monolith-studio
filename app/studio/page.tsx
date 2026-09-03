import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Studio — Monolith",
  description:
    "The Monolith studio — one team for design, build and surfaces, and a genuinely different way to renovate a home.",
};

const hub = [
  { href: "/studio/process", title: "Our Process", note: "The three journeys, joined end to end — from first sketch to final finish." },
  { href: "/studio/faq", title: "FAQ", note: "The questions we hear most, answered plainly." },
];

export default function StudioPage() {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">The Studio</span>
          <h1>Studio</h1>
          <p className="lead">
            One team for design, build and surfaces — and a genuinely different
            way to renovate a home.
          </p>
        </div>
      </header>

      {/* The one-team difference */}
      <section className="capabilities" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="capabilities__head">
            <span className="eyebrow">Why it matters</span>
            <h2>Renovating shouldn&rsquo;t mean managing a crowd.</h2>
          </div>
          <div className="compare">
            <div className="compare__col">
              <span className="compare__label">The usual way</span>
              <p>
                A designer hands you drawings. You go and find a contractor who
                has never spoken to them. Somewhere in the gap, details get lost,
                costs creep, blame gets passed — and you end up project-managing
                trades who have never met.
              </p>
            </div>
            <div className="compare__col compare__col--us">
              <span className="compare__label">The Monolith way</span>
              <p>
                One team designs, builds and finishes your home. There is no
                hand-off and no lost intent — just a single point of contact,
                one coherent plan, and a result that matches the drawing exactly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Studio hub */}
      <section className="capabilities" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="capabilities__head">
            <span className="eyebrow">Go deeper</span>
            <h2>How we work, in detail.</h2>
          </div>
          <div className="studio-hub">
            {hub.map((h) => (
              <Link key={h.href} href={h.href} className="studio-hub__card">
                <span className="studio-hub__title">{h.title}</span>
                <span className="studio-hub__note">{h.note}</span>
                <span className="studio-hub__arrow">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="intro" style={{ paddingTop: 0 }}>
        <div className="wrap intro__grid">
          <h2>Based in Washington, DC.</h2>
          <p>
            We design and build across the District — from row houses in Capitol
            Hill to condos downtown.{" "}
            <Link href="/areas/washington-dc" style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>
              See where we work ↗
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="wrap">
        <div className="callout">
          <div>
            <span className="eyebrow">Work with us</span>
            <h2>One team, start to finish.</h2>
            <p>Tell us about your space and we will take it from there.</p>
          </div>
          <div>
            <Link className="btn" href="/contact/start-a-project">Start a project ↗</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
