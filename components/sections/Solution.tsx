"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Solution() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin section for cinematic reveal
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        anticipatePin: 1,
      });

      // Reveal text with mask
      gsap.fromTo(
        ".solution-text",
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.5,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=50%",
            scrub: 1,
          },
        }
      );

      // Scale and rotate image
      gsap.fromTo(
        imageRef.current,
        { scale: 0.6, rotateY: -30, opacity: 0 },
        {
          scale: 1,
          rotateY: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=50%",
            scrub: 1,
          },
        }
      );

      // Floating particles
      gsap.to(".solution-particle", {
        y: "random(-50, 50)",
        x: "random(-30, 30)",
        rotation: "random(-180, 180)",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900"
    >
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="solution-particle absolute w-2 h-2 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text content */}
            <div className="solution-text">
              <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-semibold mb-6">
                The Solution
              </span>
              <h2 className="text-5xl md:text-7xl font-bold mb-8">
                Cinematic
                <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Storytelling
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                We craft premium digital experiences that feel like watching a
                film. Every scroll reveals something new. Every interaction
                tells part of your story.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                With world-class motion design, layered composition, and
                attention to detail that rivals award-winning studios, we
                transform your message into an unforgettable journey.
              </p>

              {/* Feature list */}
              <ul className="mt-10 space-y-4">
                {[
                  "Award-winning motion design",
                  "60fps smooth animations",
                  "Scroll-driven storytelling",
                  "Magnetic interactions",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual element */}
            <div
              ref={imageRef}
              className="perspective-1000 relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative aspect-square">
                {/* Main card */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl transform rotate-3" />
                <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-3xl shadow-inner" />
                
                {/* Floating elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg transform rotate-12 animate-float" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg animate-float" style={{ animationDelay: "0.5s" }} />
                
                {/* Content inside card */}
                <div className="absolute inset-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">✨</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                      Premium Craft
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
