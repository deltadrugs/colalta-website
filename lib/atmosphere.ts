/**
 * Decorative photographs for the photo-study previews.
 *
 * These are atmosphere, not documentation. The waiting-room and counter
 * pictures are not photographs of the Pasadena shop and must not be captioned
 * as if they were. Bottle pictures are ornament. All of them are rendered
 * with an empty alt.
 *
 * Open /preview/ or add ?variant=wash|vignette|accent. ?variant=off clears the
 * choice. Nothing is shown without a variant, so the pages match main until
 * someone is comparing.
 */

import { withBase } from "@/lib/base";

export const treatments = [
  {
    id: "wash",
    label: "Photo wash",
    short: "Wash",
    summary:
      "Full-bleed photo bands and a column photograph. The bottles are recognizable, and the type sits on a solid panel.",
  },
  {
    id: "vignette",
    label: "Window dressing",
    short: "Frames",
    summary:
      "Framed photographs in their own column, wide enough to read as prints. Includes the waiting room and the counter.",
  },
  {
    id: "accent",
    label: "Photo accents",
    short: "Accents",
    summary: "Medium photo cards beside a heading or a section. Large enough to enjoy, small enough to leave the page alone.",
  },
] as const;

export type TreatmentId = (typeof treatments)[number]["id"];

const treatmentIds: readonly string[] = treatments.map((item) => item.id);

export function isTreatment(value: string | null): value is TreatmentId {
  return value !== null && treatmentIds.includes(value);
}

export type AtmosphereImage = {
  src: string;
  width: number;
  height: number;
  /** CSS object-position when the picture is cropped into a frame. */
  position?: string;
  /** Responsive sources. Frames and bands both use this. */
  srcSet?: string;
};

function picture(
  name: string,
  width: number,
  height: number,
  frameWidth: number,
  position?: string,
): AtmosphereImage {
  const wideSrc = withBase(`/atmosphere/${name}-wide.webp`);
  const frameSrc = withBase(`/atmosphere/${name}-frame.webp`);
  return {
    src: wideSrc,
    width,
    height,
    position,
    srcSet: `${frameSrc} ${frameWidth}w, ${wideSrc} ${width}w`,
  };
}

export const stills = {
  labels: picture("labels", 1800, 1350, 960, "50% 58%"),
  group: picture("group", 1800, 1350, 960, "50% 46%"),
  counter: picture("counter", 1800, 1087, 960, "50% 58%"),
  waiting: picture("waiting", 1800, 1013, 960, "50% 55%"),
  mortar: picture("mortar", 1800, 1350, 960, "38% 56%"),
  table: picture("table", 1800, 1350, 960, "50% 55%"),
  shelf: picture("shelf", 1800, 1350, 960, "50% 70%"),
  amber: picture("amber", 1800, 1350, 960, "42% 48%"),
  steps: picture("steps", 1800, 1350, 960, "55% 42%"),
} as const;
