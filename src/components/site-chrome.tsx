"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="wordmark" href="/" aria-label="Weston Graham home">
          Weston<span>Graham</span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link className={pathname.startsWith(link.href) ? "is-active" : ""} href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
          <a href="/documents/weston-graham-resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </nav>
        <div className="site-actions">
          <ThemeToggle />
          <a className="contact-pill" href="mailto:westongraham11@gmail.com?subject=Portfolio%20inquiry">Let&apos;s talk</a>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          {links.map((link) => <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <a href="/documents/weston-graham-resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          <a href="mailto:westongraham11@gmail.com?subject=Portfolio%20inquiry">Let&apos;s talk</a>
        </nav>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="section-label">Weston Graham · Full-stack engineer</p>
        <h2>Complex systems.<br /><em>Made clear.</em></h2>
      </div>
      <div className="footer-links">
        <Link href="/projects">Work</Link><Link href="/experience">Experience</Link><Link href="/about">About</Link>
        <a href="https://www.linkedin.com/in/westongraham" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="https://github.com/westongraham" target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
      <p className="footer-meta">© {new Date().getFullYear()} Weston Graham</p>
    </footer>
  );
}
