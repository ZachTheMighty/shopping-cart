import { Link } from "react-router";

export default function Categories() {
  return (
    <div>
      <div className="flex flex-col items-center gap-2 sm:gap-0 sm:flex-row sm:justify-between md:justify-evenly mt-8 md:text-xl">
        <Link to="men's clothing" className="hover:text-teal-500">
          Men's Clothing
        </Link>
        <Link to="women's clothing" className="hover:text-teal-500">
          Women's clothing
        </Link>
        <Link to="jewelery" className="hover:text-teal-500">
          Jewelery
        </Link>
        <Link to="electronics" className="hover:text-teal-500">
          Eelectronics
        </Link>
      </div>
    </div>
  );
}
