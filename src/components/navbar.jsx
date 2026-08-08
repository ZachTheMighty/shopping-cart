import { Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import { Link } from "react-router";

export default function Navbar({ items = 0 }) {
  return (
    <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between ">
      <Link
        to="/"
        className="inline-block text-5xl font-semibold hover:text-gray-700"
      >
        Brandname
      </Link>
      <div className="bg-gray-100 h-full p-2 rounded-full">
        <Menu color="#6e6e70" className="hover:cursor-pointer" />
      </div>
      <div className="flex items-center gap-8">
        <Search className="hover:cursor-pointer" />
        <div className="relative">
          <ShoppingCart className="hover:cursor-pointer" />
          {items !== 0 && (
            <div
              className={`absolute text-white ${items >= 10 ? "text-xs" : "text-base"} font-semibold bg-red-500 w-5 h-5 rounded-full flex justify-center items-center -top-3 -right-3`}
            >
              {items}
            </div>
          )}
        </div>
        <UserRound className="hover:cursor-pointer" />
      </div>
    </div>
  );
}
