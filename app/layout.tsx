import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { PreviewBar } from "@/components/atmosphere/PreviewBar";
import { TreatmentProvider } from "@/components/atmosphere/Treatment";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { PlaceholderNotice } from "@/components/PlaceholderNotice";
import { site } from "@/lib/site";
import "./globals.css";

const futura = localFont({
  src: "../public/fonts/FuturaBQ-DemiBold.otf",
  variable: "--font-futura",
  display: "swap",
  weight: "600",
  style: "normal",
  adjustFontFallback: false,
  fallback: ["Futura", "Century Gothic", "Trebuchet MS", "sans-serif"],
});

const santaFe = localFont({
  src: "../public/fonts/SantaFeLetPlain.ttf",
  variable: "--font-santa-fe",
  display: "swap",
  weight: "400",
  style: "normal",
  adjustFontFallback: false,
  fallback: ["Segoe Script", "cursive"],
});

const description =
  "Independent pharmacy at 2498 East Colorado Blvd, Pasadena. Since 1951 in Glendale, formerly Headley’s and Glendale Pharmacy. Call, get directions, or transfer a prescription.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ColAlta Pharmacy | Independent Pharmacy in Pasadena, CA",
    template: "%s | ColAlta Pharmacy",
  },
  description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: "ColAlta Pharmacy | Independent Pharmacy in Pasadena, CA",
    description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "ColAlta Pharmacy | Independent Pharmacy in Pasadena, CA",
    description,
  },
  robots:
    process.env.PREVIEW_NOINDEX === "1"
      ? { index: false, follow: false }
      : { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#545838",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${futura.variable} ${santaFe.variable}`}>
      <body>
        <TreatmentProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-card focus:px-4 focus:py-3 focus:text-ink"
          >
            Skip to content
          </a>
          <PlaceholderNotice />
          <Header />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <JsonLd />
          <PreviewBar />
        </TreatmentProvider>
      </body>
    </html>
  );
}
