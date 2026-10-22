import Link from "next/link";
import { Mark, StillFrame, Wash } from "@/components/atmosphere/Decor";
import { Container } from "@/components/Container";
import { Stripe } from "@/components/Stripe";
import type { AtmosphereImage } from "@/lib/atmosphere";

export function PageHero({
  eyebrow,
  title,
  lede,
  current,
  wash,
  frame,
  mark,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  current: string;
  wash?: AtmosphereImage;
  frame?: AtmosphereImage;
  mark?: AtmosphereImage;
}) {
  return (
    <header>
      <div className="relative overflow-hidden">
        <Wash image={wash} tone="paper" mask="right" priority />
        <StillFrame
          image={frame}
          className="pointer-events-none absolute top-1/2 right-0 z-10 hidden w-[11rem] -translate-y-1/2 translate-x-[30%] lg:block"
        />
        <Container className="relative py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="underline decoration-line underline-offset-4 hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-ink" aria-current="page">
                {current}
              </li>
            </ol>
          </nav>
          <p className="eyebrow mt-6 flex items-center gap-2.5">
            <Mark image={mark} />
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl font-sans text-4xl leading-[1.12] text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p>
        </Container>
      </div>
      <Stripe />
    </header>
  );
}
