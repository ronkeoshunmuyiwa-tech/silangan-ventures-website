import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { disclaimerContent } from "@/content/legal";

export const metadata: Metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <Container className="py-20">
      <h1 className="text-4xl font-semibold text-slate-900">{disclaimerContent.title}</h1>
      <p className="mt-6 max-w-2xl text-lg text-slate-600">{disclaimerContent.body}</p>
    </Container>
  );
}
