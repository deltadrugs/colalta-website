import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { stills } from "@/lib/atmosphere";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Refills and transfers",
  description:
    "Request a refill or transfer a prescription to ColAlta Pharmacy in Pasadena by phone. No patient portal on this website.",
  path: "/refills/",
});

const refillSteps = [
  "Call the pharmacy. There is no login and no refill form on this website.",
  "Have the patient’s name, date of birth, and the prescription number from the bottle.",
  "We will tell you if a refill is available and when it will be ready for pickup.",
];

const transferSteps = [
  "Call ColAlta Pharmacy, or ask your prescriber to send new prescriptions here.",
  "Share the name and phone number of the pharmacy that has the prescriptions now, and the medications you want moved.",
  "We contact that pharmacy and request the transfer. Timing depends on the other pharmacy and on the medication.",
];

const bring = [
  "Patient name and date of birth",
  "Medication names, or the prescription numbers printed on the bottles",
  "Name and phone number of the current pharmacy",
  "Insurance card, if you plan to use coverage",
  "Prescriber’s name, if you have it handy",
];

export default function RefillsPage() {
  return (
    <>
      <PageHero
        eyebrow="No account required"
        title="Refills and transfers"
        lede="Call the pharmacy. We will refill a prescription that is already here, or ask another pharmacy to send one over. This website does not have a patient portal."
        current="Refills"
        wash={stills.table}
      />
      <Container className="py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <section aria-labelledby="refill-heading">
            <h2 id="refill-heading" className="font-sans text-3xl text-ink">
              Refill a prescription
            </h2>
            <ol className="mt-6 space-y-5">
              {refillSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="font-sans text-2xl text-green">{index + 1}</span>
                  <p className="pt-1 leading-relaxed text-muted">{step}</p>
                </li>
              ))}
            </ol>
          </section>
          <section aria-labelledby="transfer-heading">
            <h2 id="transfer-heading" className="font-sans text-3xl text-ink">
              Transfer a prescription
            </h2>
            <ol className="mt-6 space-y-5">
              {transferSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="font-sans text-2xl text-green">{index + 1}</span>
                  <p className="pt-1 leading-relaxed text-muted">{step}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <section className="mt-14 rounded-2xl border border-line bg-card p-6 sm:p-8" aria-labelledby="ready-heading">
          <h2 id="ready-heading" className="font-sans text-2xl text-ink">
            What helps the call go faster
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {bring.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-muted">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-green" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted">
            Some prescriptions cannot be transferred, or can only be transferred once. Controlled
            medications often need a new prescription from the prescriber. The pharmacist will say
            which case you are in. Do not stop a medicine because a transfer is pending — call us
            if you are close to running out.
          </p>
        </section>

        <section className="mt-10 rounded-2xl bg-sage p-6 sm:p-8" aria-labelledby="call-heading">
          <h2 id="call-heading" className="font-sans text-3xl text-ink">
            Call {site.phoneDisplay}
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">
            {site.hoursConfirmed ? site.hours.summary : site.hours.note} If this is a medical
            emergency, call 911. The pharmacy cannot provide emergency care.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={site.phoneHref} className="w-full sm:w-auto">
              Call the pharmacy
            </Button>
            <Button href="/contact" variant="secondary" className="w-full sm:w-auto">
              Hours and directions
            </Button>
          </div>
        </section>
      </Container>
    </>
  );
}
