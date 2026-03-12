
import { Card } from "flowbite-react";
import ModalTafsirComp from "./ModalTafsirComp";


export default function CardAyatComp({ data, suratId }) {
  

  return (
    <Card>
        {data.map((item) => (
        <div key={item.nomorAyat} className="border-b border-gray-200 py-8">
          {/* Right Side */}
          <div className="flex items-center justify-end gap-3 ">
            <p className="text-4xl leading-loose">
                {item.teksArab}
            </p>
          </div>
          {/* Left Side */}
          <div>
            <p className="text-blue-500 text-lg mb-2">
              {item.teksLatin}
            </p>
            <p className="text-gray-400 mb-4">
              {item.teksIndonesia}
            </p>
          </div>
          <div className="">
            {/* <Button color=""  className="rounded-full border border-blue-500 text-blue-500 bg-transparent px-4 py-2 hover:bg-blue-50 focus:ring-2 focus:ring-blue-300">
              <RiFilePaper2Fill />
            </Button> */}
            <ModalTafsirComp suratId={suratId} nomorAyat={item.nomorAyat} />
            
          </div>

        </div>
      ))}
    </Card>
  );
}