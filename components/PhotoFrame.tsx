export function PhotoFrame({
  kicker,
  caption,
  className = "",
}: {
  kicker: string;
  caption: string;
  className?: string;
}) {
  return (
    <figure
      className={`relative flex min-h-72 flex-col justify-between overflow-hidden rounded-2xl border border-ink bg-ink ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(155deg, var(--color-green) 0%, var(--color-ink) 46%, var(--color-pine) 100%)",
        }}
      />
      <div className="relative flex items-start justify-between p-5 text-paper">
        <span className="text-xs font-bold uppercase tracking-[0.16em]">{kicker}</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/mark.png" alt="" width={512} height={676} className="h-14 w-auto opacity-90" />
      </div>
      <figcaption className="relative p-5 text-base leading-snug text-paper">{caption}</figcaption>
    </figure>
  );
}
