import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Card } from "@heroui/react";
import { HomeExperience } from "@/components/home-motion";
import { JsonLd } from "@/components/json-ld";
import { SystemStack } from "@/components/system-stack";
import { caseStudies } from "@/data/case-studies";
import { absoluteUrl, metadataFor, staticSeoRoutes } from "@/data/seo";

export const metadata: Metadata = metadataFor(staticSeoRoutes[0]);

export default function Home() {
  return (
    <main className="home-page">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ProfilePage", mainEntity: { "@type": "Person", name: "Weston Graham", url: absoluteUrl("/"), jobTitle: "Full-stack engineer", sameAs: ["https://www.linkedin.com/in/westongraham", "https://github.com/westongraham"] } }} />

      <section className="home-hero page-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="section-label">Full-stack engineer · Arkansas</p>
          <h1 id="hero-title">I build enterprise software that turns complex work into <em>simpler systems.</em></h1>
          <p className="hero-lede">Production applications, integrations, APIs, and AI workflows—designed around the people who use them.</p>
          <div className="hero-actions">
            <Link className="primary-action" href="/projects">Explore selected work <ArrowUpRight size={18} /></Link>
            <a className="secondary-action" href="/documents/weston-graham-resume.pdf" target="_blank" rel="noreferrer">View resume <ArrowDown size={18} /></a>
          </div>
          <div className="hero-proof"><span>Built with</span><b>.NET</b><b>Vue</b><b>SQL</b><b>ServiceNow</b><b>Salesforce</b></div>
        </div>
        <SystemStack />
      </section>

      <HomeExperience />

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="page-shell section-heading"><p className="section-label">Selected work</p><h2 id="work-title">Systems built around<br /><em>real work.</em></h2></div>
        <div className="project-grid page-shell">
          {caseStudies.map((project, index) => (
            <Link className={`project-card project-card-${index + 1}`} href={`/projects/${project.slug}`} key={project.slug}>
              <Card variant="secondary">
                <div className="project-media">
                  {project.heroImage ? <Image src={project.heroImage.src} alt={project.heroImage.alt} fill sizes="(max-width: 760px) 100vw, 50vw" /> : <div className="groundwork-visual"><span>Groundwork</span><strong>AI, made<br />practical.</strong><small>Learn · Apply · Build</small></div>}
                </div>
                <Card.Content>
                  <span className="project-number">0{index + 1}</span>
                  <p className="section-label">{project.eyebrow}</p>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Description>{project.cardDescription}</Card.Description>
                  <b>View case study <ArrowUpRight size={17} /></b>
                </Card.Content>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="contact-section page-shell">
        <p className="section-label">Let&apos;s build something useful</p>
        <h2>Have a complex problem<br />that needs a <em>clearer system?</em></h2>
        <a className="primary-action" href="mailto:westongraham11@gmail.com?subject=Portfolio%20inquiry">Start a conversation <ArrowUpRight size={18} /></a>
      </section>
    </main>
  );
}
