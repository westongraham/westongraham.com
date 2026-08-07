/**
 * Public, reusable data contract for diagrams. Keep descriptions at a level
 * that is safe to publish; diagrams should explain ideas, not private systems.
 */
export type ArchitectureNode = {
  id: string;
  label: string;
  type: "client" | "service" | "data" | "external" | "process";
  responsibility: string;
  technology?: string;
  details?: string;
  relatedTechnologies?: string[];
};

export type ArchitectureEdge = { from: string; to: string; label?: string };
export type ArchitectureGroup = { id: string; label: string; nodeIds: string[] };

export type ArchitectureDiagramData = {
  id: string;
  title: string;
  description: string;
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
  groups?: ArchitectureGroup[];
};

export const danceStudioArchitecture: ArchitectureDiagramData = {
  id: "dance-studio-costume-manager",
  title: "Costume sizing workflow",
  description: "A high-level public view of how the Dance Studio Costume Manager organizes measurements and vendor size references.",
  nodes: [
    { id: "staff", label: "Studio staff", type: "client", responsibility: "Records measurements and reviews an order-ready size.", technology: "Web browser" },
    { id: "app", label: "Costume manager", type: "service", responsibility: "Guides measurement entry and matches values to vendor sizing references.", technology: "React", relatedTechnologies: ["Tailwind CSS"] },
    { id: "data", label: "Measurements & sizing", type: "data", responsibility: "Keeps dancer measurements and vendor-specific size references together.", technology: "Supabase" },
  ],
  edges: [
    { from: "staff", to: "app", label: "enter & review" },
    { from: "app", to: "data", label: "store & match" },
  ],
};
