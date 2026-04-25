import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-16  px-10">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-accent text-brand-deep text-sm font-bold mb-10 tracking-wide uppercase">
              New: Enterprise Solutions 2.0
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-brand-deep dark:text-white leading-[1.05] mb-10">
              Let's Learn <br /> 
              <span className="text-brand-bright">Earn & Succeed</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-2xl">
              Get 1-on-1 mentorship from industry experts and accelerate your career with our top-rated certification programs.
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <Link 
                href="#" 
                className="w-full sm:w-auto text-center px-10 py-5 bg-brand-bright text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                Explore Programs
              </Link>
              <Link 
                href="#" 
                className="w-full sm:w-auto text-center px-10 py-5 bg-white dark:bg-slate-900 text-brand-deep dark:text-white border-2 border-slate-200 dark:border-slate-800 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all shadow-sm"
              >
                Refer & Earn
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-brand-accent/40 rounded-full blur-[120px] z-0"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[100px] z-0"></div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950/50">
        <div className="container-custom">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-12">
            Trusted by professionals from
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
            {/* Logos placeholder */}
            <div className="h-6 w-32 bg-slate-300 dark:bg-slate-700 rounded-lg"></div>
            <div className="h-6 w-32 bg-slate-300 dark:bg-slate-700 rounded-lg"></div>
            <div className="h-6 w-32 bg-slate-300 dark:bg-slate-700 rounded-lg"></div>
            <div className="h-6 w-32 bg-slate-300 dark:bg-slate-700 rounded-lg"></div>
          </div>
        </div>
      </section>
      
      {/* Featured Programs Section */}
      <section className="py-32">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-deep dark:text-white mb-4">
                Popular Programs
              </h2>
              <p className="text-xl text-slate-500">Choose from our wide range of world-class programs</p>
            </div>
            <Link href="#" className="text-brand-bright font-bold text-lg hover:underline underline-offset-8">
              View All Programs →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-500">
                <div className="h-64 bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                   <div className="absolute inset-0 bg-linear-to-br from-brand-deep/20 to-brand-bright/20 group-hover:scale-110 transition-transform duration-700"></div>
                   <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-bold text-brand-deep shadow-sm">
                     TOP RATED
                   </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center text-xs font-bold text-brand-bright mb-6 uppercase tracking-widest">
                    Data Science • 6 Months
                  </div>
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-brand-bright transition-colors leading-tight">
                    Advanced Certificate in Data Science & AI
                  </h3>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50 dark:border-slate-800">
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold mb-1">Fee</p>
                      <span className="text-3xl font-black text-brand-deep dark:text-white">₹ 59,000</span>
                    </div>
                    <button className="w-14 h-14 rounded-2xl bg-brand-accent text-brand-deep hover:bg-brand-bright hover:text-white transition-all flex items-center justify-center group/btn shadow-sm">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover/btn:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
