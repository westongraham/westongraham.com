import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/notes", destination: "/writing", permanent: true },
      {
        source: "/notes/:slug",
        destination: "/writing/:slug",
        permanent: true,
      },
      { source: "/journal", destination: "/writing", permanent: true },
      {
        source: "/journal/:slug",
        destination: "/writing/:slug",
        permanent: true,
      },
      { source: "/build", destination: "/writing", permanent: true },
    ];
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({});
export default withMDX(nextConfig);
