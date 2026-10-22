import Link from "next/link";
import { BottleWash } from "@/components/atmosphere/Photos";
import { Container } from "@/components/Container";
import { Stripe } from "@/components/Stripe";
import type { AtmosphereImage } from "@/lib/atmosphere";

export function PageHero({
  eyebrow,
  title,
  lede,
  current,
  wash,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  current: string;
  wash?: AtmosphereImage;
}) {
  return (
    <header>
      <div className="relative isolate overflow-hidden bg-paper">
        {wash ? <BottleWash image={wash} /> : null}
        <Container className="relative z-10 py-12 sm:py-16">
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
          <p className="eyebrow mt-6">{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl font-sans text-4xl leading-[1.12] text-ink sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p>
        </Container>
      </div>
      <Stripe />
    </header>
  );
}
