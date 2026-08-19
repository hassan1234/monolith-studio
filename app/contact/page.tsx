import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

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
              <a href="mailto:hello@monolith.studio">hello@monolith.studio</a>
            </div>
            <div className="contact__block">
              <span className="eyebrow">Phone</span>
              <a href="tel:+10000000000">+1 (000) 000&#8209;0000</a>
            </div>
            <div className="contact__block">
              <span className="eyebrow">Studio</span>
              <p>Washington, DC</p>
            </div>
            <div className="contact__block">
              <span className="eyebrow">Microcement</span>
              <a href="https://monolithmicrocement.com" target="_blank" rel="noopener noreferrer">
                monolithmicrocement.com ↗
              </a>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
