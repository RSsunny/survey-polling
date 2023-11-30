import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const VoteCountTwo = (id) => {
  const axios = useAxiosSecure();
  const { data, refetch } = useQuery({
    queryKey: ["two"],
    queryFn: async () => {
      const res = await axios(`/api/v1/survey/${id.id}`);
      return res.data;
    },
  });
  const {
    _id,
    discription,
    summary,
    date,
    expired_date,
    image,
    title,
    author,
    like: likeCount,
    disLike,
    comment_box,
    importent_vote = [],
    support_vote = [],
    consumer_vote = [],
    voteCount,
    voterEmail = [],
  } = data || {};
  //Extremely Important
  const importantvoteCount = support_vote?.filter((data) => data === "Always");
  const midumevoteCount = support_vote?.filter(
    (data) => data === "Occasionally"
  );
  const lowinportentvoteCount = support_vote?.filter(
    (data) => data === "Never"
  );
  const importantvoteCountlength = importantvoteCount.length;
  const midumevoteCountlength = midumevoteCount.length;
  const lowvoteCountlength = lowinportentvoteCount.length;
  console.log(
    importantvoteCountlength,
    midumevoteCountlength,
    lowvoteCountlength
  );
  const totalVote =
    importantvoteCountlength +
    1 +
    midumevoteCountlength +
    1 +
    lowvoteCountlength +
    1;

  const parsentage1 = 100 * (importantvoteCountlength / totalVote);

  const vote_4 = parseInt(parsentage1);
  const parsentage2 = 100 * (midumevoteCountlength / totalVote);

  const vote_5 = parseInt(parsentage2);
  const parsentage3 = 100 * (lowvoteCountlength / totalVote);

  const vote_6 = parseInt(parsentage3);
  console.log(vote_4, vote_5, vote_6);
  return { vote_4, vote_5, vote_6 };
};

export default VoteCountTwo;
