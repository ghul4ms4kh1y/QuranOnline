import { useEffect, useState } from "react"
import { Spinner } from "flowbite-react"
import CartComp from "./components/CardComp"
import FilterComp from "./components/FilterComp";


export default function App() {
  const [loading, setLoading] = useState(true);
  const [surats, setSurats] = useState([])
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
      // cek isi 
      // console.log(result);
      setSurats(result.data);
      setFilteredSurats(result.data);
      // mengganti loading state jadi false untuk menghilangkan spinner 
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  // memanggil / menjalankan getData API pas baru dibuka halamannya
  useEffect(() => {
    getDataSurats();
  }, []);

  // jika loaidng true, return pake yang ini 
  if (loading == true) {
    return (
      <div className="block mx-auto mt-50 w-100 text-center">
        <Spinner />
      </div>
    )
  }

  // jika loaing false, return pake ini 
  return (
    <div className="min-h-screen bg-fixed bg-[linear-gradient(0deg,rgba(5,13,255,1)_0%,rgba(9,9,121,1)_15%,rgba(3,0,0,1)_100%)] ">
      <FilterComp updateSearchValue={updateSearchValue} />
      <div className="mx-15 my-5 text-white flex items-center justify-center">
        <CartComp data={filteredSurats} type="surats"/>
      </div>
    </div>
  )
}