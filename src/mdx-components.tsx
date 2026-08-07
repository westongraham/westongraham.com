import type { MDXComponents } from "mdx/types";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { Callout, CodeSnippet } from "@/components/engineering-primitives";

const components = { ArchitectureDiagram, Callout, CodeSnippet } satisfies MDXComponents;
export function useMDXComponents(): MDXComponents { return components; }
