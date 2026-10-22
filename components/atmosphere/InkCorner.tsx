"use client";

import type { ReactNode } from "react";
import { Featured } from "@/components/atmosphere/Decor";
import { useTreatment } from "@/components/atmosphere/Treatment";
import { Container } from "@/components/Container";
import type { AtmosphereImage } from "@/lib/atmosphere";

/**
 * Dark “name is the corner” block.
 * With a treatment on, the counter picture fills the right half, whole.
 * The copy and the quotation stay on the solid ink panel.
 * On a phone the picture sits between them.
 */
export function InkCorner({
  copy,
  quote,
  photo,
}: {
  copy: ReactNode;
  quote: ReactNode;
  photo?: AtmosphereImage;
}) {
  const treatment = useTreatment();

  if (!treatment) {
    return (
      <Container className="grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
        <div>{copy}</div>
        {quote}
      </Container>
    );
  }

  return (
    <Container className="grid items-start gap-8 py-14 sm:gap-10 lg:grid-cols-2 lg:py-20">
      <div className="lg:col-start-1 lg:row-start-1">{copy}</div>
      <Featured image={photo} tone="ink" className="lg:col-start-2 lg:row-span-2 lg:row-start-1" />
      <div className="lg:col-start-1 lg:row-start-2">{quote}</div>
    </Container>
  );
}
