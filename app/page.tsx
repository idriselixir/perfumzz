"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { NewsletterSection } from "@/components/sections/newsletter-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <NewsletterSection />
    </main>
  );
}