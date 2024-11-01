"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Droplets, Heart, Wind } from "lucide-react";

const features = [
  {
    title: "Natural Ingredients",
    description:
      "Our fragrances are crafted using the finest natural ingredients sourced from around the world.",
    icon: Droplets,
  },
  {
    title: "Long-Lasting",
    description:
      "Carefully formulated to ensure your chosen scent stays with you throughout the day.",
    icon: Wind,
  },
  {
    title: "Cruelty-Free",
    description:
      "We're committed to ethical practices and never test our products on animals.",
    icon: Heart,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Why Choose Our Fragrances
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-neutral-600 dark:text-neutral-300" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}