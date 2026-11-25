"use client";

import Link from "next/link";
import Script from "next/script";

type Props = {
  /** GoHighLevel form id, e.g. "rk5Nk8N42iDhl9VOsBUF". */
  formId: string;
  /** Accessible title for the embedded frame. */
  title: string;
  /** Initial height before GoHighLevel's script measures the real form. */
  minHeight?: number;
};

/**
 * Embeds a GoHighLevel form.
 *
 * Submissions land directly in the Monolith sub-account, which tags them
 * `src-site-studio` and emails hello@monolithstudio.co (workflow
 * "Studio Site - Tag Source"). form_embed.js posts the rendered height back
 * and resizes the iframe by its id, so the frame grows with the form.
 *
 * The consent note under the frame is required for A2P 10DLC: the opt-in has
 * to sit next to the privacy policy and text-messaging terms it refers to, and
 * the form itself is a cross-origin iframe whose label text cannot link out.
 *
 * The iframe deliberately does NOT set loading="lazy". With it, the form
 * never loaded at all on the live site: the frame sat blank at its
 * min-height and no request to api.leadconnectorhq.com was ever made, even
 * with the frame scrolled into view. This is the page's primary call to
 * action, so it loads eagerly.
 */
export default function GhlForm({ formId, title, minHeight = 820 }: Props) {
  const src = `https://api.leadconnectorhq.com/widget/form/${formId}`;

  return (
    <div className="ghl-form">
      <iframe
        id={`inline-${formId}`}
        src={src}
        title={title}
        style={{ width: "100%", height: "100%", minHeight, border: "none" }}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-form-id={formId}
        data-form-name={title}
        data-height={minHeight}
        data-layout-iframe-id={`inline-${formId}`}
        data-deactivation-type="neverDeactivate"
        data-activation-type="alwaysActivated"
      />
      <p className="form__consent">
        Ticking a text-messaging box is optional and is never required to get a
        quote. Message frequency varies, message and data rates may apply, and
        you can reply STOP at any time to opt out or HELP for assistance. See our{" "}
        <Link href="/sms-terms">Text Messaging Terms</Link> and{" "}
        <Link href="/privacy">Privacy Policy</Link>. We never sell or share your
        number.
      </p>

      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
      <noscript>
        <p className="form__note">
          This form needs JavaScript. Email us at{" "}
          <a href="mailto:hello@monolithstudio.co">hello@monolithstudio.co</a> instead.
        </p>
      </noscript>
    </div>
  );
}
