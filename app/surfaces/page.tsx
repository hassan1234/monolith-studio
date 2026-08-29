import type { Metadata } from "next";
import Link from "next/link";
import Carousel, { type Slide } from "@/components/Carousel";

export const metadata: Metadata = {
  title: "Surfaces — Monolith",
  description:
    "Hand-applied mineral finishes at Monolith — microcement, limewash, vanishing plaster, tadelakt, lime plaster and pigmented finishes. Explore each finish.",
};

const slides: Slide[] = [
  { src: "/images/surfaces-2.jpg", label: "Microcement" },
  { src: "/images/surface-limewash.jpg", label: "Limewash" },
  { src: "/images/surface-vanishing.jpg", label: "Vanishing Plaster" },
  { src: "/images/surface-tadelakt.jpg", label: "Tadelakt" },
  { src: "/images/surface-lime.jpg", label: "Lime Plaster" },
  { src: "/images/surface-pigment.jpg", label: "Pigment & Colour" },
];

const finishes = [
  { h: "Microcement", p: "A thin, hard-wearing cementitious coat applied over floors, walls and joinery. Completely seamless — no grout lines, no joints — with a smooth, quietly tactile surface that suits modern, high-traffic spaces." },
  { h: "Limewash", p: "A breathable mineral wash brushed on in thin layers. It dries to a soft, chalky matte with cloudy movement and gentle tonal shifts — full of depth and character, and it only mellows with age. Ideal for warm, calm walls." },
  { h: "Vanishing Plaster", p: "A polished plaster (Venetian-style) finish burnished back to a smooth, near-seamless surface with a subtle sheen and marble-like depth. Refined and luxurious — the light seems to sink into the wall." },
  { h: "Tadelakt", p: "A traditional polished lime finish, naturally waterproof and seamless. Warm, tactile and beautifully suited to showers, wet rooms and basins where tile would normally go." },
  { h: "Lime Plaster", p: "Hand-applied, breathable lime with a soft matte texture and gentle mineral movement. A timeless, natural finish that regulates humidity and ages gracefully." },
  { h: "Pigment & Colour", p: "Colour worked into the material itself rather than painted on top — from soft neutrals to deep, saturated tones — so the finish keeps its depth and never simply wears off." },
];

const process = [
  { h: "Sample", p: "We prepare samples in your space and light, so you can choose the finish, tone and sheen with confidence." },
  { h: "Prepare", p: "Substrates are assessed, repaired and primed — the groundwork a flawless mineral finish depends on." },
  { h: "Apply", p: "Built up by hand in thin layers, worked and burnished to the exact texture and depth agreed." },
  { h: "Seal", p: "Protective mineral seals for wet and high-traffic areas, with simple guidance for a lifetime of care." },
];

export default function SurfacesPage() {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">Surfaces &amp; Finishes</span>
          <h1>Surfaces</h1>
          <p className="lead">
            Seamless, hand-applied mineral finishes — microcement, limewash,
            vanishing plaster and more. The final, tactile layer that gives a
            space its character and calm.
          </p>
        </div>
      </header>

      <section className="wrap">
        <Carousel slides={slides} />
      </section>

      <section className="capabilities">
        <div className="wrap">
          <div className="capabilities__head">
            <span className="eyebrow">The finishes</span>
            <h2>Every finish, explained.</h2>
          </div>
          <div className="dgrid">
            {finishes.map((c) => (
              <div className="dgrid__item" key={c.h}>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="capabilities__head">
            <span className="eyebrow">How we apply</span>
            <h2>Built up by hand, layer by layer.</h2>
          </div>
          <div className="dgrid dgrid--4">
            {process.map((c) => (
              <div className="dgrid__item" key={c.h}>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="intro" style={{ paddingTop: 0 }}>
        <div className="wrap intro__grid">
          <h2>Finishes with depth you can feel.</h2>
          <p>
            Every one of these is a natural, mineral finish applied by hand — so
            no two walls are ever quite the same. The result is a surface with
            real movement and warmth that flat paint simply cannot reach.
          </p>
        </div>
      </section>

      <section className="wrap">
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
      </section>
    </main>
  );
}
