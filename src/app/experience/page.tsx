import type { Metadata } from "next";
import { EducationSection } from "@/components/education-section";
import {
  ExperienceResumeCta,
  ExperienceTimeline,
} from "@/components/experience-timeline";
import { metadataFor, staticSeoRoutes } from "@/data/seo";

export const metadata: Metadata = metadataFor(staticSeoRoutes[2]);

export default function ExperiencePage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="page-shell editorial-page experience-page"
    >
      <header className="page-hero">
        <p className="section-label">Experience</p>
        <h1>
          I learned the work.
          <br />
          <em>Then I learned to build for it.</em>
        </h1>
        <p className="lede">
          started on the operations side of logistics, then moved into building the software. 
          That background still helps me understand the people using it and the problems we’re trying to solve.
        </p>
      </header>
      <ExperienceTimeline />
      <EducationSection />
      <ExperienceResumeCta />
    </main>
  );
}
