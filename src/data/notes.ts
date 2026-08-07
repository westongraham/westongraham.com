import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

export type NoteMetadata = { title: string; description: string; published: string; updated?: string; tags?: string[]; technologies?: string[]; project?: string; draft?: boolean };
export type EngineeringNote = NoteMetadata & { slug: string; readingTime: number };
const notesDirectory = path.join(process.cwd(), "src/content/notes");
function parseMetadata(source: string): NoteMetadata {
  const block = source.match(/export const metadata = \{([\s\S]*?)\};/)?.[1] ?? source.match(/^---\s*\n([\s\S]*?)\n---/)?.[1] ?? "";
  const value = (key: string) => block.match(new RegExp(`^\\s*${key}:\\s*(.+?)(?:,)?\\s*$`, "m"))?.[1].trim().replace(/^[\"']|[\"']$/g, "");
  const list = (key: string) => value(key)?.replace(/^\[|\]$/g, "").split(",").map((item) => item.trim().replace(/^['\"]|['\"]$/g, "")).filter(Boolean);
  return { title: value("title") ?? "Untitled note", description: value("description") ?? "", published: value("published") ?? "", updated: value("updated"), tags: list("tags"), technologies: list("technologies"), project: value("project"), draft: value("draft") === "true" };
}
export function getEngineeringNotes(): EngineeringNote[] { return readdirSync(notesDirectory).filter((file) => file.endsWith(".mdx")).map((file) => { const source = readFileSync(path.join(notesDirectory, file), "utf8"); const words = source.replace(/^---[\s\S]*?---|export const metadata = \{[\s\S]*?\};/, "").trim().split(/\s+/).filter(Boolean).length; return { ...parseMetadata(source), slug: file.replace(/\.mdx$/, ""), readingTime: Math.max(1, Math.ceil(words / 220)) }; }).filter((note) => !note.draft).sort((a, b) => b.published.localeCompare(a.published)); }
export function getEngineeringNote(slug: string) { return getEngineeringNotes().find((note) => note.slug === slug); }
