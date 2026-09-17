import type { Metadata } from "next";
import { metadataFor, staticSeoRoutes } from "@/data/seo";
export const metadata: Metadata = metadataFor(staticSeoRoutes[1]);
export default function AboutPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="page-shell editorial-page about-page"
    >
      <header className="page-hero">
        <p className="section-label">About</p>
        <h1>
          Understand the context.
          <br />
          <em>Build with purpose.</em>
        </h1>
        <p className="lede">
          I’m Weston, a software engineer in Arkansas. My path from logistics
          operations to development taught me to start with the people doing the
          work.
        </p>
      </header>
      <section className="split-copy">
        <h2>The people behind the software.</h2>
        <div>
          <p>
            Most of the software I work on already has a history: business
            rules, edge cases, older decisions, and people who know what happens
            when something changes. I try to learn that context before deciding
            what the code should do.
          </p>
          <p>
            I enjoy internal applications, APIs, integrations, and automation.
            Troubleshooting across systems is often where I learn how the
            software really works.
          </p>
        </div>
      </section>
      <section className="split-copy">
        <h2>Better work, together.</h2>
        <div>
          <p>
            I work across teams to understand production problems and help
            resolve them. My SAFe Scrum Master training also shaped how I
            approach planning, communication, and keeping work moving.
          </p>
          <p>
            I want to keep growing alongside engineers who care about the
            details and the people using what they build.
          </p>
        </div>
      </section>
      <section className="split-copy">
        <h2>Outside the code.</h2>
        <div>
          <p>
            I build side projects, experiment with AI, and spend time on
            woodworking, home projects, and fitness. I enjoy learning, trying
            something, and improving it a little at a time.
          </p>
        </div>
      </section>
    </main>
  );
}
