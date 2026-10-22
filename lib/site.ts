/**
 * ColAlta Pharmacy — contact details
 *
 * Phone, fax, email, and street address are taken from the pharmacy’s
 * business card. Change them here and every page, the footer, and the
 * structured data update together.
 *
 * Hours are the schedule posted in the store window. `hoursConfirmed` is true,
 * so the site shows these hours without a provisional banner and includes them
 * in structured data. If the sign changes, edit `hours.rows` and `hours.summary`.
 */

export type DayHours = {
  label: string;
  display: string;
  /** Schema.org day names, for example "Monday". Ignored when the day is closed. */
  days: string[];
  /** 24-hour time, "HH:MM". Null when closed. */
  opens: string | null;
  closes: string | null;
};

export type SiteConfig = {
  name: string;
  formerName: string;
  /** Year printed on the business card: “since 1951”. */
  since: string;
  domain: string;
  url: string;
  /**
   * Phone, fax, email, and street address are confirmed from the business card.
   * Hours are separate — see `hoursConfirmed`.
   */
  contactDetailsConfirmed: boolean;
  /** Set to true only after `hours.rows` are the pharmacy’s real hours. */
  hoursConfirmed: boolean;
  /** Shown wherever the phone number appears. Card format: 818.244.3164 */
  phoneDisplay: string;
  /** Tap-to-call link for the phone number above. */
  phoneHref: string;
  /** Fax printed on the business card. Not a voice line. */
  faxDisplay: string;
  email: string;
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    /** Optional note under the address. Leave empty when the address is confirmed. */
    note: string;
  };
  maps: {
    query: string;
    href: string;
  };
  hours: {
    /** Short line used in the header. */
    summary: string;
    /** Shown under the hours block. Clear this once hours are confirmed. */
    note: string;
    rows: DayHours[];
  };
  /** Shown in the top reminder while `hoursConfirmed` is false. */
  hoursNotice: string;
  legalUpdated: string;
};

export const site: SiteConfig = {
  name: "ColAlta Pharmacy",
  formerName: "Glendale Pharmacy",
  since: "1951",
  domain: "colalta.com",
  url: "https://colalta.com",
  contactDetailsConfirmed: true,
  hoursConfirmed: true,

  phoneDisplay: "818.244.3164",
  phoneHref: "tel:+18182443164",
  faxDisplay: "818.244.3165",
  email: "contact@glendalepharmacy.net",

  address: {
    street: "2498 East Colorado Blvd",
    city: "Pasadena",
    region: "CA",
    postalCode: "91107",
    country: "US",
    note: "",
  },

  maps: {
    query: "2498 East Colorado Blvd, Pasadena, CA 91107",
    href: "https://www.google.com/maps/search/?api=1&query=2498+East+Colorado+Blvd%2C+Pasadena%2C+CA+91107",
  },

  hours: {
    summary: "Tue–Thu 9–5:30 · Sat 9–1:30",
    note: "",
    rows: [
      { label: "Monday", display: "Closed", days: ["Monday"], opens: null, closes: null },
      {
        label: "Tuesday",
        display: "9:00 a.m. – 5:30 p.m.",
        days: ["Tuesday"],
        opens: "09:00",
        closes: "17:30",
      },
      {
        label: "Wednesday",
        display: "9:00 a.m. – 5:30 p.m.",
        days: ["Wednesday"],
        opens: "09:00",
        closes: "17:30",
      },
      {
        label: "Thursday",
        display: "9:00 a.m. – 5:30 p.m.",
        days: ["Thursday"],
        opens: "09:00",
        closes: "17:30",
      },
      { label: "Friday", display: "Closed", days: ["Friday"], opens: null, closes: null },
      {
        label: "Saturday",
        display: "9:00 a.m. – 1:30 p.m.",
        days: ["Saturday"],
        opens: "09:00",
        closes: "13:30",
      },
      { label: "Sunday", display: "Closed", days: ["Sunday"], opens: null, closes: null },
    ],
  },

  hoursNotice: "",

  legalUpdated: "September 24, 2026",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/refills", label: "Refills" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalNav = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;

export function addressLine(): string {
  const { city, region, postalCode } = site.address;
  return `${city}, ${region} ${postalCode}`;
}

export function mailtoHref(): string {
  return `mailto:${site.email}`;
}
