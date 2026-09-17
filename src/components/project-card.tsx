import Image from "next/image";
import Link from "next/link";
import type { CaseStudyImage } from "@/data/case-studies";
type Props = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  heroImage?: CaseStudyImage;
  index: number;
  headingLevel?: 2 | 3;
};
export function ProjectCard({
  slug,
  title,
  eyebrow,
  description,
  heroImage,
  index,
  headingLevel = 3,
}: Props) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <article
      className={`project-card project-card-${index + 1} project-${slug}`}
    >
      <Link href={`/projects/${slug}`}>
        <div className="project-media">
          {heroImage ? (
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              width={1200}
              height={760}
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          ) : (
            <ProjectVisual slug={slug} />
          )}
        </div>
        <div className="project-copy">
          <div className="project-card-meta">
            <p className="section-label">{eyebrow}</p>
            <span>0{index + 1}</span>
          </div>
          <Heading>{title}</Heading>
          <p>{description}</p>
          <span className="text-link">
            Explore the story <span aria-hidden="true">↗</span>
          </span>
        </div>
      </Link>
    </article>
  );
}

export function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "before-you-buy") {
    return (
      <div className="buy-visual" aria-label="Before You Buy decision preview">
        <span>Before You Buy</span>
        <div className="buy-question">
          <small>Purchase check</small>
          <strong>Can I comfortably afford this?</strong>
          <i aria-hidden="true">
            <b />
          </i>
        </div>
        <small>Private by design · No data stored</small>
      </div>
    );
  }

  return (
    <div className="groundwork-visual">
      <span>Groundwork AI</span>
      <strong>
        Practical AI.
        <br />A place to start.
      </strong>
      <small>Learn · Apply · Build</small>
    </div>
  );
}
