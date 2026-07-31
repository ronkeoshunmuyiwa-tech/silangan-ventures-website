import Link from "next/link";
import { navigationItems } from "@/content/navigation";

export function Navigation() {
  return (
    <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
