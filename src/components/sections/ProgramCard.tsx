import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  title: string;
  category: string;
  duration: string;
  fee: string;
  image: string;
  isTopRated?: boolean;
}

export function ProgramCard({ title, category, duration, fee, image, isTopRated }: ProgramCardProps) {
  return (
    <div className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-500">
      <div className="h-64 bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        {isTopRated && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 dark:bg-brand-deep/90 backdrop-blur-sm rounded-lg text-xs font-bold text-brand-deep dark:text-brand-bright shadow-lg border border-slate-100 dark:border-brand-bright/20">
            TOP RATED
          </div>
        )}
      </div>
      <div className="p-8">
        <div className="flex items-center text-xs font-bold text-brand-bright mb-6 uppercase tracking-widest">
          {category} • {duration}
        </div>
        <h3 className="text-2xl font-bold mb-6 group-hover:text-brand-bright transition-colors leading-tight text-slate-900 dark:text-slate-100">
          {title}
        </h3>
        <div className="flex items-center justify-between pt-6 border-t border-slate-50 dark:border-slate-800">
          <div>
            <p className="text-xs text-slate-400 dark:text-slate-500 uppercase font-bold mb-1">Fee</p>
            <span className="text-3xl font-black text-brand-deep dark:text-slate-100 transition-colors tracking-tight">{fee}</span>
          </div>
          <button className="w-14 h-14 rounded-2xl bg-brand-accent dark:bg-slate-800 text-brand-deep dark:text-brand-bright hover:bg-brand-bright hover:text-white transition-all flex items-center justify-center group/btn shadow-sm">
            <ArrowRight className="h-6 w-6 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
