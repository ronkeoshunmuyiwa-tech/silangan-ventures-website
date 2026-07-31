import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { aboutContent } from "@/content/about";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <Container className="py-20">
      <h1 className="text-4xl font-semibold text-slate-900">{aboutContent.title}</h1>
      <p className="mt-6 max-w-2xl text-lg text-slate-600">{aboutContent.intro}</p>
    </Container>
  );
}
