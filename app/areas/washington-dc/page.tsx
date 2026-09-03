import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Design & Build in Washington, DC — Monolith",
  description: "Monolith is a Washington, DC design-build studio — interior design, remodels and specialty surfaces, delivered by one team across the District.",
};

const areas = [
  "Georgetown", "Logan Circle", "Capitol Hill", "Columbia Heights",
  "Shaw", "Dupont Circle", "Petworth", "Bloomingdale",
  "Adams Morgan", "Navy Yard", "Mount Pleasant", "Brookland",
];

export default function DcPage() {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">Areas — Washington, DC</span>
          <h1 style={{ fontSize: "var(--text-display)", letterSpacing: "0.01em", textTransform: "none" }}>
            Design &amp; Build in Washington, DC
          </h1>
          <p className="lead">
            Monolith is a Washington, DC studio. We design, build and finish
            homes across the District — one team, from first line to final coat.
          </p>
        </div>
      </header>

      <section className="capabilities" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="intro__grid">
            <h2>A local team for DC homes.</h2>
            <p>
              From row houses in Capitol Hill to condos downtown, we understand
              the way DC homes are built and permitted — and we bring design,
              construction and specialty surfaces under one roof so your project
              stays coherent from start to finish.
            </p>
          </div>
        </div>
      </section>

      <section className="capabilities" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="capabilities__head">
            <span className="eyebrow">Where we work</span>
            <h2>Neighbourhoods we serve.</h2>
          </div>
          <div className="dgrid">
            {areas.map((a) => (
              <div className="dgrid__item" key={a}><h3 style={{ marginBottom: 0 }}>{a}</h3></div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap">
        <div className="callout">
          <div>
            <span className="eyebrow">Start your project</span>
            <h2>Renovating in DC?</h2>
            <p>Tell us about your home and we will scope it with you.</p>
          </div>
          <div>
            <Link className="btn" href="/contact/start-a-project">Start a project ↗</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
