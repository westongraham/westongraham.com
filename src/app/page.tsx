import Image from "next/image";
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
        <div className="hero-copy">
          <p className="section-label">
            <span className="status-dot" /> Weston Graham · Software engineer
          </p>
          <h1 id="hero-title">
            I figure out how things work.{" "}
            <em>Then I build something better.</em>
          </h1>
          <p className="hero-lede">
            I build applications, integrations, and practical AI tools around
            real problems, usually after learning how the work happens first.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#work">
              Explore what I build <span aria-hidden="true">↓</span>
            </a>
            <Link className="secondary-action" href="/about">
              More about me <span aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="hero-context">
            Arkansas · Full-stack development · Systems thinking
          </p>
        </div>
        <div
          className="brand-visual"
          aria-label="A visual collection of Weston's software projects"
        >
          <div className="brand-orbit brand-orbit-one" aria-hidden="true" />
          <div className="brand-orbit brand-orbit-two" aria-hidden="true" />
          <div className="brand-window brand-window-primary">
            <span className="window-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <Image
              src="/images/DSCMPoster2.jpg"
              alt="Dance Studio Costume Manager project interface"
              width={520}
              height={330}
              priority
            />
          </div>
          <div className="brand-window brand-window-code" aria-hidden="true">
            <small>builder.log</small>
            <code>
              <b>problem</b> → context
              <br />
              <b>context</b> → system
              <br />
              <b>system</b> → useful
            </code>
          </div>
          <div className="brand-chip brand-chip-one">APIs</div>
          <div className="brand-chip brand-chip-two">Practical AI</div>
        </div>
      </section>
      <section
        className="work-section page-shell"
        id="work"
        aria-labelledby="work-title"
      >
        <div className="section-heading">
          <div>
            <p className="section-label">Selected work</p>
            <h2 id="work-title">Ideas turned into something useful.</h2>
          </div>
          <Link className="text-link" href="/projects">
            All projects <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="project-grid">
          {selectedCaseStudies.map((project, index) => (
            <ProjectCard
              key={project.slug}
              {...project}
              description={project.cardDescription}
              index={index}
            />
          ))}
        </div>
      </section>
      <section className="home-experience-section page-shell">
        <div className="section-heading">
          <div>
            <p className="section-label">Experience</p>
            <h2 id="experience-title">What I’m building now.</h2>
          </div>
        </div>
        <div className="home-experience" aria-labelledby="experience-title">
          <div className="home-experience-logo">
            <Image
              src="/images/arcbest-logo.png"
              alt="ArcBest logo"
              width={112}
              height={112}
            />
          </div>
          <div className="home-experience-copy">
            <p className="section-label">Currently · October 2025–present</p>
            <h3>Product Support Specialist II</h3>
            <p className="experience-focus">
              Software Engineering Focus · ArcBest Technologies
            </p>
            <p>
              I build and support production applications, APIs, and
              integrations for the technology behind sales and customer service.
            </p>
            <ul className="case-tags" aria-label="Representative technologies">
              <li>.NET</li>
              <li>Vue</li>
              <li>SQL</li>
              <li>Salesforce</li>
              <li>ServiceNow</li>
            </ul>
            <Link className="text-link" href="/experience">
              Explore my experience <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section
        className="builder-section page-shell"
        aria-labelledby="builder-title"
      >
        <p className="section-label">The thread through it all</p>
        <div>
          <h2 id="builder-title">
            Curiosity starts it.
            <br />
            <em>Discipline finishes it.</em>
          </h2>
          <div>
            <p>
              I started close to the work in logistics operations before moving
              toward the systems behind it. That perspective still shapes every
              application, integration, and side project I build.
            </p>
            <p>
              Outside work, the same instinct shows up in AI experiments,
              fitness tools, woodworking, and home projects: understand the
              system, make a plan, improve it.
            </p>
            <Link className="text-link" href="/about">
              Meet the person behind the work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="contact-section page-shell">
        <p className="section-label">Let’s build something useful</p>
        <h2>
          Good software starts
          <br />
          with a real conversation.
        </h2>
        <p>
          I’m interested in engineering teams where people share ideas,
          challenge each other, and care about the people using what they build.
        </p>
        <a
          className="primary-action"
          href="mailto:westongraham11@gmail.com?subject=Portfolio%20inquiry"
        >
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}
