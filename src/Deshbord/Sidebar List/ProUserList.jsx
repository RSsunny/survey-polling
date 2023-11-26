import { BiLogoSquarespace } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { RiSurveyLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

const ProUserList = () => {
  return (
    <>
      <NavLink
        to={"/deshbord/prostatics"}
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
        to={"/deshbord/proanalytics"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-10  border-y pl-5 lg:pl-20 lg:border py-2 bg-gray-200 lg:rounded-md"
            : "flex items-center gap-10  border-y pl-5 lg:pl-20 lg:border  py-2 lg:rounded-md"
        }
      >
        <RiSurveyLine className="text-2xl " />
        Advanced Analytics
      </NavLink>
      <NavLink
        to={"/deshbord/prosurveys"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-10  border-y pl-5 lg:pl-20 lg:border py-2 bg-gray-200 lg:rounded-md"
            : "flex items-center gap-10  border-y pl-5 lg:pl-20 lg:border  py-2 lg:rounded-md"
        }
      >
        <BiLogoSquarespace className="text-2xl " /> My Surveys
      </NavLink>
      <NavLink
        to={"/deshbord/prosettings"}
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
    </>
  );
};

export default ProUserList;
