import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { kalyeAiContent } from "@/content/kalye-ai";

export const metadata: Metadata = { title: "Kalye AI" };

export default function KalyeAIPage() {
  return (
    <Container className="py-20">
      <h1 className="text-4xl font-semibold text-slate-900">{kalyeAiContent.title}</h1>
      <p className="mt-6 max-w-2xl text-lg text-slate-600">{kalyeAiContent.intro}</p>
      <div className="mt-8">
        <Button href={kalyeAiContent.pilotCta.href}>{kalyeAiContent.pilotCta.label}</Button>
      </div>
    </Container>
  );
}
