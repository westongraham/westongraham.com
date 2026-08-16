import Link from "next/link";
import type { Metadata } from "next";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { HomeExperience } from "@/components/home-motion";
import { JsonLd } from "@/components/json-ld";
import { ProjectCard } from "@/components/project-card";
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
          <h1 id="hero-title">I build software to solve <em>real problems.</em></h1>
          <p className="hero-lede">I work across full-stack applications, APIs, integrations, automation, and AI. I like taking something complicated, figuring out how it works, and making it better.</p>
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
        <div className="page-shell section-heading"><p className="section-label">Selected work</p><h2 id="work-title">A few things I&apos;ve<br /><em>built and explored.</em></h2></div>
        <div className="project-grid page-shell">
          {caseStudies.map((project, index) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              eyebrow={project.eyebrow}
              description={project.cardDescription}
              heroImage={project.heroImage}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="contact-section page-shell">
        <p className="section-label">Get in touch</p>
        <h2>Want to talk about software,<br />AI, or something you&apos;re <em>building?</em></h2>
        <a className="primary-action" href="mailto:westongraham11@gmail.com?subject=Portfolio%20inquiry">Start a conversation <ArrowUpRight size={18} /></a>
      </section>
    </main>
  );
}
