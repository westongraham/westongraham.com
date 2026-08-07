import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { getEngineeringNote, getEngineeringNotes } from "@/data/notes";
import { absoluteUrl, SITE_NAME } from "@/data/seo";
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return getEngineeringNotes().map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const note = getEngineeringNote((await params).slug); if (!note) return {}; const path = `/notes/${note.slug}`; return { title: `${note.title} | Weston Graham`, description: note.description, alternates: { canonical: path }, openGraph: { title: note.title, description: note.description, type: "article", url: path, siteName: SITE_NAME } }; }
export default async function NotePage({ params }: Props) { const slug = (await params).slug; const note = getEngineeringNote(slug); if (!note) notFound(); const { default: Note } = await import(`@/content/notes/${slug}.mdx`); return <main className="shell editorial-page note-page"><JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: note.title, description: note.description, datePublished: note.published, mainEntityOfPage: absoluteUrl(`/notes/${note.slug}`), author: { "@type": "Person", name: "Weston Graham", url: absoluteUrl("/") } }} /><Link className="back-link" href="/notes">← All engineering notes</Link><header className="article-header"><p className="section-label">Engineering note · {note.readingTime} min read</p><h1>{note.title}</h1><p className="lede">{note.description}</p><div className="tags">{note.tags?.map((tag) => <span key={tag}>{tag}</span>)}</div></header><article className="article-copy mdx-copy"><Note /></article></main>; }
