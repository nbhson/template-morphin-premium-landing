"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudy() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal images with mask animation
      gsap.fromTo(
        ".case-image",
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.5,
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".case-images",
            start: "top 70%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      // Float stats
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "340%", label: "Conversion Increase" },
    { value: "3x", label: "Time on Page" },
    { value: "98%", label: "User Satisfaction" },
    { value: "10K+", label: "Active Users" },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold mb-6">
            Case Study
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Results That
            <span className="block bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Speak Volumes
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            See how we transformed TechFlow's digital presence and tripled their conversion rate.
          </p>
        </div>

        {/* Images grid */}
        <div className="case-images grid md:grid-cols-2 gap-8 mb-20">
          <div className="case-image aspect-[4/3] rounded-3xl overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📈</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">Before</div>
              </div>
            </div>
          </div>
          <div className="case-image aspect-[4/3] rounded-3xl overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">After</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
