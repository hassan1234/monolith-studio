import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

const BASE = "https://www.monolithstudio.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/design",
    "/build",
    "/surfaces",
    "/studio",
    "/studio/process",
    "/contact",
    "/privacy",
    "/terms",
  ];
  const serviceRoutes = services.map((s) => `${s.parentHref}/${s.slug}`);

  return [...staticRoutes, ...serviceRoutes].map((r) => ({
    url: `${BASE}${r}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.7,
  }));
}
