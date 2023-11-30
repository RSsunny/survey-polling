import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const VoteThree = (id) => {
  const axios = useAxiosSecure();
  const { data, refetch } = useQuery({
    queryKey: ["three"],
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
  const importantvoteCount = consumer_vote?.filter(
    (data) => data === "Very Important"
  );
  const midumevoteCount = consumer_vote?.filter(
    (data) => data === "Slightly Important"
  );
  const lowinportentvoteCount = consumer_vote?.filter(
    (data) => data === "Not Important at All"
  );
  const importantvoteCountlength = importantvoteCount.length;
  const midumevoteCountlength = midumevoteCount.length;
  const lowvoteCountlength = lowinportentvoteCount.length;
  const totalVote =
    importantvoteCountlength +
    1 +
    midumevoteCountlength +
    1 +
    lowvoteCountlength +
    1;

  const parsentage1 = 100 * (importantvoteCountlength / totalVote);

  const vote_7 = parseInt(parsentage1);
  const parsentage2 = 100 * (midumevoteCountlength / totalVote);

  const vote_8 = parseInt(parsentage2);
  const parsentage3 = 100 * (lowvoteCountlength / totalVote);

  const vote_9 = parseInt(parsentage3);

  return { vote_7, vote_8, vote_9 };
};
export default VoteThree;
