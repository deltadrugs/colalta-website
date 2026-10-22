import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { AddressBlock, EmailLink, HoursList, PhoneLink } from "@/components/ContactDetails";
import { IntersectionMap } from "@/components/IntersectionMap";
import { PageHero } from "@/components/PageHero";
import { stills } from "@/lib/atmosphere";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact and location",
  description:
    "ColAlta Pharmacy, 2498 East Colorado Blvd, Pasadena, CA 91107. Call 818.244.3164 or email contact@glendalepharmacy.net. Open Tue–Thu 9:00 a.m.–5:30 p.m. and Sat 9:00 a.m.–1:30 p.m.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Pasadena, California"
        title="Contact and location"
        lede="ColAlta Pharmacy is at 2498 East Colorado Blvd, Pasadena, CA 91107, where Colorado Boulevard meets Altadena Drive. Call, send a fax, email a general question, or open the address in Google Maps."
        current="Contact"
        photo={stills.table}
      />
      <Container className="grid gap-12 py-12 lg:grid-cols-2 lg:py-16">
        <div className="space-y-8">
          <section aria-labelledby="address-heading">
            <h2 id="address-heading" className="font-sans text-3xl text-ink">
              Address
            </h2>
            <div className="mt-4">
              <AddressBlock />
            </div>
            <div className="mt-5">
              <Button href={site.maps.href}>Open in Google Maps</Button>
            </div>
          </section>
          <section aria-labelledby="phone-heading">
            <h2 id="phone-heading" className="font-sans text-3xl text-ink">
              Phone, fax, and email
            </h2>
            <p className="mt-4 text-lg">
              <PhoneLink />
            </p>
            <p className="mt-3 text-muted">
              Fax <span className="font-semibold text-ink">{site.faxDisplay}</span>
            </p>
            <p className="mt-3">
              <EmailLink />
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              Use email for general questions about the pharmacy. Do not include prescription
              numbers, medical details, or insurance information. Call us for anything about your
              medicine. There is no message form on this website.
            </p>
          </section>
          <section aria-labelledby="hours-heading">
            <h2 id="hours-heading" className="font-sans text-3xl text-ink">
              Hours
            </h2>
            <div className="mt-4 max-w-md">
              <HoursList />
            </div>
          </section>
        </div>
        <div>
          <IntersectionMap />
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Google Maps opens a search for {site.maps.query}.
          </p>
        </div>
      </Container>
    </>
  );
}
