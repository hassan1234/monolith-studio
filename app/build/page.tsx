import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BuildTypes, { type BuildType } from "@/components/BuildTypes";
import { servicesByDiscipline } from "@/lib/services";

export const metadata: Metadata = {
  title: "Build — Monolith",
  description:
    "Interior remodels and full home renovations at Monolith — kitchens, bathrooms, living spaces and basements, taken from survey to finish.",
};

const buildTypes: BuildType[] = [
  {
    name: "Kitchen Remodels",
    blurb: "New layouts, cabinetry, countertops, appliances and utilities — the whole kitchen rebuilt around how you cook.",
    images: ["/images/buildtype-kitchen-1.jpg", "/images/buildtype-kitchen-2.jpg"],
  },
  {
    name: "Bathroom Remodels",
    blurb: "A full re-do: new layout, waterproofing, tiling, vanities, showers and fixtures, upgraded from the studs out.",
    images: ["/images/buildtype-bathroom-1.jpg", "/images/buildtype-bathroom-2.jpg"],
  },
  {
    name: "Living Spaces",
    blurb: "Reconfigured layouts, built-in millwork, fireplaces and feature walls that change how a room lives.",
    images: ["/images/buildtype-living-1.jpg", "/images/buildtype-living-2.jpg"],
  },
  {
    name: "Basements",
    blurb: "Unused space turned into a proper room — living room, media room, gym or guest suite, fully finished.",
    images: ["/images/buildtype-basement-1.jpg", "/images/buildtype-basement-2.jpg"],
  },
];

const journey = [
  {
    n: "01",
    h: "Survey",
    img: "/images/build-journey-survey.jpg",
    alt: "Kitchen floor plan and layout survey",
    p: "We assess the space, the structure and what is realistic — then scope the work honestly, so there are no surprises later.",
  },
  {
    n: "02",
    h: "Demolition",
    img: "/images/build-journey-stripout.jpg",
    alt: "The old kitchen being stripped out",
    p: "Careful removal of the old, with the site kept clean, protected and controlled throughout — ready for a fresh start.",
  },
  {
    n: "03",
    h: "Build",
    img: "/images/build-journey-build.jpg",
    alt: "New cabinetry and structure going in",
    p: "Structure, plumbing and electrical, millwork and tiling built to spec by trades who care about tolerances and get the details right.",
  },
  {
    n: "04",
    h: "Finish",
    img: "/images/build-journey-finish.jpg",
    alt: "The finished, move-in-ready kitchen",
    p: "A final punch list, last finishes and a clean handoff — a room that is fully resolved and ready to live in.",
  },
];

export default function BuildPage() {
  return (
    <main>
      <header className="page-hero">
        <div
          className="page-hero__img"
          aria-hidden="true"
          style={{ "--hero-focus-mobile": "72% center" } as React.CSSProperties}
        >
          <Image src="/images/build-hero.jpg" alt="" fill priority sizes="100vw" />
        </div>
        <span className="page-hero__scrim" aria-hidden="true" />
        <div className="page-hero__inner">
          <span className="eyebrow">Interior Remodels &amp; Builds</span>
          <h1>Build</h1>
          <p className="page-hero__lead">
            We remodel the inside of homes — from a single bathroom to a whole
            floor reconfigured, taken from survey to the final coat.
          </p>
        </div>
      </header>

      {/* What we build — clickable types */}
      <section className="capabilities">
        <div className="wrap">
          <div className="capabilities__head">
            <span className="eyebrow">What we build</span>
            <h2>Full remodels, room by room.</h2>
          </div>
          <BuildTypes types={buildTypes} />
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

      {/* Explore — service sub-pages */}
      <section className="capabilities" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="capabilities__head">
            <span className="eyebrow">Explore in detail</span>
            <h2>Build services.</h2>
          </div>
          <div className="svc-more">
            {servicesByDiscipline("build").map((s) => (
              <Link key={s.slug} href={`${s.parentHref}/${s.slug}`} className="svc-more__item">
                <span>{s.title}</span>
                <span className="svc-more__arrow">↗</span>
              </Link>
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
