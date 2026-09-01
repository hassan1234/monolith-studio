import type { Metadata } from "next";
import Image from "next/image";
import BuildTypes, { type BuildType } from "@/components/BuildTypes";

export const metadata: Metadata = {
  title: "Surfaces — Monolith",
  description:
    "Hand-applied mineral finishes at Monolith — microcement, limewash, vanishing plaster, tadelakt, lime plaster and pigmented finishes, with our surfaces journey.",
};

const finishes: BuildType[] = [
  {
    name: "Microcement",
    blurb: "A thin, hard-wearing cementitious coat applied over floors, walls and joinery. Completely seamless — no grout lines, no joints — with a smooth, quietly tactile surface.",
    images: ["/images/fin-microcement-1.jpg", "/images/fin-microcement-2.jpg"],
  },
  {
    name: "Limewash",
    blurb: "A breathable mineral wash brushed on in thin layers, drying to a soft, chalky matte with cloudy movement and gentle tonal shifts — full of depth and character.",
    images: ["/images/fin-limewash-1.jpg", "/images/fin-limewash-2.jpg"],
  },
  {
    name: "Vanishing Plaster",
    blurb: "A polished plaster finish burnished to a smooth, near-seamless surface with a subtle sheen and marble-like depth — the light seems to sink into the wall.",
    images: ["/images/fin-vanishing-1.jpg", "/images/fin-vanishing-2.jpg"],
  },
  {
    name: "Tadelakt",
    blurb: "A traditional polished lime finish, naturally waterproof and seamless — warm and tactile, and beautifully suited to showers and wet rooms.",
    images: ["/images/fin-tadelakt-1.jpg", "/images/fin-tadelakt-2.jpg"],
  },
  {
    name: "Lime Plaster",
    blurb: "Hand-applied, breathable lime with a soft matte texture and gentle mineral movement — a timeless, natural finish that ages gracefully.",
    images: ["/images/fin-lime-1.jpg", "/images/fin-lime-2.jpg"],
  },
  {
    name: "Pigment & Colour",
    blurb: "Colour worked into the material itself rather than painted on top — from soft neutrals to deep, saturated tones — so the finish keeps its depth and never simply wears off.",
    images: ["/images/fin-pigment-1.jpg", "/images/fin-pigment-2.jpg"],
  },
];

const journey = [
  {
    n: "01",
    h: "Sample & Select",
    img: "/images/surface-journey-sample.jpg",
    alt: "Mineral finish samples",
    p: "We prepare finish samples in your space and light, so you can choose the exact material, tone and sheen with confidence.",
  },
  {
    n: "02",
    h: "Prepare",
    img: "/images/surface-journey-prepare.jpg",
    alt: "A wall being prepared for a mineral finish",
    p: "Substrates are assessed, repaired and primed — the groundwork a flawless mineral finish depends on.",
  },
  {
    n: "03",
    h: "Apply by Hand",
    img: "/images/surface-journey-apply.jpg",
    alt: "Mineral plaster being hand-troweled onto a wall",
    p: "Built up by hand in thin layers, worked and burnished to the exact texture and depth agreed.",
  },
  {
    n: "04",
    h: "Seal & Protect",
    img: "/images/surface-journey-seal.jpg",
    alt: "A finished, sealed mineral surface",
    p: "Protective mineral seals for wet and high-traffic areas, with simple guidance for a lifetime of care.",
  },
];

export default function SurfacesPage() {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">Surfaces &amp; Finishes</span>
          <h1>Surfaces</h1>
          <p className="lead">
            Seamless, hand-applied mineral finishes — the final, tactile layer
            that gives a space its character and calm. Explore the finishes,
            then see how we bring them to life.
          </p>
        </div>
      </header>

      {/* The finishes — clickable options */}
      <section className="capabilities" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="capabilities__head">
            <span className="eyebrow">The Finishes</span>
            <h2>A finish for every surface.</h2>
          </div>
          <BuildTypes types={finishes} />
        </div>
      </section>

      {/* The Surfaces Journey */}
      <section className="capabilities" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="capabilities__head">
            <span className="eyebrow">How We Work</span>
            <h2>The Surfaces Journey.</h2>
          </div>
          <div className="journey">
            {journey.map((s) => (
              <div className="journey__step" key={s.n}>
                <div className="journey__media">
                  <Image src={s.img} alt={s.alt} width={1200} height={900} />
                </div>
                <div>
                  <span className="journey__num">{s.n} /</span>
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Microcement studio callout */}
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
