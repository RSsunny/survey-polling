import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSingleData = ({ id }) => {
  const axios = useAxiosSecure();

  const { data, refetch } = useQuery({
    queryKey: ["upadetdata"],
    queryFn: async () => {
      const res = await axios(`/api/v1/survey/${id}`);
      return res.data;
    },
  });

  return { data, refetch };
};

export default useSingleData;
