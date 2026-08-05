import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { caseStudies, getCaseStudy, type Diagram } from "@/data/case-studies";
import { absoluteUrl, projectSeoRoute, SITE_NAME } from "@/data/seo";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};

  const seo = projectSeoRoute(study.title, study.summary, study.slug);
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: seo.path },
    openGraph: {
      title: `${study.title} | Weston Graham`,
      description: study.summary,
      type: "article",
      url: seo.path,
      siteName: SITE_NAME,
      images: [{ url: `/projects/${study.slug}/opengraph-image`, alt: `${study.title} case study` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | Weston Graham`,
      description: study.summary,
      images: [`/projects/${study.slug}/opengraph-image`],
    },
  };
}

function DiagramView({ diagram, label }: { diagram: Diagram; label: string }) {
  return (
    <figure className="case-diagram">
      <svg viewBox="0 0 720 180" role="img" aria-labelledby={`${label}-title ${label}-description`}>
        <title id={`${label}-title`}>{diagram.title}</title>
        <desc id={`${label}-description`}>{diagram.description}</desc>
        {diagram.connections.map(([from, to]) => {
          const gap = 560 / Math.max(diagram.nodes.length - 1, 1);
          const start = 8 + from * gap;
          const end = 8 + to * gap;
          return <line key={`${from}-${to}`} x1={start + 144} y1="90" x2={end} y2="90" className="diagram-line" markerEnd="url(#arrow)" />;
        })}
        <defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" /></marker></defs>
        {diagram.nodes.map((node, index) => {
          const x = 8 + index * (560 / Math.max(diagram.nodes.length - 1, 1));
          return <g key={node}><rect x={x} y="57" width="144" height="66" rx="3" /><text x={x + 72} y="86" textAnchor="middle">{node}</text></g>;
        })}
      </svg>
      <figcaption>{diagram.title}: {diagram.description}</figcaption>
    </figure>
  );
}

function DetailSection({ title, children }: { title: string; children: ReactNode }) {
  return <section className="case-section"><h2 className="section-label case-section-title">{title}</h2>{children}</section>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();
  const index = caseStudies.findIndex(({ slug }) => slug === study.slug);
  const nextStudy = caseStudies[(index + 1) % caseStudies.length];

  return (
    <main className="shell editorial-page case-study">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "CreativeWork", name: study.title, description: study.summary, url: absoluteUrl(`/projects/${study.slug}`), author: { "@type": "Person", name: "Weston Graham", url: absoluteUrl("/") }, keywords: study.technologyStack }} />
      <Link className="back-link" href="/projects">← All projects</Link>
      <p className="section-label">{study.eyebrow}</p>
      <h1>{study.title}</h1>
      <p className="lede">{study.summary}</p>

      {study.heroImage && <figure className="case-hero-art"><Image src={study.heroImage.src} alt={study.heroImage.alt} width={1400} height={760} priority sizes="(max-width: 760px) calc(100vw - 32px), min(1180px, calc(100vw - 48px))" />{study.heroImage.caption && <figcaption>{study.heroImage.caption}</figcaption>}</figure>}

      {(study.problem || study.technologyStack?.length) && <div className="case-meta">
        {study.problem && <div><h2 className="section-label">The problem</h2><p>{study.problem}</p></div>}
        {study.technologyStack?.length && <div><h2 className="section-label">Technology stack</h2><ul className="case-tags">{study.technologyStack.map((item) => <li key={item}>{item}</li>)}</ul></div>}
      </div>}

      {study.users?.length && <DetailSection title="Users"><ul className="case-list-detail">{study.users.map((user) => <li key={user}>{user}</li>)}</ul></DetailSection>}
      {study.role && <DetailSection title="Weston’s role"><p>{study.role}</p></DetailSection>}
      {study.responsibilities?.length && <DetailSection title="Responsibilities"><ul className="case-list-detail">{study.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></DetailSection>}
      {study.constraints?.length && <DetailSection title="Constraints"><ul className="case-list-detail">{study.constraints.map((item) => <li key={item}>{item}</li>)}</ul></DetailSection>}
      {study.architecture && <DetailSection title="Architecture"><DiagramView diagram={study.architecture} label="architecture" /></DetailSection>}
      {study.dataFlow && <DetailSection title="Data flow"><DiagramView diagram={study.dataFlow} label="data-flow" /></DetailSection>}
      {study.decisions?.length && <DetailSection title="Major decisions"><div className="case-decision-list">{study.decisions.map(({ decision, rationale }) => <article key={decision}><h3>{decision}</h3><p>{rationale}</p></article>)}</div></DetailSection>}
      {study.alternatives?.length && <DetailSection title="Alternatives considered"><div className="case-decision-list">{study.alternatives.map(({ option, tradeoff }) => <article key={option}><h3>{option}</h3><p>{tradeoff}</p></article>)}</div></DetailSection>}
      {study.screenshots?.length && <DetailSection title="Screenshots"><div className="case-screenshots">{study.screenshots.map((image) => <figure key={image.src}><Image src={image.src} alt={image.alt} width={1200} height={760} sizes="(max-width: 760px) calc(100vw - 64px), 550px" />{image.caption && <figcaption>{image.caption}</figcaption>}</figure>)}</div></DetailSection>}
      {study.testing?.length && <DetailSection title="Testing"><ul className="case-list-detail">{study.testing.map((item) => <li key={item}>{item}</li>)}</ul></DetailSection>}
      {study.security?.length && <DetailSection title="Security"><ul className="case-list-detail">{study.security.map((item) => <li key={item}>{item}</li>)}</ul></DetailSection>}
      {study.deployment && <DetailSection title="Deployment"><p>{study.deployment}</p></DetailSection>}
      {study.results && <DetailSection title="Results"><h3 className="case-result">{study.results}</h3></DetailSection>}
      {study.lessonsLearned && <aside className="lesson"><h2 className="section-label">Lessons learned</h2><p>{study.lessonsLearned}</p></aside>}
      {(study.repository || study.demo) && <DetailSection title="Repository & demo"><div className="case-links">{study.repository && (study.repository.url ? <a className="button button-light" href={study.repository.url} target="_blank" rel="noreferrer">{study.repository.label ?? "View repository"} <span aria-hidden="true">↗</span></a> : <p>{study.repository.note}</p>)}{study.demo && (study.demo.url ? <a className="button button-light" href={study.demo.url} target="_blank" rel="noreferrer">{study.demo.label ?? "View demo"} <span aria-hidden="true">↗</span></a> : <p>{study.demo.note}</p>)}</div></DetailSection>}

      <nav className="next-project" aria-label="Next project"><h2 className="section-label">Next project</h2><Link href={`/projects/${nextStudy.slug}`}><span>{nextStudy.eyebrow}</span><strong>{nextStudy.title} <i aria-hidden="true">→</i></strong></Link></nav>
    </main>
  );
}
