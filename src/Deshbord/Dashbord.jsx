import { Outlet } from "react-router-dom";
import Logout from "../Utility/Logout";
import Logo from "../Utility/Logo";
import Icons from "../Utility/Icons";
import useUserRoll from "../Hooks/useUserRoll";
import Sidebar from "./Sidebar/Sidebar";
import Dawer from "../Components/Drawer/Dawer";

const Dashbord = () => {
  const { roll } = useUserRoll();

  return (
    <div className="grid grid-cols-12 gap-5 min-h-screen">
      <div className="hidden lg:block lg:col-span-3 border-r   h-screen sticky top-0 ">
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
      <div className="col-span-12 lg:col-span-9 ">
        <div className="flex lg:hidden justify-between items-center px-10 border-b ">
          {" "}
          <Logo
            color={"text-black"}
            pro={roll === "user" ? false : true}
          ></Logo>
          <Dawer></Dawer>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashbord;
