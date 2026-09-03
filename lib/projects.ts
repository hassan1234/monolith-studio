// PLACEHOLDER PROJECTS — replace with real projects, photos and details.
// Slugs are type-based and permanent (never rename; redirect instead).

export type Project = {
  slug: string;
  title: string;
  category: "Whole Home" | "Kitchen" | "Bathroom" | "Basement" | "Surfaces";
  disciplines: string[];
  year: string;
  summary: string;
  hero: string;
  gallery: string[];
  body: string[];
  scope: string[];
};

export const projects: Project[] = [
  {
    slug: "townhouse-renovation",
    title: "Townhouse Renovation",
    category: "Whole Home",
    disciplines: ["Design", "Build", "Surfaces"],
    year: "2025",
    summary: "A tired townhouse reimagined as one warm, connected home — designed, built and finished by a single team.",
    hero: "/images/build-modern-kitchen.jpg",
    gallery: ["/images/buildtype-living-1.jpg", "/images/design-living-modern.jpg", "/images/buildtype-kitchen-2.jpg"],
    body: [
      "We reworked the ground floor into an open, sociable plan, added bespoke joinery throughout, and carried a single warm material palette from the kitchen to the living spaces.",
      "Because the same team designed and built the project, the finished home matches the drawings exactly — down to the last reveal.",
    ],
    scope: ["Full-home design and layout", "Structural reconfiguration", "Bespoke kitchen and joinery", "Seamless mineral surfaces"],
  },
  {
    slug: "kitchen-remodel",
    title: "Kitchen Remodel",
    category: "Kitchen",
    disciplines: ["Design", "Build"],
    year: "2025",
    summary: "A dated galley kitchen rebuilt into a bright, stone-and-oak room built around how the owners cook.",
    hero: "/images/buildtype-kitchen-1.jpg",
    gallery: ["/images/buildtype-kitchen-2.jpg", "/images/journey-render.jpg"],
    body: [
      "New cabinetry, a natural stone island and reworked services turned a cramped galley into a generous, hard-working kitchen.",
      "We visualised the space in 3D before a single cabinet was ordered, so every decision was signed off with confidence.",
    ],
    scope: ["New layout and cabinetry", "Stone worktops and island", "Appliances and services", "Lighting and finishes"],
  },
  {
    slug: "bathroom-remodel",
    title: "Bathroom Remodel",
    category: "Bathroom",
    disciplines: ["Build", "Surfaces"],
    year: "2024",
    summary: "A full bathroom re-do from the studs out, finished in warm tadelakt for a seamless, spa-like feel.",
    hero: "/images/buildtype-bathroom-1.jpg",
    gallery: ["/images/buildtype-bathroom-2.jpg", "/images/fin-tadelakt-1.jpg"],
    body: [
      "We rebuilt the room with correct waterproofing, a walk-in shower and a floating oak vanity, then finished the walls in hand-polished tadelakt.",
      "The result is warm, tactile and completely jointless.",
    ],
    scope: ["Strip-out and waterproofing", "Walk-in shower and vanity", "Tadelakt wall finish", "Brass fixtures and lighting"],
  },
  {
    slug: "basement-renovation",
    title: "Basement Renovation",
    category: "Basement",
    disciplines: ["Design", "Build"],
    year: "2024",
    summary: "An unused basement turned into a warm lounge and guest suite, fully insulated and finished.",
    hero: "/images/buildtype-basement-1.jpg",
    gallery: ["/images/buildtype-basement-2.jpg"],
    body: [
      "We tackled damp, low ceilings and awkward services to create a genuinely usable room — a cosy lounge with a wet bar and a guest space.",
      "Warm lighting and engineered oak flooring make it feel like a natural part of the home.",
    ],
    scope: ["Insulation and services", "Lounge and guest suite", "Built-in joinery and wet bar", "Lighting and flooring"],
  },
  {
    slug: "microcement-surfaces",
    title: "Microcement Surfaces",
    category: "Surfaces",
    disciplines: ["Surfaces"],
    year: "2024",
    summary: "Seamless microcement floors and walls unifying a renovated open-plan level.",
    hero: "/images/fin-microcement-1.jpg",
    gallery: ["/images/surfaces-1.jpg", "/images/fin-limewash-1.jpg"],
    body: [
      "We applied continuous microcement across the floors and key walls, tying the whole level together in one warm, jointless plane.",
      "Sealed for daily life, it is as hard-wearing as it is calm to look at.",
    ],
    scope: ["Microcement floors and walls", "Warm neutral palette", "Sealed and protected", "Feature limewash walls"],
  },
];

export const projectCategories = ["All", "Whole Home", "Kitchen", "Bathroom", "Basement", "Surfaces"] as const;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
