import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')] bg-cover bg-center">
      <div className="min-h-screen bg-gradient-to-r from-stone-900/95 to-stone-900/60 flex flex-col pt-20 px-8 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-grow">
          
          <div className="text-left z-10">
            <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold tracking-widest uppercase rounded-full mb-8">
              Roommate Expense Portal
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Shared a bill? <br /> <span className="text-blue-400">Let's split it.</span>
            </h1>
            <p className="text-lg text-stone-300 mb-10 max-w-md leading-relaxed font-medium">
              A beautifully simple place for roommates to report shared costs, add friends, calculate balances, and easily settle up.
            </p>
            <div className="flex gap-4">
              <Link href="/dashboard" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-xl hover:bg-blue-500 hover:scale-105 transition-all duration-300">
                Enter Dashboard →
              </Link>
            </div>
          </div>

          {/* Inline Image added to Landing Page */}
          <div className="hidden lg:flex justify-center z-10">
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80" 
              alt="Calculating Expenses" 
              className="rounded-3xl shadow-2xl border-4 border-white/10 transform rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
          
        </div>
      </div>
    </main>
  );
}