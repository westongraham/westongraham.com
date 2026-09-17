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
    <article className={`project-card project-card-${index + 1}`}>
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
            <div className="groundwork-visual">
              <span>Groundwork AI</span>
              <strong>
                Practical AI.
                <br />A place to start.
              </strong>
              <small>Learn · Apply · Build</small>
            </div>
          )}
        </div>
        <div className="project-copy">
          <p className="section-label">{eyebrow}</p>
          <Heading>{title}</Heading>
          <p>{description}</p>
          <span className="text-link">
            Read case study <span aria-hidden="true">↗</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
