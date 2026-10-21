import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export function PlaceholderNotice() {
  if (site.hoursConfirmed) return null;

  return (
    <div className="border-b border-orange/70 bg-sage text-ink">
      <Container className="py-3 text-sm leading-relaxed">
        <strong className="font-semibold">Hours to confirm. </strong>
        {site.hoursNotice}
      </Container>
    </div>
  );
}
