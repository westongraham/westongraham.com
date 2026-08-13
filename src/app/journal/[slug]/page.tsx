import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { journalEntries } from "@/data/journal";
export function generateStaticParams() { return journalEntries.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = journalEntries.find((item) => item.slug === slug);
  return entry ? { title: `${entry.title} | Weston Graham`, description: entry.description } : {};
}
export default async function JournalEntry({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = journalEntries.find((item) => item.slug === slug);
  if (!entry) notFound();
  return <main className="page-shell editorial-page article-page"><Link className="back-link" href="/journal">← Engineering journal</Link><header className="article-header"><p className="section-label">Engineering journal · {entry.published}</p><h1>{entry.title}</h1><p className="lede">{entry.description}</p></header><article className="article-copy">{entry.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</article></main>;
}
