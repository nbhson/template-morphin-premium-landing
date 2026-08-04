"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Problem() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal heading
      gsap.fromTo(
        ".problem-heading",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".problem-heading",
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );

      // Stagger problem items
      gsap.fromTo(
        ".problem-item",
        { opacity: 0, x: -100, rotateY: -30 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".problem-items",
            start: "top 70%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      // Background parallax
      gsap.to(".problem-bg", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -100,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const problems = [
    {
      title: "Generic Experiences",
      description: "Your audience craves unique, memorable interactions that stand out from the noise.",
      icon: "⚡",
    },
    {
      title: "Static Content",
      description: "Traditional websites fail to engage and tell compelling stories that convert.",
      icon: "💤",
    },
    {
      title: "Poor Performance",
      description: "Heavy animations and bloated code create sluggish experiences that drive users away.",
      icon: "🐌",
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="problem-bg absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="problem-heading text-center mb-20">
          <span className="inline-block px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold mb-6">
            The Challenge
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            The Digital
            <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Experience Gap
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Most digital experiences fail to captivate, engage, or convert.
            They're forgettable, static, and fail to tell a story.
          </p>
        </div>

        {/* Problem items */}
        <div className="problem-items grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="problem-item perspective-1000"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="group relative p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10">
                {/* Icon */}
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {problem.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-red-500 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {problem.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/5 group-hover:to-orange-500/5 rounded-3xl transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
