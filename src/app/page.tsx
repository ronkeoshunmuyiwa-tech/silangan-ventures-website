import { HeroSection } from "@/components/sections/HeroSection";
import { CompanyOverviewSection } from "@/components/sections/CompanyOverviewSection";
import { KalyeAISection } from "@/components/sections/KalyeAISection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FrameworkSection } from "@/components/sections/FrameworkSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CompanyOverviewSection />
      <ServicesSection />
      <KalyeAISection />
      <FrameworkSection />
      <ContactSection />
    </>
  );
}
