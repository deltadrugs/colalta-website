"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { treatments } from "@/lib/atmosphere";
import { useStudy } from "@/components/atmosphere/Treatment";
import { withBase } from "@/lib/base";

function onStudyIndex(pathname: string) {
  return pathname === "/preview" || pathname === "/preview/";
}

export function PreviewBar() {
  const pathname = usePathname();
  const { treatment, embed } = useStudy();
  const visible = !embed && (treatment !== null || onStudyIndex(pathname));

  useEffect(() => {
    document.documentElement.toggleAttribute("data-study-bar", visible);
    return () => document.documentElement.removeAttribute("data-study-bar");
  }, [visible]);

  if (!visible) return null;

  return (
    <nav
      aria-label="Photo study"
      className="study-bar fixed bottom-3 left-1/2 z-30 flex w-[min(100%-1.25rem,44rem)] -translate-x-1/2 flex-wrap items-center justify-center gap-1.5 rounded-full border border-ink/80 bg-card/95 px-2 py-1.5 shadow-[0_10px_30px_rgba(56,40,30,0.14)] backdrop-blur-md sm:bottom-4 sm:gap-2 sm:px-3"
    >
      <a
        href={withBase("/preview/")}
        className="px-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-green"
      >
        Studies
      </a>
      {treatments.map((item) => {
        const active = treatment === item.id;
        const href = onStudyIndex(pathname)
          ? withBase(`/?variant=${item.id}`)
          : `?variant=${item.id}`;
        return (
          <a
            key={item.id}
            href={href}
            aria-current={active ? "true" : undefined}
            className={`inline-flex min-h-10 items-center rounded-full px-3 text-sm font-semibold ${
              active ? "bg-green text-white" : "text-ink hover:bg-sage"
            }`}
          >
            {item.short}
          </a>
        );
      })}
      <a
        href="?variant=off"
        className="inline-flex min-h-10 items-center px-2 text-sm font-semibold text-muted underline decoration-line underline-offset-4"
      >
        Clear
      </a>
    </nav>
  );
}
