"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const links = {
    Product: ["Features", "Pricing", "Case Studies", "Testimonials"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Resources: ["Documentation", "Help Center", "Community", "Updates"],
    Legal: ["Privacy", "Terms", "Cookies", "Licenses"],
  };

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Morphin
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Transform your digital experience with premium design and world-class motion.
              </p>
              {/* Social links */}
              <div className="flex gap-4">
                {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((social, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-500 flex items-center justify-center transition-colors"
                    data-cursor-hover
                  >
                    <span className="text-sm">{social[0]}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="font-semibold mb-4">{category}</div>
              <ul className="space-y-3">
                {items.map((item, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                      data-cursor-hover
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2026 Morphin. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors" data-cursor-hover>
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors" data-cursor-hover>
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors" data-cursor-hover>
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
