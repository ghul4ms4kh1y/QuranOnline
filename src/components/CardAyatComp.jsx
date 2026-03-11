
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";

export default function CardAyatComp({ data }) {
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
            <Button color="dark" outline>
              Dark
            </Button>
          </div>

        </div>
      ))}
    </Card>
  );
}