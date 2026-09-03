import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Monolith",
  description: "How Monolith collects, uses and protects the information you share with us.",
};

export default function PrivacyPage() {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">Legal</span>
          <h1 style={{ fontSize: "var(--text-display)", letterSpacing: "-0.01em", textTransform: "none" }}>
            Privacy Policy
          </h1>
          <p className="legal__updated">Last updated 3 September 2026</p>
        </div>
      </header>

      <section className="wrap legal">
        <div className="legal__body">
          <p>
            This Privacy Policy explains how Monolith (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses and protects the
            information you provide when you use monolithstudio.co or contact us
            about a project.
          </p>

          <h2>Information we collect</h2>
          <p>We only collect what we need to respond to you and deliver our work:</p>
          <ul>
            <li>Contact details you give us — your name, email address, phone number and the details of your project.</li>
            <li>Basic, anonymous usage data (such as pages visited) to understand how the site is used and improve it.</li>
          </ul>

          <h2>How we use it</h2>
          <ul>
            <li>To respond to your enquiry and discuss your project.</li>
            <li>To provide, quote for and deliver design, build and surfaces services.</li>
            <li>To improve our website and services.</li>
          </ul>
          <p>We do not sell your personal information, and we do not send marketing you did not ask for.</p>

          <h2>Sharing</h2>
          <p>
            We share information only with trusted partners who help us run the
            business or deliver a project (for example trades or suppliers working
            on your job), and only as far as needed. We may also disclose
            information where required by law.
          </p>

          <h2>Data retention & security</h2>
          <p>
            We keep project and enquiry information only as long as necessary for
            the purposes above or as required by law, and we take reasonable
            measures to protect it.
          </p>

          <h2>Your rights</h2>
          <p>
            You can ask us to access, correct or delete the personal information
            we hold about you. Just email us and we will help.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Email{" "}
            <a href="mailto:hello@monolithstudio.co">hello@monolithstudio.co</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
