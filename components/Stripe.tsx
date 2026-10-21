export function Stripe({ className = "" }: { className?: string }) {
  return (
    <div className={`flex h-1.5 w-full ${className}`} aria-hidden="true">
      <span className="h-full flex-1 bg-green" />
      <span className="h-full flex-1 bg-orange" />
      <span className="h-full flex-1 bg-ink" />
    </div>
  );
}
