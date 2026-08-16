"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
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
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    mobileMenuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <>
      <header className={`site-header ${open ? "menu-is-open" : ""}`}>
        <div className="site-header-inner">
          <Link className="wordmark" href="/" aria-label="Weston Graham home" onClick={() => setOpen(false)}>
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
            <a className="contact-pill" href="mailto:westongraham11@gmail.com?subject=Portfolio%20inquiry">Contact</a>
            <button
              ref={menuButtonRef}
              className="menu-button"
              type="button"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={20} /> : <List size={20} />}
            </button>
          </div>
        </div>
      </header>
      {open ? (
        <nav ref={mobileMenuRef} className="mobile-menu" id="mobile-navigation" aria-label="Mobile navigation">
          {links.map((link) => <Link aria-current={pathname.startsWith(link.href) ? "page" : undefined} href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <a href="/documents/weston-graham-resume.pdf" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Resume</a>
          <a href="mailto:westongraham11@gmail.com?subject=Portfolio%20inquiry" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      ) : null}
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="section-label">Weston Graham · Full-stack engineer</p>
        <h2>Figure out how it works.<br /><em>Then make it better.</em></h2>
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
