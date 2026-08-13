"use client";

import {
  Background,
  BackgroundVariant,
  Controls,
  Handle,
  MarkerType,
  MiniMap,
  Panel,
  Position,
  ReactFlow,
  useNodesState,
  type Edge,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import { Browser, Code, Database, GearSix, PlugsConnected } from "@phosphor-icons/react";
import { useEffect, useMemo, useState } from "react";
import type { ArchitectureDiagramData, ArchitectureNode } from "@/data/architecture";

type Props = { diagram: ArchitectureDiagramData; className?: string };
type FlowNodeData = ArchitectureNode & { compact: boolean; related: boolean };
type FlowNode = Node<FlowNodeData, "architectureNode">;

const nodeTypes = { architectureNode: ArchitectureFlowNode };
const icons = { client: Browser, service: Code, data: Database, external: PlugsConnected, process: GearSix };

function ArchitectureFlowNode({ data, selected }: NodeProps<FlowNode>) {
  const Icon = icons[data.type];
  const handlePosition = data.compact ? Position.Top : Position.Left;
  const sourcePosition = data.compact ? Position.Bottom : Position.Right;

  return (
    <article className={`architecture-flow-node type-${data.type} ${data.related ? "is-related" : ""} ${selected ? "is-selected" : ""}`}>
      <Handle type="target" position={handlePosition} isConnectable={false} />
      <div className="architecture-node-kicker">
        <span><Icon aria-hidden="true" size={16} weight="duotone" /></span>
        {data.type}
      </div>
      <h4>{data.label}</h4>
      {data.technology && <p>{data.technology}</p>}
      <span className="architecture-node-action">Select to inspect</span>
      <Handle type="source" position={sourcePosition} isConnectable={false} />
    </article>
  );
}

function createNodes(diagram: ArchitectureDiagramData, compact: boolean): FlowNode[] {
  return diagram.nodes.map((node, index) => ({
    id: node.id,
    type: "architectureNode",
    position: compact
      ? { x: 30, y: 34 + index * 196 }
      : { x: 44 + index * 292, y: 126 + (index % 2) * 76 },
    data: { ...node, compact, related: false },
    ariaLabel: `${node.label}, ${node.type}. Select to inspect this component.`,
  }));
}

/** Interactive, responsive public system map powered by React Flow. */
export function ArchitectureDiagram({ diagram, className = "" }: Props) {
  const [selectedId, setSelectedId] = useState(diagram.nodes[0]?.id);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [compact, setCompact] = useState(false);
  const [nodes, setNodes, onNodesChange] = useNodesState<FlowNode>(createNodes(diagram, false));
  const activeId = hoveredId ?? selectedId;
  const selected = diagram.nodes.find((node) => node.id === selectedId) ?? diagram.nodes[0];
  const related = useMemo(
    () => new Set([
      activeId,
      ...diagram.edges
        .filter((edge) => edge.from === activeId || edge.to === activeId)
        .flatMap((edge) => [edge.from, edge.to]),
    ]),
    [activeId, diagram.edges],
  );
  const edges = useMemo<Edge[]>(
    () => diagram.edges.map((edge, index) => {
      const isRelated = related.has(edge.from) && related.has(edge.to);
      return {
        id: `${edge.from}-${edge.to}-${index}`,
        source: edge.from,
        target: edge.to,
        label: edge.label,
        type: "smoothstep",
        animated: isRelated,
        selectable: false,
        focusable: true,
        className: isRelated ? "is-related" : "",
        markerEnd: { type: MarkerType.ArrowClosed, width: 18, height: 18 },
      };
    }),
    [diagram.edges, related],
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 680px)");
    const update = () => setCompact(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    setNodes(createNodes(diagram, compact));
  }, [compact, diagram, setNodes]);

  useEffect(() => {
    setNodes((current) => current.map((node) => ({
      ...node,
      data: { ...node.data, related: related.has(node.id) },
    })));
  }, [related, setNodes]);

  return (
    <figure className={`architecture-diagram ${className}`} aria-labelledby={`${diagram.id}-caption`}>
      <header className="architecture-header">
        <div>
          <p className="section-label">Interactive system map</p>
          <h3>{diagram.title}</h3>
        </div>
        <p>Explore the flow, then select a component for its role and implementation details.</p>
      </header>

      <div className="architecture-canvas" role="group" aria-label={`${diagram.title}. Interactive architecture diagram.`}>
        <ReactFlow<FlowNode, Edge>
          key={`${diagram.id}-${compact ? "compact" : "wide"}`}
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onNodeClick={(_, node) => setSelectedId(node.id)}
          onNodeMouseEnter={(_, node) => setHoveredId(node.id)}
          onNodeMouseLeave={() => setHoveredId(null)}
          fitView
          fitViewOptions={{ padding: compact ? 0.16 : 0.25, maxZoom: 1.08 }}
          minZoom={0.35}
          maxZoom={1.6}
          nodesConnectable={false}
          edgesReconnectable={false}
          deleteKeyCode={null}
          zoomOnScroll={false}
          preventScrolling={false}
          panOnScroll={false}
          attributionPosition="bottom-right"
          aria-label={diagram.description}
        >
          <Background variant={BackgroundVariant.Dots} gap={24} size={1.2} />
          <MiniMap ariaLabel="Architecture overview" pannable zoomable nodeColor="var(--blue)" maskColor="color-mix(in srgb, var(--surface) 78%, transparent)" />
          <Controls showInteractive={false} aria-label="Architecture zoom controls" />
          <Panel position="top-left" className="architecture-flow-hint">
            Drag to explore <span aria-hidden="true">·</span> pinch or use controls to zoom
          </Panel>
        </ReactFlow>
      </div>

      {selected && (
        <aside className="architecture-detail" aria-live="polite">
          <div className="architecture-detail-marker">
            <span>{selected.type.slice(0, 1)}</span>
            <p className="section-label">Selected component</p>
          </div>
          <div>
            <h3>{selected.label}</h3>
            <p>{selected.responsibility}</p>
            {selected.technology && <p className="architecture-tech"><strong>Built with</strong> {selected.technology}</p>}
            {selected.details && <p>{selected.details}</p>}
            {selected.relatedTechnologies?.length ? (
              <div className="tags">{selected.relatedTechnologies.map((item) => <span key={item}>{item}</span>)}</div>
            ) : null}
          </div>
        </aside>
      )}
      <figcaption id={`${diagram.id}-caption`}>{diagram.title}: {diagram.description}</figcaption>
    </figure>
  );
}
