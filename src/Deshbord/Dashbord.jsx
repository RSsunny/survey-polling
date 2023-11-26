import { Outlet } from "react-router-dom";
import Logout from "../Utility/Logout";
import Logo from "../Utility/Logo";
import Icons from "../Utility/Icons";
import useUserRoll from "../Hooks/useUserRoll";
import Sidebar from "./Sidebar/Sidebar";

const Dashbord = () => {
  const { roll } = useUserRoll();

  return (
    <div className="grid grid-cols-12 gap-5 min-h-screen">
      <div className="col-span-3 border-r   h-screen sticky top-0 ">
        {/* logo */}
        <Logo pro={roll === "user" ? false : true}></Logo>

        {/* deshbord sidver link list */}
        <Sidebar></Sidebar>

        {/* SignOut */}
        <Logout></Logout>

        {/* social midea */}
        <div className="absolute bottom-5 w-full ">
          <Icons></Icons>
        </div>
      </div>
      <div className="col-span-9 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashbord;
