import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ project: p.slug }));
}

export function generateMetadata({ params }: { params: { project: string } }): Metadata {
  const p = getProject(params.project);
  if (!p) return {};
  return { title: `${p.title} — Monolith Work`, description: p.summary };
}

export default function ProjectPage({ params }: { params: { project: string } }) {
  const p = getProject(params.project);
  if (!p) notFound();

  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <Link href="/work" className="svc-back">← Work</Link>
          <span className="eyebrow" style={{ display: "block", marginTop: 18 }}>
            {p.location} · {p.year}
          </span>
          <h1 style={{ fontSize: "var(--text-display)", letterSpacing: "0.01em", textTransform: "none" }}>
            {p.title}
          </h1>
          <p className="lead">{p.summary}</p>
        </div>
      </header>

      <div className="wrap">
        <div className="svc-feature">
          <Image src={p.hero} alt={p.title} width={1600} height={900} priority />
        </div>
      </div>

      <section className="capabilities" style={{ paddingTop: "clamp(48px, 7vw, 96px)" }}>
        <div className="wrap">
          <div className="svc-cols">
            <div>
              {p.body.map((para, i) => (
                <p className="svc-body" key={i}>{para}</p>
              ))}
            </div>
            <div>
              <span className="eyebrow" style={{ display: "block", marginBottom: 18 }}>Scope</span>
              <ul className="svc-included">
                {p.scope.map((item) => (<li key={item}>{item}</li>))}
              </ul>
              <p className="legal__updated" style={{ marginTop: 26 }}>{p.disciplines.join(" · ")}</p>
            </div>
          </div>
        </div>
      </section>

      {p.gallery.length > 0 && (
        <div className="wrap gallery">
          <div className={`gallery__grid gallery__grid--${p.gallery.length >= 3 ? "3" : "2"}`}>
            {p.gallery.map((src, i) => (
              <div className="gallery__item" key={i}>
                <Image src={src} alt={`${p.title} — ${i + 1}`} width={1000} height={750} />
              </div>
            ))}
          </div>
        </div>
      )}

      <section className="wrap">
        <div className="callout">
          <div>
            <span className="eyebrow">Start your project</span>
            <h2>Want something like this?</h2>
            <p>Tell us about your space and we will scope it with you.</p>
          </div>
          <div>
            <Link className="btn" href="/contact/start-a-project">Start a project ↗</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
