import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

export default function Product({
  title,
  description,
  category,
  price,
  count,
  rate,
  image,
}) {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div className="text-lg bg-gray-200 p-16 flex flex-col rounded-xl shadow-[0px_0px_20px_1px_rgba(0,0,0,0.1)]">
      <img
        src={image}
        alt={title}
        className="w-50 h-50 object-contain self-center"
      />
      <div className="flex justify-between mt-8">
        <div className="text-gray-400 ">{category}</div>
        <div>
          <span className="text-yellow-500 mr-1">★</span>
          {rate}
        </div>
      </div>
      <div className="font-semibold mt-2">{title}</div>
      <div className="mt-4">
        {showDesc ? (
          <button
            className="cursor-pointer"
            onClick={() => setShowDesc(!showDesc)}
          >
            <div className="flex items-center mb-2">
              <ChevronDown />
              Description
            </div>
            <div className="text-start">{description}</div>
          </button>
        ) : (
          <button
            onClick={() => setShowDesc(!showDesc)}
            className="flex items-center cursor-pointer"
          >
            <ChevronRight />
            <div>Description</div>
          </button>
        )}
      </div>
      <div className="mt-2">
        <div className="text-gray-600">{count} pcs in stock</div>
        <div>${price}</div>
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="mt-8 flex flex-col gap-2">
          <label for="count" className="text-xl font-semibold">
            Quantity
          </label>
          <div className="flex flex-col gap-4 ">
            <input
              type="number"
              min="1"
              max={count}
              id="count"
              className="bg-white px-4 py-2 hover:outline-2 hover:outline-teal-700 focus:outline-2 focus:outline-teal-700 rounded-full"
            />
            <button className="bg-teal-700 text-white font-semibold text-xl px-4 py-2 rounded-full">
              Add to cart
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
