"use client";

import { useEffect, useId, useMemo, useState } from "react";
import type { ArchitectureDiagramData } from "@/data/architecture";

type Props = { diagram: ArchitectureDiagramData; className?: string };

/** A dependency-free, keyboard-operable diagram for public architecture stories. */
export function ArchitectureDiagram({ diagram, className = "" }: Props) {
  const [selectedId, setSelectedId] = useState(diagram.nodes[0]?.id);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [compact, setCompact] = useState(false);
  const selected = diagram.nodes.find((node) => node.id === selectedId) ?? diagram.nodes[0];
  const activeId = hoveredId ?? selectedId;
  const related = useMemo(() => new Set([activeId, ...diagram.edges.filter((edge) => edge.from === activeId || edge.to === activeId).flatMap((edge) => [edge.from, edge.to])]), [activeId, diagram.edges]);
  const markerId = useId();
  useEffect(() => {
    const media = window.matchMedia("(max-width: 620px)");
    const update = () => setCompact(media.matches);
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  const width = compact ? 420 : Math.max(760, diagram.nodes.length * 250);
  const nodeWidth = compact ? 330 : 176;
  const nodeHeight = 94;
  const height = compact ? diagram.nodes.length * 154 + 70 : 280;
  const positions = diagram.nodes.map((_, index) => compact ? { x: (width - nodeWidth) / 2, y: 58 + index * 154 } : { x: 42 + index * ((width - 84 - nodeWidth) / Math.max(diagram.nodes.length - 1, 1)), y: 94 });

  return <figure className={`architecture-diagram ${className}`} aria-labelledby={`${diagram.id}-caption`}>
    <header className="architecture-header"><div><p className="section-label">Interactive system map</p><h3>{diagram.title}</h3></div><p>Choose a component to inspect its role.</p></header>
    <div className="architecture-canvas" role="group" aria-label={`${diagram.title}. Select a component to inspect it.`}>
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={diagram.description}>
        <defs><pattern id={`${markerId}-grid`} width="24" height="24" patternUnits="userSpaceOnUse"><path d="M 24 0 L 0 0 0 24" fill="none" /></pattern><marker id={markerId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" /></marker></defs>
        <rect className="architecture-grid" width={width} height={height} fill={`url(#${markerId}-grid)`} />
        <text className="architecture-flow-label" x="42" y="42">REQUEST / DATA FLOW</text>
        {diagram.edges.map((edge) => { const from = diagram.nodes.findIndex((node) => node.id === edge.from); const to = diagram.nodes.findIndex((node) => node.id === edge.to); const start = positions[from]; const end = positions[to]; const isRelated = related.has(edge.from) && related.has(edge.to); const path = compact ? `M ${start.x + nodeWidth / 2} ${start.y + nodeHeight} C ${start.x + nodeWidth / 2} ${start.y + nodeHeight + 18}, ${end.x + nodeWidth / 2} ${end.y - 18}, ${end.x + nodeWidth / 2} ${end.y}` : `M ${start.x + nodeWidth} ${start.y + 47} C ${start.x + nodeWidth + 28} ${start.y + 47}, ${end.x - 28} ${end.y + 47}, ${end.x} ${end.y + 47}`; const labelX = compact ? start.x + nodeWidth / 2 : (start.x + nodeWidth + end.x) / 2; const labelY = compact ? start.y + nodeHeight + 24 : start.y + 28; return <g key={`${edge.from}-${edge.to}`} className={`architecture-edge ${isRelated ? "is-related" : ""}`}><path d={path} markerEnd={`url(#${markerId})`} /><text x={labelX} y={labelY}>{edge.label}</text></g>; })}
        {diagram.nodes.map((node, index) => { const active = related.has(node.id); const selectedNode = selectedId === node.id; const position = positions[index]; return <g key={node.id} className={`architecture-node ${active ? "is-related" : ""} ${selectedNode ? "is-selected" : ""}`} tabIndex={0} role="button" aria-label={`Inspect ${node.label}`} aria-pressed={selectedNode} onClick={() => setSelectedId(node.id)} onFocus={() => setHoveredId(node.id)} onBlur={() => setHoveredId(null)} onMouseEnter={() => setHoveredId(node.id)} onMouseLeave={() => setHoveredId(null)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setSelectedId(node.id); } }}><rect className="architecture-node-shadow" x={position.x + 5} y={position.y + 6} width={nodeWidth} height={nodeHeight} rx="10" /><rect x={position.x} y={position.y} width={nodeWidth} height={nodeHeight} rx="10" /><circle cx={position.x + 24} cy={position.y + 24} r="10" /><text x={position.x + 43} y={position.y + 28} className="architecture-node-type">{node.type}</text><text x={position.x + 18} y={position.y + 59} className="architecture-node-label">{node.label}</text><text x={position.x + 18} y={position.y + 80} className="architecture-node-action">inspect ↗</text></g>; })}
      </svg>
    </div>
    {selected && <aside className="architecture-detail" aria-live="polite"><div className="architecture-detail-marker"><span>{selected.type.slice(0, 1)}</span><p className="section-label">Selected component</p></div><div><h3>{selected.label}</h3><p>{selected.responsibility}</p>{selected.technology && <p className="architecture-tech"><strong>Built with</strong> {selected.technology}</p>}{selected.details && <p>{selected.details}</p>}{selected.relatedTechnologies?.length ? <div className="tags">{selected.relatedTechnologies.map((item) => <span key={item}>{item}</span>)}</div> : null}</div></aside>}
    <figcaption id={`${diagram.id}-caption`}>{diagram.title}: {diagram.description}</figcaption>
  </figure>;
}
