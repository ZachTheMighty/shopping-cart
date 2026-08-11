import { Outlet } from "react-router";
import Navbar from "./components/navbar.jsx";
import { useState } from "react";

export default function App() {
  const [itemsInCart, setItemsInCart] = useState([]);

  return (
    <>
      <Navbar numOfItems={itemsInCart.length} />
      <Outlet context={{ itemsInCart, setItemsInCart }} />
    </>
  );
}
