import Link from "next/link";
import type { Metadata } from "next";
import { getEngineeringNotes } from "@/data/notes";
import { metadataFor } from "@/data/seo";

export const metadata: Metadata = metadataFor({ path: "/notes", title: "Engineering Notes | Weston Graham", description: "Engineering notes, decisions, and public project learnings by Weston Graham.", changeFrequency: "monthly", priority: 0.8 });
function formatPublishedDate(published: string) {
  const date = new Date(`${published}T12:00:00`);
  return Number.isNaN(date.getTime()) ? "Date unavailable" : new Intl.DateTimeFormat("en", { month: "long", year: "numeric" }).format(date);
}
export default function NotesPage() { const notes = getEngineeringNotes(); return <main className="page-shell editorial-page notes-page"><Link className="back-link" href="/">← Weston Graham</Link><p className="section-label">Engineering notes</p><h1>Notes from building, learning, and deciding.</h1><p className="lede">A repository-backed notebook for public engineering observations, project decisions, and the details that are useful to revisit.</p>{notes.length ? <div className="notes-index">{notes.map((note) => <article className="note-card" key={note.slug}><p className="section-label">{formatPublishedDate(note.published)} · {note.readingTime} min read</p><h2><Link href={`/notes/${note.slug}`}>{note.title}</Link></h2><p>{note.description}</p><div className="tags">{note.tags?.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div> : <p className="empty-state">Notes are being prepared. Check back soon.</p>}</main>; }
