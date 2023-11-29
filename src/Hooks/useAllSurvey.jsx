import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "./useAxiosPublic";

const useAllSurvey = () => {
  const axios = useAxiosPublic();
  const { data, refetch } = useQuery({
    queryKey: ["useAllSurvey"],
    queryFn: async () => {
      const res = await axios("/api/v1/survey");
      return res.data;
    },
  });

  return { data, refetch };
};

export default useAllSurvey;
