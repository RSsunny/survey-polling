import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Container from "../../Shared/Container";
import SurveyCard from "../../Components/Survey Card/SurveyCard";
import { useState } from "react";
import SearchCard from "../../Components/Survey Card/SearchCard";

const Surveys = () => {
  const axios = useAxiosSecure();
  const [selectedValue, setSelectedValue] = useState("");
  const [searchTitle, setSearchTitle] = useState();

  const { data } = useQuery({
    queryKey: ["survey"],
    queryFn: async () => {
      const res = await axios(`/api/v1/survey`);
      return res.data;
    },
  });
  const filterTitle = data?.filter((items) =>
    items?.title?.toLowerCase()?.includes(searchTitle)
  );
  console.log(filterTitle);

  const handleFilterChange = (e) => {
    let value = e.target.value;
    setSelectedValue(value);

    console.log(value);
  };

  // search............
  const handleSearch = async (event) => {
    if (event?.target?.value.length <= 0) {
      console.log();
      setSearchTitle(10100000);
    } else {
      setSearchTitle(event.target.value);
    }
  };

  const handleMostVote = (vote) => {
    console.log(vote);
  };

  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto gap-5 mt-20 ">
        <div className="w-full md:w-72 relative ">
          <input
            onChange={handleSearch}
            placeholder="search.....(title)"
            type="search"
            name="search"
            className="border outline-none w-full p-2 text-xs py-3"
            id=""
          />
          <div
            className={`absolute w-full  p-1 bg-white ${
              filterTitle?.length > 0 && "border"
            }`}
          >
            {filterTitle?.slice(0, 10)?.map((poll) => (
              <SearchCard key={poll._id} poll={poll}></SearchCard>
            ))}
          </div>
        </div>
        <h1 className="hidden md:block text-xl font-cinzel font-bold text-center my-10">
          most Popular Survey
        </h1>
        <div className="flex items-baseline gap-5 text-xs">
          <div onClick={() => handleMostVote("mostVote")} className="">
            <p className="hover:bg-primary_Colors hover:text-white p-4 border text-center font-bold cursor-pointer rounded-md">
              Most Vote
            </p>
          </div>
          <div className="w-44 border rounded-md">
            <select
              onChange={handleFilterChange}
              value={selectedValue}
              className="select w-full max-w-xs"
            >
              <option disabled value="">
                Pick your favorite...
              </option>
              <option value="Environmental Awareness">
                Environmental Awareness
              </option>
              <option value="Marge">Marge</option>
            </select>
          </div>
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
