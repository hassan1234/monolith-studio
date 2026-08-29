import type { Metadata } from "next";
import Link from "next/link";
import Carousel, { type Slide } from "@/components/Carousel";

export const metadata: Metadata = {
  title: "Build — Monolith",
  description:
    "Interior remodels and full home renovations at Monolith — kitchens, bathrooms, living spaces, basements and whole-home builds, taken from strip-out to finish.",
};

const slides: Slide[] = [
  { src: "/images/build-modern-kitchen.jpg", label: "Kitchens" },
  { src: "/images/build-modern-bathroom.jpg", label: "Bathrooms" },
  { src: "/images/build-modern-living.jpg", label: "Living Spaces" },
  { src: "/images/build-modern-basement.jpg", label: "Basements" },
  { src: "/images/build-modern-wholehome.jpg", label: "Whole Home" },
];

const scope = [
  { h: "Kitchen Remodels", p: "New layouts, cabinetry, worktops, appliances and services — the whole kitchen rebuilt around how you cook." },
  { h: "Bathroom Remodels", p: "A full re-do: new layout, waterproofing, tiling, vanities, showers and fixtures, upgraded from the studs out." },
  { h: "Living Spaces", p: "Reconfigured layouts, built-in joinery, fireplaces and feature walls that change how a room lives." },
  { h: "Basements", p: "Unused space turned into a proper room — lounge, media room, gym or guest suite, fully finished." },
  { h: "Whole-Home Renovations", p: "Larger projects taken on end to end, from opening up plans to the final coat of paint." },
  { h: "Upgrades & Finishes", p: "Flooring, lighting, joinery and fixtures — the upgrades that lift a home without a full rebuild." },
];

const process = [
  { h: "Survey", p: "We assess the space, the structure and what is realistic — then scope the work honestly." },
  { h: "Strip-out", p: "Careful removal of the old, with the site kept clean, protected and controlled throughout." },
  { h: "Build", p: "Structure, services, joinery and tiling built to spec by trades who care about tolerances." },
  { h: "Finish", p: "Snagging, final finishes and a clean handover — a room that is ready to live in." },
];

export default function BuildPage() {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">Interior Remodels &amp; Builds</span>
          <h1>Build</h1>
          <p className="lead">
            We remodel the inside of homes — a bathroom fully redone, a kitchen
            rebuilt, a whole floor reconfigured. New layouts, new fixtures, new
            finishes, taken from strip-out to the final coat.
          </p>
        </div>
      </header>

      <section className="wrap">
        <Carousel slides={slides} />
      </section>

      <section className="capabilities">
        <div className="wrap">
          <div className="capabilities__head">
            <span className="eyebrow">What we build</span>
            <h2>Full remodels, room by room or whole-home.</h2>
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
            <h2>A clean, controlled build.</h2>
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
          <h2>One team, from the first wall to the last finish.</h2>
          <p>
            Because the same team designs and builds, there are fewer hand-offs,
            tighter tolerances and no gap between the plan and the result — just
            a space that is properly, honestly built to last.
          </p>
        </div>
      </section>

      <section className="wrap">
        <div className="callout">
          <div>
            <span className="eyebrow">Start your project</span>
            <h2>Ready to remodel?</h2>
            <p>
              Tell us what you want to transform — a single room or the whole
              home — and we will scope it with you.
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
