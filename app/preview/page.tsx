import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { treatments } from "@/lib/atmosphere";
import { withBase } from "@/lib/base";

export const metadata: Metadata = {
  title: "Photo studies",
  description: "Compare three quiet ways of using still-life pictures on the ColAlta Pharmacy site.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/preview/" },
};

export default function PreviewPage() {
  return (
    <Container className="py-12 sm:py-16">
      <p className="eyebrow">For review</p>
      <h1 className="mt-3 max-w-3xl font-sans text-4xl leading-[1.12] text-ink sm:text-5xl">
        Three quiet ways to use the pictures.
      </h1>
      <div className="mt-5 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
        <p>
          The same pages, three treatments. Wash uses full-bleed bands and a column photograph,
          with the type on a solid panel. Window dressing uses large framed prints, including the
          waiting room and the counter. Accents are medium photo cards. The words stay readable.
        </p>
        <p>
          The waiting room and the counter are atmosphere only. They are not pictures of the
          Pasadena shop, and nothing on the site says they are. The bottle still lifes are
          decoration. The homepage seal is unchanged.
        </p>
        <p>
          A choice is remembered as you use the menu. Clear returns the pages to the undecorated
          site. On a wide screen the three homepages sit side by side below.
        </p>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-6">
        {treatments.map((study) => (
          <section key={study.id} aria-labelledby={`study-${study.id}`}>
            <h2 id={`study-${study.id}`} className="font-sans text-2xl text-ink">
              {study.label}
            </h2>
            <p className="mt-2 min-h-0 text-sm leading-relaxed text-muted lg:min-h-16">{study.summary}</p>
            <p className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
              <Link
                href={`/?variant=${study.id}`}
                className="text-green underline decoration-green/40 underline-offset-4"
              >
                Homepage
              </Link>
              <Link
                href={`/about/?variant=${study.id}`}
                className="text-green underline decoration-green/40 underline-offset-4"
              >
                About
              </Link>
            </p>
            <div
              className="relative mt-4 h-[460px] overflow-hidden rounded-xl border border-line bg-paper"
              style={{ containerType: "inline-size" }}
            >
              <iframe
                title={`${study.label} on the homepage`}
                src={withBase(`/?variant=${study.id}&embed=1`)}
                tabIndex={-1}
                loading="lazy"
                className="absolute top-0 left-0 origin-top-left border-0"
                style={{
                  width: 1280,
                  height: "calc(460px / (100cqi / 1280px))",
                  transform: "scale(calc(100cqi / 1280px))",
                }}
              />
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
