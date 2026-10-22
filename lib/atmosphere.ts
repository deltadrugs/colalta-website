/**
 * Decorative photographs for the photo-study previews.
 *
 * These are atmosphere, not documentation. The waiting-room and counter
 * pictures are not photographs of the Pasadena shop and must not be captioned
 * as if they were. Bottle pictures are ornament. All of them are rendered
 * with an empty alt, whole, at their own proportions.
 *
 * Where each picture is featured, across the homepage and About:
 * labels, waiting, group, counter, table, mortar on the homepage;
 * shelf, amber, and steps on About.
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
    summary: "Full-width and half-width panels. Each picture is whole, and the type sits on its own panel.",
  },
  {
    id: "vignette",
    label: "Window dressing",
    short: "Frames",
    summary: "The same pictures, set in a mat like a print in the window, beside the text.",
  },
  {
    id: "accent",
    label: "Photo accents",
    short: "Accents",
    summary: "The same pictures as inset cards, half a column or wider, with the whole frame visible.",
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
};

function picture(name: string, width: number, height: number): AtmosphereImage {
  return { src: withBase(`/atmosphere/${name}.webp`), width, height };
}

export const stills = {
  waiting: picture("waiting", 1800, 1013),
  counter: picture("counter", 1800, 1800),
  table: picture("table", 1800, 1350),
  mortar: picture("mortar", 1800, 1350),
  steps: picture("steps", 1800, 1350),
  group: picture("group", 1800, 1350),
  shelf: picture("shelf", 1800, 1350),
  amber: picture("amber", 1800, 1350),
  labels: picture("labels", 1800, 1350),
} as const;

/** Every picture the owner sent, in gallery order. */
export const allStills: AtmosphereImage[] = [
  stills.labels,
  stills.waiting,
  stills.group,
  stills.counter,
  stills.table,
  stills.mortar,
  stills.shelf,
  stills.amber,
  stills.steps,
];
