import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <span className="wordmark">Monolith</span>
            <span className="wordmark__sub">Design · Build · Surfaces</span>
            <p className="footer__tag">
              One studio across three disciplines. Considered spaces shaped from
              first line to final surface.
            </p>
          </div>
          <div>
            <p className="footer__col-label">Explore</p>
            <nav className="footer__nav" aria-label="Footer">
              <Link href="/">Home</Link>
              <Link href="/design">Design</Link>
              <Link href="/build">Build</Link>
              <Link href="/surfaces">Surfaces</Link>
              <Link href="/studio">Studio</Link>
              <Link href="/contact">Contact</Link>
              <a
                href="https://monolithmicrocement.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microcement ↗
              </a>
            </nav>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Monolith. All rights reserved.</span>
          <span className="footer__legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
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
    </footer>
  );
}
