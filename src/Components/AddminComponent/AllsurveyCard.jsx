import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const AllsurveyCard = ({ items }) => {
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
  } = items;

  return (
    <div className="flex flex-col md:flex-row gap-10 px-2 md:px-0">
      <div className="h-[300px] md:w-[400px]">
        <img src={image} className="h-full w-full" alt="" />
      </div>
      <div>
        <div className="flex items-center gap-5 mb-10">
          <div className="avatar">
            <div className="w-20 h-20 rounded-full">
              <img src={author?.author_image} />
            </div>
          </div>
          <div>
            <h4 className="font-bold">{author?.author_name}</h4>
            <p className="text-xs font-bold">Surveyor</p>
            <p className="text-xs font-bold">published : {date}</p>
          </div>
        </div>
        <div className="flex gap-3 items-center ">
          <MdOutlineCheckBoxOutlineBlank className="text-xl" />

          <h1 className="text-xl font-bold">Title : {title}</h1>
        </div>
        <div className="flex gap-3 items-center ">
          <h1 className=" my-5  md:w-[500px]">Title : {discription}</h1>
        </div>
      </div>
      <div className="w-64">
        <h1 className=" font-bold">Total Vote : {voteCount}</h1>
      </div>
    </div>
  );
};

export default AllsurveyCard;
