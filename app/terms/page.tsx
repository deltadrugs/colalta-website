import { Container } from "@/components/Container";
import { EmailLink, PhoneLink } from "@/components/ContactDetails";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms",
  description:
    "Website terms for ColAlta Pharmacy in Pasadena, California. The site is general information, not medical advice.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow={`Updated ${site.legalUpdated}`}
        title="Website terms"
        lede="These terms cover the use of this website. They are not a treatment agreement and they are not medical advice."
        current="Terms"
      />
      <Container className="py-12 sm:py-16">
        <div className="max-w-3xl space-y-6 leading-relaxed text-muted">
          <p>
            This website is published by {site.name} in Pasadena, California, formerly{" "}
            {site.formerName}, and before that Headley’s Pharmacy in Glendale. It shares general
            information: where the pharmacy is, how to call, and what kinds of help to ask about.
          </p>
          <h2 className="pt-2 font-sans text-3xl text-ink">Not medical advice</h2>
          <p>
            Nothing on these pages is a diagnosis, a promise that a medicine is in stock, or a
            promise that a particular service is offered today. Follow the directions from your
            prescriber and the label on your prescription. If you think you are having an
            emergency, call 911.
          </p>
          <h2 className="pt-2 font-sans text-3xl text-ink">Hours and services to confirm</h2>
          <p>
            The phone number, fax, email, and street address match the pharmacy’s business card.
            Store hours match the sign posted in the window. Services marked “Confirm with
            pharmacy,” including immunizations and delivery, are not advertised as currently
            offered.
          </p>
          <h2 className="pt-2 font-sans text-3xl text-ink">The domain</h2>
          <p>
            The pharmacy owns {site.domain}. That domain may be pointed at this website. Until it
            is, a hosting preview address is not a different business.
          </p>
          <h2 className="pt-2 font-sans text-3xl text-ink">Use of the site</h2>
          <p>
            You may share links to these pages. The text and the ColAlta Pharmacy name and mark
            belong to the pharmacy. Please do not copy the site and present it as another pharmacy.
          </p>
          <p>
            To the extent the law allows, the pharmacy is not liable for decisions made only from
            reading this website. Questions about your own medicine belong on a phone call or at
            the counter.
          </p>
          <h2 className="pt-2 font-sans text-3xl text-ink">Contact</h2>
          <p>
            {site.name}
            <br />
            {site.address.street}, {site.address.city}, {site.address.region}{" "}
            {site.address.postalCode}
          </p>
          <p>
            Phone: <PhoneLink />
            <br />
            Email: <EmailLink />
          </p>
        </div>
      </Container>
    </>
  );
}
