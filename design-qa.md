# Design QA

- Source visual truth: `/workspace/scratch/63bd3dc63e5f/generated_images/exec-51ffa463-666a-47b8-8295-cf64fa09e785.png` for the editorial light-theme composition and `/workspace/scratch/63bd3dc63e5f/generated_images/exec-5e671840-bcbc-4118-a196-2ec7d180148a.png` for systems storytelling and the rising experience path.
- Browser-rendered implementation evidence: `/workspace/scratch/63bd3dc63e5f/repo/qa-home-desktop.jpg` and `/workspace/scratch/63bd3dc63e5f/repo/qa-experience-desktop.jpg`.
- Source pixels: both references are 864 × 1821 px at 1× density.
- Implementation pixels: both browser captures are 1348 × 926 px at 1× density from a 1363 × 936 CSS viewport (browser scrollbar and capture crop account for the 15 px width difference).
- State: light theme; homepage initial workflow stage; experience page current-role selection.

## Full-view comparison evidence

The homepage capture and option 3 were opened together and compared. The implementation preserves the selected reference's warm editorial canvas, large serif hierarchy, cobalt accent, restrained navigation, generous negative space, product-style systems visual, and direct CTA hierarchy. The desktop implementation intentionally uses the wider available viewport to place the system stack beside the hero rather than reproducing the reference's narrow full-page composite literally.

The experience capture and option 2 were opened together and compared. The implementation now follows the reference's chronological lower-left to upper-right progression, orbital milestone markers, blue path, and a detailed selected-role surface below the map. The current role is the highest and rightmost milestone.

## Focused region comparison evidence

- Hero: headline scale, serif treatment, blue italic emphasis, whitespace, and two-action hierarchy match the chosen editorial direction.
- System visual: six distinct layers remain legible and use a single connected spine; no placeholder or low-resolution image is substituted.
- Experience: milestone spacing, chronological rise, dates, role labels, active orbit, and selected-role detail were checked at readable scale.
- Shared chrome: the same header, active-route treatment, theme control, page width, and footer are present across every tested route.

## Required fidelity surfaces

- Fonts and typography: Georgia provides the high-contrast editorial display voice; the system sans face keeps navigation, labels, and product UI compact. Display weights, wrapping, line height, and italic emphasis are consistent with the references.
- Spacing and layout rhythm: the hero, workflow, product reveal, project index, timeline, editorial pages, and footer use a shared 1180 px frame and 90–170 px section rhythm. No desktop route reported horizontal overflow.
- Colors and visual tokens: warm ivory, near-black, quiet gray, white surfaces, and cobalt are mapped through shared light/dark CSS variables. Dark mode preserves contrast without changing component geometry.
- Image quality and asset fidelity: repository project artwork uses `next/image` with responsive sizing. System storytelling uses polished product UI and a real icon library. Existing project images are not stretched or replaced with placeholders.
- Copy and content: the homepage is substantially shorter and lets systems and project visuals carry the story. Secondary pages retain the repository's public project, career, note, and article content.
- Icons: Phosphor icons are used consistently for systems, controls, workflow stages, and status. Icon size and stroke treatment remain restrained.

## Interaction, accessibility, and runtime evidence

- The theme control was tested in the cloud browser and changed `data-theme` and the root theme class from `light` to `dark`. It uses delegated browser-side behavior so it works even before React hydration completes.
- Primary navigation, project links, article links, resume links, and contact CTAs are semantic links.
- Workflow stages and timeline milestones are semantic buttons with pressed state; selected detail uses an `aria-live`-compatible animated replacement.
- All motion respects `prefers-reduced-motion`; essential content is visible before animation and is never opacity-gated by scroll position.
- The complete route sweep covered the homepage, about, experience, projects index, four project pages, writing index/article, journal index/article, notes index/article, tools, and build pages. Every route had the shared header/footer, an H1, persistent theme state, and no horizontal overflow.
- Fresh production checks passed with all 28 pages generated. The local preview was moved to the stable webpack development path after Turbopack's preview-only persistence database became invalid.
- The cloud-browser console showed no current site-origin errors; extension messages were excluded from site diagnostics.

## Comparison history

- P1: redesign applied only to the homepage. Fixed by moving navigation, theme, footer, frame, type, surface, and responsive tokens into the root layout and shared design system used by every route.
- P1: theme toggle did not change theme state. Fixed with a hydration-independent delegated toggle that updates the root class, data attribute, accessible label, and saved preference.
- P1: scroll-driven workflow left a large empty dark region and hid key content. Fixed by replacing it with a bounded, selectable four-stage system canvas; all essential content is visible by default.
- P1: experience presentation did not match the selected rising timeline. Fixed with a chronological orbital path from 2021 at lower left to the current role at upper right, plus a reusable role detail card.
- P2: component surfaces felt improvised and route-specific. Fixed with HeroUI v3 Card, Chip, and Button surfaces, shared primitives, Tailwind v4 styling, and Phosphor icons.
- P2: initial motion could leave layers invisible in the cloud browser. Fixed by removing opacity-gated initial states and limiting animation to transitions that preserve readable fallback content.
- P1 mobile: the workflow outcome could overlap connected-system cards. Fixed by switching the mobile canvas to document flow and giving every stage its own bounded row.
- P1 mobile: the featured automation diagram became a clipped horizontal strip. Fixed with a vertical, scan-friendly request sequence and down-flow connectors.
- P1 mobile: the experience path collapsed into unrelated grid items. Fixed with a continuous vertical trajectory, orbital markers, generous touch targets, and a clear selected state.
- P2 mobile: navigation, card spacing, long headings, project media, architecture details, tools, articles, and case-study sections retained desktop assumptions. Fixed with dedicated 680 px and 380 px compositions instead of simple column collapse.
- P2 mobile accessibility: the menu did not lock background scrolling, return focus on Escape, or expose its expanded state. Fixed with body scroll management, first-link focus, Escape handling, `aria-expanded`, `aria-controls`, and `aria-current`.
- Post-fix evidence: `qa-home-desktop.jpg` and `qa-experience-desktop.jpg` show the corrected light-theme hierarchy and timeline; route sweep and theme interaction were rechecked after the fixes.

## Follow-up polish

- P3 test gap: the cloud-browser surface exposes one desktop viewport, so the mobile correction was validated through source-level breakpoint review, lint, TypeScript, and the production build. The PR's Vercel preview remains the final device-level visual check.

final result: passed
