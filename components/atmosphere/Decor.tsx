"use client";

import type { AtmosphereImage } from "@/lib/atmosphere";
import { useTreatment } from "@/components/atmosphere/Treatment";

export type WashMask = "right" | "left" | "corner" | "foot" | "even";
export type WashTone = "paper" | "card" | "sage" | "ink";

const masks: Record<WashMask, string> = {
  right: "linear-gradient(90deg, transparent 0%, transparent 46%, #000 86%)",
  left: "linear-gradient(270deg, transparent 0%, transparent 48%, #000 88%)",
  corner: "radial-gradient(78% 72% at 100% 0%, #000 0%, transparent 70%)",
  foot: "radial-gradient(72% 68% at 100% 100%, #000 0%, transparent 68%)",
  even: "linear-gradient(#000, #000)",
};

const toneOpacity: Record<WashTone, number> = {
  paper: 0.2,
  card: 0.16,
  sage: 0.16,
  ink: 0.62,
};

export function Wash({
  image,
  tone = "paper",
  mask = "right",
  opacity,
  priority = false,
}: {
  image?: AtmosphereImage;
  tone?: WashTone;
  mask?: WashMask;
  opacity?: number;
  priority?: boolean;
}) {
  const treatment = useTreatment();
  if (treatment !== "wash" || !image) return null;

  const strength = opacity ?? toneOpacity[tone];
  const maskImage = masks[mask];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <img
        src={image.src}
        srcSet={image.srcSet}
        sizes="100vw"
        alt=""
        width={image.width}
        height={image.height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "low" : "auto"}
        draggable={false}
        className="h-full w-full max-w-none object-cover"
        style={{
          opacity: strength,
          objectPosition: image.position ?? "center",
          filter: tone === "ink" ? "saturate(0.65) brightness(0.8)" : "saturate(0.7) sepia(0.14)",
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      />
      {tone === "ink" ? (
        <div className="absolute inset-0 bg-gradient-to-r from-ink from-[46%] via-ink/78 to-ink/32" />
      ) : null}
    </div>
  );
}

export function StillFrame({
  image,
  className = "",
}: {
  image?: AtmosphereImage;
  className?: string;
}) {
  const treatment = useTreatment();
  if (treatment !== "vignette" || !image) return null;

  return (
    <div aria-hidden="true" className={`border border-ink/80 bg-card p-[5px] ${className}`}>
      <img
        src={image.src}
        alt=""
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="aspect-[5/4] w-full object-cover"
        style={{ objectPosition: image.position ?? "center" }}
      />
    </div>
  );
}

export function BreakFrame({
  image,
  side = "right",
}: {
  image?: AtmosphereImage;
  side?: "left" | "right";
}) {
  const treatment = useTreatment();
  if (treatment !== "vignette" || !image) return null;

  const align = side === "right" ? "justify-end pr-5 sm:pr-14" : "justify-start pl-5 sm:pl-14";

  return (
    <div aria-hidden="true" className={`flex ${align}`}>
      <StillFrame image={image} className="my-2 w-[92px] sm:my-3 sm:w-[132px]" />
    </div>
  );
}

export function Mark({
  image,
  className = "",
  tone = "paper",
}: {
  image?: AtmosphereImage;
  className?: string;
  tone?: "paper" | "ink";
}) {
  const treatment = useTreatment();
  if (treatment !== "accent" || !image) return null;

  const border = tone === "ink" ? "border-paper/45" : "border-line";

  return (
    <img
      src={image.src}
      alt=""
      width={image.width}
      height={image.height}
      loading="lazy"
      decoding="async"
      draggable={false}
      className={`inline-block h-10 w-10 shrink-0 border bg-card object-cover p-px align-middle ${border} ${className}`}
    />
  );
}
