"use client";

import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-semibold">Essence</span>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}