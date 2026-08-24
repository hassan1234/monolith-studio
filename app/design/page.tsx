import type { Metadata } from "next";
import Link from "next/link";
import Carousel, { type Slide } from "@/components/Carousel";

export const metadata: Metadata = {
  title: "Design — Monolith",
  description:
    "Modern interior and exterior design at Monolith — kitchens, living rooms, bedrooms, bathrooms, dining and outdoor spaces, designed around how you live.",
};

const slides: Slide[] = [
  { src: "/images/design-kitchen-modern.png", label: "Kitchens" },
  { src: "/images/design-living-modern.png", label: "Living Rooms" },
  { src: "/images/design-lounge.png", label: "Lounge" },
  { src: "/images/design-bedroom-modern.png", label: "Bedrooms" },
  { src: "/images/design-bathroom-modern.png", label: "Bathrooms" },
  { src: "/images/design-ensuite.png", label: "En-suite" },
  { src: "/images/design-dining-modern.png", label: "Dining" },
  { src: "/images/design-outdoor-modern.png", label: "Outdoor" },
];

const scope = [
  { h: "Kitchens", p: "Considered layouts, cabinetry and stone — the hardest-working room, designed to feel effortless." },
  { h: "Living & Dining", p: "Open, sociable spaces balanced with warmth, proportion and layered light." },
  { h: "Bedrooms", p: "Calm, minimal retreats tuned to how you actually rest and unwind." },
  { h: "Bathrooms", p: "Spa-like rooms where stone, joinery and fixtures resolve into something serene." },
  { h: "Whole-Home Interiors", p: "One coherent scheme that flows from room to room across the entire home." },
  { h: "Outdoor Spaces", p: "Terraces, courtyards and backyards designed with the same care as the rooms inside." },
];

const process = [
  { h: "Consult", p: "We start with how you live — and what the space needs to do for you." },
  { h: "Concept", p: "A clear direction: references, palette and materials you can see and feel early." },
  { h: "Design", p: "Layouts, elevations, lighting and finishes, resolved to the millimetre." },
  { h: "Style", p: "Furniture and the final layers, sourced and styled so it feels complete." },
];

export default function DesignPage() {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">Interior &amp; Exterior Design</span>
          <h1>Design</h1>
          <p className="lead">
            Modern, considered spaces designed around how you live — kitchens,
            living rooms, bedrooms, bathrooms and everything in between, inside
            and out.
          </p>
        </div>
      </header>

      <section className="wrap">
        <Carousel slides={slides} />
      </section>

      <section className="capabilities">
        <div className="wrap">
          <div className="capabilities__head">
            <span className="eyebrow">What we design</span>
            <h2>Every space in the home — and beyond it.</h2>
          </div>
          <div className="dgrid">
            {scope.map((c) => (
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
            <span className="eyebrow">How we work</span>
            <h2>A calm, considered process.</h2>
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
          <h2>Design that feels like it was always meant to be yours.</h2>
          <p>
            We shape modern spaces that are warm, functional and quietly
            beautiful — tailored to you rather than to a trend, and built to
            live with for years.
          </p>
        </div>
      </section>

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
