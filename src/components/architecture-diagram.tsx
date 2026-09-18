import type { ArchitectureDiagramData } from "@/data/architecture";
export function ArchitectureDiagram({
  diagram,
}: {
  diagram: ArchitectureDiagramData;
}) {
  return (
    <figure className="architecture-diagram">
      <figcaption>
        <h3>{diagram.title}</h3>
        <p>{diagram.description}</p>
      </figcaption>
      <ol className="architecture-steps">
        {diagram.nodes.map((node, index) => (
          <li key={node.id}>
            <span className="architecture-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h4>{node.label}</h4>
              {node.technology && (
                <span className="architecture-tech">{node.technology}</span>
              )}
              <p>{node.responsibility}</p>
              {node.details && (
                <details>
                  <summary>More about {node.label}</summary>
                  <p>{node.details}</p>
                </details>
              )}
              {node.relatedTechnologies?.length ? (
                <ul className="case-tags">
                  {node.relatedTechnologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              ) : null}
              {diagram.edges
                .filter((edge) => edge.from === node.id)
                .map((edge) => (
                  <p
                    className="architecture-connection"
                    key={`${edge.from}-${edge.to}`}
                  >
                    {edge.label} <span aria-hidden="true">→</span>{" "}
                    {diagram.nodes.find((n) => n.id === edge.to)?.label}
                  </p>
                ))}
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}
