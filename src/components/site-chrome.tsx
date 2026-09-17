"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
const links = [
  { href: "/projects", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
];
export function SiteHeader() {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  const close = () => {
    if (menu.current) menu.current.open = false;
  };
  const navLinks = links.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      aria-current={pathname.startsWith(link.href) ? "page" : undefined}
      onClick={close}
    >
      {link.label}
    </Link>
  ));
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="wordmark" href="/" aria-label="Weston Graham home">
          Weston <span>Graham</span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          {navLinks}
          <a
            href="/documents/weston-graham-resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume<span className="sr-only"> (PDF, opens in a new tab)</span>
          </a>
        </nav>
        <div className="site-actions">
          <ThemeToggle />
          <a className="contact-pill" href="mailto:westongraham11@gmail.com">
            Contact
          </a>
        </div>
        <details
          className="mobile-navigation"
          ref={menu}
          key={pathname}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              close();
              menu.current?.querySelector("summary")?.focus();
            }
          }}
        >
          <summary>
            Menu <span aria-hidden="true">＋</span>
          </summary>
          <nav aria-label="Mobile navigation">
            {navLinks}
            <a
              href="/documents/weston-graham-resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={close}
            >
              Resume<span className="sr-only"> (PDF, opens in a new tab)</span>
            </a>
            <a href="mailto:westongraham11@gmail.com" onClick={close}>
              Contact
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
