"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger testimonial cards with different timings
      gsap.fromTo(
        ".testimonial-card",
        { opacity: 0, y: 100, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: {
            each: 0.2,
            from: "random",
          },
          scrollTrigger: {
            trigger: ".testimonials-grid",
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      quote: "The attention to detail and motion design is unparalleled. Our conversion rate increased by 340% after launch.",
      author: "Sarah Chen",
      role: "CEO, TechFlow",
      avatar: "👩💼",
      rating: 5,
    },
    {
      quote: "Finally, a landing page that feels alive. Our users spend 3x more time exploring, and engagement is through the roof.",
      author: "Marcus Rodriguez",
      role: "Product Lead, Horizon",
      avatar: "👨💻",
      rating: 5,
    },
    {
      quote: "This is what the future of web design looks like. Smooth, cinematic, and absolutely mesmerizing.",
      author: "Emily Watson",
      role: "Creative Director, Nexus",
      avatar: "👩🎨",
      rating: 5,
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-6"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Loved by
            <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Trusted by forward-thinking companies to elevate their digital presence.
          </motion.p>
        </div>

        {/* Testimonials grid */}
        <div className="testimonials-grid grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card group"
            >
              <div className="relative p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 rounded-3xl transition-all duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-white dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-800">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                10K+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-gray-200 dark:bg-gray-800" />
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
            </div>
            <div className="w-px h-12 bg-gray-200 dark:bg-gray-800" />
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                4.9/5
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
