import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { orderedCaseStudies } from "@/data/case-studies";
import { metadataFor, staticSeoRoutes } from "@/data/seo";
export const metadata: Metadata = metadataFor(staticSeoRoutes[3]);
export default function ProjectsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="page-shell editorial-page">
      <header className="page-hero">
        <p className="section-label">The work</p>
        <h1>
          Every build starts
          <br />
          <em>with a problem worth solving.</em>
        </h1>
        <p className="lede">
          Products, practical AI, research, and design. These are the stories
          behind what I made, the decisions I took, and what each build taught
          me.
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
