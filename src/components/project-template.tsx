import Image from "next/image";
import type { ReactNode } from "react";
import type { CaseStudy } from "@/data/case-studies";
import { ArchitectureDiagramLoader } from "@/components/architecture-diagram-loader";
import { TechStack } from "@/components/engineering-primitives";

export function ProjectSection({
  title,
  kicker,
  children,
  tone = "plain",
}: {
  title: string;
  kicker?: string;
  children: ReactNode;
  tone?: "plain" | "panel";
}) {
  return (
    <section className={`case-section case-section-${tone}`}>
      {kicker && <p className="section-label">{kicker}</p>}
      <h2 className="case-section-title">{title}</h2>
      {children}
    </section>
  );
}

export function ProjectTemplate({ study }: { study: CaseStudy }) {
  return (
    <div className="case-story">
      {study.disclosure === "sanitized-confidential" && (
        <aside className="callout">
          This case study uses a sanitized, high-level view of confidential
          work.
        </aside>
      )}
      <section className="case-snapshot" aria-label="Project snapshot">
        <div>
          <p className="section-label">The problem</p>
          <p>{study.problem ?? study.summary}</p>
        </div>
        {study.users?.length ? (
          <div>
            <p className="section-label">Built for</p>
            <List items={study.users} />
          </div>
        ) : null}
        <div>
          <p className="section-label">My role</p>
          <p>{study.role ?? "Product thinking, design, and development."}</p>
        </div>
        {study.technologyStack?.length ? (
          <div>
            <p className="section-label">Built with</p>
            <TechStack items={study.technologyStack} />
          </div>
        ) : null}
      </section>
      {study.responsibilities?.length ? (
        <ProjectSection
          kicker="The build"
          title="Turning the idea into a useful product."
        >
          <List items={study.responsibilities} />
        </ProjectSection>
      ) : null}
      {study.constraints?.length ? (
        <ProjectSection
          kicker="The boundaries"
          title="Constraints that shaped the work."
          tone="panel"
        >
          <List items={study.constraints} />
        </ProjectSection>
      ) : null}
      {study.architecture ? (
        <ProjectSection
          kicker="Under the hood"
          title="How the pieces work together."
          tone="panel"
        >
          <ArchitectureDiagramLoader diagram={study.architecture} />
        </ProjectSection>
      ) : null}
      {study.dataFlow ? (
        <ProjectSection
          kicker="Following the request"
          title="How data moves through the system."
          tone="panel"
        >
          <ArchitectureDiagramLoader diagram={study.dataFlow} />
        </ProjectSection>
      ) : null}
      {study.decisions?.length ? (
        <ProjectSection
          kicker="Decisions & tradeoffs"
          title="The choices behind the product."
        >
          <DecisionList
            items={study.decisions.map(({ decision, rationale }) => ({
              title: decision,
              body: rationale,
            }))}
          />
        </ProjectSection>
      ) : null}
      {study.alternatives?.length ? (
        <ProjectSection
          kicker="Other paths"
          title="What I considered along the way."
        >
          <DecisionList
            items={study.alternatives.map(({ option, tradeoff }) => ({
              title: option,
              body: tradeoff,
            }))}
          />
        </ProjectSection>
      ) : null}
      {study.screenshots?.length ? (
        <ProjectSection
          kicker="The product"
          title="A closer look at the experience."
          tone="panel"
        >
          <div className="case-screenshots">
            {study.screenshots.map((image) => (
              <figure key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={760}
                />
                {image.caption && <figcaption>{image.caption}</figcaption>}
              </figure>
            ))}
          </div>
        </ProjectSection>
      ) : null}
      {study.testing?.length || study.security?.length || study.deployment ? (
        <ProjectSection
          kicker="Making it real"
          title="Validation, safety, and delivery."
          tone="panel"
        >
          <div className="case-proof-grid">
            {study.testing?.length ? (
              <div>
                <h3>Validation</h3>
                <List items={study.testing} />
              </div>
            ) : null}
            {study.security?.length ? (
              <div>
                <h3>Security</h3>
                <List items={study.security} />
              </div>
            ) : null}
            {study.deployment ? (
              <div>
                <h3>Deployment</h3>
                <p>{study.deployment}</p>
              </div>
            ) : null}
          </div>
        </ProjectSection>
      ) : null}
      {study.results ? (
        <ProjectSection kicker="The result" title="What came out of it.">
          <p className="case-result">{study.results}</p>
        </ProjectSection>
      ) : null}
      {study.repository ? (
        <div className="case-repository">
          <p className="section-label">Source code</p>
          {study.repository.url ? (
            <a
              className="text-link"
              href={study.repository.url}
              target="_blank"
              rel="noreferrer"
            >
              {study.repository.label ?? "View repository"} ↗
            </a>
          ) : (
            <h3>{study.repository.label ?? "Private repository"}</h3>
          )}
          {study.repository.note && <p>{study.repository.note}</p>}
        </div>
      ) : null}
      {study.lessonsLearned ? (
        <aside className="lesson">
          <p className="section-label">What I learned</p>
          <blockquote>“{study.lessonsLearned}”</blockquote>
        </aside>
      ) : null}
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="case-list-detail">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
function DecisionList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <div className="case-decision-list">
      {items.map((item, index) => (
        <article key={item.title}>
          <span>0{index + 1}</span>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}
