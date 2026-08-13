import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { metadataFor, staticSeoRoutes } from "@/data/seo";

export const metadata: Metadata = metadataFor(staticSeoRoutes[2]);

export default function ExperiencePage() {
  return (
    <main className="page-shell editorial-page experience-page">
      <header className="page-hero">
        <p className="section-label">Experience</p>
        <h1>From operations to<br /><em>enterprise systems.</em></h1>
        <p className="lede">I started close to the work, then moved into building the software behind it. That path still shapes how I understand users, systems, and trade-offs.</p>
      </header>
      <ExperienceTimeline />
    </main>
  );
}
