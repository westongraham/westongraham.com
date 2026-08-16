import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { metadataFor, staticSeoRoutes } from "@/data/seo";

export const metadata: Metadata = metadataFor(staticSeoRoutes[2]);

export default function ExperiencePage() {
  return (
    <main className="page-shell editorial-page experience-page">
      <header className="page-hero">
        <p className="section-label">Experience</p>
        <h1>How I got into<br /><em>building software.</em></h1>
        <p className="lede">I started on the operations side of logistics, moved into supporting internal tools, and eventually began building them. That background still helps me understand the people using the software and the reasons behind the work.</p>
      </header>
      <ExperienceTimeline />
    </main>
  );
}
