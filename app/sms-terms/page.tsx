import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, ADDRESS_ONE_LINE, ENTITY_LINE } from "@/lib/business";

export const metadata: Metadata = {
  title: "Text Messaging Terms — Monolith",
  description:
    "How Monolith uses text messaging: what we send, how to opt in and out, message frequency and costs.",
};

/**
 * Required for A2P 10DLC registration. Mobile carriers review this page
 * alongside the privacy policy before approving a messaging campaign, and
 * look for: a description of each message programme, how consent is given,
 * message frequency, a cost disclaimer, the HELP and STOP keywords, carrier
 * non-liability, and an identifiable business with a postal address.
 *
 * Keep it consistent with the consent wording on the GoHighLevel enquiry form
 * (form rk5Nk8N42iDhl9VOsBUF) — the two are compared during review.
 */
export default function SmsTermsPage() {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">Legal</span>
          <h1 style={{ fontSize: "var(--text-display)", letterSpacing: "-0.01em", textTransform: "none" }}>
            Text Messaging Terms
          </h1>
          <p className="legal__updated">Last updated 25 November 2026</p>
        </div>
      </header>

      <section className="wrap legal">
        <div className="legal__body">
          <p>
            These terms apply to the text messages (SMS) you may receive from{" "}
            {BUSINESS.brand}. {ENTITY_LINE}.
          </p>

          <h2>What we send</h2>
          <p>We run two separate message programmes, and you choose each one independently:</p>
          <ul>
            <li>
              <strong>Project messages.</strong> Replies about an enquiry you
              sent us, appointment confirmations and reminders for your
              Walkthrough or site visit, and updates about work in progress.
              These are conversational — we only send them because you
              contacted us or we are working together.
            </li>
            <li>
              <strong>Studio news.</strong> Occasional messages about projects,
              finishes and studio news. This is marketing, and it is entirely
              optional — you can decline it and still hear back about your
              project.
            </li>
          </ul>

          <h2>How you opt in</h2>
          <p>
            By ticking the relevant consent box on our enquiry form and giving us
            your mobile number, or by texting us first at{" "}
            <a href={`tel:${BUSINESS.phoneHref}`}>{BUSINESS.phone}</a>. Consent is
            never a condition of getting a quote or of buying anything from us,
            and neither box is ticked for you. If you give us a number without
            ticking a box, we will only contact you by email.
          </p>

          <h2>Message frequency</h2>
          <p>
            Message frequency varies. Project messages depend on your enquiry and
            the stage of your job — typically a handful over the life of a
            project. Studio news is sent no more than a few times a month.
          </p>

          <h2>Cost</h2>
          <p>
            Message and data rates may apply. We do not charge you for messages;
            your mobile carrier may, according to your plan. Check with your
            carrier if you are unsure.
          </p>

          <h2>How to stop messages</h2>
          <p>
            Reply <strong>STOP</strong> to any message to opt out. We will send
            one confirmation that you have been unsubscribed, and then stop. You
            can opt back in at any time by texting <strong>START</strong> or by
            asking us. You can also email{" "}
            <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> and we will
            remove your number.
          </p>

          <h2>How to get help</h2>
          <p>
            Reply <strong>HELP</strong> to any message for contact details, or
            reach us at{" "}
            <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> or{" "}
            <a href={`tel:${BUSINESS.phoneHref}`}>{BUSINESS.phone}</a>.
          </p>

          <h2>Carriers and delivery</h2>
          <p>
            Mobile carriers are not liable for delayed or undelivered messages.
            Delivery is not guaranteed, and message programmes may not be
            supported by every carrier or handset. Please do not rely on text
            messaging for anything urgent or safety-critical.
          </p>

          <h2>Privacy</h2>
          <p>
            We do not sell, rent or share your mobile number, and no mobile
            information is shared with third parties or affiliates for their
            marketing or promotional purposes. Our{" "}
            <Link href="/privacy">Privacy Policy</Link> explains this in full.
          </p>

          <h2>Contact</h2>
          <p>
            {BUSINESS.legalName} (trading as {BUSINESS.brand})
            <br />
            {ADDRESS_ONE_LINE}
            <br />
            <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> ·{" "}
            <a href={`tel:${BUSINESS.phoneHref}`}>{BUSINESS.phone}</a>
          </p>
        </div>
      </section>
    </main>
  );
}
