import { NavLink } from "react-router-dom";
import useUserRoll from "../../Hooks/useUserRoll";
import { CgProfile } from "react-icons/cg";
import { IoHome } from "react-icons/io5";
import UserList from "../Sidebar List/userList";
import ProUserList from "../Sidebar List/ProUserList";
import AdminList from "../Sidebar List/AdminList";
import SurveyerList from "../Sidebar List/SurveyerList";

const Sidebar = () => {
  const { roll } = useUserRoll();
  return (
    <div className="text-center flex flex-col gap-5  lg:px-10 mt-10 font-bold">
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-10  border-y pl-5 lg:pl-10 lg:border py-2 bg-gray-200 lg:rounded-md"
            : "flex items-center gap-10  border-y pl-5 lg:pl-10 lg:border  py-2 lg:rounded-md"
        }
      >
        <IoHome className="text-2xl " /> Home
      </NavLink>

      {/* regular user */}
      {roll === "user" && <UserList></UserList>}

      {/* pro user  */}
      {roll === "pro user" && <ProUserList></ProUserList>}

      {/* admin sidebar */}
      {roll === "admin" && <AdminList></AdminList>}

      {/* Surveyer sidebar */}
      {roll === "surveyor" && <SurveyerList></SurveyerList>}

      <NavLink
        to={"/deshbord/profile"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-10  border-y pl-5 lg:pl-10 lg:border py-2 bg-gray-200 lg:rounded-md"
            : "flex items-center gap-10  border-y pl-5 lg:pl-10 lg:border  py-2 lg:rounded-md"
        }
      >
        <CgProfile className="text-2xl " /> Profile
      </NavLink>
    </div>
  );
};

export default Sidebar;
