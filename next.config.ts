import type { NextConfig } from "next";

/**
 * PREVIEW_BASE (for example `/colalta-preview`) is only for a subpath host.
 * Leave it unset for colalta.com and for a preview served from the domain root.
 * PREVIEW_NOINDEX=1 is read by app/layout.tsx and app/robots.ts at build time.
 */
const previewBase = (process.env.PREVIEW_BASE ?? "").replace(/\/$/, "");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(previewBase ? { basePath: previewBase, assetPrefix: previewBase } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: previewBase,
  },
};

export default nextConfig;
