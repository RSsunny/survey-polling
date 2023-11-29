import { FaEye } from "react-icons/fa";
import { BiLike, BiDislike, BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";
import VoteCount1 from "../Vote/VoteCount1";

const SurveyCard = ({ survey }) => {
  const {
    _id,
    discription,
    summary,
    date,
    expired_date,
    category,
    image,
    title,
    author,
    comment_box,
    like,
    disLike,
    voteCount,
  } = survey || {};

  const sortDiscription = discription.slice(0, 100);

  return (
    <div>
      <div className="border flex-1 rounded-xl">
        <div className="p-5 flex gap-5 justify-between">
          <div className="flex gap-5">
            <div className="avatar">
              <div className="w-12 h-12 rounded-full">
                <img src={author?.author_image} />
              </div>
            </div>
            <div>
              <h4 className="font-bold">{author?.author_name}</h4>
              <p className="text-xs font-bold">Surveyor</p>
            </div>
          </div>
          <Link
            to={`/surveydetails/${_id}`}
            className="flex items-center gap-2 font-bold"
          >
            <p>Vote:</p>
            <h5>{voteCount}</h5>
          </Link>
        </div>
        <div className="p-5">
          <h1 className="text-2xl font-bold font-cinzel mb-4">{title}</h1>
          <Link to={`/surveydetails/${_id}`} className="text-sm ">
            {sortDiscription}.......{" "}
            <span className="text-bold text-xs">see</span>
          </Link>
        </div>
        <Link to={`/surveydetails/${_id}`} className="h-[200px] w-full">
          <img className="h-full w-full" src={image} alt="" />
        </Link>
        <Link
          to={`/surveydetails/${_id}`}
          className="flex items-center justify-between px-5 py-5 border-b"
        >
          <div className="flex items-center gap-3 text-2xl">
            <div className="flex items-center gap-2 font-bold">
              <BiSolidLike className="cursor-pointer " />
              <p className="text-sm">{like}</p>
            </div>
            <div className="flex items-center gap-2 font-bold">
              <BiSolidDislike className="cursor-pointer " />
              <p className="text-sm">{disLike}</p>
            </div>
          </div>
          <div className="relative md:block hidden">
            <h4 className="pl-4 pr-6 py-1 rounded-full border cursor-pointer">
              Comment....
            </h4>
            <FaRegCommentDots className="absolute top-2 right-2 " />
          </div>

          <div className="flex items-center gap-3">
            <FaEye className="text-2xl" />
            <p className="font-bold">1.2M</p>
          </div>
        </Link>
        <div className="h-32 overflow-y-scroll p-5 ">
          {comment_box?.map((com, indxx) => (
            <div key={indxx} className="flex gap-5 my-5">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <h2 className="border p-2 rounded-xl text-xs">{com}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurveyCard;
