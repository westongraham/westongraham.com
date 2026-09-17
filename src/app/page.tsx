import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { ProjectCard } from "@/components/project-card";
import { selectedCaseStudies } from "@/data/case-studies";
import { absoluteUrl, metadataFor, staticSeoRoutes } from "@/data/seo";
export const metadata: Metadata = metadataFor(staticSeoRoutes[0]);
export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="home-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          mainEntity: {
            "@type": "Person",
            name: "Weston Graham",
            url: absoluteUrl("/"),
            jobTitle: "Software engineer",
            sameAs: [
              "https://www.linkedin.com/in/westongraham",
              "https://github.com/westongraham",
            ],
          },
        }}
      />
      <section className="home-hero page-shell" aria-labelledby="hero-title">
        <p className="section-label">Weston Graham / Software engineer</p>
        <h1 id="hero-title">
          Software that makes
          <br className="desktop-break" /> <em>the work simpler.</em>
        </h1>
        <p className="hero-lede">
          I build applications, APIs, and integrations for the people behind the
          business. At ArcBest Technologies, that means connecting the tools
          used by sales and customer service.
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="#work">
            Explore my work <span aria-hidden="true">↓</span>
          </a>
          <a
            className="secondary-action"
            href="/documents/weston-graham-resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View resume <span aria-hidden="true">↗</span>
            <span className="sr-only"> (PDF, opens in a new tab)</span>
          </a>
        </div>
        <p className="hero-context">
          Based in Arkansas · Full-stack development &amp; practical automation
        </p>
      </section>
      <section
        className="work-section page-shell"
        id="work"
        aria-labelledby="work-title"
      >
        <div className="section-heading">
          <div>
            <p className="section-label">Selected work</p>
            <h2 id="work-title">A closer look at the work.</h2>
          </div>
          <Link className="text-link" href="/projects">
            All projects <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="project-grid">
          {selectedCaseStudies.map((p, index) => (
            <ProjectCard
              key={p.slug}
              {...p}
              description={p.cardDescription}
              index={index}
            />
          ))}
        </div>
      </section>
      <section
        className="home-experience page-shell"
        aria-labelledby="experience-title"
      >
        <div>
          <p className="section-label">Currently</p>
          <h2 id="experience-title">Building at ArcBest Technologies.</h2>
          <p className="muted">2025 — present</p>
        </div>
        <div>
          <p>
            As a Product Support Specialist II with a software engineering
            focus, I build and support production applications, APIs, and
            integrations.
          </p>
          <p>
            I started in logistics operations. Understanding the work behind the
            software still shapes how I build it.
          </p>
          <Link className="text-link" href="/experience">
            Explore my experience <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
      <section className="contact-section page-shell">
        <p className="section-label">Let’s connect</p>
        <h2>
          Good software starts
          <br />
          with a conversation.
        </h2>
        <p>
          I’m interested in engineering teams that care about useful software
          and thoughtful collaboration.
        </p>
        <a
          className="primary-action"
          href="mailto:westongraham11@gmail.com?subject=Portfolio%20inquiry"
        >
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}
