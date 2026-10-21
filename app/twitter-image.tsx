import { ImageResponse } from "next/og";
import { ShareCard } from "@/lib/share-card";

export const dynamic = "force-static";

export const alt = "ColAlta Pharmacy — independent pharmacy in Pasadena, California";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<ShareCard />, { ...size });
}
