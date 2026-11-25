import Link from "next/link";
import { BUSINESS, ADDRESS_ONE_LINE, ENTITY_LINE } from "@/lib/business";

/**
 * Licensing / insurance shown in the footer.
 *
 * These are legal claims about the business, so they must be the real,
 * current details — a license class or number that is wrong (or lapsed)
 * is false advertising. Add the confirmed values here and they render
 * automatically; while the list is empty nothing is shown.
 *
 * e.g. ["VA Class A Contractor #2705XXXXXX", "Licensed, Bonded & Insured"]
 */
const credentials: string[] = [];

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <p className="footer__col-label">Explore</p>
            <nav className="footer__nav" aria-label="Footer">
              <Link href="/">Home</Link>
              <Link href="/design">Design</Link>
              <Link href="/build">Build</Link>
              <Link href="/surfaces">Surfaces</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </div>
        {/*
          Legal entity and postal address.

          Mobile carriers reviewing the A2P 10DLC registration check that the
          website identifies the registered business and publishes a matching
          address. Both values come from lib/business.ts; keep them in step with
          the brand application.
        */}
        <p className="footer__entity">
          <span>{ENTITY_LINE}</span>
          <span aria-hidden="true"> · </span>
          <span>{ADDRESS_ONE_LINE}</span>
          <span aria-hidden="true"> · </span>
          <a href={`tel:${BUSINESS.phoneHref}`}>{BUSINESS.phone}</a>
          <span aria-hidden="true"> · </span>
          <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
        </p>

        {credentials.length > 0 && (
          <p className="footer__credentials">
            {credentials.map((c, i) => (
              <span key={c}>
                {i > 0 && <span aria-hidden="true"> · </span>}
                {c}
              </span>
            ))}
          </p>
        )}

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Monolith. All rights reserved.</span>
          <span className="footer__legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/sms-terms">Text Messaging</Link>
            <a
              href="https://monolithmicrocement.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              monolithmicrocement.com
            </a>
          </span>
        </div>
      </div>
      <span className="footer__watermark" aria-hidden="true">Monolith</span>
    </footer>
  );
}
