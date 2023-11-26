import React from "react";
import { Drawer, IconButton } from "../../Utility/MaterialClass";
import { IoMenu } from "react-icons/io5";
import Logo from "../../Utility/Logo";
import useUserRoll from "../../Hooks/useUserRoll";
import { Link } from "react-router-dom";
import Sidebar from "../../Deshbord/Sidebar/Sidebar";
import { FaCircleUser } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";
import Icons from "../../Utility/Icons";
import Logout from "../../Utility/Logout";
const Dawer = () => {
  const { roll } = useUserRoll();
  const { user } = useAuth();
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div>
      <React.Fragment>
        <IoMenu
          className="text-4xl mr-5 text-primary_Colors"
          onClick={openDrawer}
        ></IoMenu>
        <Drawer open={open} onClose={closeDrawer} className="p-4">
          <div className="mb-6 flex items-center justify-between">
            <Logo
              color={"text-black"}
              pro={roll === "user" ? false : true}
            ></Logo>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <Link
            to={`${user ? "/deshbord/profile" : "/signin"} `}
            className={`avatar flex justify-center items-center    `}
          >
            <div className="w-24 rounded-full ">
              {user ? (
                <img src={user?.photoURL} alt="" />
              ) : (
                <FaCircleUser className="w-full text-4xl " />
              )}
            </div>
          </Link>
          <div className="text-center flex flex-col gap-5  lg:px-10 mt-10 font-bold text-black">
            <Sidebar></Sidebar>
          </div>
          <Logout utiClass={"mt-5"}></Logout>
          <div className="absolute bottom-5 w-full ">
            <Icons></Icons>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Dawer;
