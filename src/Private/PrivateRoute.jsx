import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Skeleton from "../Utility/Skeleton";

const PrivateRoute = ({ children }) => {
  const { user, loding } = useAuth();
  const location = useLocation();

  if (loding) {
    return <Skeleton></Skeleton>;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to={"/signin"} state={{ from: location.pathname }}></Navigate>
  );
};

export default PrivateRoute;
