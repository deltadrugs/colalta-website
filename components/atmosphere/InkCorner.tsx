"use client";

import type { ReactNode } from "react";
import { PhotoCard, SidePhoto } from "@/components/atmosphere/Decor";
import { useTreatment } from "@/components/atmosphere/Treatment";
import { Container } from "@/components/Container";
import type { AtmosphereImage } from "@/lib/atmosphere";

/**
 * Dark “name is the corner” block.
 * Wash puts the counter photograph in the right column and keeps the type on solid ink.
 * On a phone the photograph sits between the copy and the quotation.
 */
export function InkCorner({
  copy,
  quote,
  photo,
  card,
}: {
  copy: ReactNode;
  quote: ReactNode;
  photo?: AtmosphereImage;
  card?: AtmosphereImage;
}) {
  const treatment = useTreatment();

  if (treatment === "wash") {
    return (
      <Container className="grid items-start gap-8 py-14 sm:gap-10 lg:grid-cols-2 lg:py-20">
        <div className="lg:col-start-1 lg:row-start-1">{copy}</div>
        <SidePhoto
          image={photo}
          edge="ink"
          className="lg:col-start-2 lg:row-span-2 lg:row-start-1"
        />
        <div className="lg:col-start-1 lg:row-start-2">{quote}</div>
      </Container>
    );
  }

  return (
    <Container className="grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
      <div>
        {copy}
        {treatment === "accent" ? <PhotoCard image={card} className="mt-8" /> : null}
      </div>
      {quote}
    </Container>
  );
}
