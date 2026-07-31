import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { privacyContent } from "@/content/legal";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <Container className="py-20">
      <h1 className="text-4xl font-semibold text-slate-900">{privacyContent.title}</h1>
      <p className="mt-6 max-w-2xl text-lg text-slate-600">{privacyContent.body}</p>
    </Container>
  );
}
