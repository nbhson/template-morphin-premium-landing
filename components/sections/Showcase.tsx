"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the showcase section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        anticipatePin: 1,
      });

      // Animate laptop screen
      gsap.fromTo(
        ".laptop-screen",
        { scale: 0.8, y: 100, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=50%",
            scrub: 1,
          },
        }
      );

      // Animate phone
      gsap.fromTo(
        ".phone-mockup",
        { x: 200, rotateZ: 15, opacity: 0 },
        {
          x: 0,
          rotateZ: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=70%",
            scrub: 1,
          },
        }
      );

      // Floating windows
      gsap.to(".floating-window", {
        y: "random(-30, 30)",
        x: "random(-20, 20)",
        rotation: "random(-5, 5)",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900"
    >
      {/* Ambient lighting */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          {/* Headline */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              See It In
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Action
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Responsive, adaptive, and beautiful on every device.
            </p>
          </div>

          {/* Device mockups */}
          <div className="relative perspective-1000" style={{ transformStyle: "preserve-3d" }}>
            {/* Laptop */}
            <div className="laptop-screen relative mx-auto max-w-5xl">
              <div className="relative aspect-[16/10] bg-gray-900 rounded-2xl overflow-hidden border-4 border-gray-800 shadow-2xl">
                {/* Screen content */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20">
                  <div className="p-8 space-y-6">
                    <div className="h-4 w-48 bg-white/20 rounded-full" />
                    <div className="h-8 w-96 bg-white/30 rounded-lg" />
                    <div className="grid grid-cols-3 gap-4">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="aspect-square bg-white/10 rounded-xl backdrop-blur-sm" />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Screen glare */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              </div>
              {/* Laptop base */}
              <div className="relative h-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-3xl" />
            </div>

            {/* Phone mockup */}
            <div className="phone-mockup absolute bottom-0 right-0 lg:right-20 w-64 transform-style-3d">
              <div className="relative">
                <div className="aspect-[9/19] bg-gray-900 rounded-[3rem] border-8 border-gray-800 overflow-hidden shadow-2xl">
                  {/* Phone screen */}
                  <div className="relative w-full h-full bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-rose-500/30">
                    <div className="p-6 space-y-4">
                      <div className="h-2 w-24 bg-white/20 rounded-full mx-auto" />
                      <div className="space-y-3">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="h-16 bg-white/10 rounded-2xl backdrop-blur-sm" />
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl" />
                </div>
              </div>
            </div>

            {/* Floating windows */}
            <div className="floating-window absolute top-10 left-10 w-48 h-32 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl hidden lg:block" />
            <div className="floating-window absolute top-1/3 right-1/4 w-40 h-28 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
