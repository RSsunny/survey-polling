import {
  FaFacebook,
  FaGooglePlusG,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Icons = () => {
  return (
    <div className="flex items-center justify-center gap-4  text-xl ">
      <a target="_blank" href="https://www.facebook.com/rabious.sunny.94">
        {" "}
        <FaFacebook className="hover:text-primary_Colors cursor-pointer" />
      </a>
      <FaYoutube className="hover:text-primary_Colors cursor-pointer" />
      <FaTwitter className="hover:text-primary_Colors cursor-pointer" />
      <FaGooglePlusG className="hover:text-primary_Colors cursor-pointer" />
    </div>
  );
};

export default Icons;
