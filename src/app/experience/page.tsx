import Link from "next/link";
import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { metadataFor, staticSeoRoutes } from "@/data/seo";

export const metadata: Metadata = metadataFor(staticSeoRoutes[2]);

export default function ExperiencePage() { return <main className="shell editorial-page experience-page"><Link className="back-link" href="/">← Weston Graham</Link><p className="section-label">Experience</p><h1>My experience so far.</h1><p className="lede">I started at ArcBest in an operations role before moving into software engineering. That experience still helps me understand the business problems behind the systems I build.</p><ExperienceTimeline /></main>; }
