import useAuth from "../../Hooks/useAuth";
import useUserRoll from "../../Hooks/useUserRoll";
import { FaEdit } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Profile = () => {
  const { user } = useAuth();
  const { roll } = useUserRoll();
  console.log(user);
  return (
    <div className="p-2 md:p-10 lg:p-20">
      <div className="flex items-center gap-5 ">
        <img className="w-40 h-40 rounded-full" src={user?.photoURL} alt="" />
        <div className="font-bold">
          <h2 className="">{user?.displayName}</h2>
          <h2 className="my-1 text-xs">{user?.email}</h2>
          <h2 className="text-xs">phone Number:</h2>
          <h2 className="text-xs my-1">Title: {roll}</h2>
        </div>
        <FaEdit className="-mt-32 cursor-pointer text-2xl" />
      </div>
      <div className="h-screen border my-10 rounded-2xl p-5">
        <Skeleton count={10} />
      </div>
    </div>
  );
};

export default Profile;
