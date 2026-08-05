import type { Metadata } from "next";

export const SITE_URL = "https://westongraham.com";
export const SITE_NAME = "Weston Graham";

type SeoRoute = {
  path: string;
  title: string;
  description: string;
  changeFrequency: "monthly" | "yearly";
  priority: number;
};

export const staticSeoRoutes = [
  { path: "/", title: "Weston Graham — Full-stack engineer", description: "Weston Graham is a full-stack engineer who builds software, integrations, and internal tools that make work easier.", changeFrequency: "monthly", priority: 1 },
  { path: "/about", title: "About Weston Graham | Full-stack engineer", description: "Learn how Weston Graham approaches internal software, APIs, workflow automation, and maintainable systems.", changeFrequency: "yearly", priority: 0.7 },
  { path: "/experience", title: "Experience | Weston Graham", description: "Weston Graham’s experience building and supporting enterprise applications, APIs, and integrations at ArcBest Technologies.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/projects", title: "Projects | Weston Graham", description: "Selected software, product design, and research projects by full-stack engineer Weston Graham.", changeFrequency: "monthly", priority: 0.9 },
  { path: "/writing", title: "Writing | Weston Graham", description: "Notes from Weston Graham on software engineering, systems, AI, career growth, and side projects.", changeFrequency: "monthly", priority: 0.8 },
  { path: "/writing/when-a-spreadsheet-stops-being-enough", title: "When a spreadsheet stops being enough | Weston Graham", description: "A practical way to recognize when a repeated business process needs a better tool than a spreadsheet.", changeFrequency: "yearly", priority: 0.7 },
] as const satisfies readonly SeoRoute[];

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function metadataFor(route: SeoRoute): Metadata {
  return {
    title: route.title,
    description: route.description,
    alternates: { canonical: route.path },
    // The generated opengraph-image file convention supplies the closest image.
    openGraph: { title: route.title, description: route.description, url: route.path, siteName: SITE_NAME, type: "website" },
    twitter: { card: "summary_large_image", title: route.title, description: route.description },
  };
}

export function projectSeoRoute(title: string, summary: string, slug: string): SeoRoute {
  return {
    path: `/projects/${slug}`,
    title: `${title} | Weston Graham`,
    description: summary,
    changeFrequency: "yearly",
    priority: 0.8,
  };
}

export function assertUniqueSeoRoutes(routes: readonly SeoRoute[]) {
  for (const key of ["path", "title", "description"] as const) {
    const values = routes.map((route) => route[key]);
    if (new Set(values).size !== values.length) {
      throw new Error(`Duplicate SEO ${key} detected.`);
    }
  }
}
