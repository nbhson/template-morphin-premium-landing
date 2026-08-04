"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger cards with different directions
      gsap.fromTo(
        ".feature-card:nth-child(odd)",
        { opacity: 0, x: -100, rotateY: -20 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 70%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ".feature-card:nth-child(even)",
        { opacity: 0, x: 100, rotateY: 20 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 70%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "Smooth Scrolling",
      description: "Buttery smooth 60fps scroll experience powered by Lenis for natural, physics-based momentum.",
      icon: "🎯",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "GSAP Animations",
      description: "Industry-leading animation library for professional, GPU-accelerated transitions and effects.",
      icon: "⚡",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Scroll Storytelling",
      description: "Every scroll reveals new content with pinned sections, parallax, and progressive disclosure.",
      icon: "📖",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Magnetic Interactions",
      description: "Buttons and elements respond to cursor proximity with smooth magnetic pull effects.",
      icon: "🧲",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Custom Cursor",
      description: "Sophisticated cursor that adapts shape, size, and behavior based on context and hover states.",
      icon: "🎨",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Performance First",
      description: "Optimized for 60fps with GPU transforms, lazy loading, and efficient re-renders.",
      icon: "🚀",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-white dark:bg-black">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-semibold mb-6"
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Built for
            <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Every feature is crafted with precision to create unforgettable digital experiences.
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group perspective-1000"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 h-full">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white text-3xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 rounded-bl-3xl rounded-tr-3xl transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
