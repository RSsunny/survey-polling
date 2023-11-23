import { NavLink } from "react-router-dom";

const NavList = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-primary_Colors border-b  "
            : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/surveys"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-primary_Colors border-b" : ""
        }
      >
        Surveys
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-primary_Colors border-b" : ""
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-primary_Colors border-b" : ""
        }
      >
        Contact Us
      </NavLink>
    </>
  );
};

export default NavList;
