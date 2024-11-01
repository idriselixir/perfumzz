"use client";

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fashion Blogger",
    comment: "The fragrances are absolutely divine! I've never received so many compliments on my scent before.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Perfume Enthusiast",
    comment: "The attention to detail in each fragrance is remarkable. These are truly luxury scents.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    rating: 5
  },
  {
    name: "Emma Davis",
    role: "Beauty Editor",
    comment: "These fragrances have become my signature scents. The longevity is impressive!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-neutral-600 dark:text-neutral-300">{testimonial.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 