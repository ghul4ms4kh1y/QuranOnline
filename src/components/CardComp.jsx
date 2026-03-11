import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

export default function CardComp({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-3 gap-4 md:gap-6">
      {data.map((item) => (
        <Link key={item.nomor} to={`/surat/${item.nomor}`}>
          <Card className="max-w-sm">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                
                <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10">
                    <svg viewBox="0 0 100 100" className="absolute w-full h-full" fill="none">
                        <circle cx="50" cy="50" r="46" fill="none" stroke="#d97706" ></circle>
                        <circle cx="50" cy="50" r="38" fill="none" stroke="#f59e0b" ></circle>
                        <circle cx="50" cy="6" r="2.5" fill="#d97706"></circle>
                        <circle cx="50" cy="94" r="2.5" fill="#d97706"></circle>
                        <circle cx="-6" cy="50" r="2.5" fill="#d97706"></circle>
                        <circle cx="94" cy="50" r="2.5" fill="#d97706"></circle>
                    </svg>
                    <span className="font-semibold text-white">{item.nomor}</span>
                </div>

                <div className="flex-1 min-w-0 text-left">
                  <h3 className="font-semibold text-base sm:text-lg text-white">
                    {item.namaLatin}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400">
                    {item.arti}
                  </p>
                </div>

              </div>

              <div>
                <p className="text-2xl sm:text-3xl text-blue-500">
                  {item.nama}
                </p>
              </div>

            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}