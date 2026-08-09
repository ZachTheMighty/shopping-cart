import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SortingMethod from "./sorting_method.jsx";

export default function Sort({ methods }) {
  const [value, setValue] = useState("Sort by");
  const [showDropdown, setShowDropdown] = useState(false);
  const [checkedIndex, setCheckedIndex] = useState(-1);

  return (
    <div className="relative">
      <div
        onClick={() => setShowDropdown((prevShow) => !prevShow)}
        className="outline outline-gray-200 max-w-35 px-4 py-2 flex justify-between items-center rounded-md hover:shadow-[2px_5px_20px_-5px_rgba(0,0,0,0.1)] transition-shadow duration-200 cursor-pointer"
      >
        <div>{value}</div>
        <ChevronDown size={20} />
      </div>
      {showDropdown && (
        <div className="outline outline-gray-200 px-4 py-2 w-50 rounded-md mt-3 text-sm absolute bg-white">
          <ul className="flex flex-col gap-1">
            {methods.map((method, index) => (
              <li key={index}>
                {
                  <SortingMethod
                    method={method}
                    setValue={setValue}
                    isChecked={checkedIndex === index}
                    setIsChecked={() => setCheckedIndex(index)}
                  />
                }
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
