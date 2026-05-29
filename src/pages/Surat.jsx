import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CardAyatComp from "../components/CardAyatComp";
import { FiArrowLeft } from "react-icons/fi";
import { TbBook } from "react-icons/tb";

export default function Surat() {
  const { suratId } = useParams();
  const [surats, setSurats] = useState([]);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  async function getDetailSurats() {
    const url = "https://equran.id/api/v2/surat/" + suratId;
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      setSurats(result.data.ayat);
      setData(result.data);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    getDetailSurats();
  }, [suratId]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <div className="relative flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-emerald-950/80 border-t-emerald-400 animate-spin" />
          <div className="absolute w-8 h-8 rounded-full bg-emerald-500/10 animate-ping" />
        </div>
        <p className="text-sm font-medium text-slate-400 animate-pulse">Memuat ayat-ayat...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-2 py-4">
      {/* Back button */}
      <div className="mb-6 text-left">
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl bg-slate-900/40 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-950/10 transition-all duration-200 animate-fade-in"
        >
          <FiArrowLeft className="w-4 h-4" />
          <span>Kembali ke Daftar Surat</span>
        </Link>
      </div>

      {/* Surah Hero Header Card */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/70 via-emerald-950/10 to-slate-900/70 p-6 sm:p-10 mb-8 shadow-xl text-center">
        {/* Glow ambient effects */}
        <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-emerald-500/5 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-teal-500/5 blur-[80px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-4xl sm:text-5xl font-arabic text-emerald-400 font-medium mb-4 drop-shadow-md">
            {data.nama}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight mb-2">
            {data.namaLatin}
          </h1>
          <p className="text-sm sm:text-base text-emerald-300/80 font-medium mb-4">
            {data.arti}
          </p>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-2" />

          <div className="flex items-center space-x-4 mt-2 text-xs sm:text-sm font-medium text-slate-400">
            <span className="px-3 py-1 rounded-lg bg-slate-950/50 border border-slate-800/60 uppercase tracking-wider text-[10px] text-emerald-400 font-bold">
              {data.tempatTurun}
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <TbBook className="w-4 h-4 text-emerald-500/80" />
              <span>{data.jumlahAyat} Ayat</span>
            </span>
          </div>
        </div>
      </div>

      {/* Ayat List */}
      <CardAyatComp data={surats} suratId={suratId} />
    </div>
  );
}