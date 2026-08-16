import Link from "next/link";
import type { Metadata } from "next";
import { buildLog } from "@/data/build-log";
import { metadataFor } from "@/data/seo";
export const metadata: Metadata = metadataFor({ path: "/build", title: "Build With Me | Weston Graham", description: "A working notebook where I share project goals, decisions, and next steps.", changeFrequency: "monthly", priority: 0.7 });
export default function BuildPage() { return <main className="page-shell editorial-page"><Link className="back-link" href="/">← Weston Graham</Link><p className="section-label">Build with me</p><h1>A working notebook, not a polished retrospective.</h1><p className="lede">I use this space to share what I&apos;m building, the decisions I&apos;m making, and what I want to try next.</p><div className="build-log">{buildLog.map((entry) => <article key={entry.id}><header><p className="section-label">{entry.date} · {entry.status}</p><h2>{entry.title}</h2><p>{entry.goal}</p></header><div><h3>Decisions</h3><ul>{entry.decisions.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>Next</h3><ul>{entry.next.map((item) => <li key={item}>{item}</li>)}</ul></div></article>)}</div></main>; }
