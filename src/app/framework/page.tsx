import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { frameworkContent } from "@/content/framework";

export const metadata: Metadata = { title: "K.A.L.Y.E. Framework" };

export default function FrameworkPage() {
  return (
    <Container className="py-20">
      <h1 className="text-4xl font-semibold text-slate-900">{frameworkContent.title}</h1>
      <p className="mt-2 text-lg font-medium text-amber-600">{frameworkContent.tagline}</p>
      <p className="mt-3 italic text-slate-500">&quot;{frameworkContent.philosophy}&quot;</p>
      <p className="mt-6 max-w-3xl text-lg text-slate-600">{frameworkContent.intro}</p>
      <p className="mt-4 max-w-3xl text-slate-600">{frameworkContent.cycleNote}</p>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-900">The Five Stages</h2>
        <div className="mt-6 space-y-8">
          {frameworkContent.stages.map((stage) => (
            <div key={stage.letter} className="flex gap-6 rounded-2xl border border-slate-200 p-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-lg font-bold text-white">
                {stage.letter}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">{stage.title}</h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-wide text-amber-600">
                  {stage.subtitle}
                </p>
                <p className="mt-3 max-w-2xl text-slate-600">{stage.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-900">Supporting Proprietary Frameworks &amp; Tools</h2>
        <p className="mt-4 max-w-3xl text-slate-600">{frameworkContent.toolsIntro}</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {frameworkContent.tools.map((tool) => (
            <li key={tool.name} className="rounded-xl border border-slate-200 p-4">
              <p className="font-semibold text-slate-900">{tool.name}</p>
              <p className="mt-1 text-sm text-slate-600">{tool.description}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-3xl text-slate-600">{frameworkContent.toolsClosing}</p>
      </div>

      <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h2 className="text-2xl font-semibold text-slate-900">How Kalye AI Brings the Framework to Life</h2>
        <p className="mt-4 max-w-3xl text-slate-600">{frameworkContent.kalyeAiConnection}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-slate-900">Why the K.A.L.Y.E. Framework</h2>
        <p className="mt-4 max-w-3xl text-slate-600">{frameworkContent.whyFramework}</p>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Our Philosophy</h2>
        <p className="mt-2 text-lg italic text-amber-600">&quot;{frameworkContent.philosophy}&quot;</p>
        <p className="mt-4 max-w-3xl text-slate-600">{frameworkContent.philosophyBody}</p>
      </div>

      <p className="mt-12 max-w-3xl text-xs text-slate-400">{frameworkContent.ipNotice}</p>
    </Container>
  );
}