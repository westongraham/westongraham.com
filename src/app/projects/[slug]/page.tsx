import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { ProjectTemplate } from "@/components/project-template";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { absoluteUrl, projectSeoRoute, SITE_NAME } from "@/data/seo";

type ProjectPageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};
  const seo = projectSeoRoute(study.title, study.summary, study.slug);
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: seo.path },
    openGraph: {
      title: `${study.title} | Weston Graham`,
      description: study.summary,
      type: "article",
      url: seo.path,
      siteName: SITE_NAME,
      images: [
        {
          url: `/projects/${study.slug}/opengraph-image`,
          alt: `${study.title} case study`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | Weston Graham`,
      description: study.summary,
      images: [`/projects/${study.slug}/opengraph-image`],
    },
  };
}
export default async function ProjectPage({ params }: ProjectPageProps) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();
  const index = caseStudies.findIndex(({ slug }) => slug === study.slug);
  const nextStudy = caseStudies[(index + 1) % caseStudies.length];
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className={`page-shell editorial-page case-study case-${study.slug}`}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: study.title,
          description: study.summary,
          url: absoluteUrl(`/projects/${study.slug}`),
          author: {
            "@type": "Person",
            name: "Weston Graham",
            url: absoluteUrl("/"),
          },
          keywords: study.technologyStack,
        }}
      />
      <Link className="back-link" href="/projects">
        ← All projects
      </Link>
      <header className="case-intro">
        <div className="case-intro-copy">
          <p className="section-label">{study.eyebrow}</p>
          <h1>{study.title}</h1>
          <p className="lede">{study.summary}</p>
          {study.demo?.url && (
            <div className="case-actions">
              <a
                className="primary-action"
                href={study.demo.url}
                target="_blank"
                rel="noreferrer"
              >
                {study.demo.label ?? "View live site"}{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          )}
        </div>
        <div className="case-intro-visual">
          {study.heroImage ? (
            <Image
              src={study.heroImage.src}
              alt={study.heroImage.alt}
              width={1400}
              height={900}
              priority
              sizes="(max-width: 800px) 100vw, 55vw"
            />
          ) : (
            <div className="groundwork-visual">
              <span>Groundwork AI</span>
              <strong>
                Make AI
                <br />
                useful.
              </strong>
              <small>Learn · Apply · Build</small>
            </div>
          )}
        </div>
      </header>
      <ProjectTemplate study={study} />
      <nav className="next-project" aria-label="Next project">
        <h2 className="section-label">Next project</h2>
        <Link href={`/projects/${nextStudy.slug}`}>
          <span>{nextStudy.eyebrow}</span>
          <strong>
            {nextStudy.title} <i aria-hidden="true">→</i>
          </strong>
        </Link>
      </nav>
    </main>
  );
}
