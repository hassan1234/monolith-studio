"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { servicesByDiscipline, type Service } from "@/lib/services";

type NavLink = {
  href: string;
  label: string;
  discipline?: Service["discipline"];
};

const links: NavLink[] = [
  { href: "/design", label: "Design", discipline: "design" },
  { href: "/build", label: "Build", discipline: "build" },
  { href: "/surfaces", label: "Surfaces", discipline: "surfaces" },
  { href: "/work", label: "Work" },
  { href: "/studio", label: "Studio" },
  { href: "/contact/start-a-project", label: "Start a Project" },
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
          {links.map((l) => {
            const children = l.discipline ? servicesByDiscipline(l.discipline) : [];
            return (
              <div className="nav-item" key={l.href}>
                <Link
                  href={l.href}
                  className={isActive(l.href) ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
                {children.length > 0 && (
                  <div className="nav-drop">
                    <div className="nav-drop__box">
                      {children.map((c) => (
                        <Link
                          key={c.slug}
                          href={`${c.parentHref}/${c.slug}`}
                          onClick={() => setOpen(false)}
                        >
                          {c.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
