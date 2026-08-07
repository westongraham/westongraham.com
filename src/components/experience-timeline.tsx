"use client";

import { useEffect, useRef, useState } from "react";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { careerMilestones } from "@/data/experience";

export function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const roleRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveIndex(Number(visible.target.getAttribute("data-role-index")));
      },
      { rootMargin: "-25% 0px -45% 0px", threshold: [0.15, 0.45, 0.75] },
    );
    roleRefs.current.forEach((role) => role && observer.observe(role));
    return () => observer.disconnect();
  }, []);

  const goToRole = (index: number) => { setExpandedIndex(index); roleRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" }); };

  return <section className={`experience-timeline is-at-${activeIndex}`} aria-labelledby="timeline-title">
    <div className="timeline-intro"><p className="section-label">Career progression</p><h2 id="timeline-title">From solving shipment problems to building the systems behind them.</h2><p>Scroll through the roles, or select a stop on the line to jump to it.</p></div>
    <div className="timeline-layout">
      <nav className="timeline-nav" aria-label="Career timeline">
        <p className="timeline-nav-label">ArcBest · 2021 — present</p>
        <div className="timeline-track" aria-hidden="true"><span style={{ transform: `scaleY(${(activeIndex + 1) / careerMilestones.length})` }} /></div>
        <ol>{careerMilestones.map((item, index) => <li key={item.id}><button aria-current={index === activeIndex ? "step" : undefined} className={index === activeIndex ? "is-active" : ""} onClick={() => goToRole(index)} type="button"><span>{item.dates}</span><strong>{item.title}</strong></button></li>)}</ol>
      </nav>
      <div className="timeline-roles">
        {careerMilestones.map((item, index) => <article className={`timeline-role ${index === activeIndex ? "is-active" : ""}`} data-role-index={index} key={item.id} ref={(element) => { roleRefs.current[index] = element; }}>
          <div className="timeline-role-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
          <div className="timeline-role-heading"><p>{item.dates}</p><p className="timeline-company">{item.company}</p><h3>{item.title}</h3><p className="timeline-lead">{item.summary}</p></div>
          <details className="timeline-expand" open={expandedIndex === index} onToggle={(event) => { if (event.currentTarget.open) setExpandedIndex(index); }}><summary><span>{expandedIndex === index ? "Hide details" : "Explore role"}</span><i aria-hidden="true">+</i></summary><div className="timeline-expand-content"><ul className="timeline-details">{item.responsibilities.map((detail) => <li key={detail}>{detail}</li>)}</ul>{item.lessons?.length ? <p className="timeline-lesson"><strong>Lesson:</strong> {item.lessons[0]}</p> : null}{item.architectureDiagram ? <ArchitectureDiagram diagram={item.architectureDiagram} /> : null}<div className="timeline-tools" aria-label={`${item.title} tools and areas`}><span>Work involved</span>{item.technologies.map((tool) => <b key={tool}>{tool}</b>)}</div></div></details>
        </article>)}
      </div>
    </div>
  </section>;
}
