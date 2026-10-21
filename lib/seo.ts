import type { Metadata } from "next";
import { site } from "@/lib/site";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/**
 * LocalBusiness / Pharmacy structured data.
 * Contact fields and opening hours come from lib/site.ts. Opening hours are
 * included only when `hoursConfirmed` is true. Closed days are omitted.
 */
export function pharmacyJsonLd() {
  const { address, hours } = site;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    name: site.name,
    alternateName: ["Headley’s Pharmacy", site.formerName],
    url: site.url,
    telephone: site.phoneDisplay,
    faxNumber: site.faxDisplay,
    email: site.email,
    foundingDate: site.since,
    description: `Independent community pharmacy at 2498 East Colorado Blvd, Pasadena. Served Glendale from 1122 North Brand since ${site.since}, as Headley’s Pharmacy and then Glendale Pharmacy.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    hasMap: site.maps.href,
    areaServed: {
      "@type": "City",
      name: "Pasadena",
      containedInPlace: {
        "@type": "State",
        name: "California",
      },
    },
  };

  if (site.hoursConfirmed) {
    data.openingHoursSpecification = hours.rows.flatMap((row) => {
      if (!row.opens || !row.closes) return [];
      return row.days.map((day) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: day,
        opens: row.opens,
        closes: row.closes,
      }));
    });
  }

  return data;
}
