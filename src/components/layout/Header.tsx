"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800" 
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between w-full">
        <Link 
          href="#home" 
          onClick={(e) => scrollToSection(e, "home")}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 bg-brand-bright rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-brand-deep dark:text-white transition-colors">
            Accredian
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          <Link 
            href="#programs" 
            onClick={(e) => scrollToSection(e, "programs")}
            className="text-sm font-semibold hover:text-brand-bright transition-colors uppercase tracking-wide text-slate-900 dark:text-slate-100"
          >
            Programs
          </Link>
          <Link 
            href="#about" 
            onClick={(e) => scrollToSection(e, "about")}
            className="text-sm font-semibold hover:text-brand-bright transition-colors uppercase tracking-wide text-slate-900 dark:text-slate-100"
          >
            About Us
          </Link>
          <Link 
            href="#contact" 
            onClick={(e) => scrollToSection(e, "contact")}
            className="text-sm font-semibold hover:text-brand-bright transition-colors uppercase tracking-wide text-slate-900 dark:text-slate-100"
          >
            Refer & Earn
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden sm:flex items-center gap-4">
            <button className="px-6 py-2.5 text-sm font-bold text-slate-900 dark:text-white hover:opacity-70 transition-opacity">
              Login
            </button>
            <Link 
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="px-8 py-2.5 text-sm font-bold bg-brand-bright text-white rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all text-center"
            >
              Try for free
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
