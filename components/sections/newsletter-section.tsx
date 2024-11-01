"use client";

import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  return (
    <section className="py-20 bg-neutral-100 dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-8">
            Be the first to know about new collections and exclusive offers.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
}