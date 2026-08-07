import Homepage from "./components/homepage.jsx";
import Shop from "./components/shop.jsx";
import App from "./App.jsx";

export default [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
];
