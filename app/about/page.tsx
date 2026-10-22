import { Mark, StillFrame, Wash } from "@/components/atmosphere/Decor";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { PhotoFrame } from "@/components/PhotoFrame";
import { SinceSeal } from "@/components/SinceSeal";
import { Spark } from "@/components/Spark";
import { stills } from "@/lib/atmosphere";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About",
  description:
    "ColAlta Pharmacy was Headley’s, then Glendale Pharmacy, serving Glendale from 1122 North Brand since 1951. In 2024 the same ownership and staff moved to 2498 East Colorado Blvd in Pasadena.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`Since ${site.since}`}
        title="From Glendale to the corner of Colorado and Altadena."
        lede="Headley’s Pharmacy, then Glendale Pharmacy, now ColAlta. The roots are in Glendale. The counter is now at Colorado and Altadena."
        current="About"
        wash={stills.mortar}
        frame={stills.labelsFrame}
        mark={stills.markMortar}
      />
      <section className="relative overflow-hidden">
      <Wash image={stills.amber} tone="paper" mask="right" opacity={0.16} />
      <Container className="relative grid gap-12 py-12 lg:grid-cols-12 lg:py-16">
        <div className="max-w-none space-y-6 text-lg leading-relaxed text-muted lg:col-span-7">
          <div className="flex items-start gap-3">
            <Spark className="mt-2 h-4 w-4 shrink-0 text-orange" />
            <p className="font-script text-3xl leading-tight text-ink">
              since {site.since} · Headley’s, then {site.formerName}
            </p>
          </div>
          <p className="text-ink">
            If you knew us in Glendale, the name on the door has changed, and the people have not.
            We were Headley’s Pharmacy, then {site.formerName}, and now {site.name}. You can still
            bring the bottle you have a question about. A transfer is still a phone call.
          </p>
          <p>
            The story starts in Glendale in the late 1940s. Around 1947, Robert E. Headley was a
            Glendale druggist. By 1948 and 1949 his drugstore was at 952 North Brand Boulevard, an
            address that had been W. L. Ramsay’s.
          </p>
          <p>
            In 1951 a medical building went up at 1122 North Brand Boulevard, the Eleven Twenty Two
            Building. That is the year we have marked ever since — not a particular opening day, but
            the year the pharmacy dates its years on Brand. By the late 1950s, and on through 1971,
            Headley’s Prescription Pharmacy was at that address.
          </p>
          <p>
            Glendale Pharmacy, Inc. was filed in California on November 2, 1962. By the late 1980s
            the pharmacy at 1122 North Brand was listed as {site.formerName}. That is the name a lot
            of families still use when they call.
          </p>
          <p>
            A public notice of our move said we had served Glendale from 1122 North Brand since{" "}
            {site.since}, and that the same ownership and staff were coming to {site.address.street}{" "}
            in Pasadena, at Colorado and Altadena, under the new name {site.name}.
          </p>
          <p>
            We made that move in 2024. The old building was no longer up to code, so the pharmacy
            came here. ColAlta is the corner itself: Colorado and Altadena, set side by side.
            Colorado Boulevard through Pasadena is Historic Route 66. Altadena Drive runs north from
            that boulevard toward the community the street is named for.
          </p>
          <h2 className="flex items-center gap-3 pt-4 font-sans text-3xl text-ink">
            <Mark image={stills.markRose} />
            A community counter
          </h2>
          <p>
            An independent pharmacy is a place you can walk into. Bring the bottle you have a
            question about. Call if you would rather talk before you come. If we do not know an
            answer at the counter, we will say so.
          </p>
          <p>
            We serve patients and families in Pasadena and nearby neighborhoods, and we still know
            the Glendale families who followed us across town. This website is a way to find us, see
            the hours, and start a transfer. It is not a patient portal, and it does not replace a
            conversation with the pharmacist or your prescriber.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button href="/contact" className="w-full sm:w-auto">
              Visit and hours
            </Button>
            <Button href={site.phoneHref} variant="secondary" className="w-full sm:w-auto">
              Call {site.phoneDisplay}
            </Button>
          </div>
        </div>
        <div className="grid gap-4 lg:col-span-5">
          <div className="flex justify-center lg:justify-start">
            <SinceSeal className="h-36 w-36" />
          </div>
          <StillFrame image={stills.mortarFrame} className="w-[10.5rem] sm:w-44" />
          <PhotoFrame
            kicker="Photograph to add"
            caption="Storefront on Colorado Boulevard — replace this panel with a photo of the Pasadena corner."
          />
          <PhotoFrame
            kicker="Photograph to add"
            caption="The pharmacy counter — replace this panel with a photo from inside ColAlta Pharmacy."
          />
        </div>
      </Container>
      </section>
    </>
  );
}
