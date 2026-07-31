import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { homepageContent } from "@/content/homepage";

export function HeroSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {homepageContent.heroHeadline}
          </h1>
          <p className="mt-6 text-lg text-slate-600">{homepageContent.heroSubtext}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={homepageContent.primaryCta.href}>
              {homepageContent.primaryCta.label}
            </Button>
            <Button href={homepageContent.secondaryCta.href} variant="secondary">
              {homepageContent.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
