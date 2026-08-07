import Navbar from "./navbar.jsx";
import { Link } from "react-router";

export default function Homepage() {
  return (
    <div className="px-8 py-4">
      <Navbar />
      <div className="mt-32 text-center">
        <div className="text-3xl font-semibold">
          We Offer The Most Random Shit
        </div>
        <Link
          to="shop"
          className="bg-teal-600 hover:bg-teal-500 cursor-pointer active:bg-teal-600 px-8 py-4 text-white font-semibold rounded-full mt-8 inline-block"
        >
          Waste money now!
        </Link>
      </div>
    </div>
  );
}
