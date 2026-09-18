import Link from "next/link";
import { CopyEmail } from "@/components/copy-email";
export function SiteFooter() {
  return (
    <footer className="site-footer page-shell">
      <div>
        <Link className="wordmark" href="/">
          Weston Graham
        </Link>
        <p>Software engineer · Arkansas</p>
        <p className="footer-statement">
          Curious about how things work. Disciplined about making them better.
        </p>
        <CopyEmail />
      </div>
      <nav className="footer-links" aria-label="Footer navigation">
        <Link href="/projects">Work</Link>
        <Link href="/experience">Experience</Link>
        <a
          href="https://www.linkedin.com/in/westongraham"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗<span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a
          href="https://github.com/westongraham"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </nav>
      <p className="footer-meta">© {new Date().getFullYear()} Weston Graham</p>
    </footer>
  );
}
