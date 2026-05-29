import { Modal, ModalBody, ModalHeader, ModalFooter } from "flowbite-react";
import { useState } from "react";

export default function ModalTafsirComp({ suratId, nomorAyat }) {
  const [openModal, setOpenModal] = useState(false);
  const [tafsir, setTafsir] = useState("");
  const [loading, setLoading] = useState(false);

  async function getTafsir() {
    const url = `https://equran.id/api/v2/tafsir/${suratId}`;
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Response status: ${response.status}`);

      const result = await response.json();
      const ayat = result.data.tafsir.find(
        (item) => item.ayat === nomorAyat
      );

      setTafsir(ayat.teks);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  }

  function openTafsir() {
    setOpenModal(true);
    setTafsir(""); // reset previous tafsir text
    getTafsir();
  }

  return (
    <>
      <button
        onClick={openTafsir}
        className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-all duration-200 shadow-sm"
      >
        Tafsir
      </button>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <ModalHeader className="border-b border-slate-800 bg-slate-900 [&>h3]:text-slate-100 [&>h3]:font-bold [&>h3]:text-lg [&>button]:text-slate-400 [&>button]:hover:text-slate-100">
            Tafsir Ayat {nomorAyat}
          </ModalHeader>

          <ModalBody className="bg-slate-900 text-slate-300 p-6">
            <div className="max-h-[60vh] overflow-y-auto pr-1">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-10 space-y-3">
                  <div className="w-8 h-8 rounded-full border-3 border-emerald-950/80 border-t-emerald-400 animate-spin" />
                  <p className="text-xs text-slate-400">Mengambil data tafsir...</p>
                </div>
              ) : (
                <p className="text-sm sm:text-base leading-relaxed text-slate-300 font-normal whitespace-pre-line text-left">
                  {tafsir}
                </p>
              )}
            </div>
          </ModalBody>

          <ModalFooter className="border-t border-slate-800 bg-slate-900 p-4 flex justify-end">
            <button 
              onClick={() => setOpenModal(false)}
              className="text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-200 shadow-sm"
            >
              Tutup
            </button>
          </ModalFooter>
        </div>
      </Modal>
    </>
  );
}