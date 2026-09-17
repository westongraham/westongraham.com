import { careerMilestones } from "@/data/experience";
import { TechStack } from "@/components/engineering-primitives";
export function ExperienceTimeline() {
  return (
    <ol className="career-list">
      {careerMilestones.map((role) => (
        <li key={role.id}>
          <div className="career-date">
            {role.dates}
            <span>{role.company}</span>
          </div>
          <div>
            <h2>{role.title}</h2>
            <p className="career-summary">{role.summary}</p>
            <ul className="case-list-detail">
              {role.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <TechStack items={role.technologies} />
            {role.lessons?.map((lesson) => (
              <p className="career-lesson" key={lesson}>
                {lesson}
              </p>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}
export function ExperienceResumeCta() {
  return (
    <div className="resume-cta">
      <h2>Keep a copy.</h2>
      <a
        className="secondary-action"
        href="/documents/weston-graham-resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        View resume <span aria-hidden="true">↗</span>
        <span className="sr-only"> (PDF, opens in a new tab)</span>
      </a>
    </div>
  );
}
