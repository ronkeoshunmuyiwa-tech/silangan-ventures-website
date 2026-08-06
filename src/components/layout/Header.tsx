import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Navigation } from "@/components/layout/Navigation";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/silangan-logo.png"
            alt={siteConfig.name}
            width={480}
            height={145}
            className="h-9 w-auto"
            priority
          />
        </Link>
        <Navigation />
        <div className="flex items-center gap-3">
          <Button href="/contact" className="hidden sm:inline-flex">
            Contact Us
          </Button>
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}