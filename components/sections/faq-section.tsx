"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How long do your fragrances last?",
    answer: "Our fragrances are designed to last 8-12 hours on average, depending on the concentration and individual skin chemistry."
  },
  {
    question: "Are your products cruelty-free?",
    answer: "Yes, all our products are 100% cruelty-free and we never test on animals. We're certified by Leaping Bunny and PETA."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries worldwide. Shipping times and costs vary by location."
  },
  {
    question: "What's your return policy?",
    answer: "We offer a 30-day return policy for unopened products in their original packaging."
  },
  {
    question: "Are your fragrances suitable for sensitive skin?",
    answer: "Our fragrances are dermatologically tested and suitable for most skin types. However, we recommend doing a patch test first."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-neutral-50 dark:bg-neutral-800"
                  >
                    <p className="text-neutral-600 dark:text-neutral-300">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 