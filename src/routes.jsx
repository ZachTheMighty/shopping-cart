import Shop from "./components/shop.jsx";
import App from "./App.jsx";
import Home from "./components/homepage.jsx";
import Categories from "./components/categories.jsx";
import Cart from "./components/cart.jsx";

export default [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
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
        path: "shop/categories/:category",
        element: <Shop />,
      },
    ],
  },
];
