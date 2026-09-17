import type { Metadata } from "next";
import Link from "next/link";
import { metadataFor, staticSeoRoutes } from "@/data/seo";
export const metadata: Metadata = metadataFor(staticSeoRoutes[1]);
export default function AboutPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="page-shell editorial-page about-page"
    >
      <header className="about-hero">
        <div>
          <p className="section-label">About me</p>
          <h1>
            I’m Weston. I like understanding how things work—and making them
            better.
          </h1>
          <p className="lede">
            I’m an Arkansas-based software engineer, husband, dog dad, and
            lifelong builder. Curiosity pulls me into a problem; discipline
            helps me finish it well.
          </p>
        </div>
        <aside
          className="about-identity"
          aria-label="A quick introduction to Weston"
        >
          <span className="about-monogram">WG</span>
          <div>
            <strong>Based in Arkansas</strong>
            <span>Building at ArcBest Technologies</span>
          </div>
          <ul>
            <li>Software</li>
            <li>Practical AI</li>
            <li>Fitness</li>
            <li>OKC Thunder</li>
          </ul>
        </aside>
      </header>
      <section className="about-story">
        <p className="section-label">My path</p>
        <h2>I started close to the work.</h2>
        <div>
          <p>
            I began in logistics operations before moving into technology and
            software engineering. That path taught me that the best solutions
            come from understanding the people, process, and edge cases behind
            the request—not just the ticket.
          </p>
          <p>
            Today I build and support applications, APIs, integrations, and AI
            automation used by sales and customer-service teams. I’m still at my
            best when I can trace a messy problem across systems and turn it
            into something useful.
          </p>
        </div>
      </section>
      <section className="about-principles" aria-labelledby="principles-title">
        <p className="section-label">How I work</p>
        <h2 id="principles-title">Four ideas I keep coming back to.</h2>
        <div className="principle-grid">
          <article>
            <span>01</span>
            <h3>Understand first.</h3>
            <p>Learn the context before choosing the solution.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Make it useful.</h3>
            <p>Good software should make someone’s work clearer or easier.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Stay curious.</h3>
            <p>
              Ask better questions and follow the problem across boundaries.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>Keep improving.</h3>
            <p>
              Ship thoughtfully, learn from reality, and refine the details.
            </p>
          </article>
        </div>
      </section>
      <section className="about-life">
        <div>
          <p className="section-label">Away from the screen</p>
          <h2>Still building, just differently.</h2>
          <p>
            Life outside work is time with my wife and our miniature poodle,
            Zoe, early workouts, OKC Thunder basketball, home projects, and
            experimenting with whatever technology has caught my attention.
          </p>
        </div>
        <div>
          <p className="section-label">What’s next</p>
          <h2>Growing around good engineers.</h2>
          <p>
            I want to keep becoming a stronger full-stack engineer on a team
            where people share ideas, challenge one another, and care about the
            craft and the customer.
          </p>
          <Link className="text-link" href="/projects">
            See what I’m building <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
