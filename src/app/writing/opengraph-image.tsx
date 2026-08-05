import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#f5f3ee", color: "#20201e" }}><div style={{ display: "flex", fontSize: 28, color: "#1d5ea8", fontWeight: 700 }}>WESTON GRAHAM · WRITING</div><div style={{ display: "flex", maxWidth: 930, fontSize: 88, lineHeight: 1, letterSpacing: -4 }}>Notes on software and the things I’m learning.</div><div style={{ display: "flex", borderTop: "2px solid #20201e", paddingTop: 24, fontSize: 26 }}>Engineering · systems · projects</div></div>, size);
}
