import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <Container className="py-20 sm:py-28">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 max-w-xl font-sans text-4xl text-ink sm:text-5xl">
        We can’t find that page.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
        The link may be out of date. {site.name} is still at Colorado Boulevard and Altadena Drive
        in Pasadena.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/" className="w-full sm:w-auto">
          Back to home
        </Button>
        <Button href="/contact" variant="secondary" className="w-full sm:w-auto">
          Contact
        </Button>
        <Button href={site.phoneHref} variant="secondary" className="w-full sm:w-auto">
          Call {site.phoneDisplay}
        </Button>
      </div>
    </Container>
  );
}
