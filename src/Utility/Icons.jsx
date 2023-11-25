import {
  FaFacebook,
  FaGooglePlusG,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Icons = () => {
  return (
    <div className="flex items-center justify-center gap-4  text-xl ">
      <FaFacebook className="hover:text-primary_Colors cursor-pointer" />
      <FaYoutube className="hover:text-primary_Colors cursor-pointer" />
      <FaTwitter className="hover:text-primary_Colors cursor-pointer" />
      <FaGooglePlusG className="hover:text-primary_Colors cursor-pointer" />
    </div>
  );
};

export default Icons;
