
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";

export default function CardAyatComp({ data }) {
  return (
    <Card>
        {data.map((item) => (
        <div key={item} className="border-b border-gray-200 py-8">
          {/* Right Side */}
          <div className="flex items-center justify-between gap-3 ">
            <Button color="dark" outline>
              Dark
            </Button>
            <p className="text-4xl leading-loose font-arabic">
                {item.teksArab}
            </p>
          </div>
          {/* Left Side */}
          <div>
            <p className="text-teal-600 text-lg mb-2">
              {item.teksLatin}
            </p>
            <p className="text-gray-700">
              {item.teksIndonesia}
            </p>
          </div>

        </div>
      ))}
    </Card>
  );
}