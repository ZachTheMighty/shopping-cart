import Navbar from "./navbar.jsx";
import { Link } from "react-router";

export default function Categories() {
  return (
    <div className="px-8 py-4">
      <Navbar />
      <div className="flex flex-col items-center gap-2 sm:gap-0 sm:flex-row sm:justify-between md:justify-evenly mt-8 md:text-xl">
        <Link
          to="/shop/categories/men's_clothing"
          className="hover:text-teal-500"
        >
          Men's Clothing
        </Link>
        <Link
          to="/shop/categories/women's_clothing"
          className="hover:text-teal-500"
        >
          Women's clothing
        </Link>
        <Link to="/shop/categories/jewelery" className="hover:text-teal-500">
          Jewelery
        </Link>
        <Link to="/shop/categories/electronics" className="hover:text-teal-500">
          Eelectronics
        </Link>
      </div>
    </div>
  );
}
