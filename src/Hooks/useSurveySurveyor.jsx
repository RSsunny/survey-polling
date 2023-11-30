import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSurveySurveyor = () => {
  const axios = useAxiosSecure();
  const { user } = useAuth();
  const { data, refetch } = useQuery({
    queryKey: ["MySurveys"],
    queryFn: async () => {
      const res = await axios(`/api/v1/mysurvey?email=${user?.email}`);
      return res.data;
    },
  });
  return { data, refetch };
};

export default useSurveySurveyor;
