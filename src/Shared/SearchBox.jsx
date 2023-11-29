import { useState } from "react";
import useAllSurvey from "../Hooks/useAllSurvey";
import SearchCard from "../Components/Survey Card/SearchCard";

const SearchBox = () => {
  const [searchTitle, setSearchTitle] = useState();
  const { data } = useAllSurvey();

  const filterTitle = data?.filter((items) =>
    items?.title?.toLowerCase()?.includes(searchTitle)
  );
  console.log(filterTitle);

  // search............
  const handleSearch = async (event) => {
    if (event?.target?.value.length <= 0) {
      console.log();
      setSearchTitle("10100000");
    } else {
      setSearchTitle(event.target.value);
    }
  };

  return (
    <div>
      <div className="w-full md:w-72 relative ">
        <input
          onChange={handleSearch}
          placeholder="search.....(title)"
          type="search"
          name="search"
          className="border outline-none w-full p-2 text-xs py-3 lowercase"
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
    </div>
  );
};

export default SearchBox;
