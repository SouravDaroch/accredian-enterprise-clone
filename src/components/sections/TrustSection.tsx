"use client";

import React from "react";
import { motion } from "framer-motion";

export function TrustSection() {
  return (
    <section id="about" className="py-16 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800 transition-colors scroll-mt-20">
      <div className="container-custom">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-12"
        >
          Trusted by professionals from
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale dark:invert dark:opacity-20"
        >
          {/* Logos placeholder */}
          <div className="h-6 w-32 bg-slate-300 dark:bg-slate-700 rounded-lg"></div>
          <div className="h-6 w-32 bg-slate-300 dark:bg-slate-700 rounded-lg"></div>
          <div className="h-6 w-32 bg-slate-300 dark:bg-slate-700 rounded-lg"></div>
          <div className="h-6 w-32 bg-slate-300 dark:bg-slate-700 rounded-lg"></div>
        </motion.div>
      </div>
    </section>
  );
}
