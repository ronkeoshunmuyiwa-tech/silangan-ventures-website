import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site";

export function CompanyOverviewSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Company"
          title={siteConfig.tagline}
          description={siteConfig.description}
        />
      </Container>
    </section>
  );
}
