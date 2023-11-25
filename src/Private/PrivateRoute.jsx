import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loding } = useAuth();
  const location = useLocation();

  if (loding) {
    return <h1>loding</h1>;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to={"/signin"} state={{ from: location.pathname }}></Navigate>
  );
};

export default PrivateRoute;
