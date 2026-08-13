import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Card } from "@heroui/react";
import { caseStudies } from "@/data/case-studies";
import { metadataFor, staticSeoRoutes } from "@/data/seo";

export const metadata: Metadata = metadataFor(staticSeoRoutes[3]);

export default function ProjectsPage() {
  return (
    <main className="page-shell editorial-page">
      <header className="page-hero">
        <p className="section-label">Selected work</p>
        <h1>Software shaped by<br /><em>real constraints.</em></h1>
        <p className="lede">Product work, connected systems, and research projects—each grounded in a specific problem and the people affected by it.</p>
      </header>
      <div className="project-index">
        {caseStudies.map((project, index) => (
          <Link href={`/projects/${project.slug}`} key={project.slug}>
            <Card className="index-card" variant="secondary">
              <div className="index-card-media">
                {project.heroImage ? <Image src={project.heroImage.src} alt={project.heroImage.alt} fill sizes="(max-width: 760px) 100vw, 42vw" /> : <div className="groundwork-visual"><span>Groundwork</span><strong>AI, made<br />practical.</strong><small>Learn · Apply · Build</small></div>}
              </div>
              <Card.Content>
                <span className="project-number">0{index + 1}</span>
                <p className="section-label">{project.eyebrow}</p>
                <Card.Title>{project.title}</Card.Title>
                <Card.Description>{project.summary}</Card.Description>
                <b>Read case study <ArrowUpRight size={17} /></b>
              </Card.Content>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
