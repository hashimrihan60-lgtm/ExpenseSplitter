import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#FCFBF9] border-b border-stone-200/60 px-8 py-4 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 text-white font-bold rounded flex items-center justify-center">
          S
        </div>
        <span className="font-bold text-lg text-stone-800 tracking-tight">SPLITTER</span>
      </Link>
      <div className="space-x-4 flex items-center">
        <Link href="/dashboard" className="text-sm text-stone-600 hover:text-stone-900 font-medium transition-colors">
          Browse expenses
        </Link>
        <Link href="/dashboard" className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
          + Log an expense
        </Link>
      </div>
    </nav>
  );
}