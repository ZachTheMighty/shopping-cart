import { Link } from "react-router";
import Product from "./product.jsx";
import Navbar from "./navbar.jsx";
import { useEffect, useState } from "react";
import Sort from "./sort.jsx";

export default function Shop() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [itemsInCart, setItemsInCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => {
        if (response.status >= 400) throw new Error("server error");
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="px-8 py-4">
        <Navbar items={itemsInCart.length} />
        <div className="min-h-screen flex justify-center items-center text-3xl font-semibold">
          Loading products...
        </div>
      </div>
    );
  if (error)
    return (
      <div className="px-8 py-4">
        <Navbar items={itemsInCart.length} />
        <div className="min-h-screen flex justify-center items-center text-3xl font-semibold">
          An error happened while loading products, try again tomorrow, bitch
        </div>
      </div>
    );

  return (
    <>
      <div className="px-8 py-4">
        <Navbar items={itemsInCart.length} />
      </div>
      <div className="px-2 sm:px-24 mt-16">
        <Sort methods={["Rating", "Price", "Quantity"]} />
        <div className="mt-4">
          <ul className="grid place-content-center grid-cols-[repeat(auto-fit,_minmax(350px,1fr))] gap-16 pb-16">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                setProducts={setProducts}
                itemsInCart={itemsInCart}
                setItemsInCart={setItemsInCart}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
