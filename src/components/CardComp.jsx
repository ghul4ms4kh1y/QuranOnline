import { Link } from "react-router-dom";

export default function CardComp({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 w-full max-w-7xl mx-auto px-2">
      {data.map((item) => (
        <Link 
          key={item.nomor} 
          to={`/surat/${item.nomor}`} 
          className="group block"
        >
          <div className="h-full bg-slate-900/30 border border-slate-800/80 backdrop-blur-sm rounded-2xl p-5 flex items-center justify-between transition-all duration-300 transform hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-slate-900/50 hover:shadow-lg hover:shadow-emerald-950/20">
            
            {/* Left side: Number & Info */}
            <div className="flex items-center space-x-4 flex-1 min-w-0">
              
              {/* Islamic Star Number Badge */}
              <div className="relative flex items-center justify-center w-11 h-11 shrink-0">
                <svg viewBox="0 0 100 100" className="absolute w-full h-full text-emerald-500/30 group-hover:text-amber-500/40 group-hover:rotate-45 transition-all duration-500" fill="currentColor">
                  <path d="M50 2.5 L63.5 36.5 L97.5 50 L63.5 63.5 L50 97.5 L36.5 63.5 L2.5 50 L36.5 36.5 Z" />
                </svg>
                <svg viewBox="0 0 100 100" className="absolute w-full h-full text-emerald-500/80 group-hover:text-amber-400/90 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="4">
                  <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" />
                  <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="3" strokeDasharray="6 4" />
                </svg>
                <span className="relative z-10 font-bold text-xs text-slate-100 group-hover:text-white transition-colors duration-300">
                  {item.nomor}
                </span>
              </div>

              {/* Title and Translation */}
              <div className="text-left min-w-0">
                <h3 className="font-bold text-slate-200 group-hover:text-emerald-300 transition-colors duration-200 text-sm sm:text-base truncate">
                  {item.namaLatin}
                </h3>
                <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-200 truncate mt-0.5">
                  {item.arti}
                </p>
              </div>

            </div>

            {/* Right side: Arabic Script & Verses metadata */}
            <div className="flex flex-col items-end justify-center pl-2 shrink-0">
              <p className="text-xl sm:text-2xl font-arabic text-emerald-400 group-hover:text-emerald-300 transition-colors duration-200 font-medium">
                {item.nama}
              </p>
              <span className="text-[10px] text-slate-500 group-hover:text-slate-400 transition-colors duration-200 font-semibold tracking-wider uppercase mt-1">
                {item.jumlahAyat} Ayat
              </span>
            </div>

          </div>
        </Link>
      ))}
    </div>
  );
}