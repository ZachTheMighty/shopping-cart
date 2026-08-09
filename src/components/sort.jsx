import {
  ArrowDownWideNarrow,
  ChevronDown,
  ArrowUpWideNarrow,
} from "lucide-react";
import { useState } from "react";
import SortingMethod from "./sorting_method.jsx";

export default function Sort({
  methods,
  value,
  setValue,
  descendingly,
  setDescendingly,
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [checkedIndex, setCheckedIndex] = useState(-1);

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <div
          onClick={() => setShowDropdown((prevShow) => !prevShow)}
          className="outline outline-gray-200 max-w-35 px-4 py-2 flex justify-between items-center rounded-md hover:shadow-[2px_5px_20px_-5px_rgba(0,0,0,0.1)] transition-shadow duration-200 cursor-pointer"
        >
          <div>{value}</div>
          <ChevronDown size={20} />
        </div>
        {descendingly ? (
          <ArrowDownWideNarrow
            className="text-gray-500 hover:text-black"
            onClick={() => setDescendingly((prevDesc) => !prevDesc)}
          />
        ) : (
          <ArrowUpWideNarrow
            className="text-gray-500 hover:text-black"
            onClick={() => setDescendingly((prevDesc) => !prevDesc)}
          />
        )}
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
                    setShowDropdown={setShowDropdown}
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
