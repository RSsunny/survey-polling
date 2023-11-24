import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Profile = () => {
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
    <div>
      <button
        onClick={handleLogOut}
        className="border px-6 py-2 mt-20 rounded-full text-xl font-cinzel font-bold"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Profile;
