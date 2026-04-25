"use client";

import React from "react";
import Link from "next/link";
import { ProgramCard } from "./ProgramCard";
import { motion } from "framer-motion";

const PROGRAMS = [
  {
    title: "Advanced Certificate in Data Science & AI",
    category: "Data Science",
    duration: "6 Months",
    fee: "₹ 59,000",
    isTopRated: true,
  },
  {
    title: "Executive Program in Product Management",
    category: "Management",
    duration: "4 Months",
    fee: "₹ 45,000",
    isTopRated: true,
  },
  {
    title: "Professional Certificate in Business Analytics",
    category: "Analytics",
    duration: "5 Months",
    fee: "₹ 39,000",
    isTopRated: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function FeaturedPrograms() {
  return (
    <section id="programs" className="py-32 bg-white dark:bg-slate-950 transition-colors scroll-mt-20">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-deep dark:text-white mb-4">
              Popular Programs
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400">Choose from our wide range of world-class programs</p>
          </div>
          <Link href="#" className="hidden md:block text-brand-bright font-bold text-lg hover:underline underline-offset-8 transition-all">
            View All Programs →
          </Link>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {PROGRAMS.map((program, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <ProgramCard {...program} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 md:hidden flex justify-center">
          <Link href="#" className="text-brand-bright font-bold text-lg hover:underline underline-offset-8 transition-all">
            View All Programs →
          </Link>
        </div>
      </div>
    </section>
  );
}
