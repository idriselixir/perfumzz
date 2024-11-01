"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const products = [
  {
    name: "Midnight Rose",
    description: "A mysterious blend of Bulgarian rose and dark vanilla.",
    price: "$129.99",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=2070",
  },
  {
    name: "Ocean Breeze",
    description: "Fresh marine notes combined with citrus and woody undertones.",
    price: "$149.99",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=987",
  },
  {
    name: "Golden Amber",
    description: "Warm amber enriched with exotic spices and precious woods.",
    price: "$169.99",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=2069",
  },
];

export function ProductShowcase() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Featured Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group">
                <div className="relative h-[400px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">{product.price}</span>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}