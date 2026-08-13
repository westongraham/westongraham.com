import Link from "next/link";
import type { Metadata } from "next";
import { DeveloperToolbox } from "@/components/developer-toolbox";
import { metadataFor } from "@/data/seo";
export const metadata: Metadata = metadataFor({ path: "/tools", title: "Developer Tools | Weston Graham", description: "Small browser-based utilities for everyday engineering work.", changeFrequency: "monthly", priority: 0.8 });
export default function ToolsPage() { return <main className="page-shell editorial-page tools-page"><Link className="back-link" href="/">← Weston Graham</Link><p className="section-label">Developer toolbox</p><h1>Small utilities for everyday engineering work.</h1><p className="lede">Practical, local-first tools for formatting, decoding, testing, and checking common development inputs.</p><DeveloperToolbox /></main>; }
