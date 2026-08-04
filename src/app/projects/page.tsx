import Link from "next/link";

const projects = [
  ["Dance Studio Costume Manager", "A tool for measurements and vendor-specific costume sizes.", "dance-studio-costume-manager"],
  ["AutoFarm", "A computer vision project for plant health and growth monitoring.", "autofarm"],
  ["Attitudes Performing Arts", "A website redesign focused on schedules, classes, and enrollment.", "attitudes-performing-arts"],
];

export default function ProjectsPage() {
  return <main className="shell editorial-page"><Link className="back-link" href="/">← Weston Graham</Link><p className="section-label">Selected work</p><h1>Projects I&apos;ve worked on.</h1><p className="lede">These projects cover software development, product design, and research. Each one started with a specific problem and gave me a chance to learn something new.</p><div className="case-list">{projects.map(([title, description, slug], index) => <Link href={`/projects/${slug}`} className="case-row" key={slug}><span>0{index + 1}</span><div><h2>{title}</h2><p>{description}</p></div><b>↗</b></Link>)}</div></main>;
}
