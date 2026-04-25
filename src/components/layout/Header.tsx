"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { motion, useScroll, useTransform, animate } from "framer-motion";

const NAV_LINKS = [
  { name: "Programs", href: "#programs", id: "programs" },
  { name: "About Us", href: "#about", id: "about" },
  { name: "Refer & Earn", href: "#contact", id: "contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);
  const { scrollY } = useScroll();

  // Smoothly transform values based on scroll
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );

  const borderOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      // Simple active section detection
      const sections = ["home", "programs", "about", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsScrolling(true);
      setActiveSection(id);
      
      const targetPosition = element.offsetTop - 80;
      const startPosition = window.scrollY;
      
      // Use Framer Motion's animate function for an ultra-smooth, eased scroll
      animate(startPosition, targetPosition, {
        type: "spring",
        stiffness: 45, // Lower stiffness for a more "luxurious" feel
        damping: 15,
        mass: 1,
        onUpdate: (latest) => window.scrollTo(0, latest),
        onComplete: () => {
          setTimeout(() => setIsScrolling(false), 100);
        }
      });
    }
  };

  return (
    <motion.header
      style={{
        borderBottomWidth: useTransform(scrollY, [0, 50], [0, 1]),
      }}
      className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-shadow duration-300 bg-white/0 dark:bg-slate-950/0 backdrop-blur-md shadow-sm border-slate-100 dark:border-slate-800"
    >
      {/* Real-time background overlay for dark/light support with Framer Motion style */}
      <motion.div
        style={{ 
          opacity: borderOpacity,
          backgroundColor: useTransform(
            scrollY,
            [0, 50],
            ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
          )
        }}
        className="absolute inset-0 dark:hidden -z-10"
      />
      <motion.div
        style={{ 
          opacity: borderOpacity,
          backgroundColor: useTransform(
            scrollY,
            [0, 50],
            ["rgba(15, 23, 42, 0)", "rgba(2, 6, 23, 0.8)"]
          )
        }}
        className="absolute inset-0 hidden dark:block -z-10"
      />

      <div className="container-custom flex items-center justify-between w-full">
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 group outline-none"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-brand-bright rounded-xl flex items-center justify-center shadow-lg transition-transform"
          >
            <span className="text-white font-bold text-xl">A</span>
          </motion.div>
          <span className="text-2xl font-bold tracking-tight text-brand-deep dark:text-white transition-colors">
            Accredian
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-2 relative">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative px-4 py-2 text-sm font-semibold transition-colors uppercase tracking-wide text-slate-900 dark:text-slate-100 hover:text-brand-bright outline-none"
            >
              <span className="relative z-10">{link.name}</span>
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-bright rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden sm:flex items-center gap-4">
            <button className="px-6 py-2.5 text-sm font-bold text-slate-900 dark:text-white hover:opacity-70 transition-opacity">
              Login
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-8 py-2.5 text-sm font-bold bg-brand-bright text-white rounded-full shadow-lg hover:shadow-brand-bright/20 transition-all text-center outline-none"
            >
              Try for free
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
