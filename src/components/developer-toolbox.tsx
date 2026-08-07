"use client";

import { useMemo, useState } from "react";

const tools = ["JSON formatter", "Base64", "UUID generator", "Unix timestamp", "JWT decoder", "Regex tester", "CSS gradient", "Color palette", "Cron builder", "HTTP status"] as const;
type Tool = (typeof tools)[number];
const statuses = [{ code: 200, label: "OK", description: "The request succeeded." }, { code: 201, label: "Created", description: "A new resource was created." }, { code: 400, label: "Bad Request", description: "The request cannot be processed as sent." }, { code: 401, label: "Unauthorized", description: "Authentication is required or invalid." }, { code: 403, label: "Forbidden", description: "The server understood but will not authorize the request." }, { code: 404, label: "Not Found", description: "The requested resource was not found." }, { code: 500, label: "Internal Server Error", description: "The server encountered an unexpected condition." }];
function decodeBase64(value: string) { try { return decodeURIComponent(Array.from(atob(value.replace(/-/g, "+").replace(/_/g, "/"))).map((character) => `%${character.charCodeAt(0).toString(16).padStart(2, "0")}`).join("")); } catch { return "Unable to decode this value."; } }
export function DeveloperToolbox() {
  const [active, setActive] = useState<Tool>(tools[0]); const [value, setValue] = useState("{\n  \"hello\": \"world\"\n}"); const [result, setResult] = useState(""); const [status, setStatus] = useState(200); const [colors, setColors] = useState(["#126bb3", "#d9825f", "#36724b", "#202827", "#f7f6f2"]);
  const output = useMemo(() => {
    if (active === "HTTP status") return statuses.find((item) => item.code === status)?.description ?? "";
    if (active === "Color palette") return colors.join("\n");
    return result;
  }, [active, colors, result, status]);
  function run() {
    if (active === "JSON formatter") { try { setResult(JSON.stringify(JSON.parse(value), null, 2)); } catch { setResult("Invalid JSON."); } }
    if (active === "Base64") { try { setResult(btoa(unescape(encodeURIComponent(value)))); } catch { setResult("Unable to encode this value."); } }
    if (active === "UUID generator") setResult(crypto.randomUUID());
    if (active === "Unix timestamp") { const date = new Date(Number(value) * 1000); setResult(Number.isNaN(date.getTime()) ? "Enter a Unix timestamp in seconds." : date.toISOString()); }
    if (active === "JWT decoder") { const part = value.split(".")[1]; setResult(part ? decodeBase64(part) : "Paste a token with three dot-separated parts."); }
    if (active === "Regex tester") { const [pattern = "", text = ""] = value.split("\n", 2); try { setResult(`Matches: ${(text.match(new RegExp(pattern, "g")) ?? []).length}`); } catch { setResult("Invalid regular expression."); } }
    if (active === "CSS gradient") setResult(`background: linear-gradient(135deg, ${value || "#126bb3"}, #d9825f);`);
    if (active === "Color palette") setColors(Array.from({ length: 5 }, () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0")}`));
    if (active === "Cron builder") { const [minute = "*", hour = "*", day = "*", month = "*", weekday = "*"] = value.trim().split(/\s+/); setResult(`Runs at minute ${minute}, hour ${hour}, day ${day}, month ${month}, weekday ${weekday}.`); }
  }
  const placeholders: Record<Tool, string> = { "JSON formatter": "Paste JSON", Base64: "Text to encode", "UUID generator": "Select Generate", "Unix timestamp": "Example: 1735689600", "JWT decoder": "Paste a JWT (decoded locally only)", "Regex tester": "Pattern on first line\nText on second line", "CSS gradient": "Starting color, e.g. #126bb3", "Color palette": "Select Generate", "Cron builder": "* * * * *", "HTTP status": "" };
  return <div className="toolbox"><div className="toolbox-nav" role="tablist" aria-label="Developer tools">{tools.map((tool) => <button key={tool} type="button" role="tab" aria-selected={active === tool} className={active === tool ? "is-active" : ""} onClick={() => { setActive(tool); setResult(""); }}>{tool}</button>)}</div><section className="toolbox-panel" aria-live="polite"><p className="section-label">Local utility</p><h2>{active}</h2>{active === "HTTP status" ? <select value={status} onChange={(event) => setStatus(Number(event.target.value))}>{statuses.map((item) => <option key={item.code} value={item.code}>{item.code} · {item.label}</option>)}</select> : <textarea value={value} onChange={(event) => setValue(event.target.value)} placeholder={placeholders[active]} rows={active === "JSON formatter" ? 10 : 5} />}{active !== "HTTP status" && <button className="button button-dark" type="button" onClick={run}>{active === "UUID generator" || active === "Color palette" ? "Generate" : "Run"}</button>}{active === "Color palette" && <div className="palette">{colors.map((color) => <span key={color} style={{ background: color }}>{color}</span>)}</div>}<pre className="toolbox-output"><code>{output || "Your result will appear here."}</code></pre></section></div>;
}
