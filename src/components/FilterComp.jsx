import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

export default function FilterComp({ updateSearchValue }) {
  const popularSurahs = [
    { name: "Al-Kahfi", nomor: 18 },
    { name: "Yasin", nomor: 36 },
    { name: "Al-Waqi'ah", nomor: 56 },
    { name: "Al-Mulk", nomor: 67 }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pt-12 pb-8 flex flex-col items-center">
      {/* Title / Greeting banner */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-emerald-100 to-slate-100 tracking-tight mb-3">
          Cari & Baca Al-Qur'an
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto">
          Membaca, mempelajari tafsir, dan memahami Al-Qur'an secara online dengan antarmuka yang modern dan nyaman.
        </p>
      </div>

      {/* Search Input Container */}
      <div className="w-full relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <IoIosSearch className="h-6 w-6 text-slate-500 group-focus-within:text-emerald-400 transition-colors duration-200" />
        </div>
        <input
          type="text"
          className="block w-full pl-12 pr-4 py-3.5 sm:py-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 backdrop-blur-sm shadow-inner transition-all duration-300 text-sm sm:text-base"
          placeholder="Cari surat (contoh: Al-Baqarah, Al-Mulk)..."
          onChange={(e) => updateSearchValue(e.target.value)}
        />
        {/* Decorative inner glow indicator on hover */}
        <div className="absolute inset-0 rounded-2xl border border-emerald-500/10 pointer-events-none group-hover:border-emerald-500/20 transition-colors duration-200" />
      </div>

      {/* Popular shortcuts */}
      <div className="flex flex-wrap justify-center items-center gap-2 mt-4 text-xs sm:text-sm">
        <span className="text-slate-500 mr-1 font-medium">Surat Populer:</span>
        {popularSurahs.map((surah) => (
          <Link
            key={surah.nomor}
            to={`/surat/${surah.nomor}`}
            className="px-3.5 py-1.5 rounded-xl bg-slate-900/40 border border-slate-800/60 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-950/10 transition-all duration-200"
          >
            {surah.name}
          </Link>
        ))}
      </div>
    </div>
  );
}