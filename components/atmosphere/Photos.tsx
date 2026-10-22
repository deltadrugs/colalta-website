import { washOpacity, type AtmosphereImage } from "@/lib/atmosphere";

/** A photograph shown whole, at its own proportions. */
export function FeaturePhoto({
  image,
  priority = false,
  className = "",
}: {
  image: AtmosphereImage;
  priority?: boolean;
  className?: string;
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
      className={`block h-auto w-full border border-line object-contain ${className}`}
    />
  );
}

/**
 * Close-cropped amber bottles behind a text section.
 * The section supplies the paper or card color and must be `isolate`, so this
 * image stays behind the type. It only tints that ground.
 */
export function BottleWash({ image }: { image: AtmosphereImage }) {
  return (
    <img
      src={image.src}
      alt=""
      aria-hidden="true"
      width={image.width}
      height={image.height}
      decoding="async"
      draggable={false}
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full max-w-none object-cover"
      style={{ opacity: washOpacity }}
    />
  );
}
