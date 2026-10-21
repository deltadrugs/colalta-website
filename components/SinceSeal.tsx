import { useId } from "react";

export function SinceSeal({ className = "" }: { className?: string }) {
  const pathId = `seal-${useId().replace(/:/g, "")}`;

  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="97" fill="var(--color-paper)" stroke="var(--color-green)" strokeWidth="3" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="var(--color-orange)" strokeWidth="1.25" />
      <circle cx="100" cy="100" r="60" fill="none" stroke="var(--color-green)" strokeWidth="1" />
      <defs>
        <path id={`${pathId}-top`} d="M30,108 A72,72 0 0,1 170,108" />
        <path id={`${pathId}-bottom`} d="M170,118 A68,68 0 0,1 30,118" />
      </defs>
      <text
        fill="var(--color-green)"
        fontFamily="var(--font-sans)"
        fontSize="13"
        fontWeight="600"
        letterSpacing="1.4"
      >
        <textPath href={`#${pathId}-top`} startOffset="50%" textAnchor="middle">
          COLALTA PHARMACY
        </textPath>
      </text>
      <text
        fill="var(--color-green)"
        fontFamily="var(--font-sans)"
        fontSize="12"
        fontWeight="600"
        letterSpacing="2.4"
      >
        <textPath href={`#${pathId}-bottom`} startOffset="50%" textAnchor="middle">
          PASADENA
        </textPath>
      </text>
      <text
        x="100"
        y="98"
        textAnchor="middle"
        fill="var(--color-ink)"
        fontFamily="var(--font-script)"
        fontSize="26"
      >
        since
      </text>
      <text
        x="100"
        y="128"
        textAnchor="middle"
        fill="var(--color-ink)"
        fontFamily="var(--font-script)"
        fontSize="30"
      >
        1951
      </text>
    </svg>
  );
}
