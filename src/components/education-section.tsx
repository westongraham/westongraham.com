import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const educationItems = [
  {
    label: "Degree · 2023",
    title: "Bachelor of Science in Information Technology",
    organization: "Programming · University of Arkansas – Fort Smith",
    description: "Coursework included artificial intelligence, data structures, distributed systems, and computer architecture.",
    image: "/images/diploma.jpg",
    imageAlt: "Weston Graham's Bachelor of Science diploma from the University of Arkansas – Fort Smith",
  },
  {
    label: "Certification",
    title: "SAFe 6 Scrum Master",
    organization: "Scaled Agile Framework",
    description: "Training focused on Scrum ceremonies, Agile facilitation, and helping a team keep work moving.",
    image: "/images/CertifiedSAFe6ScrumMasterCert.jpg",
    imageAlt: "Weston Graham's SAFe 6 Scrum Master certificate",
    certificateUrl: "/images/CertifiedSAFe6ScrumMasterCert.jpg",
  },
] as const;

export function EducationSection() {
  return (
    <section className="education-section" aria-labelledby="education-title">
      <div className="education-heading">
        <div>
          <p className="section-label">Education</p>
          <h2 id="education-title">Education and<br /><em>certification.</em></h2>
        </div>
        <p>My college degree gave me the foundation. The Scrum Master training helped me better understand how a team plans and delivers the work.</p>
      </div>

      <div className="education-grid">
        {educationItems.map((item) => (
          <article className="education-card" key={item.title}>
            <div className="education-card-media">
              <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div className="education-card-copy">
              <p className="section-label">{item.label}</p>
              <h3>{item.title}</h3>
              <strong>{item.organization}</strong>
              <p>{item.description}</p>
              {"certificateUrl" in item ? (
                <a href={item.certificateUrl} target="_blank" rel="noreferrer">View certificate <ArrowUpRight size={16} /></a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
