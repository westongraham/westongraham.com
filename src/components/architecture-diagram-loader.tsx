"use client";

import dynamic from "next/dynamic";
import type { ArchitectureDiagramData } from "@/data/architecture";

const ArchitectureDiagram = dynamic(
  () => import("@/components/architecture-diagram").then((module) => module.ArchitectureDiagram),
  {
    ssr: false,
    loading: () => (
      <div className="architecture-loading" role="status">
        <span aria-hidden="true" />
        Loading interactive architecture…
      </div>
    ),
  },
);

export function ArchitectureDiagramLoader({ diagram }: { diagram: ArchitectureDiagramData }) {
  return <ArchitectureDiagram diagram={diagram} />;
}
