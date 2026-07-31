import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { contactContent } from "@/content/contact";

export function ContactSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading title={contactContent.title} description={contactContent.intro} />
        <div className="mt-8">
          <Button href="/contact">Get in touch</Button>
        </div>
      </Container>
    </section>
  );
}
