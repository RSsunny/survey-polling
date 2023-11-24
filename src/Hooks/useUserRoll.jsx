import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useUserRoll = () => {
  const axios = useAxiosSecure();
  const { user } = useAuth();
  const { data: roll } = useQuery({
    queryKey: ["userRoll", user],
    queryFn: async () => {
      const res = await axios(`/api/v1/usersroll/${user?.email}`);
      return res.data;
    },
  });
  return { roll };
};

export default useUserRoll;
