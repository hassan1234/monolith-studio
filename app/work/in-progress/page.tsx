import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "In Progress — Monolith Work",
  description: "Live jobs and dated site updates from current Monolith projects.",
};

// PLACEHOLDER updates — replace with real, dated site notes.
const updates = [
  { date: "Sep 2026", project: "Monroe Street Townhouse", note: "Kitchen cabinetry installed; microcement floors going down next week." },
  { date: "Aug 2026", project: "Logan Circle Kitchen", note: "Strip-out complete, services first-fixed, island base set." },
  { date: "Aug 2026", project: "Shaw Basement", note: "Insulation and framing signed off; joinery in fabrication." },
];

export default function InProgressPage() {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <Link href="/work" className="svc-back">← Work</Link>
          <span className="eyebrow" style={{ display: "block", marginTop: 18 }}>Work — In Progress</span>
          <h1 style={{ fontSize: "var(--text-display)", letterSpacing: "0.01em", textTransform: "none" }}>
            On Site Now
          </h1>
          <p className="lead">
            Live jobs and dated updates from projects currently under way.
          </p>
        </div>
      </header>

      <section className="capabilities" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="process">
            {updates.map((u, i) => (
              <div className="process__step" key={i}>
                <span className="process__num">{u.date}</span>
                <div>
                  <h3>{u.project}</h3>
                  <p>{u.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
