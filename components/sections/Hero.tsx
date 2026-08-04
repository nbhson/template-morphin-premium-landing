"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate headline words
      gsap.fromTo(
        ".hero-word",
        { opacity: 0, y: 100, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.3,
        }
      );

      // Animate subtitle
      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 1.2, ease: "power3.out" }
      );

      // Animate CTA
      gsap.fromTo(
        ".hero-cta",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 1.5, ease: "back.out(1.7)" }
      );

      // Floating decorations
      gsap.to(".float-decoration", {
        y: -30,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.3,
      });

      // Hero image rotation and scale on scroll
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        scale: 1.2,
        rotateZ: 5,
        y: 100,
      });
    }, heroRef);

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPercent = (clientX / window.innerWidth - 0.5) * 2;
      const yPercent = (clientY / window.innerHeight - 0.5) * 2;

      gsap.to(".parallax-layer-1", {
        x: xPercent * 20,
        y: yPercent * 20,
        duration: 1,
      });

      gsap.to(".parallax-layer-2", {
        x: xPercent * 40,
        y: yPercent * 40,
        duration: 1.2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg opacity-60" />
      
      {/* Floating decorations */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl float-decoration parallax-layer-1" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-3xl float-decoration parallax-layer-2" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl float-decoration parallax-layer-1" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Headline with word-by-word animation */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 perspective-1000">
          <span className="block overflow-hidden">
            <span className="hero-word inline-block">Transform</span>{" "}
            <span className="hero-word inline-block">Your</span>
          </span>
          <span className="block overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            <span className="hero-word inline-block">Digital</span>{" "}
            <span className="hero-word inline-block">Experience</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Elevate your brand with world-class design, cinematic interactions,
          and premium craftsmanship that tells your story.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-lg overflow-hidden"
            data-cursor-hover
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-full font-semibold text-lg hover:border-indigo-500 transition-colors duration-300"
            data-cursor-hover
          >
            Watch Demo
          </motion.button>
        </div>
      </div>

      {/* Hero image/visualization */}
      <div
        ref={imageRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] max-w-5xl h-[60%] pointer-events-none"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 via-purple-500/20 to-transparent rounded-t-3xl backdrop-blur-sm glass border border-white/20 shadow-2xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-t-3xl" />
          
          {/* Decorative elements inside hero image */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-2xl opacity-50 blur-xl animate-float" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full opacity-50 blur-xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400"
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
