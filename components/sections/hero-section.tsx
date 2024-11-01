"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, slideIn, float } from "@/lib/animations";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1615228939096-9ead6c74008e?q=80&w=2070"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <motion.h1 
            variants={slideIn}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-600 dark:from-neutral-50 dark:to-neutral-400"
          >
            Essence of Luxury
          </motion.h1>
          
          <motion.p
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { delay: 0.3 } }
            }}
            className="text-xl md:text-2xl mb-8 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto"
          >
            Discover our collection of exclusive fragrances crafted for the
            sophisticated soul.
          </motion.p>
          
          <motion.div
            variants={float}
            animate="animate"
          >
            <Button size="lg" className="rounded-full">
              Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -bottom-4 left-0 w-full h-24 bg-gradient-to-t from-[#FAF7F5] to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />
      
      {/* Floating particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-indigo-600/20"
          style={{
            top: `${20 + i * 30}%`,
            left: `${10 + i * 30}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </section>
  );
}