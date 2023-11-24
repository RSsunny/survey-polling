import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/Signin/Signin";
import SignUp from "../Pages/Signup/SignUp";
import Deshbord from "../Deshbord/Deshbord";
import UserHome from "../Deshbord/User/UserHome";
import ProuserHome from "../Deshbord/Pro User/ProuserHome";
import Profile from "../Deshbord/Profile";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/deshbord",
    element: <Deshbord></Deshbord>,
    children: [
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      // user Deshbord
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      // Pro user deshbord
      {
        path: "prouserHome",
        element: <ProuserHome></ProuserHome>,
      },
    ],
  },
  // User Authentication
  {
    path: "/signin",
    element: <Signin></Signin>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
]);

export default Routes;
