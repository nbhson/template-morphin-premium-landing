"use client";

import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Features from "@/components/sections/Features";
import Showcase from "@/components/sections/Showcase";
import Testimonials from "@/components/sections/Testimonials";
import CaseStudy from "@/components/sections/CaseStudy";
import Technology from "@/components/sections/Technology";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Showcase />
      <Testimonials />
      <CaseStudy />
      <Technology />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
