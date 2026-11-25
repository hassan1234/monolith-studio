import type { Metadata } from "next";
import Link from "next/link";
import GhlForm from "@/components/GhlForm";
import { STUDIO_FORM_ID, STUDIO_FORM_TITLE } from "@/lib/ghl";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact — Monolith",
  description: "Start a project with Monolith — design, build and surfaces under one roof.",
};

export default function ContactPage() {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">Get in touch</span>
          <h1>Contact</h1>
          <p className="lead">
            Tell us about your space. Whether it starts with a drawing, a build
            or a single surface, we would love to hear from you.
          </p>
        </div>
      </header>

      <div className="wrap contact">
        <div className="contact__grid">
          <div>
            <div className="contact__block">
              <span className="eyebrow">Email</span>
              <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
            </div>
            <div className="contact__block">
              <span className="eyebrow">Phone</span>
              <a href={`tel:${BUSINESS.phoneHref}`}>{BUSINESS.phone}</a>
            </div>
            <div className="contact__block">
              <span className="eyebrow">Studio</span>
              <p>Washington, DC</p>
            </div>
            <div className="contact__block">
              <span className="eyebrow">Mailing address</span>
              <p>
                {BUSINESS.legalName}
                <br />
                {BUSINESS.address.line1}
                <br />
                {BUSINESS.address.city}, {BUSINESS.address.state}{" "}
                {BUSINESS.address.postalCode}
              </p>
            </div>
            <div className="contact__block">
              <span className="eyebrow">Before you write</span>
              <Link href="/faq">Read our FAQ ↗</Link>
            </div>
            <div className="contact__block">
              <span className="eyebrow">Microcement</span>
              <a href="https://monolithmicrocement.com" target="_blank" rel="noopener noreferrer">
                monolithmicrocement.com ↗
              </a>
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
