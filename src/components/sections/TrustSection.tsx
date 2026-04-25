"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Cpu, Zap, Award, ShieldCheck, Rocket } from "lucide-react";

const PARTNERS = [
  { icon: Globe, name: "GlobalTech" },
  { icon: Cpu, name: "DataCore" },
  { icon: Zap, name: "FlashScale" },
  { icon: Award, name: "EliteCert" },
  { icon: ShieldCheck, name: "SafeGuard" },
  { icon: Rocket, name: "SkyHigh" },
];

export function TrustSection() {
  return (
    <section 
      id="about" 
      aria-labelledby="trust-heading"
      className="py-16 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800 transition-colors scroll-mt-20"
    >
      <div className="container-custom">
        <motion.h2 
          id="trust-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-12"
        >
          Trusted by professionals from world-class organizations
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 dark:opacity-30 transition-opacity"
        >
          {PARTNERS.map((partner, idx) => (
            <div key={idx} className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-default group">
              <partner.icon className="w-8 h-8 text-slate-600 dark:text-white group-hover:text-brand-bright transition-colors" strokeWidth={1.5} />
              <span className="text-xl font-bold tracking-tight text-slate-700 dark:text-white group-hover:text-brand-bright transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
