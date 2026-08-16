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
    slug: "groundwork-ai",
    title: "Groundwork AI",
    eyebrow: "AI education · Consulting · Implementation",
    summary:
      "I built Groundwork AI to help everyday people and businesses find practical ways to use AI and get help putting those ideas into practice.",
    cardDescription:
      "Practical AI examples, guides, consulting, and hands-on help.",
    users: [
      "Everyday people who want to use AI in their daily lives",
      "Small businesses exploring AI adoption and automation",
    ],
    role:
      "I designed and built the site, organized its guides and examples, and shaped how people can ask for consulting or implementation help.",
    problem:
      "I kept seeing the same problem: people hear constantly about what AI can do, but a lot of them still do not know what they should actually use it for. Many resources are either too technical or too vague to help someone take a useful first step.",
    responsibilities: [
      "Built the site for both everyday users and businesses, rather than treating AI as a business-only topic.",
      "Created guides, reusable prompts, and examples based on personal and business use cases.",
      "Built reusable collections and dynamic pages for projects and resources.",
      "Added clear paths for people who want consulting or hands-on implementation help.",
      "Deployed the project on Vercel and continued improving it as the idea developed.",
    ],
    results:
      "Groundwork is my attempt to make AI easier to act on. Someone can explore a practical example, find an idea for daily life or work, or ask for help applying it to their own situation.",
    technologyStack: ["Next.js", "React", "CSS Modules", "Vercel"],
    decisions: [
      {
        decision: "Organize the site around things people want to do, not AI terminology.",
        rationale:
          "An example is easier to understand when it connects to a problem someone already has at work or in daily life.",
      },
      {
        decision: "Combine self-guided education with consulting and implementation services.",
        rationale:
          "Some people want to learn on their own. Others have a specific problem and want help figuring out or building the right approach.",
      },
    ],
    testing: [
      "Reviewed responsive layouts across mobile and desktop breakpoints.",
      "Validated navigation and dynamic routes for projects, resources, and services.",
    ],
    deployment:
      "I deployed the site on Vercel and used reusable routes for examples, guides, and services.",
    lessonsLearned:
      "Starting with the person’s problem works better than starting with the technology. The more specific and familiar the example is, the easier it is for someone to see where AI might actually help.",
    repository: {
      label: "Private repository",
      note: "Source code is private, but the deployed product is available to explore.",
    },
    demo: {
      url: "https://groundwork-ai-beta.vercel.app",
      label: "View live site",
    },
  },
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
      "A dance studio needed a better way to keep dancer measurements and vendor size charts together. Looking back and forth between separate records took time and made costume ordering easier to get wrong.",
    results:
      "I built one place to store measurements and match them to the right vendor sizes while preparing an order.",
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
      "For my senior capstone, our team explored whether computer vision could help monitor maize plants. We also needed a web app where someone could upload an image and understand the results.",
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
      "The studio's website had the information families needed, but schedules, enrollment details, and contact information were difficult to scan, especially on a phone.",
    results:
      "I reorganized the site around the questions a new family is likely to have and made schedules, enrollment, and contact information easier to find on mobile.",
    technologyStack: ["UX design", "Responsive UI", "Content strategy"],
    lessonsLearned:
      "A redesign is not just about making a site look newer. It should help visitors find the information they came for with less effort.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
