"use client";

import { Card } from "@heroui/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudyImage } from "@/data/case-studies";

type ProjectCardProps = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  heroImage?: CaseStudyImage;
  index: number;
};

export function ProjectCard({
  slug,
  title,
  eyebrow,
  description,
  heroImage,
  index,
}: ProjectCardProps) {
  return (
    <Link className={`project-card project-card-${index + 1}`} href={`/projects/${slug}`}>
      <Card variant="secondary">
        <div className="project-media">
          {heroImage ? (
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
            />
          ) : (
            <div className="groundwork-visual">
              <span>Groundwork</span>
              <strong>AI, made<br />practical.</strong>
              <small>Learn · Apply · Build</small>
            </div>
          )}
        </div>
        <Card.Content>
          <span className="project-number">0{index + 1}</span>
          <p className="section-label">{eyebrow}</p>
          <Card.Title>{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
          <b>View project <ArrowUpRight size={17} /></b>
        </Card.Content>
      </Card>
    </Link>
  );
}
