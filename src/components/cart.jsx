import { useOutletContext } from "react-router";

export default function Cart() {
  const { itemsInCart } = useOutletContext();
  if (itemsInCart.length === 0)
    return (
      <div className="ml-4">
        <div className="text-3xl font-semibold mb-16">Your Cart</div>
        <div className="flex flex-col items-center gap-4">
          <div className="text-xl">You don't have any items in cart.</div>
          <div className="bg-teal-700 text-white font-semibold text-xl px-4 py-2 rounded-md inline-block mx-auto hover:bg-teal-800 cursor-pointer">
            Add useless stuff
          </div>
        </div>
      </div>
    );
}
