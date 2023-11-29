import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useUserRoll from "../Hooks/useUserRoll";
import Skeleton from "../Utility/Skeleton";

const SurveyorRoute = ({ children }) => {
  const { roll } = useUserRoll();
  const { user, loding } = useAuth();
  const location = useLocation();
  if (loding) {
    return <Skeleton></Skeleton>;
  }
  if (user && roll === "surveyor") {
    return children;
  }
  return (
    <Navigate to={"/signin"} state={{ from: location?.pathname }}></Navigate>
  );
};

export default SurveyorRoute;
