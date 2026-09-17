import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { orderedCaseStudies } from "@/data/case-studies";
import { metadataFor, staticSeoRoutes } from "@/data/seo";
export const metadata: Metadata = metadataFor(staticSeoRoutes[3]);
export default function ProjectsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="page-shell editorial-page">
      <header className="page-hero">
        <p className="section-label">Selected work</p>
        <h1>
          Problems, decisions,
          <br />
          <em>and what I built.</em>
        </h1>
        <p className="lede">
          Business applications, practical AI, and team research. Each case
          study explains the problem and the choices behind the work.
        </p>
      </header>
      <div className="project-grid">
        {orderedCaseStudies.map((p, index) => (
          <ProjectCard
            key={p.slug}
            {...p}
            description={p.summary}
            index={index}
            headingLevel={2}
          />
        ))}
      </div>
    </main>
  );
}
