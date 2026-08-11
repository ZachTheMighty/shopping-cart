import Shop from "./components/shop.jsx";
import App from "./App.jsx";
import Categories from "./components/categories.jsx";

export default [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "shop/categories",
    element: <Categories />,
  },
  {
    path: "shop/categories/men's clothing",
    element: <Shop category={"men's clothing"} />,
  },
  {
    path: "shop/categories/women's clothing",
    element: <Shop category={"women's clothing"} />,
  },
  {
    path: "shop/categories/jewelery",
    element: <Shop category={"jewelery"} />,
  },
  {
    path: "shop/categories/electronics",
    element: <Shop category={"electronics"} />,
  },
];
