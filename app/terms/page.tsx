import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Monolith",
  description: "The terms that apply to using the Monolith website and enquiring about our services.",
};

export default function TermsPage() {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">Legal</span>
          <h1 style={{ fontSize: "var(--text-display)", letterSpacing: "-0.01em", textTransform: "none" }}>
            Terms of Service
          </h1>
          <p className="legal__updated">Last updated 3 September 2026</p>
        </div>
      </header>

      <section className="wrap legal">
        <div className="legal__body">
          <p>
            These terms apply to your use of monolithstudio.co. By using the site
            you agree to them. They do not replace the written agreement we put in
            place for any specific project.
          </p>

          <h2>Using this website</h2>
          <p>
            The content on this site — text, images and design — is for general
            information about our work. It is provided in good faith, but we make
            no guarantee that it is complete or error-free, and it may change
            without notice.
          </p>

          <h2>No project agreement until it&rsquo;s in writing</h2>
          <p>
            Nothing on this site, and no enquiry you send through it, forms a
            contract. Any project we take on is governed by a separate written
            proposal and agreement that sets out the scope, price and terms for
            that specific work.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The Monolith name, branding and the content of this site belong to us.
            Please don&rsquo;t reproduce or reuse them without our permission.
          </p>

          <h2>External links</h2>
          <p>
            The site links to other websites (such as our microcement studio). We
            are not responsible for the content or practices of sites we do not
            control.
          </p>

          <h2>Liability</h2>
          <p>
            To the extent permitted by law, we are not liable for any loss arising
            from your use of this website.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a href="mailto:hello@monolithstudio.co">hello@monolithstudio.co</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
