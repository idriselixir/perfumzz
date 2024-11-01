"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
    </main>
  );
}