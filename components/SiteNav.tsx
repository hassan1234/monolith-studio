"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/design", label: "Design" },
  { href: "/build", label: "Build" },
  { href: "/surfaces", label: "Surfaces" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const pathname = usePathname();
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/">
          <span className="wordmark">Monolith</span>
          <span className="wordmark__sub">Design · Build · Surfaces</span>
        </Link>
        <div className="nav-links">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? "active" : ""}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
