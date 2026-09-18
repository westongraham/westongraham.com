"use client";
import { useState } from "react";
export function DeveloperToolbox() {
  const [tool, setTool] = useState("json");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  function clearResult() {
    setOutput("");
    setError("");
    setMessage("");
  }
  function run(action: string) {
    clearResult();
    try {
      if (!input.trim()) throw new Error("Enter some input first.");
      if (input.length > 100000)
        throw new Error("Use an input under 100,000 characters.");
      if (action === "format")
        setOutput(JSON.stringify(JSON.parse(input), null, 2));
      else if (action === "encode") {
        const bytes = new TextEncoder().encode(input);
        let binary = "";
        for (const byte of bytes) binary += String.fromCharCode(byte);
        setOutput(btoa(binary));
      } else
        setOutput(
          new TextDecoder("utf-8", { fatal: true }).decode(
            Uint8Array.from(atob(input.replace(/\s/g, "")), (c) =>
              c.charCodeAt(0),
            ),
          ),
        );
      setMessage("Result ready.");
    } catch {
      setError(
        tool === "json"
          ? "Enter valid JSON under 100,000 characters."
          : "Enter valid text or UTF-8 Base64 under 100,000 characters.",
      );
    }
  }
  return (
    <section className="toolbox" aria-label="Developer utilities">
      <label htmlFor="tool-select">Choose a tool</label>
      <select
        id="tool-select"
        value={tool}
        onChange={(e) => {
          setTool(e.target.value);
          setInput("");
          clearResult();
        }}
      >
        <option value="json">JSON formatter</option>
        <option value="base64">Base64 encoder / decoder</option>
      </select>
      <p className="tool-description">
        {tool === "json"
          ? "Validate and format JSON with two-space indentation."
          : "Encode UTF-8 text as Base64, or decode it back to text. Base64 is encoding, not encryption."}{" "}
        Input stays in your browser.
      </p>
      <label htmlFor="tool-input">Input</label>
      <textarea
        id="tool-input"
        value={input}
        maxLength={100000}
        spellCheck={false}
        aria-invalid={!!error}
        aria-describedby={error ? "tool-error" : undefined}
        onChange={(e) => {
          setInput(e.target.value);
          clearResult();
        }}
      />
      <div className="tool-actions">
        {tool === "json" ? (
          <button type="button" onClick={() => run("format")}>
            Format JSON
          </button>
        ) : (
          <>
            <button type="button" onClick={() => run("encode")}>
              Encode
            </button>
            <button type="button" onClick={() => run("decode")}>
              Decode
            </button>
          </>
        )}
        <button
          type="button"
          onClick={() => {
            setInput(
              tool === "json"
                ? '{"message":"Hello, world","ready":true}'
                : "Hello, 世界 👋",
            );
            clearResult();
          }}
        >
          Load example
        </button>
        <button
          type="button"
          onClick={() => {
            setInput("");
            clearResult();
          }}
        >
          Reset
        </button>
      </div>
      {error && (
        <p id="tool-error" className="tool-message tool-error" role="alert">
          {error}
        </p>
      )}
      <label htmlFor="tool-output">Result</label>
      <textarea id="tool-output" value={output} readOnly spellCheck={false} />
      <div className="tool-actions">
        <button
          type="button"
          disabled={!output}
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(output);
              setMessage("Result copied.");
            } catch {
              setMessage("Select the result and copy it manually.");
            }
          }}
        >
          Copy result
        </button>
      </div>
      <p className="tool-message" role="status">
        {message}
      </p>
    </section>
  );
}
