export type Faq = { q: string; a: string };
export type FaqGroup = { title: string; items: Faq[] };

/**
 * Single source of truth for FAQ content.
 * Used in full on /faq (with FAQPage structured data) and as a short
 * selection on /studio, so the two can never drift apart.
 */
export const faqGroups: FaqGroup[] = [
  {
    title: "Working with Monolith",
    items: [
      {
        q: "Do you handle design and construction, or just one?",
        a: "Both. Monolith is a single team across design, build and surfaces, so your project runs through one point of contact from first sketch to final finish.",
      },
      {
        q: "Can I hire you for just one discipline?",
        a: "Yes. Plenty of clients come to us for a single kitchen remodel, a design scheme, or a specialty surface finish. You are never obliged to take the whole package.",
      },
      {
        q: "Do you take on single rooms, or only whole homes?",
        a: "Both. We work on everything from one bathroom to a full-home renovation or a custom home built from the ground up. The scope changes; the way we run the project does not.",
      },
      {
        q: "What areas do you work in?",
        a: "We are based in Washington, DC and work across the city and the surrounding area. If you are not sure whether your address is a fit, get in touch and ask.",
      },
    ],
  },
  {
    title: "Cost and timelines",
    items: [
      {
        q: "How much does a project cost?",
        a: "Every project is scoped individually — it depends on the rooms, the structural work and the finishes involved. After an initial conversation we provide a clear, itemized proposal before any work begins.",
      },
      {
        q: "When do I get a price?",
        a: "After we have talked through the space and what you want from it, and visited if that helps. You get an itemized proposal covering scope, materials and schedule before any work starts, so there are no surprises later.",
      },
      {
        q: "How long does a typical project take?",
        a: "A single-room remodel is usually a matter of weeks; a whole-home renovation runs months. We give you a realistic schedule up front and keep you updated as we go.",
      },
    ],
  },
  {
    title: "How a project runs",
    items: [
      {
        q: "What happens after I get in touch?",
        a: "We arrange a conversation about your space and goals, visit if helpful, and come back with a scope and proposal. From there it moves into our design and build work.",
      },
      {
        q: "Will I see the design before work starts?",
        a: "Yes. We work up layouts and material selections with you, and produce 3D renderings so you can walk through light, material and layout decisions long before anything is built.",
      },
      {
        q: "Who manages the project day to day?",
        a: "One point of contact, for the whole project. Because design, construction and finishing all sit under one roof, you are never passed between a designer, a contractor and a finisher.",
      },
      {
        q: "Do you work with my architect or designer?",
        a: "We can. If you already have drawings or a designer you like working with, we are happy to build to them — tell us what is already in place when you get in touch.",
      },
    ],
  },
  {
    title: "Surfaces and finishes",
    items: [
      {
        q: "What finishes do you offer?",
        a: "Hand-applied mineral finishes: microcement, limewash, tadelakt, lime plaster and vanishing plaster. Each one can be applied to walls, floors and millwork depending on the room.",
      },
      {
        q: "Can finishes be matched to a specific color?",
        a: "Yes. Every finish is tinted with mineral pigment, so the color sits in the material rather than on top of it. Each finish has its own palette, and we can work to a custom match.",
      },
      {
        q: "What is microcement, and do I need the separate studio?",
        a: "Microcement is a seamless, durable mineral finish. We apply it as part of our surfaces work, and our dedicated microcement studio has the full ranges and galleries if you want to go deeper.",
      },
    ],
  },
];

/** Flat list, in order — for structured data and short selections. */
export const allFaqs: Faq[] = faqGroups.flatMap((g) => g.items);
