import Link from "next/link";
import type { Metadata } from "next";
import { caseStudies } from "@/data/case-studies";
import { metadataFor, staticSeoRoutes } from "@/data/seo";

export const metadata: Metadata = metadataFor(staticSeoRoutes[3]);

export default function ProjectsPage() {
  return <main className="shell editorial-page"><Link className="back-link" href="/">← Weston Graham</Link><p className="section-label">Selected work</p><h1>Projects I&apos;ve worked on.</h1><p className="lede">These projects cover software development, product design, and research. Each one started with a specific problem and gave me a chance to learn something new.</p><div className="case-list">{caseStudies.map((project, index) => <Link href={`/projects/${project.slug}`} className="case-row" key={project.slug}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{project.title}</h2><p>{project.cardDescription}</p></div><b aria-hidden="true">↗</b></Link>)}</div></main>;
}
