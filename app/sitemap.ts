import type { MetadataRoute } from "next";
import { legalNav, nav, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...nav.map((item) => item.href), ...legalNav.map((item) => item.href)];
  const lastModified = new Date("2026-09-24");

  return paths.map((path) => ({
    url: new URL(path === "/" ? "/" : `${path}/`, site.url).toString(),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
