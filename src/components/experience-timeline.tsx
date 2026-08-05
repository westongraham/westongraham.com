"use client";

import { useEffect, useRef, useState } from "react";

const roles = [
  { dates: "2025 — present", role: "Product Support Specialist II", company: "ArcBest Technologies", lead: "Production software and connected systems.", details: ["Build and maintain production applications used in an enterprise environment.", "Develop APIs and integrations across .NET, Vue, SQL, Salesforce, and ServiceNow.", "Support reliable systems while continuing to improve the way work gets done."], tools: [".NET", "Vue", "SQL", "Salesforce", "ServiceNow"] },
  { dates: "2023 — 2025", role: "Product Support Specialist I", company: "ArcBest Technologies", lead: "From support work into full-stack delivery.", details: ["Developed full-stack business applications for internal teams.", "Maintained ServiceNow CSM and ITSM solutions.", "Led Agile ceremonies as Scrum Master to help the team deliver consistently."], tools: ["Full stack", "ServiceNow", "Scrum"] },
  { dates: "2022 — 2023", role: "Information Systems / Info Center", company: "ArcBest Technologies", lead: "Turning operational friction into workflow automation.", details: ["Built custom ServiceNow applications for logistics operations.", "Created workflow automation that made internal processes easier to follow and support.", "Learned to translate day-to-day business needs into system improvements."], tools: ["ServiceNow", "Automation", "Operations"] },
  { dates: "2021 — 2022", role: "Carrier Sales Support Specialist", company: "ArcBest", lead: "Learning the business from the operations side.", details: ["Worked with operations teams to resolve shipment issues.", "Built firsthand understanding of the logistics workflows behind customer commitments.", "Developed the business context that now informs the systems I build."], tools: ["Logistics", "Customer support", "Operations"] },
] as const;

export function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const goToRole = (index: number) => roleRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });

  return <section className={`experience-timeline is-at-${activeIndex}`} aria-labelledby="timeline-title">
    <div className="timeline-intro"><p className="section-label">Career progression</p><h2 id="timeline-title">From solving shipment problems to building the systems behind them.</h2><p>Scroll through the roles, or select a stop on the line to jump to it.</p></div>
    <div className="timeline-layout">
      <nav className="timeline-nav" aria-label="Career timeline">
        <p className="timeline-nav-label">ArcBest · 2021 — present</p>
        <div className="timeline-track" aria-hidden="true"><span style={{ transform: `scaleY(${(activeIndex + 1) / roles.length})` }} /></div>
        <ol>{roles.map((item, index) => <li key={item.role}><button aria-current={index === activeIndex ? "step" : undefined} className={index === activeIndex ? "is-active" : ""} onClick={() => goToRole(index)} type="button"><span>{item.dates}</span><strong>{item.role}</strong></button></li>)}</ol>
      </nav>
      <div className="timeline-roles">
        {roles.map((item, index) => <article className={`timeline-role ${index === activeIndex ? "is-active" : ""}`} data-role-index={index} key={item.role} ref={(element) => { roleRefs.current[index] = element; }}>
          <div className="timeline-role-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
          <div className="timeline-role-heading"><p>{item.dates}</p><p className="timeline-company">{item.company}</p><h3>{item.role}</h3><p className="timeline-lead">{item.lead}</p></div>
          <ul className="timeline-details">{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          <div className="timeline-tools" aria-label={`${item.role} tools and areas`}><span>Work involved</span>{item.tools.map((tool) => <b key={tool}>{tool}</b>)}</div>
        </article>)}
      </div>
    </div>
  </section>;
}
