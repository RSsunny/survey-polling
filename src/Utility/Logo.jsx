import { Link } from "react-router-dom";
import { FcApproval } from "react-icons/fc";

const Logo = ({ pro }) => {
  return (
    <Link to={"/"}>
      <div className="text-center my-10">
        <div className=" inline-block relative ">
          <h1 className="text-2xl md:text-4xl font-cinzel font-bold   text-center   inline-block">
            Sur
            <span className="text-primary_Colors text-3xl md:text-5xl ">v</span>
            ey
          </h1>
          {pro == true && <FcApproval className="absolute top-0 -right-3 " />}
        </div>
      </div>
    </Link>
  );
};

export default Logo;
