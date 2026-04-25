import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accredian-bright rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Accredian</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Accelerate your career with premium certifications and enterprise-grade training solutions.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Programs</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-white transition-colors">Data Science</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Product Management</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Business Analytics</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Career</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Accredian. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {/* Social icons placeholder */}
            <div className="w-5 h-5 bg-slate-800 rounded-full"></div>
            <div className="w-5 h-5 bg-slate-800 rounded-full"></div>
            <div className="w-5 h-5 bg-slate-800 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
