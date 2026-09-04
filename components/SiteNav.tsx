"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavLink = {
  href: string;
  label: string;
  cta?: boolean;
};

const links: NavLink[] = [
  { href: "/design", label: "Design" },
  { href: "/build", label: "Build" },
  { href: "/surfaces", label: "Surfaces" },
  { href: "/work", label: "Work" },
  { href: "/studio", label: "Studio" },
  { href: "/contact/start-a-project", label: "Start a Project", cta: true },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <nav className={`nav${open ? " nav--open" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="nav-brand" onClick={() => setOpen(false)}>
          <span className="wordmark">Monolith</span>
          <span className="wordmark__sub">Design · Build · Surfaces</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links${open ? " is-open" : ""}`}>
          {links.map((l) => (
            <div className="nav-item" key={l.href}>
              <Link
                href={l.href}
                className={`${isActive(l.href) ? "active" : ""}${l.cta ? " nav-cta" : ""}`.trim()}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
