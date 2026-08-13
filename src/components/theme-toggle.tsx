import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";

export function ThemeToggle() {
  return (
    <button className="theme-toggle" type="button" data-theme-toggle aria-label="Toggle color theme" title="Toggle color theme">
      <span className="theme-icon-light" aria-hidden="true"><Moon size={19} weight="regular" /></span>
      <span className="theme-icon-dark" aria-hidden="true"><Sun size={19} weight="regular" /></span>
    </button>
  );
}
