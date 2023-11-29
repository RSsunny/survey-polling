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
            ? "text-primary_Colors border-b border-primary_Colors  "
            : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/surveys"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-primary_Colors border-b border-primary_Colors"
            : ""
        }
      >
        Surveys
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-primary_Colors border-b border-primary_Colors"
            : ""
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-primary_Colors border-b border-primary_Colors"
            : ""
        }
      >
        Contact Us
      </NavLink>

      <NavLink
        to="/helpcenter"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-primary_Colors border-b border-primary_Colors"
            : ""
        }
      >
        Help Center
      </NavLink>
    </>
  );
};

export default NavList;
