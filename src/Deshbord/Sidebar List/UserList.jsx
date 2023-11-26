import { BiLogoSquarespace } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { RiSurveyLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

const UserList = () => {
  return (
    <>
      <NavLink
        to={"/deshbord/statics"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-10  border-y pl-5 lg:pl-10 lg:border py-2 bg-gray-200 lg:rounded-md"
            : "flex items-center gap-10  border-y pl-5 lg:pl-10 lg:border  py-2 lg:rounded-md"
        }
      >
        <TfiStatsUp className="text-2xl " /> Statics
      </NavLink>
      <NavLink
        to={"/deshbord/browseSurveys"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-10  border-y pl-5 lg:pl-10 lg:border py-2 bg-gray-200 lg:rounded-md"
            : "flex items-center gap-10  border-y pl-5 lg:pl-10 lg:border  py-2 lg:rounded-md"
        }
      >
        <RiSurveyLine className="text-2xl " /> Browse Surveys
      </NavLink>
      <NavLink
        to={"/deshbord/userresponses"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-10  border-y pl-5 lg:pl-10 lg:border py-2 bg-gray-200 lg:rounded-md"
            : "flex items-center gap-10  border-y pl-5 lg:pl-10 lg:border  py-2 lg:rounded-md"
        }
      >
        <BiLogoSquarespace className="text-2xl " /> MY Responses
      </NavLink>
      <NavLink
        to={"/deshbord/usersettings"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-10  border-y pl-5 lg:pl-10 lg:border py-2 bg-gray-200 lg:rounded-md"
            : "flex items-center gap-10  border-y pl-5 lg:pl-10 lg:border  py-2 lg:rounded-md"
        }
      >
        <IoSettingsSharp className="text-2xl " /> Settings
      </NavLink>
    </>
  );
};

export default UserList;
