import Link from "next/link";
import type { Metadata } from "next";
import { getWriting } from "@/data/writing";
import { metadataFor, staticSeoRoutes } from "@/data/seo";
export const metadata: Metadata = metadataFor(staticSeoRoutes[4]);
export default function WritingPage() {
  return (
    <main id="main-content" tabIndex={-1} className="page-shell editorial-page">
      <header className="page-hero">
        <p className="section-label">Writing</p>
        <h1>
          Notes from
          <br />
          <em>doing the work.</em>
        </h1>
        <p className="lede">
          Decisions, trade-offs, and lessons from building software.
        </p>
      </header>
      <div className="writing-list">
        {getWriting().map((note) => (
          <article key={note.slug}>
            <p className="section-label">
              {note.category}
              {note.published && (
                <>
                  {" "}
                  ·{" "}
                  <time dateTime={note.published}>
                    {new Date(`${note.published}T00:00:00Z`).toLocaleDateString(
                      "en-US",
                      { month: "short", year: "numeric", timeZone: "UTC" },
                    )}
                  </time>
                </>
              )}
            </p>
            <h2>
              <Link href={`/writing/${note.slug}`}>
                {note.title} <span aria-hidden="true">↗</span>
              </Link>
            </h2>
            <p>{note.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
