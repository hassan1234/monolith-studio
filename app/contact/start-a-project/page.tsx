import type { Metadata } from "next";
import Link from "next/link";
import GhlForm from "@/components/GhlForm";
import { STUDIO_FORM_ID, STUDIO_FORM_TITLE } from "@/lib/ghl";

export const metadata: Metadata = {
  title: "Start a Project — Monolith",
  description: "Share a structured brief with Monolith — project type, budget, timeline and scope — and we will take it from there.",
};

export default function StartProjectPage() {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <Link href="/contact" className="svc-back">← Contact</Link>
          <span className="eyebrow" style={{ display: "block", marginTop: 18 }}>Start a Project</span>
          <h1 style={{ fontSize: "var(--text-display)", letterSpacing: "0.01em", textTransform: "none" }}>
            Tell us about your space
          </h1>
          <p className="lead">
            A few quick details help us come back to you with something useful.
            The more you can share, the better.
          </p>
        </div>
      </header>

      <div className="wrap contact">
        <div className="contact__grid">
          <div>
            <div className="contact__block">
              <span className="eyebrow">Email</span>
              <a href="mailto:hello@monolithstudio.co">hello@monolithstudio.co</a>
            </div>
            <div className="contact__block">
              <span className="eyebrow">Phone</span>
              <a href="tel:+12026036933">202&#8209;603&#8209;6933</a>
            </div>
            <div className="contact__block">
              <span className="eyebrow">Studio</span>
              <p>Washington, DC</p>
            </div>
          </div>
          <div>
            <GhlForm
              formId={STUDIO_FORM_ID}
              title={STUDIO_FORM_TITLE}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
