import { Link } from "react-router";
import Product from "./product.jsx";
import { useEffect, useState } from "react";
export default function Shop() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => {
        if (response.status >= 400) throw new Error("server error");
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  });

  if (loading) return <div>Loading products...</div>;
  if (error)
    return (
      <div>
        An error happened while loading products, try again tomorrow, bitch
      </div>
    );

  return (
    <ul className="grid place-content-center grid-cols-[repeat(auto-fit,_minmax(350px,1fr))] gap-16 p-16">
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
          rate={product.rating.rate}
          count={product.rating.count}
        />
      ))}
    </ul>
  );
}
