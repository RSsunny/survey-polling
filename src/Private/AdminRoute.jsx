import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useUserRoll from "../Hooks/useUserRoll";
import Skeleton from "../Utility/Skeleton";

const AdminRoute = ({ children }) => {
  const { roll } = useUserRoll();
  const { user, loding } = useAuth();
  const location = useLocation();
  if (loding) {
    return <Skeleton></Skeleton>;
  }
  if (user && roll === "admin") {
    return children;
  }
  return (
    <Navigate to={"/signin"} state={{ from: location?.pathname }}></Navigate>
  );
};

export default AdminRoute;
