"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { Stripe } from "@/components/Stripe";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-md">
      <div className="bg-green text-white">
        <Container className="flex flex-col gap-0.5 py-2 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p>Pasadena · {site.address.street}</p>
          <p>{site.hours.summary}</p>
        </Container>
      </div>
      <Stripe />
      <Container className="flex items-center justify-between gap-3 py-3">
        <Link href="/" aria-label="ColAlta Pharmacy, home" className="shrink-0">
          <Logo className="h-auto max-h-9 w-auto max-w-[42vw] sm:max-h-12 sm:max-w-[220px] lg:max-h-14 lg:max-w-none" />
        </Link>
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex min-h-11 items-center px-3 text-base font-semibold ${
                      active ? "text-green" : "text-ink hover:text-green"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={site.phoneHref}
            className="inline-flex min-h-12 items-center rounded-full bg-green px-3 text-base font-semibold text-white hover:bg-pine sm:px-5"
            aria-label={`Call ColAlta Pharmacy at ${site.phoneDisplay}`}
          >
            <span className="sm:hidden">Call</span>
            <span className="hidden sm:inline">{site.phoneDisplay}</span>
          </a>
          <button
            type="button"
            className="inline-flex min-h-12 items-center rounded-full border border-line bg-card px-4 text-base font-semibold text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </Container>
      {open ? (
        <div id="site-menu" ref={panelRef} className="border-t border-line bg-paper lg:hidden">
          <Container className="py-2">
            <nav aria-label="Mobile">
              <ul>
                {nav.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href} className="border-b border-line">
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className="flex min-h-12 items-center text-lg font-semibold text-ink"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="flex flex-col gap-3 py-4">
              <a
                href={site.phoneHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-green px-4 font-semibold text-white"
              >
                Call {site.phoneDisplay}
              </a>
              <a
                href={site.maps.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-card px-4 font-semibold text-ink"
              >
                Directions
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
