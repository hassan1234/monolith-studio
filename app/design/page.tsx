import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Design — Monolith",
  description: "Design at Monolith: spatial concept, material studies, detailing and documentation.",
};

const caps = [
  { h: "Spatial Concept", p: "We start with how a space should feel and move — light, proportion and flow — before a single wall is drawn." },
  { h: "Material Studies", p: "Palettes are resolved in the hand, not just on screen. Stone, timber, plaster and pigment are tested at scale." },
  { h: "Detailing", p: "The junctions, reveals and shadow gaps that make a room feel inevitable are drawn to the millimetre." },
  { h: "Documentation", p: "Clear, buildable drawings that carry design intent all the way to site with nothing left to chance." },
];

export default function DesignPage() {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">Discipline — Design</span>
          <h1>Design</h1>
          <p className="lead">
            Considered, restrained and rooted in material. We design spaces that
            hold their calm long after the build is done.
          </p>
        </div>
      </header>

      <div className="wrap">
        <div className="feature-image">
          <Image src="/images/design-open.png" alt="Open-plan designed living and dining space" width={1600} height={900} priority />
        </div>
      </div>

      <div className="wrap">
        <div className="splits">
          <div className="split">
            <div className="split__media">
              <Image src="/images/design-living-v2.png" alt="Designed residential living room" width={1200} height={1500} />
            </div>
            <div>
              <span className="eyebrow split__eyebrow">Material First</span>
              <h2>Palettes resolved in the hand.</h2>
              <p>
                Every project begins with material. We build physical palettes —
                stone, timber, plaster and textiles — and test them in the
                light of the actual room before committing a line to paper.
              </p>
              <p>
                It means the finished space feels considered from the first
                moment, not assembled from a catalogue.
              </p>
            </div>
          </div>

          <div className="split split--reverse">
            <div className="split__media">
              <Image src="/images/design-kitchen.png" alt="Bespoke designed kitchen" width={1200} height={1500} />
            </div>
            <div>
              <span className="eyebrow split__eyebrow">Detail &amp; Precision</span>
              <h2>The quiet details that hold a room together.</h2>
              <p>
                Shadow gaps, flush reveals, seamless transitions — the details
                you feel more than see. We draw them to the millimetre so the
                space reads as a single, calm volume.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="capabilities">
        <div className="wrap">
          <div className="capabilities__head">
            <span className="eyebrow">What we do</span>
            <h2>From first sketch to full documentation.</h2>
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
    </main>
  );
}
