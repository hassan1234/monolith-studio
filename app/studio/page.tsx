import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Studio — Monolith",
  description:
    "The Monolith studio — one team for design, build and surfaces, with a single point of contact from first sketch to final finish. Answers to the questions we hear most.",
};

const faqs = [
  {
    q: "Do you handle design and construction, or just one?",
    a: "Both. Monolith is a single team across design, build and surfaces, so your project runs through one point of contact from first sketch to final finish.",
  },
  {
    q: "Can I hire you for just one discipline?",
    a: "Yes. Plenty of clients come to us for a single kitchen remodel, a design scheme, or a specialty surface finish. You are never obliged to take the whole package.",
  },
  {
    q: "How much does a project cost?",
    a: "Every project is scoped individually — it depends on the rooms, the structural work and the finishes involved. After an initial conversation we provide a clear, itemised proposal before any work begins.",
  },
  {
    q: "How long does a typical project take?",
    a: "A single-room remodel is usually a matter of weeks; a whole-home renovation runs months. We give you a realistic programme up front and keep you updated as we go.",
  },
  {
    q: "What is microcement, and do I need the separate studio?",
    a: "Microcement is a seamless, hard-wearing mineral finish. We apply it as part of our surfaces work, and our dedicated microcement studio has the full ranges and galleries if you want to go deeper.",
  },
  {
    q: "What happens after I get in touch?",
    a: "We arrange a conversation about your space and goals, visit if helpful, and come back with a scope and proposal. From there it moves into our design and build work.",
  },
];

export default function StudioPage() {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">The Studio</span>
          <h1>Studio</h1>
          <p className="lead">
            One team for design, build and surfaces — so a whole renovation runs
            through a single point of contact, from first sketch to final coat.
          </p>
        </div>
      </header>

      {/* One team — a positive statement, no comparisons */}
      <section className="capabilities" style={{ paddingTop: 0 }}>
        <div className="wrap intro__grid">
          <h2>One team, one point of contact.</h2>
          <p>
            Design, construction and finishing all live under one roof, so the
            people who draw your home are the same people who build and finish
            it. You have one point of contact throughout, one coherent plan, and
            one team accountable for the result — nothing lost between the
            drawing and the wall.
          </p>
        </div>
      </section>

      {/* FAQ — fully visible on the page */}
      <section className="capabilities" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="capabilities__head">
            <span className="eyebrow">Answers</span>
            <h2>Frequently asked.</h2>
          </div>
          <div className="faq">
            {faqs.map((f) => (
              <details className="faq__item" key={f.q}>
                <summary className="faq__q">{f.q}</summary>
                <p className="faq__a">{f.a}</p>
              </details>
            ))}
          </div>
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
            <Link className="btn" href="/contact/start-a-project">
              Start a project ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
