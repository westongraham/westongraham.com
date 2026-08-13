import Link from "next/link";
import type { Metadata } from "next";
import { metadataFor, staticSeoRoutes } from "@/data/seo";

export const metadata: Metadata = metadataFor(staticSeoRoutes[4]);

export default function WritingPage() { return <main className="page-shell editorial-page"><Link className="back-link" href="/">← Weston Graham</Link><p className="section-label">Writing</p><h1>Notes on software and the things I&apos;m learning.</h1><p className="lede">I&apos;m using this space for practical notes on engineering, AI, career growth, side projects, and the occasional home project.</p><div className="case-list"><Link href="/writing/when-a-spreadsheet-stops-being-enough" className="case-row"><span>Engineering</span><div><h2>When a spreadsheet stops being enough</h2><p>A simple way to recognize when a repeated process needs a better tool.</p></div><b>↗</b></Link><div className="case-row"><span>In progress</span><div><h2>What I&apos;ve learned from connecting systems</h2><p>Systems · Coming soon</p></div></div></div></main>; }
