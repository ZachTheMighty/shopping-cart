import githubIcon from "../assets/github.svg";

export default function Footer() {
  return (
    <div className="self-center mb-10">
      <a
        href="https://github.com/zachthemighty/shopping-cart"
        target="_blank"
        className=" hover:opacity-90"
      >
        <img src={githubIcon} className="w-15" />
      </a>
    </div>
  );
}
