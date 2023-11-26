import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Surveys = () => {
  const axios = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ["survey"],
    queryFn: async () => {
      const res = await axios(`/api/v1/survey`);
      return res.data;
    },
  });
  console.log(data);
  return <div></div>;
};

export default Surveys;
