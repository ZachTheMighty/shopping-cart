import { useState } from "react";
import { ChevronRight, ChevronDown, X } from "lucide-react";
import { Link } from "react-router";

export default function Product({ product, setProducts, isInCart }) {
  const [showDesc, setShowDesc] = useState(false);
  const [quantity, setQuantity] = useState("");

  return (
    <div
      className={`text-lg bg-gray-200 ${!isInCart ? "pt-16" : ""} rounded-xl shadow-[0px_0px_20px_1px_rgba(0,0,0,0.1)]`}
    >
      {isInCart && (
        <div className="mb-8 sm:mb-0 flex justify-end pr-4 pt-4">
          <X
            size={40}
            onClick={() =>
              setProducts((prevProducts) =>
                prevProducts.map((element) =>
                  element === product
                    ? {
                        ...product,
                        isInCart: false,
                        rating: {
                          ...product.rating,
                          amountLeft: product.rating.count,
                        },
                      }
                    : element,
                ),
              )
            }
            className="text-red-500 hover:text-red-400 active:text-red-500 hover:rotate-180 transition-transform duration-400 cursor-pointer"
          />
        </div>
      )}
      <div className="p-16 pt-0 flex flex-col justify-between">
        <img
          src={product.image}
          alt={product.title}
          className="w-50 h-50 object-contain self-center"
        />
        <div className="flex justify-between mt-8">
          <Link
            to={`/shop/categories/${product.category}`}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="text-gray-400 hover:text-teal-500"
          >
            {product.category}
          </Link>
          <div>
            <span className="text-yellow-500 mr-1">★</span>
            {product.rating.rate}
          </div>
        </div>
        <div className="font-semibold mt-2">{product.title}</div>
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
              <div className="text-start">{product.description}</div>
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
          <div className="text-gray-600">
            {product.rating.amountLeft
              ? product.rating.amountLeft === 0
                ? "Out of stock"
                : product.rating.amountLeft + " Pcs in stock"
              : product.rating.count === 0
                ? "Out of stock"
                : product.rating.count + " Pcs in stock"}
          </div>
          {isInCart && (
            <div className="text-gray-600">Quantity: {product.quantity}</div>
          )}
          <div>${product.price}</div>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            setProducts((prevProducts) =>
              prevProducts.map((element) =>
                element === product
                  ? {
                      ...product,
                      isInCart: true,
                      quantity,
                      rating: {
                        ...product.rating,
                        amountLeft: product.rating.count - quantity,
                      },
                    }
                  : element,
              ),
            );
            setQuantity("");
          }}
        >
          <div className="mt-8 flex flex-col gap-2">
            <label htmlFor="count" className="text-xl font-semibold">
              Quantity
            </label>
            <div className="flex flex-col gap-4 ">
              <input
                type="number"
                min="1"
                max={product.rating.count}
                required
                id="count"
                {...(product.rating.amountLeft === 0 && { disabled: true })}
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
                className="bg-white px-4 py-2 hover:outline-2 hover:outline-teal-700 focus:outline-2 focus:outline-teal-700 rounded-full disabled:hover:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                {...(product.rating.amountLeft === 0 && { disabled: true })}
                className="bg-teal-700 text-white font-semibold text-xl px-4 py-2 rounded-full hover:bg-teal-800 active:bg-teal-700 cursor-pointer disabled:hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add to cart
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
