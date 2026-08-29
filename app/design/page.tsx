import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Design — Monolith",
  description:
    "The Monolith interior design process — from first consultation to final styling. Modern, considered spaces designed around how you live.",
};

const process = [
  {
    n: "01",
    h: "Consultation",
    p: "We start with you: how you live, what frustrates you about the space now, your goals and your budget. We listen before we draw a single thing.",
  },
  {
    n: "02",
    h: "Concept & Moodboard",
    p: "We shape a clear direction — references, palette and real material samples — so you can see and feel the design long before it is built.",
  },
  {
    n: "03",
    h: "Space Planning",
    p: "Layouts, flow and proportion are resolved first, so every room works hard and feels effortless to move through.",
  },
  {
    n: "04",
    h: "Design & Detail",
    p: "Elevations, joinery, lighting and finishes drawn to the millimetre — the quiet details that make a space feel truly considered.",
  },
  {
    n: "05",
    h: "Sourcing & Styling",
    p: "Furniture, fittings and the final layers, sourced and styled so the space feels complete and personal from the very first day.",
  },
  {
    n: "06",
    h: "Handover",
    p: "We walk you through the finished space — resolved, styled and ready to live in, exactly as it was drawn.",
  },
];

export default function DesignPage() {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">Interior &amp; Exterior Design</span>
          <h1>Design</h1>
          <p className="lead">
            We design the spaces you live in — inside and out, around how you
            actually live. It all runs through one clear, considered process.
          </p>
        </div>
      </header>

      <section className="capabilities" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="capabilities__head">
            <span className="eyebrow">The Process</span>
            <h2>How a Monolith design comes together.</h2>
          </div>
          <div className="process">
            {process.map((s) => (
              <div className="process__step" key={s.n}>
                <span className="process__num">{s.n}</span>
                <div>
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="intro" style={{ paddingTop: 0 }}>
        <div className="wrap intro__grid">
          <h2>Design that feels like it was always meant to be yours.</h2>
          <p>
            We shape modern spaces that are warm, functional and quietly
            beautiful — tailored to you rather than to a trend, and built to
            live with for years.
          </p>
        </div>
      </section>

      <section className="wrap">
        <div className="callout">
          <div>
            <span className="eyebrow">Start your project</span>
            <h2>Let&rsquo;s design your space.</h2>
            <p>
              Tell us about the room — or the whole home — you want to
              transform, and we will take it from there.
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
