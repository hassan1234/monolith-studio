import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Process — Monolith Studio",
  description:
    "The Monolith process, joined end to end — the design journey, the build journey and the surfaces journey, from first sketch to final finish.",
};

type Step = { n: string; h: string; img: string; alt: string; p: string };
type Journey = { kicker: string; title: string; steps: Step[] };

const journeys: Journey[] = [
  {
    kicker: "01 — Design",
    title: "The Design Journey.",
    steps: [
      { n: "01", h: "Space Planning & Layout", img: "/images/journey-plan.jpg", alt: "Floor plan", p: "We map out your spatial flow, structural possibilities and functional layouts. Every square foot is optimized for the way you live." },
      { n: "02", h: "Curation & Mood Boards", img: "/images/journey-moodboard.jpg", alt: "Mood board", p: "We bring your aesthetic to life with digital mood boards and physical material trays, pairing interior styling with the perfect architectural finishes." },
      { n: "03", h: "3D Renderings & Specifications", img: "/images/journey-render.jpg", alt: "3D rendering", p: "See your exact space before it exists. We create realistic 3D renderings and finalize technical specifications for a flawless handover to build." },
    ],
  },
  {
    kicker: "02 — Build",
    title: "The Build Journey.",
    steps: [
      { n: "01", h: "Survey", img: "/images/build-journey-survey.jpg", alt: "Survey", p: "We assess the space, the structure and what is realistic — then scope the work honestly, so there are no surprises later." },
      { n: "02", h: "Strip-out", img: "/images/build-journey-stripout.jpg", alt: "Strip-out", p: "Careful removal of the old, with the site kept clean, protected and controlled throughout — ready for a fresh start." },
      { n: "03", h: "Build", img: "/images/build-journey-build.jpg", alt: "Build", p: "Structure, services, joinery and tiling built to spec by trades who care about tolerances and get the details right." },
      { n: "04", h: "Finish", img: "/images/build-journey-finish.jpg", alt: "Finish", p: "Snagging, final finishes and a clean handover — a room that is fully resolved and ready to live in." },
    ],
  },
  {
    kicker: "03 — Surfaces",
    title: "The Surfaces Journey.",
    steps: [
      { n: "01", h: "Sample & Select", img: "/images/surface-journey-sample-v2.jpg", alt: "Samples", p: "We prepare finish samples in your space and light, so you can choose the exact material, tone and sheen with confidence." },
      { n: "02", h: "Prepare", img: "/images/surface-journey-prepare.jpg", alt: "Prepare", p: "Substrates are assessed, repaired and primed — the groundwork a flawless mineral finish depends on." },
      { n: "03", h: "Apply by Hand", img: "/images/surface-journey-apply.jpg", alt: "Apply", p: "Built up by hand in thin layers, worked and burnished to the exact texture and depth agreed." },
      { n: "04", h: "Seal & Protect", img: "/images/surface-journey-seal.jpg", alt: "Seal", p: "Protective mineral seals for wet and high-traffic areas, with simple guidance for a lifetime of care." },
    ],
  },
];

export default function ProcessPage() {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">Studio — Process</span>
          <h1>Our Process</h1>
          <p className="lead">
            Three disciplines, joined end to end. The same team carries your
            project through design, build and surfaces — one continuous path
            from first sketch to final finish.
          </p>
        </div>
      </header>

      {journeys.map((j, i) => (
        <section className="capabilities" style={i > 0 ? { paddingTop: 0 } : undefined} key={j.kicker}>
          <div className="wrap">
            <div className="capabilities__head">
              <span className="eyebrow">{j.kicker}</span>
              <h2>{j.title}</h2>
            </div>
            <div className="journey">
              {j.steps.map((s) => (
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
      ))}

      <section className="wrap">
        <div className="callout">
          <div>
            <span className="eyebrow">Start your project</span>
            <h2>Ready to begin?</h2>
            <p>Tell us about your space and we will walk you through every step.</p>
          </div>
          <div>
            <Link className="btn" href="/contact">Get in touch ↗</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
