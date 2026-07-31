"use client";

import { useState } from "react";
import Link from "next/link";
import { navigationItems } from "@/content/navigation";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
      >
        <span className="h-0.5 w-6 bg-slate-900 transition-transform duration-200" />
        <span className="h-0.5 w-6 bg-slate-900 transition-opacity duration-200" />
        <span className="h-0.5 w-6 bg-slate-900 transition-transform duration-200" />
      </button>

      <div
        id="mobile-nav-panel"
        className={`overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-slate-200 py-4" aria-label="Mobile">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
