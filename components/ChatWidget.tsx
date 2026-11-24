"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Pages carrying the GoHighLevel enquiry form, which collects a phone number
 * and SMS opt-in consent.
 */
const hasEnquiryForm = (pathname: string) =>
  pathname === "/contact" || pathname.startsWith("/contact/");

/**
 * The widget element detached on a form page, kept so it can be put back.
 *
 * The loader only ever runs once per document, so a removed widget cannot be
 * rebuilt by re-rendering <Script>. Detaching and re-attaching the element it
 * created is what lets the widget survive a round trip through /contact.
 */
let detached: Element | null = null;

/**
 * The GoHighLevel chat widget, kept off any page that already carries the
 * enquiry form.
 *
 * A2P 10DLC brand registration requires that no form collecting a phone
 * number or SMS consent appears on a page where the chat widget is embedded —
 * carriers want one unambiguous opt-in path per page. The widget collects both
 * itself, so the two must not share a page.
 */
export default function ChatWidget() {
  const pathname = usePathname();
  const suppressed = hasEnquiryForm(pathname);

  useEffect(() => {
    if (suppressed) {
      // The loader appends <chat-widget> to <body>. It survives a client-side
      // route change, so take it out and keep watching in case the loader —
      // which may still be fetching — appends it after we arrive.
      const take = () => {
        const el = document.querySelector("chat-widget");
        if (el) {
          detached = el;
          el.remove();
        }
      };
      take();
      const observer = new MutationObserver(take);
      observer.observe(document.body, { childList: true });
      return () => observer.disconnect();
    }

    if (detached && !document.querySelector("chat-widget")) {
      document.body.appendChild(detached);
      detached = null;
    }
  }, [suppressed, pathname]);

  if (suppressed) return null;

  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6b05f1d829fc2dc00f3c8416"
      strategy="lazyOnload"
    />
  );
}
