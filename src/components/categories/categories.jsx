import Navbar from "../navbar.jsx";

export default function Categories() {
  return (
    <div className="px-8 py-4">
      <Navbar />
      <div className="flex flex-col items-center gap-2 sm:gap-0 sm:flex-row sm:justify-between md:justify-evenly mt-8 md:text-xl">
        <div>Men's clothing</div>
        <div>Women's clothing</div>
        <div>Jewlery</div>
        <div>Eelectronics</div>
      </div>
    </div>
  );
}
