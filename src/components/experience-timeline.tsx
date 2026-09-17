import type { CSSProperties } from "react";
import Image from "next/image";
import { careerMilestones } from "@/data/experience";
import { TechStack } from "@/components/engineering-primitives";

export function ExperienceTimeline() {
  return (
    <section className="experience-story" aria-labelledby="career-story-title">
      <div className="experience-story-heading">
        <p className="section-label">Career progression</p>
        <h2 id="career-story-title">
          From understanding the work to building the tools.
        </h2>
      </div>
      <ol className="career-list">
        {careerMilestones.map((role, index) => (
          <li
            key={role.id}
            style={{ "--career-index": index } as CSSProperties}
          >
            <span className="career-marker" aria-hidden="true" />
            <details className="career-entry" open={index === 0}>
              <summary>
                <span className="career-logo">
                  <Image
                    src={role.companyLogo.src}
                    alt={role.companyLogo.alt}
                    width={72}
                    height={72}
                  />
                </span>
                <span className="career-heading">
                  <span className="career-company">{role.company}</span>
                  <h3>{role.title}</h3>
                  <span className="career-date">{role.dates}</span>
                  <span className="career-summary">{role.summary}</span>
                </span>
                <span className="career-toggle" aria-hidden="true">
                  <span>Explore role</span>
                  <i>＋</i>
                </span>
              </summary>
              <div className="career-details">
                <p className="section-label">What I did</p>
                <ul className="case-list-detail">
                  {role.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <TechStack items={role.technologies} />
                {role.lessons?.map((lesson) => (
                  <blockquote className="career-lesson" key={lesson}>
                    {lesson}
                  </blockquote>
                ))}
              </div>
            </details>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ExperienceResumeCta() {
  return (
    <div className="resume-cta">
      <div>
        <p className="section-label">The traditional version</p>
        <h2>Keep a copy.</h2>
      </div>
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
  );
}
