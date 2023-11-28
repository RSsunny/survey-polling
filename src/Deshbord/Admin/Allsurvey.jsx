import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import AllsurveyCard from "../../Components/AddminComponent/AllsurveyCard";

const Allsurvey = () => {
  const axios = useAxiosSecure();
  const { data } = useQuery({
    queryKey: [Allsurvey],
    queryFn: async () => {
      const res = await axios("/api/v1/survey");
      return res.data;
    },
  });

  return (
    <div className="flex flex-col gap-10 my-20">
      {data?.map((items) => (
        <AllsurveyCard key={items._id} items={items}></AllsurveyCard>
      ))}
    </div>
  );
};

export default Allsurvey;
