
import ModalTafsirComp from "./ModalTafsirComp";

export default function CardAyatComp({ data, suratId }) {
  return (
    <div className="space-y-6 w-full">
      {data.map((item) => (
        <div 
          key={item.nomorAyat} 
          className="bg-slate-900/30 border border-slate-800/80 backdrop-blur-sm rounded-2xl p-5 sm:p-8 flex flex-col hover:border-slate-800 transition-all duration-300 shadow-md"
        >
          {/* Verse Header (Meta Info and Tafsir Button) */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800/50 mb-6">
            <div className="flex items-center space-x-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-xs sm:text-sm">
                {item.nomorAyat}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">
                Ayat {item.nomorAyat}
              </span>
            </div>
            
            {/* Tafsir Modal Trigger */}
            <div>
              <ModalTafsirComp suratId={suratId} nomorAyat={item.nomorAyat} />
            </div>
          </div>

          {/* Arabic Text (Right Side) */}
          <div className="text-right mb-6">
            <p className="font-arabic text-3xl sm:text-4xl leading-[2.5] sm:leading-[2.5] text-slate-100 font-normal select-all">
              {item.teksArab}
            </p>
          </div>

          {/* Latin Transliteration & Indonesian Translation (Left Side) */}
          <div className="text-left space-y-2 sm:space-y-3 pt-2">
            <p className="text-emerald-400/90 text-sm sm:text-base font-medium italic leading-relaxed">
              {item.teksLatin}
            </p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              {item.teksIndonesia}
            </p>
          </div>

        </div>
      ))}
    </div>
  );
}