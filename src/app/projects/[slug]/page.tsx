import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { ProjectTemplate } from "@/components/project-template";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { absoluteUrl, projectSeoRoute, SITE_NAME } from "@/data/seo";

type ProjectPageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const study = getCaseStudy((await params).slug); if (!study) return {};
  const seo = projectSeoRoute(study.title, study.summary, study.slug);
  return { title: seo.title, description: seo.description, alternates: { canonical: seo.path }, openGraph: { title: `${study.title} | Weston Graham`, description: study.summary, type: "article", url: seo.path, siteName: SITE_NAME, images: [{ url: `/projects/${study.slug}/opengraph-image`, alt: `${study.title} case study` }] }, twitter: { card: "summary_large_image", title: `${study.title} | Weston Graham`, description: study.summary, images: [`/projects/${study.slug}/opengraph-image`] } };
}
export default async function ProjectPage({ params }: ProjectPageProps) {
  const study = getCaseStudy((await params).slug); if (!study) notFound();
  const index = caseStudies.findIndex(({ slug }) => slug === study.slug); const nextStudy = caseStudies[(index + 1) % caseStudies.length];
  return <main className="shell editorial-page case-study"><JsonLd data={{ "@context": "https://schema.org", "@type": "CreativeWork", name: study.title, description: study.summary, url: absoluteUrl(`/projects/${study.slug}`), author: { "@type": "Person", name: "Weston Graham", url: absoluteUrl("/") }, keywords: study.technologyStack }} /><Link className="back-link" href="/projects">← All projects</Link><p className="section-label">{study.eyebrow}</p><h1>{study.title}</h1><p className="lede">{study.summary}</p><ProjectTemplate study={study} /><nav className="next-project" aria-label="Next project"><h2 className="section-label">Next project</h2><Link href={`/projects/${nextStudy.slug}`}><span>{nextStudy.eyebrow}</span><strong>{nextStudy.title} <i aria-hidden="true">→</i></strong></Link></nav></main>;
}
