import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { contactContent } from "@/content/contact";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Container className="py-20">
      <h1 className="text-4xl font-semibold text-slate-900">{contactContent.title}</h1>
      <p className="mt-6 max-w-2xl text-lg text-slate-600">{contactContent.intro}</p>
      <p className="mt-4 text-base text-slate-600">
        Email:{" "}
        <a href={`mailto:${contactContent.email}`} className="font-medium text-slate-900 underline">
          {contactContent.email}
        </a>
      </p>
      <p className="mt-8 text-sm text-slate-500">
        A working contact form is planned for a later step — see docs/known-issues.md.
      </p>
    </Container>
  );
}
