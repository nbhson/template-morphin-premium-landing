"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does it take to build a landing page?",
      answer: "Typically 2-4 weeks depending on complexity. We work in sprints with regular check-ins to ensure everything aligns with your vision.",
    },
    {
      question: "Can I customize the animations?",
      answer: "Absolutely! Every animation, interaction, and transition is fully customizable. We tailor each element to match your brand identity and storytelling goals.",
    },
    {
      question: "Is it mobile-friendly?",
      answer: "Yes, all our designs are fully responsive and optimized for every device. We ensure smooth 60fps performance on both desktop and mobile.",
    },
    {
      question: "What about performance?",
      answer: "Performance is our top priority. We use GPU-accelerated animations, lazy loading, and modern optimization techniques to maintain 60fps throughout.",
    },
    {
      question: "Do you provide support after launch?",
      answer: "Yes, we offer ongoing support packages including updates, bug fixes, and performance monitoring to keep your site running flawlessly.",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-semibold mb-6">
            FAQ
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Got
            <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Questions?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            We've got answers to help you get started.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-white dark:bg-gray-900"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                data-cursor-hover
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-indigo-500"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
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
