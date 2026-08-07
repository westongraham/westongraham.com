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
  { id: "pss-ii", dates: "2025 — present", title: "Product Support Specialist II", company: "ArcBest Technologies", summary: "Production software and connected systems.", responsibilities: ["Build and maintain production applications used in an enterprise environment.", "Develop APIs and integrations across .NET, Vue, SQL, Salesforce, and ServiceNow.", "Support reliable systems while continuing to improve the way work gets done."], technologies: [".NET", "Vue", "SQL", "Salesforce", "ServiceNow"], lessons: ["Strong support work creates context for better engineering decisions."] },
  { id: "pss-i", dates: "2023 — 2025", title: "Product Support Specialist I", company: "ArcBest Technologies", summary: "From support work into full-stack delivery.", responsibilities: ["Developed full-stack business applications for internal teams.", "Maintained ServiceNow CSM and ITSM solutions.", "Led Agile ceremonies as Scrum Master to help the team deliver consistently."], technologies: ["Full stack", "ServiceNow", "Scrum"] },
  { id: "info-center", dates: "2022 — 2023", title: "Information Systems / Info Center", company: "ArcBest Technologies", summary: "Turning operational friction into workflow automation.", responsibilities: ["Built custom ServiceNow applications for logistics operations.", "Created workflow automation that made internal processes easier to follow and support.", "Learned to translate day-to-day business needs into system improvements."], technologies: ["ServiceNow", "Automation", "Operations"] },
  { id: "carrier-sales", dates: "2021 — 2022", title: "Carrier Sales Support Specialist", company: "ArcBest", summary: "Learning the business from the operations side.", responsibilities: ["Worked with operations teams to resolve shipment issues.", "Built firsthand understanding of the logistics workflows behind customer commitments.", "Developed the business context that now informs the systems I build."], technologies: ["Logistics", "Customer support", "Operations"] },
];
