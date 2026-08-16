import type { ArchitectureDiagramData } from "@/data/architecture";

export type CareerMilestone = {
  id: string;
  dates: string;
  title: string;
  company: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  lessons?: string[];
  architectureDiagram?: ArchitectureDiagramData;
};

/** Public, intentionally high-level career information. */
export const careerMilestones: CareerMilestone[] = [
  { id: "pss-ii", dates: "2025 — present", title: "Product Support Specialist II", company: "ArcBest Technologies", summary: "Building and supporting software used across the business.", responsibilities: ["Build and maintain production applications used across the company.", "Develop APIs and integrations between internal and external systems.", "Troubleshoot production problems and work across teams to fix them."], technologies: [".NET", "Vue", "SQL", "Salesforce", "ServiceNow"], lessons: ["Supporting software in production has taught me to look beyond the code and understand how people actually use it."] },
  { id: "pss-i", dates: "2023 — 2025", title: "Product Support Specialist I", company: "ArcBest Technologies", summary: "Moving from software support into development.", responsibilities: ["Built full-stack applications for internal teams.", "Maintained and improved ServiceNow CSM and ITSM tools.", "Led Scrum ceremonies and helped the team keep work moving."], technologies: ["Full stack", "ServiceNow", "Scrum"] },
  { id: "info-center", dates: "2022 — 2023", title: "Information Systems / Info Center", company: "ArcBest Technologies", summary: "Learning how internal tools support day-to-day work.", responsibilities: ["Built custom ServiceNow applications for logistics teams.", "Automated parts of internal processes that had been handled manually.", "Learned how to turn a day-to-day need into a software change."], technologies: ["ServiceNow", "Automation", "Operations"] },
  { id: "carrier-sales", dates: "2021 — 2022", title: "Carrier Sales Support Specialist", company: "ArcBest", summary: "Starting on the operations side of logistics.", responsibilities: ["Worked with operations teams to resolve shipment problems.", "Learned the logistics workflows behind customer and carrier communication.", "Saw firsthand how the tools people use affect their day-to-day work."], technologies: ["Logistics", "Customer support", "Operations"] },
];
