import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { AddressBlock, EmailLink, HoursList, PhoneLink } from "@/components/ContactDetails";
import { IntersectionMap } from "@/components/IntersectionMap";
import { Spark } from "@/components/Spark";
import { Stripe } from "@/components/Stripe";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const trust = [
  {
    title: "Independent",
    body: "A neighborhood pharmacy, not a chain counter. You talk to the people who work here.",
  },
  {
    title: "Transfers welcome",
    body: "Moving from another pharmacy is a phone call. We request the prescriptions you want brought over.",
  },
  {
    title: "Time for questions",
    body: "How to take a medicine, what a label means, what to watch for — ask at the counter.",
  },
  {
    title: "Easy to place",
    body: "2498 East Colorado Blvd, Pasadena — Colorado Boulevard at Altadena Drive, on the old Route 66 alignment through town.",
  },
];

export default function HomePage() {
  return (
    <>
      <section>
        <Container className="grid items-center gap-12 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <p className="font-script text-3xl leading-none text-ink sm:text-4xl">since {site.since}</p>
            <h1 className="mt-4 text-ink sm:mt-5">
              <span className="block font-script text-6xl leading-none sm:text-7xl">ColAlta</span>
              <span className="mt-2 block font-sans text-xl uppercase tracking-[0.32em] text-green sm:text-2xl">
                Pharmacy
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-2xl font-medium leading-snug text-green sm:text-[1.7rem]">
              Prescription care for Pasadena families, on the corner of Colorado and Altadena.
            </p>
            <p className="mt-3 font-script text-3xl leading-none text-ink">formerly {site.formerName}</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              We fill prescriptions, answer medication questions, and welcome transfers for patients
              and families in Pasadena and nearby neighborhoods.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={site.phoneHref} className="w-full sm:w-auto">
                Call {site.phoneDisplay}
              </Button>
              <Button href={site.maps.href} variant="secondary" className="w-full sm:w-auto">
                Directions
              </Button>
              <Button href="/refills" variant="secondary" className="w-full sm:w-auto">
                Transfer a prescription
              </Button>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
              There is no patient portal on this site. Call the pharmacy and we will help.
            </p>
          </div>
          <div className="lg:col-span-5">
            <IntersectionMap />
          </div>
        </Container>
      </section>

      <Stripe />

      <section className="bg-card" aria-labelledby="trust-heading">
        <Container className="py-14 sm:py-16">
          <h2 id="trust-heading" className="font-sans text-3xl text-ink sm:text-4xl">
            A pharmacy you can walk up to
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((item) => (
              <li key={item.title}>
                <h3 className="font-sans text-2xl text-ink">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Stripe />

      <section aria-labelledby="services-heading">
        <Container className="py-14 sm:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow flex items-center gap-2">
              <Spark className="h-3.5 w-3.5 text-orange" />
              Services
            </p>
            <h2 id="services-heading" className="mt-3 font-sans text-3xl text-ink sm:text-4xl">
              What we do at the counter
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Ordinary community-pharmacy work, stated plainly. Anything marked “Confirm with
              pharmacy” is not a promise — call and ask.
            </p>
          </div>
          <ol className="mt-10 border-t border-line">
            {services.map((service, index) => (
              <li key={service.slug} className="border-b border-line py-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="font-sans text-2xl text-ink">
                    <span className="mr-3 text-lg text-green">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {service.name}
                  </h3>
                  {service.confirmWithPharmacy ? (
                    <p className="text-sm font-semibold text-clay">Confirm with pharmacy</p>
                  ) : null}
                </div>
                <p className="mt-2 max-w-3xl leading-relaxed text-muted">{service.summary}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8">
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center font-semibold text-green underline decoration-green/40 underline-offset-4"
            >
              Read the services
            </Link>
          </p>
        </Container>
      </section>

      <Stripe />

      <section className="bg-ink text-paper" aria-labelledby="corner-heading">
        <Container className="grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-orange">
              <Spark className="h-3.5 w-3.5" />
              Colorado & Altadena
            </p>
            <h2 id="corner-heading" className="mt-3 font-sans text-3xl font-semibold leading-tight sm:text-4xl">
              The name is the corner.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-paper">
              ColAlta joins Colorado and Altadena. In Glendale we were Headley’s Pharmacy, then{" "}
              {site.formerName}. The pharmacy served that neighborhood from 1122 North Brand since{" "}
              {site.since}. In 2024 we moved to {site.address.street} in Pasadena. The old building
              was no longer up to code. The ownership and staff came with the move.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={site.maps.href} variant="inverse" className="w-full sm:w-auto">
                Directions
              </Button>
              <Button href="/about" variant="ghost" className="w-full sm:w-auto">
                Our story
              </Button>
            </div>
          </div>
          <blockquote className="border-l-2 border-orange pl-6">
            <p className="font-script text-4xl leading-tight">
              Colorado Boulevard and Altadena Drive. That is the whole of the name, and where to
              find us.
            </p>
            <footer className="mt-4 text-sm uppercase tracking-[0.14em] text-orange">
              {site.address.street}, {site.address.city}
            </footer>
          </blockquote>
        </Container>
      </section>

      <Stripe />

      <section aria-labelledby="hours-heading">
        <Container className="grid gap-12 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="eyebrow">Hours</p>
            <h2 id="hours-heading" className="mt-3 font-sans text-3xl text-ink sm:text-4xl">
              Hours
            </h2>
            <div className="mt-6 max-w-md">
              <HoursList />
            </div>
          </div>
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-3 font-sans text-3xl text-ink sm:text-4xl">Call or come by</h2>
            <div className="mt-6 space-y-5">
              <AddressBlock />
              <p>
                <span className="block text-sm font-bold uppercase tracking-[0.14em] text-green">
                  Phone
                </span>
                <PhoneLink className="mt-1 inline-flex min-h-11 items-center text-lg" />
              </p>
              <p>
                <span className="block text-sm font-bold uppercase tracking-[0.14em] text-green">
                  Fax
                </span>
                <span className="mt-1 inline-flex min-h-11 items-center font-semibold">{site.faxDisplay}</span>
              </p>
              <p>
                <span className="block text-sm font-bold uppercase tracking-[0.14em] text-green">
                  Email
                </span>
                <EmailLink className="mt-1 inline-flex min-h-11 items-center" />
              </p>
              <p className="max-w-md text-sm leading-relaxed text-muted">
                Email is for general questions. Please do not send prescription numbers, diagnoses,
                or insurance details. Call the pharmacy for anything about your medicine.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/contact" variant="secondary">
                Contact and location
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-sage" aria-labelledby="transfer-heading">
        <Container className="flex flex-col gap-6 py-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 id="transfer-heading" className="font-sans text-3xl text-ink sm:text-4xl">
              Moving a prescription here is a phone call.
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              No account to create. Tell us the pharmacy that has the prescription now, and we will
              request the transfer.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={site.phoneHref} className="w-full sm:w-auto">
              Call {site.phoneDisplay}
            </Button>
            <Button href="/refills" variant="secondary" className="w-full sm:w-auto">
              How to transfer
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
