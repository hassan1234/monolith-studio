import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Build — Monolith",
  description:
    "Interior remodels and full home renovations at Monolith — kitchens, bathrooms, living spaces, basements and whole-home builds, taken from survey to finish.",
};

const scope = [
  { h: "Kitchen Remodels", p: "New layouts, cabinetry, worktops, appliances and services — the whole kitchen rebuilt around how you cook." },
  { h: "Bathroom Remodels", p: "A full re-do: new layout, waterproofing, tiling, vanities, showers and fixtures, upgraded from the studs out." },
  { h: "Living Spaces", p: "Reconfigured layouts, built-in joinery, fireplaces and feature walls that change how a room lives." },
  { h: "Basements", p: "Unused space turned into a proper room — lounge, media room, gym or guest suite, fully finished." },
  { h: "Whole-Home Renovations", p: "Larger projects taken on end to end, from opening up plans to the final coat of paint." },
  { h: "Upgrades & Finishes", p: "Flooring, lighting, joinery and fixtures — the upgrades that lift a home without a full rebuild." },
];

const journey = [
  {
    n: "01",
    h: "Survey",
    img: "/images/build-journey-survey.jpg",
    alt: "Surveying and assessing a space before a renovation",
    p: "We assess the space, the structure and what is realistic — then scope the work honestly, so there are no surprises later.",
  },
  {
    n: "02",
    h: "Strip-out",
    img: "/images/build-journey-stripout.jpg",
    alt: "A room stripped back during renovation",
    p: "Careful removal of the old, with the site kept clean, protected and controlled throughout — ready for a fresh start.",
  },
  {
    n: "03",
    h: "Build",
    img: "/images/build-journey-build.jpg",
    alt: "New structure and framing during construction",
    p: "Structure, services, joinery and tiling built to spec by trades who care about tolerances and get the details right.",
  },
  {
    n: "04",
    h: "Finish",
    img: "/images/build-journey-finish.jpg",
    alt: "A finished, move-in-ready remodeled room",
    p: "Snagging, final finishes and a clean handover — a room that is fully resolved and ready to live in.",
  },
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
            finishes, taken from survey to the final coat.
          </p>
        </div>
      </header>

      {/* What we build */}
      <section className="capabilities" style={{ paddingTop: 0 }}>
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

      {/* The Build Journey */}
      <section className="capabilities" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="capabilities__head">
            <span className="eyebrow">How We Work</span>
            <h2>The Build Journey.</h2>
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
