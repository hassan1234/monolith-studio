import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Surfaces — Monolith",
  description:
    "Surfaces at Monolith: seamless microcement, plaster and hand-worked finishes. Explore our dedicated microcement studio.",
};

const caps = [
  { h: "Microcement", p: "Seamless, hard-wearing surfaces poured over floors, walls and joinery — jointless and quietly tactile." },
  { h: "Plaster & Lime", p: "Breathable, hand-applied finishes with depth and movement that flat paint can never reach." },
  { h: "Pigment & Tone", p: "Colour worked into the material itself, so the surface ages gracefully rather than wearing off." },
  { h: "Sealing & Care", p: "Protective mineral seals for wet rooms and high-traffic floors, with guidance for a lifetime of wear." },
];

export default function SurfacesPage() {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">Discipline — Surfaces</span>
          <h1>Surfaces</h1>
          <p className="lead">
            The final, tactile layer. Seamless microcement and hand-worked
            finishes that give a space its character and its calm.
          </p>
        </div>
      </header>

      <div className="wrap">
        <div className="feature-image">
          <Image src="/images/surfaces-2.png" alt="Seamless microcement bathroom" width={1600} height={900} priority />
        </div>
      </div>

      <section className="capabilities">
        <div className="wrap">
          <div className="capabilities__head">
            <span className="eyebrow">The finishing layer</span>
            <h2>Mineral surfaces, applied by hand.</h2>
          </div>
          <div className="cap-grid">
            {caps.map((c) => (
              <div className="cap" key={c.h}>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap gallery">
        <div className="gallery__grid gallery__grid--2">
          <div className="gallery__item">
            <Image src="/images/surfaces-1.png" alt="Microcement wall texture" width={1000} height={750} />
          </div>
          <div className="gallery__item">
            <Image src="/images/surfaces-2.png" alt="Seamless microcement finish" width={1000} height={750} />
          </div>
        </div>
      </div>

      <div className="wrap">
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
            <a
              className="btn"
              href="https://monolithmicrocement.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Monolith Microcement ↗
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
