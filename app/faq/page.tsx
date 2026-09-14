import type { Metadata } from "next";
import Link from "next/link";
import { faqGroups, allFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQ — Monolith",
  description:
    "Answers to the questions we hear most about working with Monolith — scope, cost, timelines, how a project runs, and our hand-applied surface finishes.",
  alternates: { canonical: "/faq" },
};

// FAQPage structured data so the answers are eligible for Google rich results.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">Answers</span>
          <h1>FAQ</h1>
          <p className="lead">
            The questions we hear most — what we take on, what it costs, how
            long it takes, and how a project actually runs.
          </p>
        </div>
      </header>

      {faqGroups.map((group, i) => (
        <section
          className="capabilities"
          key={group.title}
          style={i > 0 ? { paddingTop: 0 } : undefined}
        >
          <div className="wrap">
            <div className="capabilities__head">
              <h2>{group.title}.</h2>
            </div>
            <div className="faq">
              {group.items.map((f) => (
                <details className="faq__item" key={f.q}>
                  <summary className="faq__q">{f.q}</summary>
                  <p className="faq__a">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="wrap">
        <div className="callout">
          <div>
            <span className="eyebrow">Still have a question</span>
            <h2>Ask us directly.</h2>
            <p>
              If your question is not here, tell us about your space and we will
              come back to you.
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
