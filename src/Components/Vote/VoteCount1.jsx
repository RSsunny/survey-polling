import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const VoteCount1 = (id) => {
  const axios = useAxiosSecure();
  const { data, refetch } = useQuery({
    queryKey: ["one"],
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
  const importantvoteCount = importent_vote?.filter(
    (data) => data === "Very Important"
  );
  const midumevoteCount = importent_vote?.filter(
    (data) => data === "Moderately Important"
  );
  const lowinportentvoteCount = importent_vote?.filter(
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

  const parsentageimportant = parseInt(parsentage1);
  const parsentage2 = 100 * (midumevoteCountlength / totalVote);

  const parsentagemidume = parseInt(parsentage2);
  const parsentage3 = 100 * (lowvoteCountlength / totalVote);

  const parsentagelow = parseInt(parsentage3);
  console.log(parsentageimportant, parsentagemidume, parsentagelow);
  return { parsentageimportant, parsentagemidume, parsentagelow };
};

export default VoteCount1;
