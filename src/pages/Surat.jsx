import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardAyatComp from "../components/CardAyatComp";

export default function Surat() {
  const {suratId} = useParams();
  const [surats, setSurats] = useState([]);
  const [data, setData] = useState([]);

  async function getDetailSurats() {
    const url = "https://equran.id/api/v2/surat/" + suratId;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      // cek isi 
      // console.log(result); 
      setSurats(result.data.ayat);
      setData(result.data);
      // mengganti loading state jadi false untuk menghilangkan spinner 
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getDetailSurats();
  }, []);

  return (
    <div className="min-h-screen bg-fixed bg-[linear-gradient(0deg,rgba(5,13,255,1)_0%,rgba(9,9,121,1)_15%,rgba(3,0,0,1)_100%)] text-white flex items-center justify-center">
      <div className="max-w-5xl mx-auto p-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">{data.namaLatin}</h1>
          <p className="text-gray-500">{data.tempatTurun} · {data.jumlahAyat} Ayat</p>
        </div>

        {/* ayat  */}
        <CardAyatComp data={surats} suratId={suratId} type="surat" />
      </div>
    </div>
  );
}