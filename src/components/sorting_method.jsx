import { Check } from "lucide-react";

export default function SortingMethod({
  method,
  setValue,
  isChecked,
  setIsChecked,
  setShowDropdown,
}) {
  return (
    <div
      onClick={() => {
        setIsChecked();
        setValue(method);
        setShowDropdown(false);
      }}
      className={`${isChecked ? "bg-gray-200" : "hover:bg-gray-100"} flex justify-between items-center px-4 py-3 rounded-md cursor-pointer`}
    >
      <div>{method}</div>
      {isChecked && <Check size={20} />}
    </div>
  );
}
