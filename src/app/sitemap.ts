import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";
import { absoluteUrl, assertUniqueSeoRoutes, projectSeoRoute, staticSeoRoutes } from "@/data/seo";
import { getEngineeringNotes } from "@/data/notes";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = caseStudies.map((study) => projectSeoRoute(study.title, study.summary, study.slug));
  const noteRoutes = getEngineeringNotes().map((note) => ({ path: `/notes/${note.slug}`, title: `${note.title} | Weston Graham`, description: note.description, changeFrequency: "yearly" as const, priority: 0.7 }));
  const routes = [...staticSeoRoutes, ...projectRoutes, ...noteRoutes];
  assertUniqueSeoRoutes(routes);
  return routes.map(({ path, changeFrequency, priority }) => ({ url: absoluteUrl(path), changeFrequency, priority }));
}
