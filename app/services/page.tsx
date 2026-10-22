import Link from "next/link";
import { FrameColumn, PhotoCard } from "@/components/atmosphere/Decor";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { stills } from "@/lib/atmosphere";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Prescription filling, transfers, counseling, and front-store care at ColAlta Pharmacy in Pasadena. Immunizations and delivery should be confirmed with the pharmacy.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Pasadena community pharmacy"
        title="Services at the counter"
        lede="What an independent pharmacy is for: filling prescriptions, moving them here, and answering questions about the medicine. A few items are marked until the pharmacy confirms them."
        current="Services"
        wash={stills.shelf}
        frame={stills.group}
        card={stills.amber}
      />
      <Container className="py-12 sm:py-16">
        <div className="max-w-3xl space-y-12">
          {services.map((service) => (
            <article key={service.slug} id={service.slug} className="border-t border-line pt-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="font-sans text-3xl text-ink">{service.name}</h2>
                {service.confirmWithPharmacy ? (
                  <p className="text-sm font-semibold text-clay">Confirm with pharmacy</p>
                ) : null}
              </div>
              <p className="mt-4 text-lg leading-relaxed text-ink">{service.summary}</p>
              <p className="mt-3 leading-relaxed text-muted">{service.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start gap-8 lg:flex-row">
          <aside className="w-full min-w-0 max-w-3xl flex-1 rounded-2xl border border-line bg-card p-6 sm:p-8">
            <h2 className="font-sans text-2xl text-ink">Ready to move a prescription?</h2>
            <PhotoCard image={stills.group} className="mt-6" />
            <p className="mt-3 leading-relaxed text-muted">
              Call {site.name} or read the transfer steps. There is no online account on this website.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={site.phoneHref} className="w-full sm:w-auto">
                Call {site.phoneDisplay}
              </Button>
              <Button href="/refills" variant="secondary" className="w-full sm:w-auto">
                Refills and transfers
              </Button>
            </div>
            <p className="mt-6 text-sm">
              <Link href="/contact" className="font-semibold text-green underline underline-offset-4">
                Hours and location
              </Link>
            </p>
          </aside>
          <FrameColumn image={stills.amber} />
        </div>
      </Container>
    </>
  );
}
