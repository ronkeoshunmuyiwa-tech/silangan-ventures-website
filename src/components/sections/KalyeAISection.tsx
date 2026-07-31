import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { kalyeAiContent } from "@/content/kalye-ai";

export function KalyeAISection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Product concept" title={kalyeAiContent.title} description={kalyeAiContent.intro} />
        <div className="mt-8">
          <Button href={kalyeAiContent.pilotCta.href}>{kalyeAiContent.pilotCta.label}</Button>
        </div>
      </Container>
    </section>
  );
}
