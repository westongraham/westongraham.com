"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { careerMilestones } from "@/data/experience";

const stages = [
  { number: "01", title: "Request", label: "Customer email", detail: "A request enters the system." },
  { number: "02", title: "Understand", label: "Intent + context", detail: "AI finds the need and urgency." },
  { number: "03", title: "Connect", label: "Enterprise systems", detail: "The right tools and data respond." },
  { number: "04", title: "Resolve", label: "Answer delivered", detail: "The customer gets a clear response." },
];

export function RequestWorkflow() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const update = () => {
      const rect = section.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height * .45)));
      setActiveStage(Math.min(stages.length - 1, Math.floor(progress * stages.length)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <section ref={sectionRef} className={`request-workflow stage-${activeStage}`} aria-labelledby="workflow-title"><div className="workflow-sticky shell"><div className="workflow-heading"><p className="section-label">A request, made visible</p><h2 id="workflow-title">From need<br />to resolution.</h2><p>Scroll to follow the request.</p></div><div className="workflow-stage"><div className="workflow-line" aria-hidden="true"><span style={{ width: `${((activeStage + 1) / stages.length) * 100}%` }} /><i style={{ left: `${(activeStage / (stages.length - 1)) * 100}%` }} /></div><ol>{stages.map((stage, index) => <li className={index <= activeStage ? "is-active" : ""} key={stage.title}><button onClick={() => setActiveStage(index)} type="button" aria-pressed={index === activeStage}><span>{stage.number}</span><strong>{stage.title}</strong></button></li>)}</ol><div className="workflow-visual"><div className="workflow-card request-card"><span>{activeStage === 0 ? "NEW" : "ROUTED"}</span><strong>{stages[activeStage].label}</strong><p>{stages[activeStage].detail}</p></div><div className="system-stack" aria-hidden={activeStage < 2}><span>ServiceNow</span><span>Salesforce</span><span>Microsoft 365</span><span>SQL</span></div><div className="resolution-card" aria-hidden={activeStage < 3}><span>RESOLVED</span><strong>Response sent</strong><i>✓</i></div></div></div></div></section>;
}

export function HomeExperience() {
  const [active, setActive] = useState(0);
  const role = careerMilestones[active];
  return <section id="experience" className="home-experience" aria-labelledby="experience-title"><div className="shell experience-top"><div><p className="section-label">Experience</p><h2 id="experience-title">Built from the work,<br />not just around it.</h2></div><p>My path from logistics operations to enterprise software gives me context for both the user and the system.</p></div><div className="shell career-path"><div className="career-track" aria-hidden="true"><span style={{ width: `${((active + 1) / careerMilestones.length) * 100}%` }} /></div>{careerMilestones.map((item, index) => <button className={index === active ? "is-active" : ""} key={item.id} onClick={() => setActive(index)} type="button" aria-pressed={index === active}><i>{String(index + 1).padStart(2, "0")}</i><span>{item.dates}</span><strong>{item.title}</strong></button>)}</div><div className="shell career-detail" aria-live="polite"><div><p>{role.company}</p><h3>{role.title}</h3></div><p>{role.summary}</p><div className="career-tools">{role.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div><div className="shell"><Link className="text-link" href="/experience">Explore the full timeline <span>→</span></Link></div></section>;
}
