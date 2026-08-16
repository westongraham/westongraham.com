"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Briefcase, CheckCircle } from "@phosphor-icons/react";
import { Button, Card, Chip } from "@heroui/react";
import { useRef } from "react";
import { careerMilestones } from "@/data/experience";

const timelineMilestones = [...careerMilestones];

export function ExperienceTimeline({ compact = false }: { compact?: boolean }) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 72%", "end 68%"],
  });
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 105,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section className={`trajectory ${compact ? "is-compact" : ""}`} aria-labelledby={compact ? "home-trajectory-title" : "timeline-title"}>
      <div className="trajectory-heading">
        <div>
          <p className="section-label">Experience</p>
          <h2 id={compact ? "home-trajectory-title" : "timeline-title"}>What I&apos;ve been<br /><em>working on.</em></h2>
        </div>
        <p>I started in logistics operations and gradually moved closer to the software behind the work.</p>
      </div>

      <div className="experience-timeline-wrap" ref={timelineRef}>
        <div className="experience-timeline-track" aria-hidden="true">
          <motion.div
            className="experience-timeline-progress"
            style={{ scaleY: reduceMotion ? 1 : lineProgress }}
          />
        </div>

        <ol className="experience-timeline" aria-label="Career milestones">
          {timelineMilestones.map((item, index) => (
            <motion.li
              className="experience-timeline-entry"
              key={item.id}
              initial={reduceMotion ? false : { opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.58, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="experience-timeline-marker" aria-hidden="true">
                <span><Briefcase size={17} weight="fill" /></span>
              </div>

              <div className="experience-timeline-meta">
                <span className="experience-timeline-number">0{index + 1}</span>
                <div className="experience-company">
                  <Image src={item.companyLogo.src} alt={item.companyLogo.alt} width={48} height={48} />
                  <strong>{item.company}</strong>
                </div>
                <time>{item.dates}</time>
              </div>

              <Card className="experience-role-card" variant="secondary">
                <Card.Header>
                  <div>
                    <p>{item.summary}</p>
                    <Card.Title>{item.title}</Card.Title>
                  </div>
                </Card.Header>
                <Card.Content>
                  <ul>
                    {item.responsibilities.slice(0, compact ? 2 : 3).map((responsibility) => (
                      <li key={responsibility}><CheckCircle size={17} weight="fill" />{responsibility}</li>
                    ))}
                  </ul>
                </Card.Content>
                <Card.Footer>
                  <div className="trajectory-chips">
                    {item.technologies.map((technology) => <Chip size="sm" variant="soft" key={technology}>{technology}</Chip>)}
                  </div>
                </Card.Footer>
              </Card>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ExperienceResumeCta() {
  return (
    <div className="experience-timeline-cta">
      <p>Want the full role history and more detail?</p>
      <Button variant="ghost" size="sm" onPress={() => window.open("/documents/weston-graham-resume.pdf", "_blank")}>
        View resume <ArrowUpRight size={16} />
      </Button>
    </div>
  );
}
