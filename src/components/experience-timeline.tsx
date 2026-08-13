"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Briefcase, CheckCircle } from "@phosphor-icons/react";
import { Button, Card, Chip } from "@heroui/react";
import { useState } from "react";
import { careerMilestones } from "@/data/experience";

const timelineMilestones = [...careerMilestones].reverse();

export function ExperienceTimeline({ compact = false }: { compact?: boolean }) {
  const [activeIndex, setActiveIndex] = useState(timelineMilestones.length - 1);
  const reduceMotion = useReducedMotion();
  const active = timelineMilestones[activeIndex];

  return (
    <section className={`trajectory ${compact ? "is-compact" : ""}`} aria-labelledby={compact ? "home-trajectory-title" : "timeline-title"}>
      <div className="trajectory-heading">
        <div>
          <p className="section-label">Career progression</p>
          <h2 id={compact ? "home-trajectory-title" : "timeline-title"}>Systems I build.<br />Impact I <em>deliver.</em></h2>
        </div>
        <p>From logistics operations to connected enterprise software—each role added context for the next system.</p>
      </div>

      <div className="trajectory-map" role="group" aria-label="Career milestones">
        <div className="trajectory-line" aria-hidden="true" />
        {timelineMilestones.map((item, index) => (
          <motion.button
            className={`trajectory-stop stop-${index + 1} ${activeIndex === index ? "is-active" : ""}`}
            type="button"
            aria-pressed={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            key={item.id}
            initial={false}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="trajectory-orbit" aria-hidden="true"><i /></span>
            <span className="trajectory-date">{item.dates}</span>
            <strong>{item.title}</strong>
            <span>{item.company}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
        >
          <Card className="trajectory-detail" variant="secondary">
            <Card.Header>
              <div className="trajectory-icon"><Briefcase size={20} /></div>
              <div>
                <p>{active.dates} · {active.company}</p>
                <Card.Title>{active.title}</Card.Title>
                <Card.Description>{active.summary}</Card.Description>
              </div>
            </Card.Header>
            <Card.Content>
              <ul>
                {active.responsibilities.slice(0, compact ? 2 : 3).map((item) => (
                  <li key={item}><CheckCircle size={17} weight="fill" />{item}</li>
                ))}
              </ul>
            </Card.Content>
            <Card.Footer>
              <div className="trajectory-chips">
                {active.technologies.map((technology) => <Chip size="sm" variant="soft" key={technology}>{technology}</Chip>)}
              </div>
              {!compact ? <Button variant="ghost" size="sm" onPress={() => window.open("/documents/weston-graham-resume.pdf", "_blank")}>
                View resume <ArrowUpRight size={16} />
              </Button> : null}
            </Card.Footer>
          </Card>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
