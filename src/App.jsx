import { Outlet } from "react-router";
import Navbar from "./components/navbar.jsx";
import { useState, useEffect } from "react";

export default function App() {
  const [itemsInCart, setItemsInCart] = useState([]);
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
  }, []);

  return (
    <>
      <Navbar numOfItems={itemsInCart.length} />
      <Outlet
        context={{
          itemsInCart,
          setItemsInCart,
          products,
          setProducts,
          error,
          loading,
        }}
      />
    </>
  );
}
