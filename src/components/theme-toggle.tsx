"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  const saved = window.localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const preferredTheme = getPreferredTheme();
    document.documentElement.dataset.theme = preferredTheme;
    const frame = window.requestAnimationFrame(() => {
      setTheme(preferredTheme);
      setIsReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const nextTheme: Theme = theme === "light" ? "dark" : "light";

  function toggleTheme() {
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={isReady ? `Switch to ${nextTheme} mode` : "Toggle color theme"}
      title={isReady ? `Switch to ${nextTheme} mode` : "Toggle color theme"}
    >
      <span aria-hidden="true">{isReady && theme === "dark" ? "☼" : "◐"}</span>
      <span>{isReady ? (theme === "light" ? "Dark" : "Light") : "Theme"}</span>
    </button>
  );
}
