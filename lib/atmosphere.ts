/**
 * Decorative still lifes for the photo-study previews.
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

export const treatments = [
  {
    id: "wash",
    label: "Faded wash",
    short: "Wash",
    summary:
      "Low-opacity still lifes behind a few sections. Headings and paragraphs stay on a clear field.",
  },
  {
    id: "vignette",
    label: "Window dressing",
    short: "Frames",
    summary:
      "Small framed bottles at the edge of a page, or resting in the gap between sections.",
  },
  {
    id: "accent",
    label: "Small accents",
    short: "Accents",
    summary: "Tiny crops beside an eyebrow or a heading. Easy to miss until you look for them.",
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
  /** Responsive sources for full-bleed washes. Frames use `src` alone. */
  srcSet?: string;
};

function wide(
  name: string,
  width: number,
  height: number,
  frameWidth: number,
  position?: string,
): AtmosphereImage {
  return {
    src: `/atmosphere/${name}-wide.webp`,
    width,
    height,
    position,
    srcSet: `/atmosphere/${name}-frame.webp ${frameWidth}w, /atmosphere/${name}-wide.webp ${width}w`,
  };
}

function frame(name: string, width: number, height: number, position?: string): AtmosphereImage {
  return {
    src: `/atmosphere/${name}-frame.webp`,
    width,
    height,
    position,
  };
}

function mark(name: string): AtmosphereImage {
  return { src: `/atmosphere/mark-${name}.webp`, width: 192, height: 192 };
}

export const stills = {
  labels: wide("labels", 1280, 960, 640, "50% 62%"),
  group: wide("group", 1280, 960, 640, "50% 48%"),
  counter: wide("counter", 1080, 1000, 640, "70% 45%"),
  waiting: wide("waiting", 1280, 720, 640, "70% 55%"),
  mortar: wide("mortar", 1280, 960, 640, "36% 58%"),
  table: wide("table", 1280, 960, 640, "50% 58%"),
  shelf: wide("shelf", 1280, 363, 720, "50% 50%"),
  amber: wide("amber", 1100, 1116, 640, "55% 55%"),
  labelsFrame: frame("labels", 640, 480, "50% 62%"),
  groupFrame: frame("group", 640, 480, "48% 46%"),
  mortarFrame: frame("mortar", 640, 480, "34% 58%"),
  tableFrame: frame("table", 640, 480, "50% 58%"),
  stepsFrame: frame("steps", 640, 480, "58% 42%"),
  amberFrame: frame("amber", 640, 649, "60% 55%"),
  markMortar: mark("mortar"),
  markLabel: mark("label"),
  markRose: mark("rose"),
  markSteps: mark("steps"),
  markGroup: mark("group"),
} as const;
