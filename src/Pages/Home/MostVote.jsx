import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Container from "../../Shared/Container";
import SurveyCard from "../../Components/Survey Card/SurveyCard";

const MostVote = () => {
  const axios = useAxiosSecure();

  const { data } = useQuery({
    queryKey: ["survey"],
    queryFn: async () => {
      const res = await axios(`/api/v1/survey`);
      return res.data;
    },
  });

  // search............

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 my-20">
        {data?.slice(0, 6).map((survey) => (
          <SurveyCard key={survey._id} survey={survey}></SurveyCard>
        ))}
      </div>
    </Container>
  );
};

export default MostVote;
