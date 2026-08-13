import type { Metadata } from "next";
import { ArrowsLeftRight, MagnifyingGlass, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { Card } from "@heroui/react";
import { metadataFor, staticSeoRoutes } from "@/data/seo";

export const metadata: Metadata = metadataFor(staticSeoRoutes[1]);

const principles = [
  { icon: MagnifyingGlass, title: "Understand the work", body: "I start with the process, its history, and the people who know where it breaks." },
  { icon: ArrowsLeftRight, title: "Connect the system", body: "Good interfaces depend on clear data, reliable integrations, and thoughtful boundaries." },
  { icon: UsersThree, title: "Make the next step clear", body: "The best software reduces uncertainty for the person doing the work every day." },
];

export default function AboutPage() {
  return (
    <main className="page-shell editorial-page about-page">
      <header className="page-hero">
        <p className="section-label">About</p>
        <h1>I build with the whole<br /><em>system in view.</em></h1>
        <p className="lede">I enjoy understanding how work really happens—where it slows down, what people need, and how software can make the path clearer.</p>
      </header>
      <section className="principle-grid" aria-label="Working principles">
        {principles.map(({ icon: Icon, title, body }) => (
          <Card variant="secondary" key={title}>
            <Card.Header><span className="principle-icon"><Icon size={23} /></span><Card.Title>{title}</Card.Title></Card.Header>
            <Card.Content><p>{body}</p></Card.Content>
          </Card>
        ))}
      </section>
      <section className="about-story split-copy">
        <div><p className="section-label">How I work</p><h2>Context before code.</h2></div>
        <div>
          <p>Most of the problems I work on already have a history: existing systems, business rules, edge cases, and people who know what goes wrong when something changes. Learning that context helps me make better decisions about the UI, the data, and the integrations behind it.</p>
          <p>I&apos;m most interested in software people use every day—internal applications, APIs, workflow automation, and the maintenance work that keeps a system reliable after it ships.</p>
          <p>Outside of work, I build side projects, explore AI tools, and enjoy home improvement, woodworking, and fitness. The medium changes; the part I enjoy stays the same: learning how something works and improving it step by step.</p>
        </div>
      </section>
    </main>
  );
}
