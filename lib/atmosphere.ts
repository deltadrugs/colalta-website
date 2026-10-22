/**
 * Photographs for the site.
 *
 * Waiting-room and counter pictures are atmosphere, not photographs of the
 * Pasadena shop, and are not captioned as if they were. The porcelain-jar
 * still life and the amber-bottle textures are ornament. Every image is
 * rendered with an empty alt.
 *
 * Featured, whole, in scroll order on the homepage: waiting, the jar, counter.
 * The other six are close-cropped, shadow-lifted textures behind text.
 */

import { withBase } from "@/lib/base";

export type AtmosphereImage = {
  src: string;
  width: number;
  height: number;
};

function picture(name: string, width: number, height: number): AtmosphereImage {
  return { src: withBase(`/atmosphere/${name}.webp`), width, height };
}

function wash(name: string): AtmosphereImage {
  return { src: withBase(`/atmosphere/${name}-wash.webp`), width: 1368, height: 810 };
}

export const stills = {
  waiting: picture("waiting", 1800, 1013),
  /** White porcelain jar labeled Pterocarpi Lignum, on stacked books. */
  jar: picture("mortar", 1800, 1350),
  counter: picture("counter", 1800, 1800),
  labels: wash("labels"),
  group: wash("group"),
  table: wash("table"),
  steps: wash("steps"),
  shelf: wash("shelf"),
  amber: wash("amber"),
} as const;

/**
 * Opacity of a bottle wash over paper or card.
 * The textures are shadow-lifted first. At 0.34, muted text (#64503E) stays
 * at or above 4.5:1 on the darkest 5% of every texture, and ink is higher.
 */
export const washOpacity = 0.34;
