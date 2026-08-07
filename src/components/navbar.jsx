import { Menu, Search, ShoppingCart, UserRound } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between ">
      <div className="text-5xl font-semibold">Epic Logo</div>
      <div className="bg-gray-100 h-full p-2 rounded-full">
        <Menu color="#6e6e70" className="hover:cursor-pointer" />
      </div>
      <div className="flex items-center gap-8">
        <Search className="hover:cursor-pointer" />
        <ShoppingCart className="hover:cursor-pointer" />
        <UserRound className="hover:cursor-pointer" />
      </div>
    </div>
  );
}
