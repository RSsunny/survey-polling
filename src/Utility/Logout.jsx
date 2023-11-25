import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Logout = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch();
  };
  return (
    <div className="w-full text-center">
      <button
        onClick={handleLogOut}
        className="border px-6 py-2 mt-20 rounded-full text-xl font-cinzel font-bold hover:bg-primary_Colors hover:text-white transition ease-linear duration-500"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Logout;
