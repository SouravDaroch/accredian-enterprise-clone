import React from "react";
import Link from "next/link";
import { ProgramCard } from "./ProgramCard";

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

export function FeaturedPrograms() {
  return (
    <section className="py-32 bg-white dark:bg-slate-950 transition-colors">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-deep dark:text-white mb-4">
              Popular Programs
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400">Choose from our wide range of world-class programs</p>
          </div>
          <Link href="#" className="text-brand-bright font-bold text-lg hover:underline underline-offset-8 transition-all">
            View All Programs →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROGRAMS.map((program, idx) => (
            <ProgramCard key={idx} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}
