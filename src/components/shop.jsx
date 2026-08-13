import Product from "./product.jsx";
import Sort from "./sort.jsx";
import { useOutletContext, useParams } from "react-router";
import { useState } from "react";

export default function Shop({ itemsInCart, isInCart }) {
  const [value, setValue] = useState("Sort by");
  const [descendingly, setDescendingly] = useState(true);

  const { category } = useParams();
  const { products, setProducts, error, loading } = useOutletContext();

  if (loading)
    return (
      <div className="px-8 py-4">
        <div className="min-h-screen flex justify-center items-center text-3xl font-semibold">
          Loading products...
        </div>
      </div>
    );
  if (error)
    return (
      <div className="px-8 py-4">
        <div className="min-h-screen flex justify-center items-center text-3xl font-semibold">
          An error happened while loading products, try again tomorrow, bitch
        </div>
      </div>
    );

  return (
    <>
      <div className="px-2 sm:px-24 mt-16">
        <Sort
          methods={["Rating", "Price", "Quantity"]}
          value={value}
          setValue={setValue}
          descendingly={descendingly}
          setDescendingly={setDescendingly}
        />
        <div className="mt-4">
          <ul className="grid place-content-center sm:grid-cols-[repeat(auto-fit,_minmax(400px,1fr))] gap-16 mb-16">
            {(itemsInCart ? itemsInCart : products)
              .filter((product) =>
                category ? product.category === category : product,
              )
              .toSorted((productA, productB) => {
                if (value === "Rating")
                  return descendingly
                    ? productB.rating.rate - productA.rating.rate
                    : productA.rating.rate - productB.rating.rate;
                else if (value === "Quantity")
                  return descendingly
                    ? productB.rating.count - productA.rating.count
                    : productA.rating.count - productB.rating.count;
                else if (value === "Price")
                  return descendingly
                    ? productB.price - productA.price
                    : productA.price - productB.price;
                else return "";
              })
              .map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  setProducts={setProducts}
                  isInCart={isInCart}
                />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
