"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Brain, CheckCircle, Database, EnvelopeSimple, FlowArrow, Lightning, Sparkle } from "@phosphor-icons/react";
import { Card, Chip } from "@heroui/react";
import { useState } from "react";
import { ExperienceTimeline } from "@/components/experience-timeline";

const stages = [
  { number: "01", title: "Request", label: "Access request received", detail: "A customer need enters through email.", icon: EnvelopeSimple },
  { number: "02", title: "Understand", label: "Intent and context found", detail: "The request is classified and prioritized.", icon: Brain },
  { number: "03", title: "Connect", label: "Systems work together", detail: "Trusted data is retrieved from the right tools.", icon: Database },
  { number: "04", title: "Resolve", label: "Clear answer delivered", detail: "The work completes and the customer is notified.", icon: CheckCircle },
] as const;

export function RequestWorkflow() {
  const [activeStage, setActiveStage] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = stages[activeStage];
  const ActiveIcon = active.icon;

  return (
    <section className="workflow-section" aria-labelledby="workflow-title">
      <div className="workflow-shell">
        <div className="workflow-intro">
          <p className="section-label">One request. One connected flow.</p>
          <h2 id="workflow-title">From need<br />to <em>resolution.</em></h2>
          <p>Choose a stage to see how a request moves through the system.</p>
        </div>
        <div className="workflow-experience">
          <div className="workflow-tabs" role="group" aria-label="Request workflow">
            {stages.map((stage, index) => (
              <button
                className={index === activeStage ? "is-active" : ""}
                type="button"
                aria-pressed={index === activeStage}
                onClick={() => setActiveStage(index)}
                key={stage.title}
              >
                <span>{stage.number}</span>{stage.title}
              </button>
            ))}
          </div>
          <div className="workflow-canvas">
            <div className="workflow-rail" aria-hidden="true"><span style={{ width: `${(activeStage / 3) * 100}%` }} /></div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={false}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -10, scale: 0.99 }}
                transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="workflow-main-card" variant="secondary">
                  <Card.Header>
                    <div className="workflow-icon"><ActiveIcon size={26} /></div>
                    <Chip size="sm" variant="soft">Stage {active.number}</Chip>
                  </Card.Header>
                  <Card.Content><Card.Title>{active.label}</Card.Title><Card.Description>{active.detail}</Card.Description></Card.Content>
                  <Card.Footer><span className="live-dot" />Live workflow</Card.Footer>
                </Card>
              </motion.div>
            </AnimatePresence>
            <div className={`workflow-systems ${activeStage >= 2 ? "is-visible" : ""}`} aria-label="Connected systems">
              <span><FlowArrow size={17} />ServiceNow</span><span><Sparkle size={17} />Salesforce</span><span><Database size={17} />SQL</span>
            </div>
            <div className={`workflow-outcome ${activeStage === 3 ? "is-visible" : ""}`}><Lightning size={20} weight="fill" />Resolved</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeExperience() {
  return (
    <section id="experience" className="home-trajectory-wrap">
      <ExperienceTimeline compact />
      <Link className="text-link" href="/experience">Explore the full experience <span>→</span></Link>
    </section>
  );
}
