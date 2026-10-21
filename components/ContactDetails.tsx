import { addressLine, mailtoHref, site } from "@/lib/site";

const linkClass =
  "font-semibold text-green underline decoration-green/40 underline-offset-4 hover:decoration-green";

export function HoursList() {
  return (
    <div>
      {!site.hoursConfirmed && site.hours.rows.length > 0 ? (
        <p className="mb-1 text-sm font-semibold uppercase tracking-[0.14em] text-clay">
          Provisional
        </p>
      ) : null}
      {site.hours.rows.length > 0 ? (
        <dl>
          {site.hours.rows.map((row) => (
            <div
              key={row.label}
              className="flex items-baseline justify-between gap-6 border-b border-line py-3 last:border-b-0"
            >
              <dt className="font-semibold text-ink">{row.label}</dt>
              <dd className="text-right text-muted">{row.display}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      {site.hours.note ? (
        <p className="mt-3 text-sm font-medium leading-relaxed text-clay">{site.hours.note}</p>
      ) : null}
    </div>
  );
}

export function AddressBlock() {
  return (
    <div>
      <p className="font-semibold text-ink">{site.address.street}</p>
      <p className="text-muted">{addressLine()}</p>
      {site.address.note ? (
        <p className="mt-3 text-sm font-medium leading-relaxed text-clay">{site.address.note}</p>
      ) : null}
    </div>
  );
}

export function PhoneLink({ className = "" }: { className?: string }) {
  return (
    <a href={site.phoneHref} className={`${linkClass} ${className}`}>
      {site.phoneDisplay}
    </a>
  );
}

export function EmailLink({ className = "" }: { className?: string }) {
  return (
    <a href={mailtoHref()} className={`${linkClass} break-all ${className}`}>
      {site.email}
    </a>
  );
}
