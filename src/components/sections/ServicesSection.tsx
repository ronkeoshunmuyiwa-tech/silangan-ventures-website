import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { servicesContent } from "@/content/services";

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading title={servicesContent.title} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesContent.items.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Container>
    </section>
  );
}
