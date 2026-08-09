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
];
