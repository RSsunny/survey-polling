import useAuth from "../../Hooks/useAuth";
import Container from "../../Shared/Container";
import MySurveyCard from "../../Components/Surveyor/MySurveyCard";
import useSurveySurveyor from "../../Hooks/useSurveySurveyor";

const MySurveys = () => {
  const { data, refetch } = useSurveySurveyor() || {};

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
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((survey, indx) => (
                <MySurveyCard
                  key={survey._id}
                  indx={indx}
                  survey={survey}
                  refetchdata={refetch}
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
