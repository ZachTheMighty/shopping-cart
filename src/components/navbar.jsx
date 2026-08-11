import { Search, ShoppingCart, UserRound } from "lucide-react";
import { Link } from "react-router";

export default function Navbar({ numOfItems = 0 }) {
  return (
    <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between px-16 py-8">
      <Link
        to="/"
        className="inline-block text-3xl md:text-5xl font-semibold hover:text-gray-700"
      >
        Brandname
      </Link>

      <div>
        <div className="flex items-center gap-8">
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
      </div>
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <Link
          to="shop"
          className="bg-teal-700 text-white font-semibold px-8 py-2 rounded-md hover:bg-teal-800"
        >
          Shop now
        </Link>
        <Link
          to="shop/categories"
          className="text-teal-700 font-semibold hover:text-teal-500 text-center"
        >
          Browse our catalogue
        </Link>
      </div>
    </div>
  );
}
