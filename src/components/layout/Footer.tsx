import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { footerLinks } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:justify-between">
        <div className="max-w-sm">
          <p className="text-base font-semibold text-slate-900">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-slate-600">{siteConfig.description}</p>
        </div>

        <nav className="flex flex-col gap-2 text-sm" aria-label="Footer">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-600 transition-colors duration-200 hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 transition-colors duration-200 hover:text-slate-900"
          >
            LinkedIn
          </a>
        </nav>
      </Container>

      <Container className="border-t border-slate-200 py-6 text-xs text-slate-500">
        © {siteConfig.copyrightYear} {siteConfig.legalName}. All rights reserved.
      </Container>
    </footer>
  );
}
