"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1615228939096-9ead6c74008e?q=80&w=2070"
          alt="Background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-600 dark:from-neutral-50 dark:to-neutral-400">
            Essence of Luxury
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Discover our collection of exclusive fragrances crafted for the
            sophisticated soul.
          </p>
          <Button size="lg" className="rounded-full">
            Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}