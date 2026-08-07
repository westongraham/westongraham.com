import type { ReactNode } from "react";

export function TechStack({ items }: { items: string[] }) { return <ul className="case-tags" aria-label="Technology stack">{items.map((item) => <li key={item}>{item}</li>)}</ul>; }
export function Callout({ title = "Note", children }: { title?: string; children: ReactNode }) { return <aside className="callout"><strong>{title}</strong><div>{children}</div></aside>; }
export function CodeSnippet({ code, language = "text" }: { code: string; language?: string }) { return <pre className="code-snippet" data-language={language}><code>{code}</code></pre>; }
