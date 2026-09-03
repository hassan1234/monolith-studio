import type { Metadata } from "next";
import Link from "next/link";
import WorkGrid from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Work — Monolith",
  description: "Selected completed projects by Monolith — design, build and surfaces, delivered by one team across Washington, DC.",
};

export default function WorkPage() {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">Selected Work</span>
          <h1>Work</h1>
          <p className="lead">
            A look at completed Monolith projects — design, build and surfaces,
            delivered by one team.
          </p>
        </div>
      </header>

      <section className="capabilities" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <WorkGrid />
        </div>
      </section>

      <section className="wrap">
        <div className="callout">
          <div>
            <span className="eyebrow">Start your project</span>
            <h2>Your home could be next.</h2>
            <p>Tell us what you want to transform and we will take it from there.</p>
          </div>
          <div>
            <Link className="btn" href="/contact/start-a-project">Start a project ↗</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
