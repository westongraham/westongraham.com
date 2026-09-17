"use client";
import { useState } from "react";
export function CopyEmail() {
  const [status, setStatus] = useState("");
  return (
    <div className="copy-email">
      <a href="mailto:westongraham11@gmail.com">westongraham11@gmail.com</a>
      <button
        type="button"
        aria-label="Copy email address"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText("westongraham11@gmail.com");
            setStatus("Email copied.");
          } catch {
            setStatus("Select the email address to copy it.");
          }
        }}
      >
        Copy
      </button>
      <span className="copy-status" role="status">
        {status}
      </span>
    </div>
  );
}
