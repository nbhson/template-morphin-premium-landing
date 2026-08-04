"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

export default function Technology() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Floating tech icons
    gsap.to(".tech-icon", {
      y: "random(-20, 20)",
      x: "random(-15, 15)",
      rotation: "random(-10, 10)",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2,
    });
  }, []);

  const technologies = [
    { name: "React", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
    { name: "Next.js", icon: "▲", color: "from-gray-700 to-black" },
    { name: "TypeScript", icon: "📘", color: "from-blue-600 to-blue-800" },
    { name: "Tailwind", icon: "💨", color: "from-cyan-400 to-blue-500" },
    { name: "GSAP", icon: "⚡", color: "from-green-500 to-emerald-600" },
    { name: "Framer", icon: "✨", color: "from-purple-500 to-pink-500" },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-white dark:bg-black">
      {/* Floating background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-6"
          >
            Technology
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Built with
            <span className="block bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Modern Stack
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Powered by industry-leading technologies for maximum performance and scalability.
          </motion.p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="tech-icon group"
            >
              <div className="relative aspect-square flex flex-col items-center justify-center p-6 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className={`text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-500`}>
                  {tech.icon}
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                  {tech.name}
                </div>
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            { title: "60fps Animations", desc: "Smooth, GPU-accelerated performance" },
            { title: "Type-Safe", desc: "Full TypeScript coverage for reliability" },
            { title: "Responsive", desc: "Beautiful on every device and screen size" },
          ].map((feature, i) => (
            <div key={i} className="text-center p-6">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                {feature.title}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {feature.desc}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
