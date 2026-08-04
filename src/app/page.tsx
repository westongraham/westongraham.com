import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Dance Studio Costume Manager",
    type: "Product design · Full-stack development",
    description:
      "A web app for recording dancer measurements and converting them into vendor-specific costume sizes.",
    tags: ["React", "Supabase", "Tailwind CSS"],
    href: "/projects/dance-studio-costume-manager",
    tone: "apricot",
    image: "/images/DSCMPoster2.jpg",
    imageAlt: "Dance Studio Costume Manager showing dancer measurements and vendor costume sizes",
  },
  {
    number: "02",
    title: "AutoFarm",
    type: "Computer vision · Capstone project",
    description:
      "A computer vision project that uses plant images to identify health and growth-stage information.",
    tags: ["React", "Flask", "Python"],
    href: "/projects/autofarm",
    tone: "sage",
    image: "/images/autoFarmPoster.png",
    imageAlt: "AutoFarm senior capstone research poster",
  },
  {
    number: "03",
    title: "Attitudes Performing Arts",
    type: "Information architecture · Website redesign",
    description:
      "A website redesign that makes class schedules, enrollment information, and contact details easier to find.",
    tags: ["UX", "Responsive UI", "Content strategy"],
    href: "/projects/attitudes-performing-arts",
    tone: "blue",
    image: "/images/AttitudesPoster.jpg",
    imageAlt: "Attitudes Performing Arts website redesign homepage",
  },
];

