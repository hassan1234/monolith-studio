import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Build — Monolith",
  description: "Build at Monolith: structure, craft, programme and delivery.",
};

const caps = [
  { h: "Groundwork", p: "Walls, services and substrates prepared properly, so a new kitchen, bathroom or living space is built on solid, honest footings." },
  { h: "Craft", p: "Skilled trades who care about tolerances. Joinery, masonry and finishing carried out in-house." },
  { h: "Programme", p: "A single team means fewer hand-offs, tighter timelines and a site that stays clean and controlled." },
  { h: "Delivery", p: "We hand over spaces resolved to the last detail — snag-free and ready to live in." },
];

export default function BuildPage() {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <span className="eyebrow">Discipline — Build</span>
          <h1>Build</h1>
          <p className="lead">
            Design carried through with craft — kitchens, bathrooms, living
            spaces and full renovations. We construct what we draw, so nothing
            is lost between the page and the place.
          </p>
        </div>
      </header>

      <div className="wrap">
        <div className="feature-image">
          <Image src="/images/build-kitchen-v2.png" alt="Bespoke kitchen being fitted" width={1600} height={900} priority />
        </div>
      </div>

      <div className="wrap">
        <div className="splits">
          <div className="split">
            <div className="split__media">
              <Image src="/images/build-bathroom-v2.png" alt="Bathroom renovation in progress" width={1200} height={1500} />
            </div>
            <div>
              <span className="eyebrow split__eyebrow">In-House Craft</span>
              <h2>Built by the people who designed it.</h2>
              <p>
                Because design and construction share the same team, intent is
                never handed off or watered down. The people on site know
                exactly why every junction is drawn the way it is.
              </p>
              <p>
                Fewer hand-offs, tighter tolerances, and a build that stays true
                to the drawing.
              </p>
            </div>
          </div>

          <div className="split split--reverse">
            <div className="split__media">
              <Image src="/images/build-living-v2.png" alt="Built-in living room joinery being installed" width={1200} height={1500} />
            </div>
            <div>
              <span className="eyebrow split__eyebrow">Finish &amp; Delivery</span>
              <h2>Resolved to the last millimetre.</h2>
              <p>
                Bespoke joinery, tiling and seamless finishing all meet
                on site. We manage the programme end to end and hand over spaces
                that are clean, complete and ready to live in.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="capabilities">
        <div className="wrap">
          <div className="capabilities__head">
            <span className="eyebrow">What we do</span>
            <h2>From structure to a finished handover.</h2>
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
