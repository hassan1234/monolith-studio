import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StyleGrid, { type StyleItem } from "@/components/StyleGrid";

export const metadata: Metadata = {
  title: "Design — Monolith",
  description:
    "Interior design at Monolith — explore our styles (minimalist, Scandinavian, modern, Japandi) and see our design journey from space planning to 3D renderings.",
};

const styleItems: StyleItem[] = [
  { src: "/images/style-min-1.jpg", style: "Minimalist", alt: "Minimalist living room" },
  { src: "/images/style-scandi-1.jpg", style: "Scandinavian", alt: "Scandinavian living room" },
  { src: "/images/style-modern-1.jpg", style: "Modern", alt: "Modern living room" },
  { src: "/images/style-japandi-1.jpg", style: "Japandi", alt: "Japandi living room" },
  { src: "/images/style-min-2.jpg", style: "Minimalist", alt: "Minimalist bedroom" },
  { src: "/images/style-scandi-2.jpg", style: "Scandinavian", alt: "Scandinavian kitchen" },
  { src: "/images/style-modern-2.jpg", style: "Modern", alt: "Modern kitchen" },
  { src: "/images/style-japandi-2.jpg", style: "Japandi", alt: "Japandi bedroom" },
  { src: "/images/style-min-3.jpg", style: "Minimalist", alt: "Minimalist dining nook" },
  { src: "/images/style-scandi-3.jpg", style: "Scandinavian", alt: "Scandinavian bedroom" },
  { src: "/images/style-modern-3.jpg", style: "Modern", alt: "Modern dining room" },
  { src: "/images/style-japandi-3.jpg", style: "Japandi", alt: "Japandi dining space" },
];

const journey = [
  {
    n: "01",
    h: "Space Planning & Layout",
    img: "/images/journey-plan.jpg",
    alt: "Architectural floor plan and layout",
    p: "We map out your spatial flow, structural possibilities, and functional layouts. Every square foot is optimized for your lifestyle before construction begins.",
  },
  {
    n: "02",
    h: "Curation & Mood Boards",
    img: "/images/journey-materials.jpg",
    alt: "Flat lay of fabric, paint and surface samples",
    p: "We bring your aesthetic to life. Using digital mood boards and physical material trays, we seamlessly pair interior styling with the perfect architectural finishes.",
  },
  {
    n: "03",
    h: "3D Renderings & Specifications",
    img: "/images/journey-render.jpg",
    alt: "Photorealistic 3D interior rendering",
    p: "See your exact space before it exists. We create realistic 3D renderings and finalize exact technical specifications, ensuring a flawless handover to execution.",
  },
];

export default function DesignPage() {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">Interior &amp; Exterior Design</span>
          <h1>Design</h1>
          <p className="lead">
            We design the spaces you live in — inside and out, in the style that
            suits you. Explore our range, then see how we bring it to life.
          </p>
        </div>
      </header>

      {/* Explore Our Styles */}
      <section className="capabilities" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="capabilities__head">
            <span className="eyebrow">Explore Our Styles</span>
            <h2>Find the language that fits your home.</h2>
          </div>
          <StyleGrid
            items={styleItems}
            styles={["Minimalist", "Scandinavian", "Modern", "Japandi"]}
          />
        </div>
      </section>

      {/* The Design Journey */}
      <section className="capabilities" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="capabilities__head">
            <span className="eyebrow">How We Work</span>
            <h2>The Design Journey.</h2>
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

      {/* CTA */}
      <section className="wrap">
        <div className="callout">
          <div>
            <span className="eyebrow">Start your project</span>
            <h2>Let&rsquo;s design your space.</h2>
            <p>
              Tell us about the room — or the whole home — you want to
              transform, and we will take it from there.
            </p>
          </div>
          <div>
            <Link className="btn" href="/contact">
              Get in touch ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
