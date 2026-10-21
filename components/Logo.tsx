/**
 * Lockup cut from the business-card artwork (transparent PNG).
 * The script wordmark is the original art, not a webfont.
 */
export function Logo({ className = "h-9 w-auto sm:h-12 lg:h-14" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/logo.png"
      alt=""
      width={1600}
      height={476}
      className={className}
    />
  );
}
