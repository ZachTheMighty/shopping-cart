import { Outlet } from "react-router";
import Navbar from "./components/navbar.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
