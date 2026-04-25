import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 dark:bg-black text-white py-16 border-t border-slate-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-brand-bright rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">Accredian</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Accelerate your career with premium certifications and enterprise-grade training solutions.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-100 uppercase text-xs tracking-widest">Programs</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-brand-bright transition-colors">Data Science</Link></li>
              <li><Link href="#" className="hover:text-brand-bright transition-colors">Product Management</Link></li>
              <li><Link href="#" className="hover:text-brand-bright transition-colors">Business Analytics</Link></li>
              <li><Link href="#" className="hover:text-brand-bright transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-100 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-brand-bright transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-brand-bright transition-colors">Career</Link></li>
              <li><Link href="#" className="hover:text-brand-bright transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-brand-bright transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-100 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-brand-bright transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-brand-bright transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-brand-bright transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Accredian. All rights reserved.
          </p>
          <div className="flex gap-6">
            {/* Social icons placeholder */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 bg-slate-900 rounded-lg hover:bg-brand-bright transition-colors flex items-center justify-center cursor-pointer">
                <div className="w-3 h-3 bg-white/20 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
