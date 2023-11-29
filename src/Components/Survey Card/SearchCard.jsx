import { Link } from "react-router-dom";

const SearchCard = ({ poll }) => {
  const {
    _id,
    title,
    email,
    discription,
    summary,
    date,
    expired_date,
    category,
    image,
    author,
    like,
    disLike,
    comment_box,
    consumer_vote,
    importent_vote,
    support_vote,
    voteCount,
    voterEmail,
  } = poll;
  return (
    <Link
      to={`/surveydetails/${_id}`}
      className="flex items-center text-xs gap-5 my-3 bg-gray-100 p-3"
    >
      <div className="h-16 w-20">
        <img className="h-full w-full" src={image} alt="" />
      </div>
      <div>
        <h1 className="text-xs">{title}</h1>
        <p>Lihe: {like}</p>
        <p> disLike : {disLike}</p>
        <p>vote : {voteCount}</p>
      </div>
    </Link>
  );
};

export default SearchCard;
