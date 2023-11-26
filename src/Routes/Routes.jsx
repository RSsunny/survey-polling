import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/Signin/Signin";
import SignUp from "../Pages/Signup/SignUp";
import Deshbord from "../Deshbord/Deshbord";
import UserHome from "../Deshbord/User/UserHome";
import ProuserHome from "../Deshbord/Pro User/ProuserHome";
import Profile from "../Deshbord/Profile";
import UserStatics from "../Deshbord/User/UserStatics";
import BrowseSurveys from "../Deshbord/User/BrowseSurveys";
import UserResponses from "../Deshbord/User/UserResponses";
import UserSettings from "../Deshbord/User/UserSettings";
import PrivateRoute from "../Private/PrivateRoute";
import Subscribe from "../Pages/Subscribe/Subscribe";
import Payment from "../Pages/Subscribe/Payment";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "subscribe",
        element: <Subscribe></Subscribe>,
      },
      {
        path: "payment",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/deshbord",
    element: (
      <PrivateRoute>
        <Deshbord></Deshbord>
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      // user Deshbord

      {
        path: "statics",
        element: <UserStatics></UserStatics>,
      },
      {
        path: "browseSurveys",
        element: <BrowseSurveys></BrowseSurveys>,
      },
      {
        path: "userresponses",
        element: <UserResponses></UserResponses>,
      },
      {
        path: "usersettings",
        element: <UserSettings></UserSettings>,
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
