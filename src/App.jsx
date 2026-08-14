import { Outlet } from "react-router";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import { useState, useEffect } from "react";

export default function App() {
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
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar
          numOfItems={products?.filter((product) => product.isInCart).length}
        />
        <Outlet
          context={{
            products,
            setProducts,
            error,
            loading,
          }}
        />
      </div>
      <Footer />
    </div>
  );
}
