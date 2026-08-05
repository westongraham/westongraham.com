import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";
import { absoluteUrl, assertUniqueSeoRoutes, projectSeoRoute, staticSeoRoutes } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = caseStudies.map((study) => projectSeoRoute(study.title, study.summary, study.slug));
  const routes = [...staticSeoRoutes, ...projectRoutes];
  assertUniqueSeoRoutes(routes);
  return routes.map(({ path, changeFrequency, priority }) => ({ url: absoluteUrl(path), changeFrequency, priority }));
}
