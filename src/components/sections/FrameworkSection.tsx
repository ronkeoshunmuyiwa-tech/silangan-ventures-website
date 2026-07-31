import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Placeholder section reserved for a future approved methodology/framework
// (e.g. K.A.L.Y.E.) once Paula confirms the final version for this site.
export function FrameworkSection() {
  return (
    <section className="border-t border-slate-200 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Approach"
          title="Our methodology"
          description="Final approved methodology content will be added here during the website development stage."
        />
      </Container>
    </section>
  );
}
