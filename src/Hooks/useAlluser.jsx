import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAlluser = () => {
  const axios = useAxiosSecure();

  const { data: alluser, refetch } = useQuery({
    queryKey: ["alluser"],
    queryFn: async () => {
      const res = await axios("/api/v1/users");
      return res.data;
    },
  });
  return { alluser, refetch };
};

export default useAlluser;
