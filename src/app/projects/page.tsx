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
        <h1>Things I&apos;ve built<br /><em>and learned from.</em></h1>
        <p className="lede">A mix of full-stack apps, AI experiments, design work, and school projects. Each one started with a problem I wanted to understand or solve.</p>
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
                <b>View project <ArrowUpRight size={17} /></b>
              </Card.Content>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
