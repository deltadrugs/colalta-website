/**
 * Subpath prefix for a preview build (`PREVIEW_BASE`, for example `/colalta-preview`).
 * Empty on colalta.com and on any preview served from the domain root.
 * Next inlines `NEXT_PUBLIC_BASE_PATH` at build time.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBase(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
