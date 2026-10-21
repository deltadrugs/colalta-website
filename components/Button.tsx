import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "inverse" | "ghost";

const variants: Record<Variant, string> = {
  primary: "border border-green bg-green text-white hover:bg-pine hover:border-pine",
  secondary: "border border-line bg-card text-ink hover:bg-paper-deep",
  inverse: "border border-paper bg-paper text-green hover:bg-sage",
  ghost: "border border-sage bg-transparent text-paper hover:bg-white/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const classes = `inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-base font-semibold transition-colors ${variants[variant]} ${className}`;
  const external = href.startsWith("http://") || href.startsWith("https://");

  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
        {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
