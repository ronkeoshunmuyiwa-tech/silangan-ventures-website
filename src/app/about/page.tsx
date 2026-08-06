import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { aboutContent } from "@/content/about";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  const { founder } = aboutContent;
  return (
    <Container className="py-20">
      <h1 className="text-4xl font-semibold text-slate-900">{aboutContent.title}</h1>

      <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-start">
        <Image
          src={founder.photo}
          alt={founder.name}
          width={240}
          height={300}
          className="h-60 w-48 flex-shrink-0 rounded-xl object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">{founder.name}</h2>
          <p className="mt-1 text-sm font-medium uppercase tracking-wide text-amber-600">
            {founder.title}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {founder.focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 max-w-3xl space-y-6 text-slate-600">
        <p>{founder.bio}</p>
        <p>{founder.background}</p>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-900">Core Areas of Expertise</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {founder.expertise.map((item) => (
            <div key={item.area} className="rounded-xl border border-slate-200 p-4">
              <p className="font-semibold text-slate-900">{item.area}</p>
              <p className="mt-1 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="font-semibold text-slate-900">Current Roles</h3>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            {founder.credentials.currentRoles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Previous Experience</h3>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            {founder.credentials.previousExperience.map((exp) => (
              <li key={exp}>{exp}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Education</h3>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            {founder.credentials.education.map((edu) => (
              <li key={edu}>{edu}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Personal Philosophy</h2>
        <p className="mt-2 text-lg italic text-amber-600">&quot;{founder.philosophy}&quot;</p>
        <p className="mt-4 max-w-2xl text-slate-600">{founder.philosophyBody}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-slate-900">Founder Vision</h2>
        <p className="mt-4 max-w-3xl text-slate-600">{founder.vision}</p>
      </div>

      <div className="mt-8 border-l-4 border-amber-500 pl-6">
        <p className="text-lg italic text-slate-700">&quot;{founder.signatureStatement}&quot;</p>
      </div>
    </Container>
  );
}