import { useState } from "react";
import AllsurveyCard from "../../Components/AddminComponent/AllsurveyCard";
import useAllSurvey from "../../Hooks/useAllSurvey";
import SearchBox from "../../Shared/SearchBox";

const Allsurvey = () => {
  const { data, refetch } = useAllSurvey();
  const [selectedValue, setSelectedValue] = useState("");
  const handleFilterChange = (e) => {
    let value = e.target.value;
    setSelectedValue(value);

    console.log(value);
  };
  const handleMostVote = (vote) => {
    console.log(vote);
  };
  return (
    <>
      <div className="mb-10 mt-20 flex flex-col md:flex-row justify-evenly px-2 gap-5 items-center">
        <SearchBox></SearchBox>
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
                Pick Category...
              </option>
              <option value="Environmental Awareness">
                Environmental Awareness
              </option>
              <option value="Marge">Marge</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 my-5 px-2 md:px-5 lg:px-0">
        {data?.map((items) => (
          <AllsurveyCard key={items._id} items={items}></AllsurveyCard>
        ))}
      </div>
    </>
  );
};

export default Allsurvey;
