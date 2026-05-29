import { useEffect, useState } from "react";
import CartComp from "./components/CardComp";
import FilterComp from "./components/FilterComp";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [surats, setSurats] = useState([]);
  const [filteredSurats, setFilteredSurats] = useState([]); // Data yang ditampilkan (hasil filter)
  const [search, setSearch] = useState("");

  function updateSearchValue(value) {
    setSearch(value);

    const hasilFilter = surats.filter((item) => {
      return item.namaLatin.toLowerCase().includes(value.toLowerCase());
    });

    setFilteredSurats(hasilFilter);
  }

  async function getDataSurats() {
    const url = "https://equran.id/api/v2/surat";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      setSurats(result.data);
      setFilteredSurats(result.data);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getDataSurats();
  }, []);

  // Custom Loading UI
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <div className="relative flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-emerald-950/80 border-t-emerald-400 animate-spin" />
          <div className="absolute w-8 h-8 rounded-full bg-emerald-500/10 animate-ping" />
        </div>
        <p className="text-sm font-medium text-slate-400 animate-pulse">Memuat daftar surat...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <FilterComp updateSearchValue={updateSearchValue} />
      
      <div className="mt-4 mb-12 flex items-center justify-center">
        {filteredSurats.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/10 border border-dashed border-slate-800/80 rounded-3xl w-full max-w-lg px-6">
            <p className="text-slate-400 text-sm sm:text-base">
              Surat dengan kata kunci <span className="text-emerald-400 font-semibold">"{search}"</span> tidak ditemukan.
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Coba gunakan ejaan nama latin yang tepat (misal: 'Al-Baqarah' atau 'Yasin').
            </p>
          </div>
        ) : (
          <CartComp data={filteredSurats} type="surats" />
        )}
      </div>
    </div>
  );
}