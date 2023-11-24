import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const useAuth = () => {
  const authinfo = useContext(AuthContext);
  return authinfo;
};

export default useAuth;
