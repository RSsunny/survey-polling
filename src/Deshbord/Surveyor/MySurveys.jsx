import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Container from "../../Shared/Container";
import MySurveyCard from "../../Components/Surveyor/MySurveyCard";

const MySurveys = () => {
  const axios = useAxiosSecure();
  const { user } = useAuth();
  const { data } = useQuery({
    queryKey: [MySurveys],
    queryFn: async () => {
      const res = await axios(`/api/v1/mysurvey?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(data);

  return (
    <Container>
      <div>
        <h1 className="text-5xl font-cinzel font-bold text-center my-20">
          My Survey{" "}
        </h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Total vote</th>
                <th>Time Distance</th>
                <th>Voter</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((survey, indx) => (
                <MySurveyCard
                  key={survey._id}
                  indx={indx}
                  survey={survey}
                ></MySurveyCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default MySurveys;
