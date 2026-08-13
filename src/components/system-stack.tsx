"use client";

import { motion } from "framer-motion";
import { Brain, Browser, Code, Database, EnvelopeSimple, PlugsConnected } from "@phosphor-icons/react";

const layers = [
  { label: "Interface", detail: "Clear tools for real work", icon: Browser },
  { label: "APIs", detail: "Reliable system boundaries", icon: Code },
  { label: "Data", detail: "Trusted context", icon: Database },
  { label: "Integrations", detail: "Connected enterprise tools", icon: PlugsConnected },
  { label: "AI workflow", detail: "Understand and automate", icon: Brain },
  { label: "Response", detail: "A useful outcome", icon: EnvelopeSimple },
] as const;

export function SystemStack() {
  return (
    <div className="system-stack-visual" aria-label="A layered enterprise system from interface to automated response">
      <div className="system-spine" aria-hidden="true" />
      {layers.map((layer, index) => {
        const Icon = layer.icon;
        return (
          <motion.div
            className="system-layer"
            key={layer.label}
            initial={false}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 + index * 0.09, ease: [0.22, 1, 0.36, 1] }}
          >
            <span><Icon size={19} weight="regular" /></span>
            <strong>{layer.label}</strong>
            <small>{layer.detail}</small>
          </motion.div>
        );
      })}
    </div>
  );
}
