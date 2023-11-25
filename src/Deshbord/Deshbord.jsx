import { Outlet } from "react-router-dom";
import DeshbordList from "./DeshbordList";
import Logout from "../Utility/Logout";
import Logo from "../Utility/Logo";
import Icons from "../Utility/Icons";
import useUserRoll from "../Hooks/useUserRoll";

const Deshbord = () => {
  const { roll } = useUserRoll();

  return (
    <div className="grid grid-cols-12 gap-5 min-h-screen">
      <div className="col-span-3 border-r   h-screen sticky top-0 ">
        {/* logo */}
        <Logo pro={roll === "user" ? false : true}></Logo>

        {/* deshbord sidver link list */}
        <DeshbordList></DeshbordList>

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

export default Deshbord;
