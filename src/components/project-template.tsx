import Image from "next/image";
import type { ReactNode } from "react";
import type { CaseStudy } from "@/data/case-studies";
import { ArchitectureDiagramLoader } from "@/components/architecture-diagram-loader";
import { TechStack } from "@/components/engineering-primitives";

export function ProjectSection({ title, children }: { title: string; children: ReactNode }) { return <section className="case-section"><h2 className="section-label case-section-title">{title}</h2>{children}</section>; }

export function ProjectTemplate({ study }: { study: CaseStudy }) {
  return <>
    {study.heroImage && <figure className="case-hero-art"><Image src={study.heroImage.src} alt={study.heroImage.alt} width={1400} height={760} priority sizes="(max-width: 760px) calc(100vw - 32px), min(1180px, calc(100vw - 48px))" />{study.heroImage.caption && <figcaption>{study.heroImage.caption}</figcaption>}</figure>}
    {(study.problem || study.technologyStack?.length) && <div className="case-meta">{study.problem && <div><h2 className="section-label">The problem</h2><p>{study.problem}</p></div>}{study.technologyStack?.length && <div><h2 className="section-label">Technology stack</h2><TechStack items={study.technologyStack} /></div>}</div>}
    {study.role && <ProjectSection title="My role"><p>{study.role}</p></ProjectSection>}
    {study.responsibilities?.length && <ProjectSection title="What I built"><List items={study.responsibilities} /></ProjectSection>}
    {study.constraints?.length && <ProjectSection title="Constraints"><List items={study.constraints} /></ProjectSection>}
    {study.architecture && <ProjectSection title="Architecture"><ArchitectureDiagramLoader diagram={study.architecture} /></ProjectSection>}
    {study.dataFlow && <ProjectSection title="Data flow"><ArchitectureDiagramLoader diagram={study.dataFlow} /></ProjectSection>}
    {study.decisions?.length && <ProjectSection title="Decisions I made"><DecisionList items={study.decisions.map(({ decision, rationale }) => ({ title: decision, body: rationale }))} /></ProjectSection>}
    {study.alternatives?.length && <ProjectSection title="Other options I considered"><DecisionList items={study.alternatives.map(({ option, tradeoff }) => ({ title: option, body: tradeoff }))} /></ProjectSection>}
    {study.screenshots?.length && <ProjectSection title="Screenshots"><div className="case-screenshots">{study.screenshots.map((image) => <figure key={image.src}><Image src={image.src} alt={image.alt} width={1200} height={760} sizes="(max-width: 760px) calc(100vw - 64px), 550px" />{image.caption && <figcaption>{image.caption}</figcaption>}</figure>)}</div></ProjectSection>}
    {study.results && <ProjectSection title="What came out of it"><h3 className="case-result">{study.results}</h3></ProjectSection>}
    {study.lessonsLearned && <aside className="lesson"><h2 className="section-label">What I learned</h2><p>{study.lessonsLearned}</p></aside>}
  </>;
}
function List({ items }: { items: string[] }) { return <ul className="case-list-detail">{items.map((item) => <li key={item}>{item}</li>)}</ul>; }
function DecisionList({ items }: { items: { title: string; body: string }[] }) { return <div className="case-decision-list">{items.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>; }
