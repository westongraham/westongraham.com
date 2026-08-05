import { ImageResponse } from "next/og";
import { caseStudies, getCaseStudy } from "@/data/case-studies";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export default async function OpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const study = getCaseStudy((await params).slug);
  const title = study?.title ?? "Case study";
  const eyebrow = study?.eyebrow ?? "Weston Graham";

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f5f3ee", color: "#20201e", padding: "72px" }}>
      <div style={{ display: "flex", color: "#1d5ea8", fontSize: 25, fontWeight: 700, letterSpacing: 3 }}>{eyebrow.toUpperCase()}</div>
      <div style={{ display: "flex", maxWidth: "950px", fontFamily: "serif", fontSize: 90, lineHeight: 1, letterSpacing: -5 }}>{title}</div>
      <div style={{ display: "flex", width: "100%", justifyContent: "space-between", borderTop: "2px solid #20201e", paddingTop: "24px", fontSize: 28 }}><div style={{ display: "flex" }}>Weston Graham</div><div style={{ display: "flex" }}>Case study</div></div>
    </div>,
    size,
  );
}
