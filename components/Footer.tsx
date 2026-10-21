import Link from "next/link";
import { Container } from "@/components/Container";
import { EmailLink, PhoneLink } from "@/components/ContactDetails";
import { Logo } from "@/components/Logo";
import { SinceSeal } from "@/components/SinceSeal";
import { Stripe } from "@/components/Stripe";
import { addressLine, legalNav, nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer>
      <Stripe />
      <div className="bg-ink text-paper">
        <Container className="flex flex-col items-start gap-5 py-8 sm:flex-row sm:items-center sm:gap-8">
          <SinceSeal className="h-28 w-28 shrink-0" />
          <div>
            <p className="font-script text-3xl leading-none text-paper">since {site.since}</p>
            <p className="mt-1 font-script text-2xl leading-tight text-paper">formerly {site.formerName}</p>
          </div>
        </Container>
      </div>
      <div className="border-t border-line bg-card">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo className="h-14 w-auto sm:h-16" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Headley’s Pharmacy, then {site.formerName}. Independent pharmacy at{" "}
            {site.address.street}, {site.address.city}, since the 2024 move from Glendale.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-green">Visit</h2>
          <address className="mt-4 text-sm not-italic leading-relaxed text-muted">
            <span className="block text-ink">{site.name}</span>
            <span className="block">{site.address.street}</span>
            <span className="block">{addressLine()}</span>
          </address>
          <p className="mt-3 text-sm">
            <PhoneLink />
          </p>
          <p className="mt-2 text-sm text-muted">
            Fax <span className="font-semibold text-ink">{site.faxDisplay}</span>
          </p>
          <p className="mt-2 text-sm">
            <EmailLink />
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-green">Hours</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">{site.hours.summary}</p>
          {site.hours.note ? (
            <p className="mt-2 text-sm font-medium leading-relaxed text-clay">{site.hours.note}</p>
          ) : null}
          <p className="mt-3 text-sm">
            <Link href="/contact" className="font-semibold text-green underline underline-offset-4">
              Full hours and map
            </Link>
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-green">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-semibold text-ink hover:text-green">
                  {item.label}
                </Link>
              </li>
            ))}
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-semibold text-ink hover:text-green">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-line">
        <Container className="py-5 text-sm leading-relaxed text-muted">
          <p>
            © 2026 {site.name}. Pasadena, California. Information on this
            website is not medical advice. For a prescription question, call the pharmacy.
          </p>
        </Container>
      </div>
      </div>
    </footer>
  );
}
