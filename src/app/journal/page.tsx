import Link from "next/link";
import type { Metadata } from "next";
import { journalEntries } from "@/data/journal";
import { metadataFor } from "@/data/seo";
export const metadata: Metadata = metadataFor({ path: "/journal", title: "Engineering Journal | Weston Graham", description: "Short engineering observations and lessons from Weston Graham.", changeFrequency: "monthly", priority: 0.7 });
export default function JournalPage() { return <main className="page-shell editorial-page"><Link className="back-link" href="/">← Weston Graham</Link><p className="section-label">Engineering journal</p><h1>Short notes worth carrying forward.</h1><p className="lede">Brief observations about systems, product decisions, and the everyday work of building useful software.</p><div className="notes-index">{journalEntries.map((entry) => <article className="note-card" key={entry.slug}><p className="section-label">{entry.published}</p><h2><Link href={`/journal/${entry.slug}`}>{entry.title}</Link></h2><p>{entry.description}</p></article>)}</div></main>; }
