import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Studio — Monolith",
  description:
    "The Monolith studio — one team for design, build and surfaces, with a single point of contact from first sketch to final finish. Why work with us, and answers to the questions we hear most.",
};

const reasons = [
  {
    n: "01",
    h: "No hand-offs",
    p: "The people who design your home are the same people who build and finish it — so intent carries all the way through.",
  },
  {
    n: "02",
    h: "One point of contact",
    p: "One team and one conversation, from the first idea to the final walkthrough. You always know who to call.",
  },
  {
    n: "03",
    h: "Priced with no surprises",
    p: "A clear, itemised proposal before any work begins, and a realistic programme you can actually plan around.",
  },
  {
    n: "04",
    h: "Built to the drawing",
    p: "What we render is what you get — the finished space matches the design, right down to the last detail.",
  },
];

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

      {/* Statement band */}
      <section className="statement">
        <div className="wrap statement__inner">
          <span className="eyebrow">One studio, one team</span>
          <h2>
            Your whole home, handled by one team — from the first line to the
            final finish.
          </h2>
          <p>
            Design, construction and finishing all live under one roof. You get a
            single point of contact, one coherent plan, and one team that owns
            the result — so nothing is ever lost between the drawing and the
            wall.
          </p>
        </div>
      </section>

      {/* Why Monolith */}
      <section className="capabilities">
        <div className="wrap">
          <div className="capabilities__head">
            <span className="eyebrow">Why Monolith</span>
            <h2>A calmer way to renovate.</h2>
          </div>
          <div className="why">
            {reasons.map((r) => (
              <div className="why__item" key={r.n}>
                <span className="why__num">{r.n}</span>
                <h3>{r.h}</h3>
                <p>{r.p}</p>
              </div>
            ))}
          </div>
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
