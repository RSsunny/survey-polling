import { Outlet } from "react-router-dom";
import DeshbordList from "./DeshbordList";
import Logout from "../Utility/Logout";
import Logo from "../Utility/Logo";

const Deshbord = () => {
  return (
    <div className="grid grid-cols-12 gap-5 min-h-screen">
      <div className="col-span-3 border-r">
        {/* logo */}
        <Logo></Logo>

        {/* deshbord sidver link list */}
        <DeshbordList></DeshbordList>

        {/* SignOut */}
        <Logout></Logout>
      </div>
      <div className="col-span-9 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Deshbord;
