import Link from "next/link";

export default function SpreadsheetNote() {
  return (
    <main className="shell editorial-page article-page">
      <Link className="back-link" href="/writing">← All notes</Link>
      <header className="article-header">
        <p className="section-label">Engineering · August 2026</p>
        <h1>When a spreadsheet stops being enough</h1>
        <p className="lede">Spreadsheets are useful. The problem starts when they become the system people rely on to do the same work over and over.</p>
      </header>

      <article className="article-copy">
        <p>
          I&apos;ve seen a lot of business processes start in a spreadsheet. That makes sense. A spreadsheet is quick to create, easy to change, and good for trying out a new process before anyone knows what it needs to become.
        </p>
        <p>
          The trouble usually shows up later. More people need access. Information has to move to another system. The same data gets copied into multiple places. Someone has to remember which version is current. At that point, the spreadsheet is no longer just a tool. It is doing the work of an application without the structure of one.
        </p>

        <h2>Signs the process may need a better tool</h2>
        <ul>
          <li>People regularly copy and paste the same information between systems.</li>
          <li>Important steps depend on one person knowing what to do next.</li>
          <li>Different versions of the file create confusion or duplicate work.</li>
          <li>The team needs a history of changes, approvals, or status updates.</li>
          <li>Errors happen because the process depends on manual calculations or lookups.</li>
        </ul>

        <p>
          None of those signs automatically mean a team needs a large custom application. Sometimes the right answer is a better spreadsheet, a form, a workflow in an existing platform, or a small integration. The goal is not to replace every spreadsheet. The goal is to remove the part of the work that keeps causing problems.
        </p>

        <h2>Start with the work, not the technology</h2>
        <p>
          Before building anything, I try to understand what people are actually doing. What information are they collecting? Where does it come from? What decisions are they making? What happens when something is missing or wrong? Those questions usually reveal the real problem faster than starting with a list of features.
        </p>
        <p>
          A good tool should make the normal path easier and make exceptions easier to spot. It should also fit the systems the team already uses. That might mean a small internal app, an API integration, or an automated workflow instead of a new platform.
        </p>

        <h2>What I&apos;m learning</h2>
        <p>
          The best improvements are often simple. They save a few minutes, reduce a few mistakes, or make the next step obvious. Over time, those changes add up for the people using the process every day.
        </p>
      </article>
    </main>
  );
}
