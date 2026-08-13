import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowDown, ArrowUpRight, CheckCircle, EnvelopeSimple, PlugsConnected, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { Card, Chip } from "@heroui/react";
import { HomeExperience, RequestWorkflow } from "@/components/home-motion";
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

      <RequestWorkflow />

      <section className="featured-system page-shell" aria-labelledby="featured-system-title">
        <div className="section-heading split-heading">
          <div><p className="section-label">Featured system</p><h2 id="featured-system-title">Enterprise AI<br /><em>Email Automation</em></h2></div>
          <p>A request enters once. The system understands the context, connects the right tools, and sends a clear response.</p>
        </div>
        <Card className="automation-product" variant="secondary">
          <div className="automation-sidebar">
            <div className="product-mark"><Sparkle size={18} weight="fill" />Automation hub</div>
            <nav aria-label="Automation product sections"><span className="is-active">Overview</span><span>Requests</span><span>Workflows</span><span>Connections</span></nav>
          </div>
          <div className="automation-workspace">
            <header><div><p className="section-label">Workflow</p><h3>Account access request</h3></div><Chip color="success" variant="soft" size="sm">Active</Chip></header>
            <div className="automation-flow" aria-label="Email request workflow">
              <div><EnvelopeSimple size={21} /><span>Email received</span><small>Microsoft 365</small></div><i>→</i>
              <div><Sparkle size={21} /><span>Analyze intent</span><small>AI classifier</small></div><i>→</i>
              <div><PlugsConnected size={21} /><span>Update access</span><small>Connected systems</small></div><i>→</i>
              <div><CheckCircle size={21} /><span>Notify user</span><small>Resolved</small></div>
            </div>
            <div className="automation-panels">
              <section><p className="section-label">Request summary</p><dl><div><dt>Channel</dt><dd>Email</dd></div><div><dt>Intent</dt><dd>Access request</dd></div><div><dt>Resolution</dt><dd>Under two minutes</dd></div></dl></section>
              <section><p className="section-label">Recent activity</p><ul><li><CheckCircle size={15} />User verified</li><li><CheckCircle size={15} />Access updated</li><li><CheckCircle size={15} />Confirmation sent</li></ul></section>
            </div>
          </div>
        </Card>
      </section>

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

      <HomeExperience />

      <section className="contact-section page-shell">
        <p className="section-label">Let&apos;s build something useful</p>
        <h2>Have a complex problem<br />that needs a <em>clearer system?</em></h2>
        <a className="primary-action" href="mailto:westongraham11@gmail.com?subject=Portfolio%20inquiry">Start a conversation <ArrowUpRight size={18} /></a>
      </section>
    </main>
  );
}
