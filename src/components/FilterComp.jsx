import { TextInput } from "flowbite-react";
import { IoIosSearch } from "react-icons/io";

export default function FilterComp( {updateSearchValue, sortProduct}) {
    return (
        <div className="flex mx-10 p-10 justify-center">
                <div className="w-4xl">
                <TextInput id="email4" type="email" icon={IoIosSearch} placeholder="name@flowbite.com" onKeyUp={(e) => updateSearchValue(e.target.value)} />
                </div>
        </div>
    )
}