import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { HomeExperience, RequestWorkflow } from "@/components/home-motion";
import { JsonLd } from "@/components/json-ld";
import { caseStudies } from "@/data/case-studies";
import { absoluteUrl, metadataFor, staticSeoRoutes } from "@/data/seo";

export const metadata: Metadata = metadataFor(staticSeoRoutes[0]);

const featuredProjects = ["groundwork-ai", "dance-studio-costume-manager", "autofarm"]
  .map((slug) => caseStudies.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

export default function Home() {
  return (
    <main className="home-redesign">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ProfilePage", mainEntity: { "@type": "Person", name: "Weston Graham", url: absoluteUrl("/"), jobTitle: "Full-stack engineer", sameAs: ["https://www.linkedin.com/in/westongraham", "https://github.com/westongraham"] } }} />
      <header className="redesign-header">
        <Link className="wordmark" href="/" aria-label="Weston Graham home">Weston<span>Graham</span></Link>
        <nav className="desktop-nav redesign-nav" aria-label="Primary navigation"><a href="#work">Work</a><a href="#experience">Experience</a><Link href="/about">About</Link><a href="/documents/weston-graham-resume.pdf" target="_blank" rel="noreferrer">Resume</a><a href="mailto:westongraham11@gmail.com?subject=Portfolio%20inquiry">Contact</a></nav>
        <details className="mobile-nav"><summary aria-label="Open navigation menu"><span className="mobile-nav-icon" aria-hidden="true"><i /><i /><i /></span><span className="mobile-nav-label">Menu</span></summary><nav className="mobile-nav-panel" aria-label="Mobile navigation"><a href="#work">Work</a><a href="#experience">Experience</a><Link href="/about">About</Link><a href="/documents/weston-graham-resume.pdf" target="_blank" rel="noreferrer">Resume <span aria-hidden="true">↗</span></a><a className="mobile-nav-contact" href="mailto:westongraham11@gmail.com?subject=Portfolio%20inquiry">Contact <span aria-hidden="true">↗</span></a></nav></details>
      </header>

      <section className="redesign-hero shell" aria-labelledby="hero-title">
        <p className="redesign-kicker">Full-stack engineer · Arkansas</p>
        <h1 id="hero-title">I build enterprise software<br />that turns complex work<br />into <em>simpler systems.</em></h1>
        <p>I design and build production applications, integrations, APIs, and AI workflows that connect teams, tools, and data.</p>
        <div className="hero-actions"><a className="button button-dark" href="#work">View featured work <span>↓</span></a><a className="button button-light" href="/documents/weston-graham-resume.pdf" target="_blank" rel="noreferrer">View resume <span>↗</span></a></div>
        <div className="request-cue" aria-hidden="true"><span>Request received</span></div>
      </section>

      <RequestWorkflow />

      <section className="product-reveal shell" aria-labelledby="automation-title">
        <div className="product-heading"><p className="section-label">Featured system</p><h2 id="automation-title">Enterprise AI<br />Email Automation</h2><p>A customer request enters once. The system understands, connects, and responds.</p></div>
        <div className="automation-console" role="img" aria-label="A product interface showing an email request being analyzed, connected to enterprise systems, and resolved automatically">
          <div className="console-bar"><span /><span /><span /><strong>Automation workspace</strong><b>Live</b></div>
          <div className="console-body"><aside><strong>Inbox</strong><span className="is-active">New request</span><span>In progress</span><span>Resolved</span></aside><div className="console-request"><p className="micro-label">Incoming request</p><h3>Can&apos;t access my account</h3><div className="request-meta"><span>Intent · Access issue</span><span>Priority · High</span></div><div className="console-progress"><i /><i /><i /><i /></div><ul><li>Request classified</li><li>User verified</li><li>Access restored</li><li>Confirmation sent</li></ul></div><div className="console-systems"><p className="micro-label">Connected systems</p><span>ServiceNow <i>Connected</i></span><span>Salesforce <i>Connected</i></span><span>Microsoft 365 <i>Connected</i></span><span>SQL data <i>Connected</i></span></div></div>
        </div>
        <div className="outcome-row"><span>Connected systems</span><span>Automated resolution</span><span>Human-centered workflows</span></div>
      </section>

      <section id="work" className="project-showcase" aria-labelledby="work-title">
        <div className="shell showcase-intro"><p className="section-label">Selected work</p><h2 id="work-title">A few systems<br />built around real work.</h2></div>
        <div className="showcase-list shell">{featuredProjects.map((project, index) => <Link className={`showcase-project project-${index + 1}`} href={`/projects/${project.slug}`} key={project.slug}><div className="showcase-art">{project.heroImage ? <Image src={project.heroImage.src} alt={project.heroImage.alt} fill sizes="(max-width: 760px) 100vw, 55vw" /> : <div className="groundwork-art"><span>Groundwork</span><strong>AI, made practical.</strong><i>Learn · Apply · Build</i></div>}</div><div className="showcase-copy"><span>0{index + 1}</span><p>{project.eyebrow}</p><h3>{project.title}</h3><p>{project.cardDescription}</p><b>Explore project ↗</b></div></Link>)}</div>
      </section>

      <HomeExperience />

      <section className="redesign-contact shell"><p className="section-label">Let&apos;s build something useful</p><h2>Have a complex problem<br />that needs a clearer system?</h2><a className="button button-dark" href="mailto:westongraham11@gmail.com?subject=Portfolio%20inquiry">Start a conversation <span>↗</span></a></section>
      <footer className="redesign-footer shell"><span>© {new Date().getFullYear()} Weston Graham</span><div><a href="https://www.linkedin.com/in/westongraham" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/westongraham" target="_blank" rel="noreferrer">GitHub</a></div></footer>
    </main>
  );
}
