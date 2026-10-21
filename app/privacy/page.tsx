import { Container } from "@/components/Container";
import { EmailLink, PhoneLink } from "@/components/ContactDetails";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy",
  description:
    "Website privacy notice for ColAlta Pharmacy in Pasadena. This page is not the official HIPAA Notice of Privacy Practices. Ask the pharmacy for that notice.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow={`Updated ${site.legalUpdated}`}
        title="Privacy and HIPAA notice"
        lede="This page describes the public website only. It is not the pharmacy’s official Notice of Privacy Practices. Ask at the counter for that notice."
        current="Privacy"
      />
      <Container className="py-12 sm:py-16">
        <div className="max-w-3xl space-y-6 leading-relaxed text-muted">
          <p className="rounded-2xl border border-line bg-card p-5 text-ink">
            Do not send personal health information through this website. There is no patient
            portal and no secure message form here. Call the pharmacy to talk about a prescription.
          </p>
          <h2 className="pt-2 font-sans text-3xl text-ink">What this website is for</h2>
          <p>
            {site.name} publishes this site so people in Pasadena can find the pharmacy, read the
            hours, and see how to call or transfer a prescription. The pharmacy was Headley’s in
            Glendale, then {site.formerName}. The site is a brochure. It does not create an account,
            sell medicine, or store a medication list.
          </p>
          <h2 className="pt-2 font-sans text-3xl text-ink">Information this site may receive</h2>
          <p>
            If you email {site.email}, the pharmacy receives your email address and whatever you
            choose to write. Please keep health details out of email. The company that hosts the
            website may keep ordinary technical logs, such as browser type and the pages requested,
            in order to run the site.
          </p>
          <p>
            We do not sell personal information. We do not use this marketing site to collect
            medical records.
          </p>
          <h2 className="pt-2 font-sans text-3xl text-ink">HIPAA</h2>
          <p>
            Care that involves protected health information happens at the pharmacy and by phone,
            under the pharmacy’s privacy practices — not through these pages. The official Notice
            of Privacy Practices is available from {site.name}. This stub does not replace it, and
            it does not describe every use or disclosure of health information.
          </p>
          <h2 className="pt-2 font-sans text-3xl text-ink">Maps and other sites</h2>
          <p>
            Directions open Google Maps in a new tab. If you follow that link, Google’s own privacy
            policy applies. This website does not embed a map that sets third-party cookies.
          </p>
          <h2 className="pt-2 font-sans text-3xl text-ink">Changes</h2>
          <p>
            We may update this notice when the website changes. The date above is the last update
            of this page.
          </p>
          <h2 className="pt-2 font-sans text-3xl text-ink">Contact</h2>
          <p>
            {site.name}
            <br />
            {site.address.street}
            <br />
            {site.address.city}, {site.address.region} {site.address.postalCode}
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
