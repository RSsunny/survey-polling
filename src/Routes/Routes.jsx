import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/Signin/Signin";
import SignUp from "../Pages/Signup/SignUp";
import Deshbord from "../Deshbord/Dashbord";

import Profile from "../Deshbord/Sidebar List/Profile";
import UserStatics from "../Deshbord/User/UserStatics";
import BrowseSurveys from "../Deshbord/User/BrowseSurveys";
import UserResponses from "../Deshbord/User/UserResponses";
import UserSettings from "../Deshbord/User/UserSettings";
import PrivateRoute from "../Private/PrivateRoute";
import Subscribe from "../Pages/Subscribe/Subscribe";
import Payment from "../Pages/Subscribe/Payment";
import Surveys from "../Pages/Surveys/Surveys";
import AddSurvey from "../Deshbord/Surveyor/AddSurvey";
import MySurveys from "../Deshbord/Surveyor/MySurveys";
import SurveyDetails from "../Pages/Surveys/SurveyDetails";
import AdminUser from "../Deshbord/Admin/AdminUser";
import Allsurvey from "../Deshbord/Admin/Allsurvey";
import AdminStatic from "../Deshbord/Admin/AdminStatic";
import AdminResults from "../Deshbord/Admin/AdminResults";
import AdminSetting from "../Deshbord/Admin/AdminSetting";
import AdminRoute from "../Private/AdminRoute";
import SurveyorRoute from "../Private/SurveyorRoute";
import SurveyorStatics from "../Deshbord/Surveyor/SurveyorStatics";
import SurveyorResults from "../Deshbord/Surveyor/SurveyorResults";
import UpdateSurvey from "../Deshbord/Surveyor/UpdateSurvey";
import Aboute from "../Pages/About/Aboute";
import Contact from "../Pages/Contact/Contact";
import HelpCenter from "../Pages/helpCenter/HelpCenter";

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
      {
        path: "surveys",
        element: <Surveys></Surveys>,
      },
      {
        path: "surveydetails/:id",

        element: <SurveyDetails></SurveyDetails>,
      },
      {
        path: "about",
        element: <Aboute></Aboute>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "helpcenter",
        element: <HelpCenter></HelpCenter>,
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
      // admin deshbord
      {
        path: "alluserslist",
        element: (
          <AdminRoute>
            <AdminUser></AdminUser>
          </AdminRoute>
        ),
      },
      {
        path: "adminstatics",
        element: (
          <AdminRoute>
            <AdminStatic></AdminStatic>
          </AdminRoute>
        ),
      },
      {
        path: "adminresults",
        element: (
          <AdminRoute>
            <AdminResults></AdminResults>
          </AdminRoute>
        ),
      },
      {
        path: "adminsurveys",
        element: (
          <AdminRoute>
            <Allsurvey></Allsurvey>
          </AdminRoute>
        ),
      },
      {
        path: "adminsettings",
        element: (
          <AdminRoute>
            <AdminSetting></AdminSetting>
          </AdminRoute>
        ),
      },
      // user Deshbord

      {
        path: "userstatics",
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

      // surveyor desbord
      {
        path: "addsurvey",
        element: (
          <SurveyorRoute>
            <AddSurvey></AddSurvey>
          </SurveyorRoute>
        ),
      },
      {
        path: "surveyersurveys",
        element: <MySurveys></MySurveys>,
      },
      {
        path: "surveyorstatics",
        element: (
          <SurveyorRoute>
            {" "}
            <SurveyorStatics></SurveyorStatics>
          </SurveyorRoute>
        ),
      },
      {
        path: "surveyerresults",
        element: (
          <SurveyorRoute>
            {" "}
            <SurveyorResults></SurveyorResults>
          </SurveyorRoute>
        ),
      },
      {
        path: "updatesurvey/:id",
        element: (
          <SurveyorRoute>
            <UpdateSurvey></UpdateSurvey>
          </SurveyorRoute>
        ),
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
