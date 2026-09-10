export type PaletteColor = {
  /** Shown under the swatch. */
  name: string;
  /** Swatch fill — approximates the finish so the button reads before the photo loads. */
  hex: string;
  /** Close-up of a plain wall in this color and finish. */
  image: string;
};

export type Service = {
  slug: string;
  discipline: "design" | "build" | "surfaces";
  parentHref: string;
  parentLabel: string;
  title: string;
  lead: string;
  body: string[];
  included: string[];
  images: [string, string];
  /** Surfaces only: real color options available in this finish. */
  palette?: PaletteColor[];
  microcementStudio?: boolean;
};

export const services: Service[] = [
  // ── Design ──────────────────────────────────────────────
  {
    slug: "interior-design", discipline: "design", parentHref: "/design", parentLabel: "Design",
    title: "Interior Design",
    lead: "Considered, modern interiors designed around how you live — every room resolved from layout to the last styling detail.",
    body: [
      "We design complete interiors — kitchens, living spaces, bedrooms, bathrooms and everything between — balancing proportion, materials and light into rooms that feel effortless to be in.",
      "From first concept and mood boards to detailed, buildable drawings, every decision is made with the finished feeling in mind, not just the plan.",
    ],
    included: ["Full room and whole-home schemes", "Material, color and lighting design", "Custom millwork and furniture layouts", "Detailed drawings ready to build"],
    images: ["/images/design-living-modern.jpg", "/images/style-japandi-interior.jpg"],
  },
  {
    slug: "exterior-design", discipline: "design", parentHref: "/design", parentLabel: "Design",
    title: "Exterior Design",
    lead: "The spaces outside your walls, designed with the same care as within — patios, courtyards, gardens and facades.",
    body: [
      "We shape outdoor rooms and building exteriors that feel like a natural extension of the home: warm materials, considered planting and a seamless flow from inside to out.",
      "Whether it is a backyard retreat or the face your home shows the street, we design it to belong.",
    ],
    included: ["Patios, courtyards and outdoor living", "Landscaping and planting concepts", "Facade and cladding design", "Outdoor lighting and materials"],
    images: ["/images/exterior-1.jpg", "/images/exterior-2.jpg"],
  },
  {
    slug: "space-planning", discipline: "design", parentHref: "/design", parentLabel: "Design",
    title: "Space Planning",
    lead: "The invisible work that makes a home feel effortless — flow, proportion and function resolved before anything is built.",
    body: [
      "We map how you move through a space and optimize every square foot for the way you actually live, testing structural possibilities before committing a line to paper.",
      "Good planning is the difference between a room that works and one you quietly fight with every day.",
    ],
    included: ["Layout and circulation studies", "Structural and functional feasibility", "Furniture and fixture planning", "Scaled floor plans and elevations"],
    images: ["/images/journey-plan.jpg", "/images/journey-moodboard.jpg"],
  },
  {
    slug: "3d-visualization", discipline: "design", parentHref: "/design", parentLabel: "Design",
    title: "3D Visualization",
    lead: "See your exact space before it exists — photorealistic renderings that turn a plan into something you can feel.",
    body: [
      "We create realistic 3D renderings of your design so you can walk through material, light and layout decisions with total confidence, long before the build begins.",
      "Alongside the visuals we finalize exact technical specifications for a flawless handoff to construction.",
    ],
    included: ["Photorealistic 3D renderings", "Material and lighting studies", "Design sign-off before build", "Technical specifications and schedules"],
    images: ["/images/journey-render.jpg", "/images/journey-plan.jpg"],
  },

  // ── Build ───────────────────────────────────────────────
  {
    slug: "kitchen-remodel", discipline: "build", parentHref: "/build", parentLabel: "Build",
    title: "Kitchen Remodel",
    lead: "The whole kitchen rebuilt around how you cook — new layout, cabinetry, countertops, appliances and utilities.",
    body: [
      "We strip out the old and build the new: a kitchen planned for the way you actually use it, then constructed and finished to last.",
      "One team handles design through to the final coat, so the result matches the drawing exactly.",
    ],
    included: ["New layouts and cabinetry", "Countertops, backsplashes and tiling", "Appliance and utility installation", "Lighting and final finishes"],
    images: ["/images/buildtype-kitchen-1.jpg", "/images/buildtype-kitchen-2.jpg"],
  },
  {
    slug: "bathroom-remodel", discipline: "build", parentHref: "/build", parentLabel: "Build",
    title: "Bathroom Remodel",
    lead: "A full re-do from the studs out — new layout, waterproofing, tiling, vanities, showers and fixtures.",
    body: [
      "We rebuild bathrooms properly: correct waterproofing, precise tiling and custom millwork, so your new bathroom stays as good as the day it was finished.",
      "From a compact ensuite to a spa-like main bathroom, every detail is resolved.",
    ],
    included: ["New layouts and waterproofing", "Tiling, vanities and fixtures", "Walk-in showers and tubs", "Heating, lighting and ventilation"],
    images: ["/images/buildtype-bathroom-1.jpg", "/images/buildtype-bathroom-2.jpg"],
  },
  {
    slug: "basement-renovation", discipline: "build", parentHref: "/build", parentLabel: "Build",
    title: "Basement Renovation",
    lead: "Unused space turned into a proper room — a living room, media room, gym or guest suite, fully finished.",
    body: [
      "We transform basements into warm, usable rooms — handling insulation, lighting, millwork and finishes so the space feels like a natural part of the home, not an afterthought.",
      "Damp, low ceilings and awkward services are all part of the brief.",
    ],
    included: ["Living rooms, media rooms and gyms", "Guest suites and home offices", "Insulation, lighting, plumbing and electrical", "Built-in millwork and finishes"],
    images: ["/images/buildtype-basement-1.jpg", "/images/buildtype-basement-2.jpg"],
  },
  {
    slug: "living-spaces", discipline: "build", parentHref: "/build", parentLabel: "Build",
    title: "Living Spaces",
    lead: "Reconfigured layouts, built-in millwork, fireplaces and feature walls that change how a room lives.",
    body: [
      "We rework living and dining spaces — opening up plans, adding built-ins and feature walls, and rebuilding the everyday rooms around how you gather.",
      "Structural changes and finishing details, all under one team.",
    ],
    included: ["Open-plan reconfigurations", "Built-in shelving and media walls", "Fireplaces and feature walls", "Flooring, lighting and finishes"],
    images: ["/images/buildtype-living-1.jpg", "/images/buildtype-living-2.jpg"],
  },
  {
    slug: "whole-home", discipline: "build", parentHref: "/build", parentLabel: "Build",
    title: "Whole-Home Renovation",
    lead: "Larger projects taken on end to end — from opening up plans to the final coat of paint.",
    body: [
      "When it is the whole house, one coherent team keeps every room, service and finish pulling in the same direction — no gaps between trades, no lost intent.",
      "We manage the schedule from demolition to final walkthrough.",
    ],
    included: ["Full-home design and build", "Structural and layout changes", "All rooms, services and finishes", "End-to-end project management"],
    images: ["/images/build-modern-kitchen.jpg", "/images/buildtype-living-1.jpg"],
  },

  // ── Surfaces ────────────────────────────────────────────
  {
    slug: "microcement", discipline: "surfaces", parentHref: "/surfaces", parentLabel: "Surfaces",
    title: "Microcement",
    lead: "Seamless, durable mineral surfaces poured over floors, walls and millwork — jointless and quietly tactile.",
    body: [
      "A thin cementitious coat applied by hand over almost any substrate, microcement turns floors, walls and even furniture into continuous, grout-free planes.",
      "Waterproof and durable, it suits everything from wet rooms to high-traffic floors — and it has its own dedicated studio.",
    ],
    included: ["Floors, walls and wet rooms", "Seamless, jointless surfaces", "A range of warm neutral tones", "Sealed and protected for daily life"],
    images: ["/images/fin-microcement-1.jpg", "/images/fin-microcement-2.jpg"],
    palette: [
      { name: "Pearl Grey", hex: "#BFBEBF", image: "/images/palette/microcement-pearl-grey.jpg" },
      { name: "Bone", hex: "#CCC6BB", image: "/images/palette/microcement-bone.jpg" },
      { name: "Sand", hex: "#C6B29A", image: "/images/palette/microcement-sand.jpg" },
      { name: "Graphite", hex: "#565556", image: "/images/palette/microcement-graphite.jpg" },
    ],
    microcementStudio: true,
  },
  {
    slug: "limewash", discipline: "surfaces", parentHref: "/surfaces", parentLabel: "Surfaces",
    title: "Limewash",
    lead: "A breathable mineral wash with cloudy depth and gentle movement — matte, chalky and full of character.",
    body: [
      "Brushed on in thin layers, limewash dries to a soft, chalky matte with cloudy tonal shifts that flat paint can never reach.",
      "Breathable and natural, it only mellows with age.",
    ],
    included: ["Walls and feature surfaces", "Soft, cloudy matte finish", "Warm neutral and tinted tones", "Breathable, natural mineral paint"],
    images: ["/images/fin-limewash-1.jpg", "/images/fin-limewash-2.jpg"],
    palette: [
      { name: "Chalk White", hex: "#DDDDDD", image: "/images/palette/limewash-chalk-white.jpg" },
      { name: "Oatmeal", hex: "#BEB5A7", image: "/images/palette/limewash-oatmeal.jpg" },
      { name: "Clay Rose", hex: "#B37567", image: "/images/palette/limewash-clay-rose.jpg" },
      { name: "Sage", hex: "#929785", image: "/images/palette/limewash-sage.jpg" },
    ],
  },
  {
    slug: "tadelakt", discipline: "surfaces", parentHref: "/surfaces", parentLabel: "Surfaces",
    title: "Tadelakt",
    lead: "A traditional polished lime finish, naturally waterproof and seamless — warm, tactile and made for wet rooms.",
    body: [
      "Burnished and sealed by hand, tadelakt is a centuries-old lime finish that is naturally waterproof and completely seamless.",
      "Warm and organic, it is beautifully suited to showers, wet rooms and basins where tile would normally go.",
    ],
    included: ["Showers and wet rooms", "Seamless, waterproof surface", "Warm earthy tones", "Subtle hand-polished sheen"],
    images: ["/images/fin-tadelakt-1.jpg", "/images/fin-tadelakt-2.jpg"],
    palette: [
      { name: "Natural Ivory", hex: "#DFDAD1", image: "/images/palette/tadelakt-natural-ivory.jpg" },
      { name: "Ochre", hex: "#CF9636", image: "/images/palette/tadelakt-ochre.jpg" },
      { name: "Terracotta Rose", hex: "#C58D78", image: "/images/palette/tadelakt-terracotta-rose.jpg" },
      { name: "Charcoal", hex: "#58585A", image: "/images/palette/tadelakt-charcoal.jpg" },
    ],
  },
  {
    slug: "lime-plaster", discipline: "surfaces", parentHref: "/surfaces", parentLabel: "Surfaces",
    title: "Lime Plaster",
    lead: "Hand-applied, breathable lime with a soft matte texture and gentle mineral movement — timeless and natural.",
    body: [
      "A traditional, breathable finish with a soft matte texture and gentle movement, lime plaster regulates humidity and ages gracefully.",
      "It brings warmth and depth to walls without a hint of plastic sheen.",
    ],
    included: ["Interior walls and ceilings", "Soft matte mineral texture", "Breathable and humidity-regulating", "Warm, timeless tones"],
    images: ["/images/fin-lime-1.jpg", "/images/fin-lime-2.jpg"],
    palette: [
      { name: "Marble White", hex: "#D5D3CF", image: "/images/palette/lime-plaster-marble-white.jpg" },
      { name: "Sand", hex: "#C4B296", image: "/images/palette/lime-plaster-sand.jpg" },
      { name: "Greige", hex: "#B1ACA3", image: "/images/palette/lime-plaster-greige.jpg" },
      { name: "Umber", hex: "#573E30", image: "/images/palette/lime-plaster-umber.jpg" },
    ],
  },
  {
    slug: "vanishing-plaster", discipline: "surfaces", parentHref: "/surfaces", parentLabel: "Surfaces",
    title: "Vanishing Plaster",
    lead: "A polished plaster finish worked to a smooth, near-seamless surface with a subtle sheen and stone-like depth.",
    body: [
      "Burnished back to a smooth, near-seamless surface, vanishing plaster carries a subtle sheen and marble-like depth — the light seems to sink into the wall.",
      "Refined and luxurious, it is the most elegant of the mineral finishes.",
    ],
    included: ["Feature walls and refined spaces", "Smooth, polished finish", "Subtle sheen and depth", "Marble-like tonal movement"],
    images: ["/images/fin-vanishing-1.jpg", "/images/fin-vanishing-2.jpg"],
    palette: [
      { name: "Chalk", hex: "#EAEAEA", image: "/images/palette/vanishing-plaster-chalk.jpg" },
      { name: "Bone", hex: "#E3DACE", image: "/images/palette/vanishing-plaster-bone.jpg" },
      { name: "Mushroom", hex: "#9B8D85", image: "/images/palette/vanishing-plaster-mushroom.jpg" },
      { name: "Stone Grey", hex: "#A09D9D", image: "/images/palette/vanishing-plaster-stone-grey.jpg" },
    ],
  },
  {
    slug: "palette", discipline: "surfaces", parentHref: "/surfaces", parentLabel: "Surfaces",
    title: "Pigment & Palette",
    lead: "Color worked into the material itself — from soft neutrals to deep, saturated tones — so a finish keeps its depth and never simply wears off.",
    body: [
      "Every finish can be tinted with mineral pigment, so color lives in the material rather than sitting on top of it.",
      "We build custom palettes with you, from the softest warm neutrals to rich, saturated tones.",
    ],
    included: ["Custom color matching", "Pigment through the material", "Soft neutrals to deep tones", "Color that ages gracefully"],
    images: ["/images/fin-pigment-1.jpg", "/images/fin-pigment-2.jpg"],
    palette: [
      { name: "Ochre", hex: "#D1962C", image: "/images/palette/palette-ochre.jpg" },
      { name: "Terracotta", hex: "#CA7954", image: "/images/palette/palette-terracotta.jpg" },
      { name: "Olive", hex: "#787352", image: "/images/palette/palette-olive.jpg" },
      { name: "Indigo", hex: "#3D5177", image: "/images/palette/palette-indigo.jpg" },
    ],
  },
];

export function servicesByDiscipline(discipline: Service["discipline"]) {
  return services.filter((s) => s.discipline === discipline);
}

export function getService(discipline: Service["discipline"], slug: string) {
  return services.find((s) => s.discipline === discipline && s.slug === slug);
}
