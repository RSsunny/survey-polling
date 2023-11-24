import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <h1 className="text-2xl md:text-4xl font-cinzel font-bold   text-center py-10">
        Sur
        <span className="text-primary_Colors text-3xl md:text-5xl">v</span>
        ey
      </h1>
    </Link>
  );
};

export default Logo;
