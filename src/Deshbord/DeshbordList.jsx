import { NavLink } from "react-router-dom";
import useUserRoll from "../Hooks/useUserRoll";
import { TfiStatsUp } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { IoHome, IoSettingsSharp } from "react-icons/io5";
import { RiSurveyLine } from "react-icons/ri";
import { BiLogoSquarespace } from "react-icons/bi";

const DeshbordList = () => {
  const { roll } = useUserRoll();
  return (
    <div className="text-center flex flex-col gap-5  lg:px-10 mt-10 font-bold">
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-10  border-y pl-5 lg:pl-20 lg:border py-2 bg-gray-200 lg:rounded-md"
            : "flex items-center gap-10  border-y pl-5 lg:pl-20 lg:border  py-2 lg:rounded-md"
        }
      >
        <IoHome className="text-2xl " /> Home
      </NavLink>

      {/* regular user */}
      <NavLink
        to={"/deshbord/statics"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-10  border-y pl-5 lg:pl-20 lg:border py-2 bg-gray-200 lg:rounded-md"
            : "flex items-center gap-10  border-y pl-5 lg:pl-20 lg:border  py-2 lg:rounded-md"
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
            ? "flex items-center gap-10  border-y pl-5 lg:pl-20 lg:border py-2 bg-gray-200 lg:rounded-md"
            : "flex items-center gap-10  border-y pl-5 lg:pl-20 lg:border  py-2 lg:rounded-md"
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
            ? "flex items-center gap-10  border-y pl-5 lg:pl-20 lg:border py-2 bg-gray-200 lg:rounded-md"
            : "flex items-center gap-10  border-y pl-5 lg:pl-20 lg:border  py-2 lg:rounded-md"
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
            ? "flex items-center gap-10  border-y pl-5 lg:pl-20 lg:border py-2 bg-gray-200 lg:rounded-md"
            : "flex items-center gap-10  border-y pl-5 lg:pl-20 lg:border  py-2 lg:rounded-md"
        }
      >
        <IoSettingsSharp className="text-2xl " /> Settings
      </NavLink>
      <NavLink
        to={"/deshbord/profile"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-10  border-y pl-5 lg:pl-20 lg:border py-2 bg-gray-200 lg:rounded-md"
            : "flex items-center gap-10  border-y pl-5 lg:pl-20 lg:border  py-2 lg:rounded-md"
        }
      >
        <CgProfile className="text-2xl " /> Profile
      </NavLink>
    </div>
  );
};

export default DeshbordList;
