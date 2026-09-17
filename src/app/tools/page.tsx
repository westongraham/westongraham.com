import Link from "next/link";
import type { Metadata } from "next";
import { DeveloperToolbox } from "@/components/developer-toolbox";
import { metadataFor } from "@/data/seo";
export const metadata: Metadata = {
  ...metadataFor({
    path: "/tools",
    title: "Developer Tools | Weston Graham",
    description: "Small browser-based utilities for everyday engineering work.",
    changeFrequency: "monthly",
    priority: 0.8,
  }),
  robots: { index: false, follow: true },
};
export default function ToolsPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="page-shell editorial-page tools-page"
    >
      <Link className="back-link" href="/">
        ← Weston Graham
      </Link>
      <p className="section-label">Developer toolbox</p>
      <h1>Small tools I reach for while building.</h1>
      <p className="lede">
        Quick browser-based utilities for JSON formatting and Base64 encoding
        and decoding. Everything runs locally in the browser.
      </p>
      <DeveloperToolbox />
    </main>
  );
}
