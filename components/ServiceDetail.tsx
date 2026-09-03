import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/lib/services";

export default function ServiceDetail({
  service,
  siblings,
}: {
  service: Service;
  siblings: Service[];
}) {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <Link href={service.parentHref} className="svc-back">
            ← {service.parentLabel}
          </Link>
          <span className="eyebrow" style={{ display: "block", marginTop: 18 }}>
            {service.parentLabel}
          </span>
          <h1 style={{ fontSize: "var(--text-display)", letterSpacing: "0.01em", textTransform: "none" }}>
            {service.title}
          </h1>
          <p className="lead">{service.lead}</p>
        </div>
      </header>

      <div className="wrap">
        <div className="svc-feature">
          <Image src={service.images[0]} alt={service.title} width={1600} height={900} priority />
        </div>
      </div>

      <section className="capabilities" style={{ paddingTop: "clamp(48px, 7vw, 96px)" }}>
        <div className="wrap">
          <div className="svc-cols">
            <div>
              {service.body.map((p, i) => (
                <p className="svc-body" key={i}>{p}</p>
              ))}
            </div>
            <div>
              <span className="eyebrow" style={{ display: "block", marginBottom: 18 }}>
                What&rsquo;s included
              </span>
              <ul className="svc-included">
                {service.included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="svc-feature svc-feature--wide">
          <Image src={service.images[1]} alt={service.title} width={1600} height={900} />
        </div>
      </div>

      {service.microcementStudio && (
        <section className="wrap" style={{ marginTop: "clamp(48px, 7vw, 96px)" }}>
          <div className="callout">
            <div>
              <span className="eyebrow">Monolith Microcement</span>
              <h2>Explore our dedicated microcement studio.</h2>
              <p>
                Our seamless microcement work has its own home — full ranges,
                colours, applications and project galleries.
              </p>
            </div>
            <div>
              <a className="btn" href="https://monolithmicrocement.com" target="_blank" rel="noopener noreferrer">
                Visit Monolith Microcement ↗
              </a>
            </div>
          </div>
        </section>
      )}

      {siblings.length > 0 && (
        <section className="capabilities" style={{ paddingTop: "clamp(56px, 8vw, 110px)" }}>
          <div className="wrap">
            <div className="capabilities__head">
              <span className="eyebrow">More {service.parentLabel}</span>
              <h2>Explore the rest of {service.parentLabel.toLowerCase()}.</h2>
            </div>
            <div className="svc-more">
              {siblings.map((s) => (
                <Link key={s.slug} href={`${s.parentHref}/${s.slug}`} className="svc-more__item">
                  <span>{s.title}</span>
                  <span className="svc-more__arrow">↗</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="wrap">
        <div className="callout">
          <div>
            <span className="eyebrow">Start your project</span>
            <h2>Let&rsquo;s talk about your space.</h2>
            <p>Tell us what you have in mind and we will take it from there.</p>
          </div>
          <div>
            <Link className="btn" href="/contact">Get in touch ↗</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
