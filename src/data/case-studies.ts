import { danceStudioArchitecture, type ArchitectureDiagramData } from "@/data/architecture";

export type CaseStudyImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  disclosure?: "public" | "sanitized-confidential";
  summary: string;
  cardDescription: string;
  heroImage?: CaseStudyImage;
  users?: string[];
  role?: string;
  responsibilities?: string[];
  problem?: string;
  constraints?: string[];
  architecture?: ArchitectureDiagramData;
  technologyStack?: string[];
  dataFlow?: ArchitectureDiagramData;
  decisions?: Array<{ decision: string; rationale: string }>;
  alternatives?: Array<{ option: string; tradeoff: string }>;
  screenshots?: CaseStudyImage[];
  testing?: string[];
  security?: string[];
  deployment?: string;
  results?: string;
  lessonsLearned?: string;
  repository?: { url?: string; label?: string; note?: string };
  demo?: { url?: string; label?: string; note?: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "dance-studio-costume-manager",
    title: "Dance Studio Costume Manager",
    eyebrow: "Product design · Full-stack development",
    summary:
      "A web application for recording dancer measurements and matching them to vendor-specific costume sizes.",
    cardDescription:
      "A tool for measurements and vendor-specific costume sizes.",
    heroImage: {
      src: "/images/DSCMPoster2.jpg",
      alt: "Dance Studio Costume Manager interface showing dancer measurements and vendor costume sizes.",
      caption: "Dance Studio Costume Manager project overview.",
    },
    problem:
      "Costume ordering requires accurate measurements, vendor size charts, and repeated manual lookups. When records and reference materials are in different places, it takes longer to prepare an order and creates more room for mistakes.",
    results:
      "The tool keeps measurements organized and converts them into the right vendor sizes, giving the user one place to prepare an order.",
    technologyStack: ["React", "Supabase", "Tailwind CSS"],
    architecture: danceStudioArchitecture,
    lessonsLearned:
      "A useful side project does not need a large audience. It needs to solve a problem clearly enough that someone can use it without extra instructions.",
  },
  {
    slug: "autofarm",
    title: "AutoFarm",
    eyebrow: "Computer vision · Senior capstone",
    summary:
      "A senior capstone project that used plant images to identify health and growth-stage information.",
    cardDescription:
      "A computer vision project for plant health and growth monitoring.",
    heroImage: {
      src: "/images/autoFarmPoster.png",
      alt: "AutoFarm senior capstone research poster about computer vision for maize plant monitoring.",
      caption: "AutoFarm senior capstone research poster.",
    },
    problem:
      "The goal was to explore whether computer vision could help monitor maize plants. We needed to turn image-processing results into something a user could upload, review, and understand through a web application.",
    role: "Contributed to the React and Flask workflow for uploading images and reviewing results.",
    results:
      "The proof of concept included leaf count, color analysis, and growth-stage detection in a web workflow for uploading images and viewing results.",
    technologyStack: ["React", "Flask", "Python"],
    lessonsLearned:
      "Building the model was only part of the project. The interface matters because it determines whether someone can understand and use the result.",
  },
  {
    slug: "attitudes-performing-arts",
    title: "Attitudes Performing Arts",
    eyebrow: "Information architecture · Website redesign",
    summary: "A website redesign for a local performing arts studio.",
    cardDescription:
      "A website redesign focused on schedules, classes, and enrollment.",
    heroImage: {
      src: "/images/AttitudesPoster.jpg",
      alt: "Attitudes Performing Arts redesigned website homepage displayed on a project poster.",
      caption: "Attitudes Performing Arts redesign project overview.",
    },
    problem:
      "Families needed to find class schedules, enrollment details, and contact information quickly. The existing site had the information, but it was difficult to scan and especially hard to use on a phone.",
    results:
      "The redesign reorganized the site around the questions a new family is likely to have, improved the mobile experience, and made next steps easier to find.",
    technologyStack: ["UX design", "Responsive UI", "Content strategy"],
    lessonsLearned:
      "A redesign is not just about making a site look newer. It should help visitors find the information they came for with less effort.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