const notes = [
  ["Engineering", "The hidden cost of ‘we’ll just track it in a spreadsheet’"],
  ["Systems", "What enterprise integrations teach you about product design"],
  ["In progress", "Designing automation people actually trust"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Weston Graham home">
          Weston<span>Graham</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/projects">Projects</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/writing">Writing</Link>
          <Link href="/about">About</Link>
          <a href="/documents/weston-graham-resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
        </nav>
        <a className="resume-link" href="mailto:westongraham11@gmail.com?subject=Resume%20request">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero shell">
        <div className="availability"><span /> Building enterprise software at ArcBest Technologies</div>
        <div className="hero-grid">
          <div>
            <p className="kicker">Full-stack engineer · Fort Smith, Arkansas</p>
            <h1>I build software that makes work easier.</h1>
            <p className="hero-copy">
              I’m Weston, a full-stack engineer at ArcBest Technologies. I build and
              support applications, integrations, and internal tools with .NET, Vue,
              SQL, Salesforce, and ServiceNow.
            </p>
            <div className="hero-actions">
              <Link className="button button-dark" href="#work">View selected work <span>↓</span></Link>
              <a className="button button-light" href="/documents/weston-graham-resume.pdf" target="_blank" rel="noreferrer">View resume <span>↗</span></a>
            </div>
          </div>
          <aside className="identity-card" aria-label="Current role">
            <div className="portrait" role="img" aria-label="Weston Graham portrait placeholder">WG</div>
            <div className="identity-copy">
              <p className="eyebrow">Currently</p>
              <p>Product Support Specialist II<br />Software Engineering Focus</p>
              <p className="muted">ArcBest Technologies · Since 2022</p>
            </div>
          </aside>
        </div>
        <div className="hero-rule" />
        <div className="hero-footnote">
          <span>Enterprise software</span><span>Integrations</span><span>Internal tools</span><span>AI workflows</span>
        </div>
      </section>

      <section className="statement shell">
        <p className="section-label">How I work</p>
        <div className="statement-grid">
          <h2>Start with the problem, then build the right tool.</h2>
          <div className="statement-copy">
            <p>
              Before I start building, I want to understand how the work is done today,
              where it slows people down, and what information needs to move between
              systems. From there, I focus on a solution that is useful, maintainable,
              and realistic for the team supporting it.
            </p>
            <Link href="/about" className="text-link">More about my approach <span>→</span></Link>
          </div>
        </div>
        <div className="principles">
          <article><span>01</span><h3>Learn how the work gets done</h3><p>Talk to the people using the process and find the parts that cause the most friction.</p></article>
          <article><span>02</span><h3>Build for the whole workflow</h3><p>Think through the UI, data, APIs, and other systems involved—not only the screen in front of the user.</p></article>
          <article><span>03</span><h3>Keep improving it</h3><p>Fix issues, learn from feedback, and make the next change easier to support.</p></article>
        </div>
      </section>

      <section id="work" className="work shell">
        <div className="section-heading">
          <div><p className="section-label">Selected work</p><h2>A few examples of what I&apos;ve built.</h2></div>
          <Link href="/projects" className="text-link">All projects <span>→</span></Link>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <Link href={project.href} className={`project ${project.tone}`} key={project.title}>
              <div className="project-art"><span>{project.number}</span><Image src={project.image} alt={project.imageAlt} width={900} height={500} sizes="(max-width: 760px) 100vw, 230px" /></div>
              <div className="project-content">
                <p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p>
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="background shell">
        <div className="section-heading"><div><p className="section-label">Background</p><h2>Education and certification.</h2></div></div>
        <div className="background-grid">
          <article className="background-card">
            <Image src="/images/UAFSLogo.png" alt="University of Arkansas Fort Smith logo" width={260} height={198} />
            <div><p className="section-label">Education</p><h3>Bachelor of Science in Information Technology — Programming</h3><p>University of Arkansas Fort Smith · May 2023</p><p className="background-detail">Coursework included artificial intelligence, data structures, distributed systems, and computer architecture.</p></div>
          </article>
          <article className="background-card">
            <Image src="/images/CertifiedSAFe6ScrumMasterCert.jpg" alt="SAFe 6 Scrum Master certificate" width={260} height={198} />
            <div><p className="section-label">Certification</p><h3>SAFe 6 Scrum Master</h3><p>Scaled Agile, Inc. · October 2024</p><p className="background-detail">Training in Agile facilitation, Scrum ceremonies, and team delivery practices.</p></div>
          </article>
        </div>
      </section>

      <section className="experience-band">
        <div className="shell experience-layout">
          <div><p className="section-label">Experience</p><h2>What I&apos;ve been working on.</h2></div>
          <div className="timeline">
            <article><p className="timeline-date">2025 — now</p><h3>Product Support Specialist II</h3><p>Building and maintaining production applications, APIs, and enterprise platform integrations.</p></article>
            <article><p className="timeline-date">2023 — 2025</p><h3>Product Support Specialist I</h3><p>Developed full-stack business applications and led Agile ceremonies as Scrum Master.</p></article>
            <article><p className="timeline-date">2022 — 2023</p><h3>Information Systems / Info Center</h3><p>Created ServiceNow applications and workflow automation for logistics operations.</p></article>
          </div>
          <Link href="/experience" className="text-link">View full timeline <span>→</span></Link>
        </div>
      </section>

      <section className="focus shell">
        <div className="focus-card">
          <p className="section-label">Current focus</p>
          <h2>What I&apos;m working on.</h2>
          <ul>
            <li><span>01</span> Building and supporting enterprise software used every day</li>
            <li><span>02</span> Exploring where AI can automate repetitive work without making a process harder to understand</li>
            <li><span>03</span> Learning more about system architecture and API design</li>
            <li><span>04</span> Working on home improvement and woodworking projects outside of software</li>
          </ul>
        </div>
      </section>

      <section className="writing shell">
        <div className="section-heading"><div><p className="section-label">Writing</p><h2>Notes on engineering and projects.</h2></div><Link href="/writing" className="text-link">All notes <span>→</span></Link></div>
        <div className="notes">{notes.map(([type, title], index) => <Link href={index === 0 ? "/writing/when-a-spreadsheet-stops-being-enough" : "/writing"} className="note" key={title}><p>{type}</p><h3>{title}</h3><span>{index === 0 ? "Read note →" : "Coming soon"}</span></Link>)}</div>
      </section>

      <section className="contact shell">
        <p className="section-label">Contact</p>
        <h2>Let&apos;s talk.</h2>
        <p>I&apos;m interested in full-stack engineering work, internal tools, integrations, and software that helps people do their jobs more easily.</p>
        <div className="contact-links"><a href="mailto:westongraham11@gmail.com">westongraham11@gmail.com ↗</a><a href="/documents/weston-graham-resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a><a href="https://www.linkedin.com/in/westongraham" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/westongraham" target="_blank" rel="noreferrer">GitHub ↗</a></div>
      </section>

      <footer className="shell"><span>© {new Date().getFullYear()} Weston Graham</span><span>Based in Fort Smith, Arkansas.</span></footer>
    </main>
  );
}
