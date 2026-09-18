import type { Metadata } from "next";
import { metadataFor, staticSeoRoutes } from "@/data/seo";

export const metadata: Metadata = metadataFor(staticSeoRoutes[1]);

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1} className="page-shell editorial-page about-page">
      <header className="about-hero">
        <div>
          <p className="section-label">About me</p>
          <h1>Hey, I’m Weston.</h1>
          <p className="lede">
            I’m a software engineer from Arkansas who likes building things, learning how things
            work, and probably spending a little too much time tinkering with whatever has my
            attention at the moment.
          </p>
          <p className="lede">
            Technology has been a constant for me for as long as I can remember, but it’s
            definitely not the only thing I’m interested in. This page is a little more about the
            person behind the projects.
          </p>
        </div>
        <aside className="about-identity" aria-label="A quick introduction to Weston">
          <span className="about-monogram">WG</span>
          <div>
            <strong>Software engineer</strong>
            <span>From Arkansas</span>
          </div>
          <ul>
            <li>Technology</li>
            <li>Personal finance</li>
            <li>Fitness</li>
            <li>OKC Thunder</li>
          </ul>
        </aside>
      </header>

      <section className="about-story">
        <p className="section-label">My path</p>
        <h2>How I got here</h2>
        <div>
          <p>
            I was the technology wizard in my house growing up. If something needed to be set up,
            fixed, connected, or figured out, there was a pretty good chance I was involved.
          </p>
          <p>
            That curiosity eventually turned into an interest in programming. I took a programming
            class in high school, loved it, and went into college already knowing I wanted to study
            Information Technology.
          </p>
          <p>
            While I was in college, I started working at ArcBest on the operations side of the
            business. It wasn&apos;t a detour from technology as much as an opportunity to see the
            other side of it. I got to learn how the business actually worked and understand some
            of the people and processes that technology was there to support.
          </p>
          <p>
            Eventually, I moved over to ArcBest Technologies and started working much closer to the
            software itself.
          </p>
          <p>
            That path gave me a perspective I&apos;m glad I have. I didn&apos;t just learn how to build
            and support software. I got to see what that software looks like from the other side of
            the screen.
          </p>
        </div>
      </section>

      <section className="about-principles">
        <p className="section-label">Staying curious</p>
        <h2>What I’m learning</h2>
        <div className="principle-grid">
          <article>
            <span>01</span>
            <p>AI has probably captured more of my curiosity than anything else recently.</p>
          </article>
          <article>
            <span>02</span>
            <p>
              I spend a lot of time experimenting with tools like ChatGPT, Claude, and Grok, trying
              new models as they come out, and figuring out where all of this actually fits into the
              way I work and build.
            </p>
          </article>
          <article>
            <span>03</span>
            <p>
              I&apos;m interested in the technology itself, but I&apos;m probably even more interested
              in what it lets me do. I can take an idea that would&apos;ve stayed in my head a few
              years ago and actually turn it into something. Sometimes that&apos;s a full software
              project. Sometimes it&apos;s a tiny tool I built because I had a problem that annoyed
              me.
            </p>
          </article>
          <article>
            <span>04</span>
            <p>
              I&apos;m also trying to become a better engineer beyond just writing code. I&apos;m
              learning more about architecture, system design, problem solving, and how to make good
              technical decisions when there isn&apos;t an obvious right answer.
            </p>
          </article>
          <article>
            <span>05</span>
            <p>Mostly, I just like learning new things and having an excuse to try them.</p>
          </article>
        </div>
      </section>

      <section className="about-life">
        <div>
          <p className="section-label">Making things</p>
          <h2>I like building things</h2>
          <p>Not everything I build has a GitHub repository.</p>
          <p>
            Software is obviously a big one, but I&apos;m also really into personal finance and
            fitness. I like working on my house, tackling home maintenance projects, and
            occasionally trying my hand at woodworking.
          </p>
          <p>
            Those interests can look pretty different, but I think the appeal is basically the
            same.
          </p>
          <p>
            I like starting with something that could be better and figuring out how to make it
            better. Sometimes that means opening VS Code. Sometimes it means opening the toolbox.
          </p>
          <p>
            And sometimes it means realizing halfway through a project that I probably should&apos;ve
            just called somebody.
          </p>
        </div>
        <div>
          <p className="section-label">Away from the screen</p>
          <h2>Outside of all that</h2>
          <p>I’m married, we have a miniature poodle named Zoe, and I live in Arkansas.</p>
          <p>
            I&apos;m a big OKC Thunder fan, I&apos;m usually in the gym before most people are awake,
            and I&apos;m the kind of person who can spend an unreasonable amount of time researching
            a purchase before finally buying it.
          </p>
          <p>
            I&apos;m naturally pretty structured and tend to think things through. Sometimes
            probably more than I need to. But I&apos;m also curious, competitive with myself, and
            always looking for something I can improve or learn.
          </p>
          <p>
            Whether that&apos;s software, my career, fitness, finances, my house, or some completely
            random thing I&apos;ve gotten interested in that week, I like feeling like I&apos;m moving
            forward.
          </p>
        </div>
      </section>

      <section className="about-story">
        <p className="section-label">What’s next</p>
        <h2>Where I’m headed</h2>
        <div>
          <p>I’m still relatively early in my engineering career, and I’m okay with that.</p>
          <p>
            Right now I care more about becoming genuinely good at this than trying to look like I
            already know everything. I want to work around talented people, take on harder problems,
            understand systems at a deeper level, and keep turning ideas into things people can
            actually use.
          </p>
        </div>
      </section>
    </main>
  );
}
