"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, LeadFormData } from "@/lib/schemas";
import { submitLead } from "@/app/actions";
import { toast } from "sonner";
import { Loader2, Mail, User, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export function LeadCapture() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    try {
      const result = await submitLead(data);
      if (result.success) {
        toast.success(result.message);
        reset();
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      aria-labelledby="contact-heading"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors relative overflow-hidden scroll-mt-20"
    >
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="contact-heading" className="text-5xl md:text-7xl font-semibold text-brand-deep dark:text-white leading-[1.1] mb-8">
              Transform Your <br />
              <span className="text-brand-bright">Enterprise Future</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              Join 500+ enterprises that have accelerated their growth with Accredian's custom learning paths and world-class mentorship.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    {...register("fullName")}
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-brand-bright focus:border-transparent outline-none transition-all dark:text-white"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-500 text-xs font-semibold ml-1">{errors.fullName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">
                  Work Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    {...register("workEmail")}
                    type="email"
                    placeholder="john@company.com"
                    className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-brand-bright focus:border-transparent outline-none transition-all dark:text-white"
                  />
                </div>
                {errors.workEmail && (
                  <p className="text-red-500 text-xs font-semibold ml-1">{errors.workEmail.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">
                  Company Name
                </label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    {...register("companyName")}
                    placeholder="Acme Inc."
                    className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-brand-bright focus:border-transparent outline-none transition-all dark:text-white"
                  />
                </div>
                {errors.companyName && (
                  <p className="text-red-500 text-xs font-semibold ml-1">{errors.companyName.message}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-brand-bright text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-6 w-6 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Request Enterprise Demo"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/30 dark:bg-brand-bright/5 rounded-full blur-[120px] -z-10"
      ></motion.div>
    </section>
  );
}
