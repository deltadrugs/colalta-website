"use client";

import type { ReactNode } from "react";
import type { AtmosphereImage } from "@/lib/atmosphere";
import { useTreatment } from "@/components/atmosphere/Treatment";

function Photo({
  image,
  className,
  priority = false,
  sizes,
}: {
  image: AtmosphereImage;
  className: string;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      alt=""
      width={image.width}
      height={image.height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
      className={className}
      style={{ objectPosition: image.position ?? "center" }}
    />
  );
}

/** Full-bleed photograph. Copy never sits on top of it. */
export function PhotoBand({
  image,
  priority = false,
  className = "",
}: {
  image?: AtmosphereImage;
  priority?: boolean;
  className?: string;
}) {
  const treatment = useTreatment();
  if (treatment !== "wash" || !image) return null;

  return (
    <div aria-hidden="true" className={`overflow-hidden border-y border-line ${className}`}>
      <Photo
        image={image}
        priority={priority}
        sizes="100vw"
        className="h-64 w-full object-cover sm:h-80 lg:h-[26rem]"
      />
    </div>
  );
}

/** Column photograph at full strength. The neighboring column keeps the type. */
export function SidePhoto({
  image,
  priority = false,
  edge = "paper",
  className = "",
}: {
  image?: AtmosphereImage;
  priority?: boolean;
  edge?: "paper" | "ink";
  className?: string;
}) {
  const treatment = useTreatment();
  if (treatment !== "wash" || !image) return null;

  const border = edge === "ink" ? "border-paper/55" : "border-ink";

  return (
    <div aria-hidden="true" className={`overflow-hidden border ${border} ${className}`}>
      <Photo
        image={image}
        priority={priority}
        sizes="(min-width: 1024px) 36rem, 100vw"
        className="aspect-[4/3] w-full object-cover"
      />
    </div>
  );
}

/** Framed photograph sized to fill a column (about 300–450px on a desktop). */
export function StillFrame({
  image,
  className = "",
  priority = false,
}: {
  image?: AtmosphereImage;
  className?: string;
  priority?: boolean;
}) {
  const treatment = useTreatment();
  if (treatment !== "vignette" || !image) return null;

  return (
    <div aria-hidden="true" className={`border border-ink bg-card p-2 sm:p-2.5 ${className}`}>
      <Photo
        image={image}
        priority={priority}
        sizes="(min-width: 1024px) 28rem, 100vw"
        className="aspect-[4/3] w-full object-cover"
      />
    </div>
  );
}

/** Medium photo card for the accent treatment. Not a thumbnail. */
export function PhotoCard({
  image,
  className = "",
  priority = false,
}: {
  image?: AtmosphereImage;
  className?: string;
  priority?: boolean;
}) {
  const treatment = useTreatment();
  if (treatment !== "accent" || !image) return null;

  return (
    <div
      aria-hidden="true"
      className={`w-full max-w-sm border border-ink bg-card p-2 sm:w-80 ${className}`}
    >
      <Photo
        image={image}
        priority={priority}
        sizes="(min-width: 640px) 20rem, 100vw"
        className="aspect-[4/3] w-full object-cover"
      />
    </div>
  );
}

/** Puts a frame or a card in a column only while that treatment is active. */
export function StudyColumns({
  children,
  frame,
  card,
  className = "",
  priority = false,
}: {
  children: ReactNode;
  frame?: AtmosphereImage;
  card?: AtmosphereImage;
  className?: string;
  priority?: boolean;
}) {
  const treatment = useTreatment();
  const showFrame = treatment === "vignette" && Boolean(frame);
  const showCard = treatment === "accent" && Boolean(card);
  const split = showFrame || showCard;

  return (
    <div className={split ? `grid items-start gap-8 lg:grid-cols-12 lg:gap-10 ${className}` : className}>
      <div className={split ? "min-w-0 lg:col-span-7" : "min-w-0"}>{children}</div>
      {showFrame ? (
        <StillFrame image={frame} priority={priority} className="w-full lg:col-span-5" />
      ) : null}
      {showCard ? (
        <div className="lg:col-span-5 lg:flex lg:justify-end">
          <PhotoCard image={card} priority={priority} />
        </div>
      ) : null}
    </div>
  );
}

/** A desktop-width frame in normal flow. Renders nothing for the other treatments. */
export function FrameColumn({
  image,
  className = "",
}: {
  image?: AtmosphereImage;
  className?: string;
}) {
  const treatment = useTreatment();
  if (treatment !== "vignette" || !image) return null;

  return <StillFrame image={image} className={`w-full lg:w-[28rem] lg:max-w-[28rem] lg:shrink-0 ${className}`} />;
}
