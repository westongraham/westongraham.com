# westongraham.com

The source for Weston Graham’s personal portfolio: a full-stack engineer building software, integrations, and internal tools that make work easier.

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Content structure

- `src/app/page.tsx` — homepage and portfolio positioning
- `src/app/projects` — project index and case studies
- `src/app/experience` — career timeline
- `src/app/writing` — writing index
- `src/app/about` — personal narrative

## Engineering platform content

- Add a career milestone in `src/data/experience.ts`. The timeline renders the shared `CareerMilestone` model automatically.
- Add a project in `src/data/case-studies.ts`; `/projects/[slug]` uses the shared `ProjectTemplate` and only renders the sections supplied by that record.
- Add an Engineering Note by creating `src/content/notes/<slug>.mdx` with an exported `metadata` object. It is discovered for `/notes`, the sitemap, and its direct URL during the build. MDX files can use `ArchitectureDiagram`, `Callout`, and `CodeSnippet` without imports.
- Define public, reusable architecture data in `src/data/architecture.ts` using `nodes`, `edges`, and optional `groups`, then pass it to `<ArchitectureDiagram diagram={...} />`. Keep diagrams at a public, non-confidential level.
- See [`docs/interactive-system-map.md`](docs/interactive-system-map.md) for a step-by-step System Map authoring guide and copyable examples.

Project case-study artwork is intentionally abstract until original product screenshots are ready to publish.
