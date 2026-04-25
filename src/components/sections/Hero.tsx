"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-16 md:py-16 bg-white dark:bg-slate-950 transition-colors scroll-mt-20">
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-accent dark:bg-slate-900 text-brand-deep dark:text-brand-bright text-sm font-bold mb-10 tracking-wide uppercase shadow-sm"
          >
            New: Enterprise Solutions 2.0
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-semibold text-brand-deep dark:text-white leading-[1.05] mb-10">
            Let's Learn <br /> 
            <motion.span 
              initial={{ textShadow: "0 0 0px rgba(33, 150, 243, 0)" }}
              animate={{ textShadow: "0 0 20px rgba(33, 150, 243, 0.2)" }}
              transition={{ delay: 1, duration: 2, repeat: Infinity, repeatType: "mirror" }}
              className="text-brand-bright"
            >
              Earn & Succeed
            </motion.span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-2xl">
            Get 1-on-1 mentorship from industry experts and accelerate your career with our top-rated certification programs.
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <Link 
              href="#programs" 
              className="w-full sm:w-auto text-center px-10 py-5 bg-brand-bright text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              Explore Programs
            </Link>
            <Link 
              href="#contact" 
              className="w-full sm:w-auto text-center px-10 py-5 bg-white dark:bg-slate-900 text-brand-deep dark:text-white border-2 border-slate-200 dark:border-slate-800 rounded-2xl font-bold text-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
            >
              Refer & Earn
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.5, 0.4] 
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-brand-accent/40 dark:bg-brand-bright/10 rounded-full blur-[120px] z-0"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.4, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-blue-100/30 dark:bg-brand-deep/20 rounded-full blur-[100px] z-0"
      ></motion.div>
    </section>
  );
}
