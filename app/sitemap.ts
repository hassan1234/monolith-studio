import type { MetadataRoute } from "next";

const BASE = "https://www.monolithstudio.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
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
  return routes.map((r) => ({
    url: `${BASE}${r}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
