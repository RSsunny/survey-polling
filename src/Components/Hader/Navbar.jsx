import { useEffect, useState } from "react";
import NavList from "./NavList";
import { Link, useLocation } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";

import Icons from "../Icons/Icons";
import useAuth from "../../Hooks/useAuth";
const Navbar = () => {
  const [issticky, setSticky] = useState(false);
  const locattion = useLocation();
  const { user } = useAuth() || {};

  const handleStickey = () => {
    clearTimeout(window.scroolTimeout);
    window.scrollTimeout = setTimeout(() => {
      if (window.scrollY) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickey);
    return () => {
      window.removeEventListener("scroll", handleStickey);
    };
  }, []);

  return (
    <div
      className={` md:py-5  w-full z-50  ${
        locattion?.pathname === "/" && "text-white"
      }   duration-1000 ease-linear    ${
        issticky
          ? "sticky bg-gray-200 bg-white bg-opacity-10   top-0  "
          : "sticky"
      }`}
    >
      <div className="flex justify-between items-center md:px-10  lg:px-20">
        <h1 className="text-2xl md:text-4xl font-cinzel font-bold  m-5 md:m-0">
          Sur<span className="text-primary_Colors text-3xl md:text-5xl">v</span>
          ey
        </h1>
        <div className="md:flex  gap-5 text-sm font-medium hidden ">
          {/* navLink */}
          <NavList></NavList>
        </div>
        <div className="hidden md:flex items-center gap-5">
          {/* Icon social */}

          <Icons></Icons>

          {/* login */}
          <Link
            to={`${user ? "/deshbord/profile" : "/signin"} `}
            className={`avatar ${user ? "online " : "offline"} `}
          >
            <div className="w-10 rounded-full ">
              {user ? (
                <img src={user?.photoURL} alt="" />
              ) : (
                <FaCircleUser className="w-full text-4xl " />
              )}
            </div>
          </Link>

          {/* deshbord */}
          <Link
            to={"/deshbord/statics"}
            className="bg-primary_Colors text-white font-medium font-cinzel  px-4 py-2  rounded-md"
          >
            Deshbord
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
