import { useQuery } from "@tanstack/react-query";
import { Select, Option } from "../../Utility/MaterialClass";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Container from "../../Shared/Container";
import SurveyCard from "../../Components/Survey Card/SurveyCard";
import { useState } from "react";

const Surveys = () => {
  const axios = useAxiosSecure();
  const [filter, setFilter] = useState("");
  const { data } = useQuery({
    queryKey: ["survey"],
    queryFn: async () => {
      const res = await axios(`/api/v1/survey`);
      return res.data;
    },
  });

  const handlefilterChange = (e) => {
    setFilter(e.target?.value);
  };
  console.log(filter);
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto gap-5 mt-20">
        <div className="w-32 md:w-52 lg:w-72"></div>
        <h1 className="hidden md:block text-2xl font-cinzel font-bold text-center my-10">
          most Popular Survey
        </h1>
        <div className="w-32 md:w-52 lg:w-72">
          <Select
            value={filter}
            onChange={handlefilterChange}
            label="Filter........ "
          >
            <Option value="title">Title</Option>
            <Option value="category">Category</Option>
            <Option value="vote">Most Vote</Option>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 my-20">
        {data?.map((survey) => (
          <SurveyCard key={survey._id} survey={survey}></SurveyCard>
        ))}
      </div>
    </Container>
  );
};

export default Surveys;
