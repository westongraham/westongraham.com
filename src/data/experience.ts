import type { ArchitectureDiagramData } from "@/data/architecture";

export type CareerMilestone = {
  id: string;
  dates: string;
  title: string;
  company: string;
  companyLogo: { src: string; alt: string };
  summary: string;
  responsibilities: string[];
  technologies: string[];
  lessons?: string[];
  architectureDiagram?: ArchitectureDiagramData;
};

/** Public, intentionally high-level career information. */
export const careerMilestones: CareerMilestone[] = [
  {
    id: "pss-ii",
    dates: "Oct 2025 to present",
    title: "Product Support Specialist II",
    company: "ArcBest Technologies",
    companyLogo: { src: "/images/arcbest-logo.png", alt: "ArcBest logo" },
    summary:
      "Software engineering focus · Building and supporting technology for sales and customer service.",
    responsibilities: [
      "Build and maintain production applications used across the company.",
      "Develop APIs and integrations between internal and external systems.",
      "Troubleshoot production problems and work across teams to fix them.",
    ],
    technologies: [".NET", "Vue", "SQL", "Salesforce", "ServiceNow"],
    lessons: [
      "Supporting software in production has taught me to look beyond the code and understand how people actually use it.",
    ],
  },
  {
    id: "pss-i",
    dates: "May 2023 to Oct 2025",
    title: "Product Support Specialist I",
    company: "ArcBest Technologies",
    companyLogo: { src: "/images/arcbest-logo.png", alt: "ArcBest logo" },
    summary: "Moving from software support into full-stack development.",
    responsibilities: [
      "Built full-stack applications for internal teams.",
      "Maintained and improved ServiceNow CSM and ITSM tools.",
      "Led Scrum ceremonies and helped the team keep work moving.",
    ],
    technologies: ["Full stack", "ServiceNow", "Scrum"],
  },
  {
    id: "info-center",
    dates: "Jan 2022 to May 2023",
    title: "Info Center Student Worker",
    company: "ArcBest Technologies",
    companyLogo: { src: "/images/arcbest-logo.png", alt: "ArcBest logo" },
    summary: "Learning how internal tools support day-to-day logistics work.",
    responsibilities: [
      "Built custom ServiceNow applications for logistics teams.",
      "Automated parts of internal processes that had been handled manually.",
      "Learned how to turn a day-to-day need into a software change.",
    ],
    technologies: ["ServiceNow", "Automation", "Operations"],
  },
  {
    id: "carrier-sales",
    dates: "Jan 2021 to Jan 2022",
    title: "Carrier Sales Support Specialist",
    company: "ArcBest",
    companyLogo: { src: "/images/arcbest-logo.png", alt: "ArcBest logo" },
    summary:
      "Starting on the operations side of logistics and learning the work firsthand.",
    responsibilities: [
      "Worked with operations teams to resolve shipment problems.",
      "Learned the logistics workflows behind customer and carrier communication.",
      "Saw firsthand how the tools people use affect their day-to-day work.",
    ],
    technologies: ["Logistics", "Customer support", "Operations"],
  },
];
