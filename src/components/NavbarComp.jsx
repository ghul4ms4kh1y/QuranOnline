import { Link } from "react-router-dom";
import { GiOpenBook } from "react-icons/gi";

export default function NavbarComp() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-900/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Brand Link */}
          <Link to="/" className="flex items-center space-x-3 group mx-auto sm:mx-0">
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 group-hover:border-emerald-500/60 shadow-lg shadow-emerald-950/20 group-hover:shadow-emerald-500/10 transition-all duration-300">
              <GiOpenBook className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent group-hover:brightness-110 transition-all duration-300">
                MyQur'an
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase -mt-1 hidden sm:inline">
                Al-Qur'an Digital Indonesia
              </span>
            </div>
          </Link>
          
          {/* Secondary Info / Theme indicator */}
          <div className="hidden sm:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-emerald-400/90 shadow-sm shadow-black/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Online API v2</span>
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  );
}