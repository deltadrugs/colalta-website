"use client";

import type { ReactNode } from "react";
import type { AtmosphereImage } from "@/lib/atmosphere";
import { useTreatment } from "@/components/atmosphere/Treatment";
import { Container } from "@/components/Container";

function WholePhoto({
  image,
  priority = false,
}: {
  image: AtmosphereImage;
  priority?: boolean;
}) {
  return (
    <img
      src={image.src}
      alt=""
      width={image.width}
      height={image.height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
      className="block h-auto w-full object-contain"
    />
  );
}

/**
 * One picture, whole, at its own proportions.
 * Wash is a plain panel. Window dressing adds a print mat. Accents use a card.
 * The column that holds it decides the width (half the page, or the full measure).
 */
export function Featured({
  image,
  priority = false,
  tone = "paper",
  className = "",
}: {
  image?: AtmosphereImage;
  priority?: boolean;
  tone?: "paper" | "ink";
  className?: string;
}) {
  const treatment = useTreatment();
  if (!treatment || !image) return null;

  const photo = <WholePhoto image={image} priority={priority} />;

  if (treatment === "wash") {
    const edge = tone === "ink" ? "border border-paper/55" : "border border-line";
    return (
      <div aria-hidden="true" className={`${edge} ${className}`}>
        {photo}
      </div>
    );
  }

  if (treatment === "vignette") {
    return (
      <div aria-hidden="true" className={`border border-ink bg-card p-3 sm:p-4 ${className}`}>
        {photo}
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`border border-ink bg-card p-2.5 shadow-[0_10px_28px_rgba(56,40,30,0.08)] sm:p-3 ${className}`}
    >
      {photo}
    </div>
  );
}

/** Text in one half, a whole picture in the other. Renders the text alone until a treatment is on. */
export function Beside({
  children,
  image,
  priority = false,
  tone = "paper",
}: {
  children: ReactNode;
  image?: AtmosphereImage;
  priority?: boolean;
  tone?: "paper" | "ink";
}) {
  const treatment = useTreatment();
  if (!treatment || !image) return <>{children}</>;

  return (
    <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="min-w-0">{children}</div>
      <Featured image={image} priority={priority} tone={tone} />
    </div>
  );
}

/**
 * Homepage hero. Without a treatment the type keeps its wider column and the map sits beside it.
 * With a treatment the picture and the map share a true half, and the type stays on the paper.
 */
export function HeroLayout({
  children,
  image,
  map,
}: {
  children: ReactNode;
  image?: AtmosphereImage;
  map: ReactNode;
}) {
  const treatment = useTreatment();

  if (!treatment) {
    return (
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">{children}</div>
        <div className="lg:col-span-5">{map}</div>
      </div>
    );
  }

  return (
    <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
      <div className="min-w-0">{children}</div>
      <div>
        <Featured image={image} priority className="mb-6" />
        {map}
      </div>
    </div>
  );
}

/** Two or more whole pictures, half the measure on a wide screen and full width on a phone. */
export function PhotoGrid({
  images,
  className = "",
}: {
  images: AtmosphereImage[];
  className?: string;
}) {
  const treatment = useTreatment();
  if (!treatment || images.length === 0) return null;

  return (
    <div className={`grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 ${className}`}>
      {images.map((image) => (
        <Featured key={image.src} image={image} />
      ))}
    </div>
  );
}

/** A single whole picture across the content measure. Nothing is reserved until a treatment is on. */
export function FullPanel({ image }: { image?: AtmosphereImage }) {
  const treatment = useTreatment();
  if (!treatment || !image) return null;

  return (
    <Container className="pb-2">
      <Featured image={image} />
    </Container>
  );
}

/** Gallery block. The padding disappears with the pictures, so the plain pages stay put. */
export function GallerySection({ images }: { images: AtmosphereImage[] }) {
  const treatment = useTreatment();
  if (!treatment || images.length === 0) return null;

  return (
    <section aria-hidden="true">
      <Container className="py-12 sm:py-16">
        <PhotoGrid images={images} />
      </Container>
    </section>
  );
}
