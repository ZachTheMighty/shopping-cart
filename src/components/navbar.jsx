import { Search, ShoppingCart, UserRound } from "lucide-react";
import { Link } from "react-router";

export default function Navbar({ numOfItems = 0 }) {
  return (
    <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between px-16 py-8">
      <Link
        to="/"
        className="inline-block text-3xl sm:text-4xl lg:text-5xl font-semibold hover:text-gray-700 sm:flex-1"
      >
        Brandname
      </Link>

      <div className="flex items-center justify-center gap-8 sm:flex-1">
        <Search className="hover:cursor-pointer" />
        <Link to="cart" className="relative">
          <ShoppingCart className="hover:cursor-pointer" />
          {numOfItems !== 0 && (
            <div
              className={`absolute text-white ${numOfItems >= 10 ? "text-xs" : "text-base"} font-semibold bg-red-500 w-5 h-5 rounded-full flex justify-center items-center -top-3 -right-3`}
            >
              {numOfItems}
            </div>
          )}
        </Link>
        <UserRound className="hover:cursor-pointer" />
      </div>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-end sm:flex-1">
        <Link
          to="shop"
          className="bg-teal-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-teal-800 flex-1 text-center lg:flex-none"
        >
          Shop now
        </Link>
        <Link
          to="shop/categories"
          className="text-teal-700 font-semibold hover:text-teal-500 text-center flex-1 lg:flex-none"
        >
          Browse our catalogue
        </Link>
      </div>
    </div>
  );
}
