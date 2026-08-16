import type { Metadata } from "next";
import { ArrowsLeftRight, MagnifyingGlass, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { Card } from "@heroui/react";
import { metadataFor, staticSeoRoutes } from "@/data/seo";

export const metadata: Metadata = metadataFor(staticSeoRoutes[1]);

const principles = [
  { icon: MagnifyingGlass, title: "Ask how it works", body: "I want to understand the process, why it exists, and where people actually run into problems." },
  { icon: ArrowsLeftRight, title: "Follow the connections", body: "A screen rarely tells the whole story. I also look at the data, APIs, integrations, and edge cases behind it." },
  { icon: UsersThree, title: "Keep it useful", body: "The software should make sense to the person who has to use it after I am done building it." },
];

export default function AboutPage() {
  return (
    <main className="page-shell editorial-page about-page">
      <header className="page-hero">
        <p className="section-label">About</p>
        <h1>I like figuring out<br /><em>how things work.</em></h1>
        <p className="lede">I&apos;m curious about what is happening behind the screen, why something behaves the way it does, and how I can make it work better.</p>
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
        <div><p className="section-label">How I think about software</p><h2>Understand it before changing it.</h2></div>
        <div>
          <p>Most of the software I work on already has a history: business rules, edge cases, older decisions, and people who know what happens when something changes. I try to learn that context before deciding what the code should do.</p>
          <p>I enjoy working on software people use every day, especially internal applications, APIs, integrations, and automation. I also like the troubleshooting that comes after something ships, because that is usually where I learn how it really works.</p>
          <p>That curiosity carries outside of work too. I build side projects, experiment with AI, and spend time on woodworking, home projects, and fitness. They are different kinds of problems, but I enjoy the same part of each one: learning, trying something, and improving it a little at a time.</p>
        </div>
      </section>
    </main>
  );
}
