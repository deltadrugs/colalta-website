import { site } from "@/lib/site";

const sans = "var(--font-sans)";

export function IntersectionMap({ className = "" }: { className?: string }) {
  return (
    <figure className={`overflow-hidden rounded-2xl border border-line bg-card ${className}`}>
      <svg viewBox="0 0 640 620" className="h-auto w-full" role="img" aria-labelledby="corner-map-title">
        <title id="corner-map-title">
          Diagram of Colorado Boulevard crossing Altadena Drive in Pasadena, where ColAlta Pharmacy sits
        </title>
        <rect width="640" height="620" fill="var(--color-paper)" />
        <rect x="18" y="18" width="604" height="584" fill="none" stroke="var(--color-ink)" strokeWidth="1.25" />
        <rect x="26" y="26" width="588" height="568" fill="none" stroke="var(--color-orange)" strokeWidth="0.75" />

        <g transform="translate(78 86)" aria-hidden="true">
          <circle r="34" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="1.25" />
          <circle r="4" fill="var(--color-ink)" />
          <path d="M0 -30 L7 -8 L0 -2 L-7 -8 Z" fill="var(--color-green)" />
          <path d="M0 30 L6 10 L0 4 L-6 10 Z" fill="var(--color-ink)" />
          <path d="M30 0 L10 6 L4 0 L10 -6 Z" fill="var(--color-ink)" />
          <path d="M-30 0 L-10 6 L-4 0 L-10 -6 Z" fill="var(--color-ink)" />
          <text
            x="0"
            y="-40"
            textAnchor="middle"
            fill="var(--color-ink)"
            fontFamily={sans}
            fontSize="13"
            fontWeight="700"
          >
            N
          </text>
        </g>

        <g fill="none" stroke="var(--color-ink)" strokeWidth="1.35" strokeLinecap="square">
          <path d="M48 292 H592" />
          <path d="M48 314 H592" />
          <path d="M286 48 V572" />
          <path d="M308 48 V572" />
        </g>

        <g transform="translate(156 284)">
          <path
            d="M2 3 H38 V16 C38 28 28 36 20 42 C12 36 2 28 2 16 Z"
            fill="var(--color-paper)"
            stroke="var(--color-ink)"
            strokeWidth="1.6"
          />
          <text
            x="20"
            y="16"
            textAnchor="middle"
            fill="var(--color-ink)"
            fontFamily={sans}
            fontSize="8"
            fontWeight="700"
            letterSpacing="0.8"
          >
            US
          </text>
          <path d="M8 18 H32" stroke="var(--color-ink)" strokeWidth="1" />
          <text
            x="20"
            y="34"
            textAnchor="middle"
            fill="var(--color-ink)"
            fontFamily={sans}
            fontSize="14"
            fontWeight="700"
          >
            66
          </text>
        </g>

        <text
          x="48"
          y="248"
          fill="var(--color-ink)"
          fontFamily={sans}
          fontSize="14"
          fontWeight="700"
          letterSpacing="2.2"
        >
          COLORADO BLVD
        </text>
        <text
          x="324"
          y="78"
          fill="var(--color-ink)"
          fontFamily={sans}
          fontSize="14"
          fontWeight="700"
          letterSpacing="2"
        >
          ALTADENA DR
        </text>
        <text x="52" y="340" fill="var(--color-muted)" fontFamily={sans} fontSize="11" fontWeight="700">
          W
        </text>
        <text x="572" y="340" fill="var(--color-muted)" fontFamily={sans} fontSize="11" fontWeight="700">
          E
        </text>

        <circle cx="332" cy="270" r="7" fill="var(--color-green)" />
        <circle cx="332" cy="270" r="2.5" fill="var(--color-paper)" />
        <text
          x="348"
          y="266"
          fill="var(--color-green)"
          fontFamily={sans}
          fontSize="16"
          fontWeight="700"
        >
          ColAlta Pharmacy
        </text>
        <text x="348" y="286" fill="var(--color-muted)" fontFamily={sans} fontSize="13">
          On this corner
        </text>
      </svg>
      <figcaption className="border-t border-line px-5 py-4 text-sm leading-relaxed text-muted">
        {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}.
        Colorado Boulevard at Altadena Drive.
      </figcaption>
    </figure>
  );
}
