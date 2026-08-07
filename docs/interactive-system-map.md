# Interactive System Map

The Interactive System Map is the reusable architecture diagram used across project pages, Engineering Notes, and optional experience milestones. It is designed for public, high-level architecture storytelling. Do not include private endpoints, credentials, customer data, internal schemas, or confidential system details.

## 1. Create the diagram data

Create a diagram in `src/data/architecture.ts`, or add a new module under `src/data/architecture/` when the collection grows. Import the `ArchitectureDiagramData` type.

```ts
import type { ArchitectureDiagramData } from "@/data/architecture";

export const exampleArchitecture: ArchitectureDiagramData = {
  id: "example-architecture",
  title: "Example request flow",
  description: "A public high-level view of how a user request moves through the application.",
  nodes: [
    {
      id: "browser",
      label: "Web client",
      type: "client",
      responsibility: "Collects input and presents the result to the user.",
      technology: "React",
      relatedTechnologies: ["TypeScript"],
    },
    {
      id: "api",
      label: "Application API",
      type: "service",
      responsibility: "Validates requests and coordinates application work.",
      technology: ".NET",
    },
    {
      id: "data",
      label: "Application data",
      type: "data",
      responsibility: "Stores the records needed by the application.",
      technology: "PostgreSQL",
    },
  ],
  edges: [
    { from: "browser", to: "api", label: "request" },
    { from: "api", to: "data", label: "read / write" },
  ],
};
```

## 2. Define the nodes

Every node needs a stable `id`, a concise `label`, a `type`, and a plain-language `responsibility`.

Supported types are:

- `client` — browser, mobile app, or a person-facing client.
- `service` — application, API, background process, or integration layer.
- `data` — database, storage, queue, or durable data source.
- `external` — third-party service or external dependency.
- `process` — a manual, scheduled, or background workflow.

Optional node fields:

- `technology` — the primary technology shown in the inspector.
- `details` — an extra public, safe explanation.
- `relatedTechnologies` — supporting technology badges in the inspector.

## 3. Connect the nodes

Each edge connects two node IDs:

```ts
edges: [
  { from: "browser", to: "api", label: "request" },
];
```

Labels should describe the flow, such as `request`, `event`, `sync`, `read / write`, or `review`. When a user hovers or focuses a node, the map highlights that node and its connected edges.

`groups` are supported by the data contract for future layers or boundaries. Add them when they clarify an architecture; they are not required for a useful Phase 1 map.

## 4. Add a map to a project

Import the diagram into `src/data/case-studies.ts` and assign it to the project’s `architecture` field:

```ts
import { exampleArchitecture } from "@/data/architecture";

{
  slug: "example-project",
  title: "Example project",
  // Other project fields...
  architecture: exampleArchitecture,
}
```

The shared `ProjectTemplate` renders an **Architecture** section only when this field is present. No project-page changes are needed.

## 5. Add a map to an Engineering Note

MDX files already receive `ArchitectureDiagram` globally. Import only the data object, then render the component:

```mdx
import { exampleArchitecture } from "@/data/architecture";

## Architecture

This is a public, high-level view of the workflow.

<ArchitectureDiagram diagram={exampleArchitecture} />
```

Notes live in `src/content/notes/`. See the existing note for a working reference.

## 6. Add a map to an experience milestone

In `src/data/experience.ts`, set the optional `architectureDiagram` field on a `CareerMilestone`:

```ts
{
  id: "example-role",
  // Other milestone fields...
  architectureDiagram: exampleArchitecture,
}
```

The map appears inside that milestone’s expanded details. Use this only for information that is appropriate to share publicly.

## 7. What readers can do

The component works with mouse, touch, and keyboard:

- Hover or focus a node to highlight its direct dependencies.
- Click a node or press `Enter` / `Space` to select it.
- Read the component inspector below the map for its responsibility and technologies.
- On narrow screens, the map switches from a horizontal flow to a vertical flow automatically.

The flow animation respects the site-wide `prefers-reduced-motion` rule.

## Authoring checklist

- Use a unique, URL-safe `id` for the diagram and unique IDs for every node.
- Keep labels short enough to scan quickly.
- Write a meaningful `description`; it is the accessible summary of the diagram.
- Explain responsibilities and decisions, not private implementation details.
- Add only nodes and edges that help tell the project’s story.
- Run `npm run lint` and `npx tsc --noEmit` after adding a map.
