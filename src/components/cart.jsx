import { useOutletContext } from "react-router";
import { Link } from "react-router";

export default function Cart() {
  const { itemsInCart } = useOutletContext();
  return (
    <div className="ml-4">
      <div className="text-3xl font-semibold mb-8">Your Cart</div>

      {itemsInCart.length === 0 ? (
        <div className="flex flex-col items-center gap-4">
          <div className="text-xl">You don't have any items in cart.</div>
          <Link
            to="/shop"
            className="bg-teal-700 text-white font-semibold text-xl px-4 py-2 rounded-md inline-block mx-auto hover:bg-teal-800 cursor-pointer"
          >
            Add useless stuff
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
