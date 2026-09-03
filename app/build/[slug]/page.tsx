import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import { getService, servicesByDiscipline } from "@/lib/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicesByDiscipline("build").map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService("build", params.slug);
  if (!s) return {};
  return { title: `${s.title} — Monolith Ubuild`, description: s.lead };
}

export default function Page({ params }: { params: { slug: string } }) {
  const service = getService("build", params.slug);
  if (!service) notFound();
  const siblings = servicesByDiscipline("build").filter((s) => s.slug !== service.slug);
  return <ServiceDetail service={service} siblings={siblings} />;
}
