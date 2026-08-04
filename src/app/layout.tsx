import type { Metadata } from "next";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weston Graham — Full-stack engineer",
  description: "Weston Graham is a full-stack engineer who builds software, integrations, and internal tools that make work easier.",
  metadataBase: new URL("https://westongraham.com"),
  openGraph: {
    title: "Weston Graham — Full-stack engineer",
    description: "Full-stack engineer building software, integrations, and internal tools.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col"><ThemeToggle />{children}</body>
    </html>
  );
}
