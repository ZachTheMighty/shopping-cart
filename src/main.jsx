import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./routes.jsx";

const root = document.getElementById("root");
root.className = "min-h-screen";

const router = createBrowserRouter(routes);

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
