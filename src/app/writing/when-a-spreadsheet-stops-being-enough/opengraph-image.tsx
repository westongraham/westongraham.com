import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#f5f3ee", color: "#20201e" }}><div style={{ display: "flex", fontSize: 28, color: "#1d5ea8", fontWeight: 700 }}>ENGINEERING · WESTON GRAHAM</div><div style={{ display: "flex", maxWidth: 950, fontSize: 84, lineHeight: 1, letterSpacing: -4 }}>When a spreadsheet stops being enough</div><div style={{ display: "flex", borderTop: "2px solid #20201e", paddingTop: 24, fontSize: 26 }}>A repeated process may need a better tool.</div></div>, size);
}
