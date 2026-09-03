import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";

const BASE = "https://www.monolithstudio.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/work",
    "/work/in-progress",
    "/design",
    "/build",
    "/surfaces",
    "/studio",
    "/areas/washington-dc",
    "/contact",
    "/contact/start-a-project",
    "/privacy",
    "/terms",
  ];
  const serviceRoutes = services.map((s) => `${s.parentHref}/${s.slug}`);
  const projectRoutes = projects.map((p) => `/work/${p.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes].map((r) => ({
    url: `${BASE}${r}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.7,
  }));
}
