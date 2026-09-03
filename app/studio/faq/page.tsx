import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — Monolith Studio",
  description: "Common questions about working with Monolith — how design, build and surfaces fit together, timelines, pricing and process.",
};

// Starter answers — edit freely to match how you actually work.
const faqs = [
  { q: "Do you handle design and construction, or just one?", a: "Both. Monolith is a single team across design, build and surfaces, so your project runs through one point of contact from first sketch to final finish — no gaps between designer and builder." },
  { q: "Can I hire you for just one discipline?", a: "Yes. Plenty of clients come to us for a single kitchen remodel, a design scheme, or a specialty surface finish. You are never obliged to take the whole package." },
  { q: "Where do you work?", a: "We are based in Washington, DC and work across the city and surrounding areas. If you are just outside, get in touch and we will let you know." },
  { q: "How much does a project cost?", a: "Every project is scoped individually — it depends on the rooms, the structural work and the finishes involved. After an initial conversation we provide a clear, itemised proposal before any work begins." },
  { q: "How long does a typical project take?", a: "A single-room remodel is usually a matter of weeks; a whole-home renovation runs months. We give you a realistic programme up front and keep you updated as we go." },
  { q: "What is microcement, and do I need the separate studio?", a: "Microcement is a seamless, hard-wearing mineral finish. We apply it as part of our surfaces work, and our dedicated microcement studio has the full ranges and galleries if you want to go deeper." },
  { q: "What happens after I get in touch?", a: "We arrange a conversation about your space and goals, visit if helpful, and come back with a scope and proposal. From there it moves into our design and build journeys." },
];

export default function FaqPage() {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <Link href="/studio" className="svc-back">← Studio</Link>
          <span className="eyebrow" style={{ display: "block", marginTop: 18 }}>Studio — FAQ</span>
          <h1 style={{ fontSize: "var(--text-display)", letterSpacing: "0.01em", textTransform: "none" }}>
            Frequently Asked
          </h1>
          <p className="lead">The questions we hear most, answered plainly.</p>
        </div>
      </header>

      <section className="wrap legal">
        <div className="faq">
          {faqs.map((f) => (
            <details className="faq__item" key={f.q}>
              <summary className="faq__q">{f.q}</summary>
              <p className="faq__a">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="wrap">
        <div className="callout">
          <div>
            <span className="eyebrow">Still have a question?</span>
            <h2>Just ask.</h2>
            <p>Email us and a real person will get back to you.</p>
          </div>
          <div>
            <Link className="btn" href="/contact">Get in touch ↗</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
