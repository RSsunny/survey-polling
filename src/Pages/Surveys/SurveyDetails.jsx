import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link, useNavigate, useParams } from "react-router-dom";
import Container from "../../Shared/Container";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { FaEye, FaRegCommentDots } from "react-icons/fa";
import { Progress } from "../../Utility/MaterialClass";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { TiArrowBackOutline } from "react-icons/ti";

import { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUserRoll from "../../Hooks/useUserRoll";
import Swal from "sweetalert2";
import { MdPublishedWithChanges } from "react-icons/md";
import VoteCount1 from "../../Components/Vote/VoteCount1";
import VoteCountTwo from "../../Components/Vote/VoteCountTwo";
import VoteThree from "../../Components/Vote/VoteThree";
import { TbMessageReport } from "react-icons/tb";

const SurveyDetails = () => {
  //  date...................
  const [day, setDay] = useState("");

  // vote
  const [important, setImportant] = useState("");
  const [support, setSupport] = useState("");
  const [consumer, setConsumer] = useState("");
  // --------------------------

  // comment.............
  const [comment, setComment] = useState("");
  const [userComment, setUserComment] = useState(null);
  const [sendComment, setSendComment] = useState(false);
  // ----------------------------

  // like/ dislike -------------
  const [disCount, setDisCount] = useState(false);
  const [count, setCount] = useState(false);

  //  -----------------------------
  //Report ------------------
  const [reportuser, setReport] = useState(false);
  const [messagerepo, setMessage] = useState("");
  const [feedback, setFedback] = useState("");
  // hooks....................
  const axios = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const id = useParams();
  const { user } = useAuth();
  const { roll } = useUserRoll();
  const navigate = useNavigate();

  // lode data......
  const { data, refetch } = useQuery({
    queryKey: ["surveyDetails"],
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
    reportMessage: repo = [],
  } = data || {};

  //report.............
  console.log(reportuser);
  const handleReport = (report) => {
    setReport(!reportuser);
  };

  const handleReportMessage = (message) => {
    setMessage(message.target.value);
  };

  const handleSubmitRepo = async () => {
    const value = messagerepo;
    const reportinfo = {
      message: value,
      email: user?.email,
      title: title,
      postId: _id,
      img_repo: image,
    };
    const reportMessage = [reportinfo, ...repo];
    console.log(reportMessage);
    const res = await axios.patch(`/api/v1/surveyreport/${_id}`, {
      reportMessage,
    });
    setReport(!reportuser);
    if (res?.data?.message === "success") {
      setFedback("thank you for your feedback");
    }
  };

  //Extremely Important
  const { parsentageimportant, parsentagemidume, parsentagelow } =
    VoteCount1(id) || {};
  const { vote_4, vote_5, vote_6 } = VoteCountTwo(id);
  const { vote_7, vote_8, vote_9 } = VoteThree(id);
  const matchVoterEmail = voterEmail?.find((data) => data === user?.email);

  // like patch ...............
  const handleLike = async () => {
    if (!user?.email) {
      return navigate("/signin", { state: { from: location.pathname } });
    }
    setCount(!count);

    if (!count) {
      const countres = await axiosSecure.patch(`/api/v1/surveylike/${_id}`, {
        like: likeCount + 1,
      });
    } else {
      const disCountres = await axiosSecure.patch(`/api/v1/surveylike/${_id}`, {
        like: likeCount - 1,
      });
    }

    refetch();
  };

  // dis Like patch ...........
  const handleDisLike = async () => {
    if (!user?.email) {
      return navigate("/signin", { state: { from: location.pathname } });
    }
    setDisCount(!disCount);
    refetch();
    if (!disCount) {
      const disRes = await axiosSecure.patch(`/api/v1/surveydislike/${_id}`, {
        disLike: likeCount + 1,
      });
    } else {
      const disResponsive = await axiosSecure.patch(
        `/api/v1/surveydislike/${_id}`,
        {
          disLike: likeCount - 1,
        }
      );
    }
    refetch();
  };

  // comment box active ...........
  const handleComment = () => {
    if (roll === "pro user") {
      setComment(!comment);
    } else {
      Swal.fire({
        title:
          "Only Pro Member can write comment . Subscribe now if you want to become a pro member",
        text: "Are you now a member please click the go button",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Go Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/subscribe");
        }
      });
    }
  };

  // get comment ---------------
  const handleCommentbox = async (event) => {
    setUserComment(event.target.value);
    console.log(userComment);
  };

  // comment submite---------------
  const handleCommentSibmite = async () => {
    setSendComment(!sendComment);
    console.log(sendComment);
    if (!sendComment && userComment.length > 0) {
      if (comment_box) {
        const newComment = [userComment, ...comment_box];
        console.log(newComment);
        const commentRes = await axiosSecure.patch(`/api/v1/survey/${_id}`, {
          comment_box: newComment,
        });
        refetch();
        setComment(!comment);

        console.log(commentRes.data);
      } else {
        const newComment = [userComment];
        console.log(newComment);

        const commentRes = await axiosSecure.patch(`/api/v1/survey/${_id}`, {
          comment_box: newComment,
        });
        refetch();
        setComment(!comment);

        console.log(commentRes.data);
      }
    }

    if (sendComment && userComment.length > 0) {
      if (comment_box) {
        const newComment = [userComment, ...comment_box];
        console.log(newComment);
        const commentRes = await axiosSecure.patch(`/api/v1/survey/${_id}`, {
          comment_box: newComment,
        });
        console.log(commentRes.data);
        refetch();
        setComment(!comment);
      } else {
        const newComment = [userComment];
        console.log(newComment);

        const commentRes = await axiosSecure.patch(`/api/v1/survey/${_id}`, {
          comment_box: newComment,
        });
        console.log(commentRes.data);
        refetch();
        setComment(!comment);
      }
    }
    console.log();
  };

  // vote Submite
  const handleVoteSubmit = async () => {
    if (!user?.email) {
      return navigate("/signin", { state: { from: location.pathname } });
    }
    const newvoteCount = voteCount ? parseInt(voteCount) + 1 : 1;
    const votarEmail = [...voterEmail, user.email];
    const importent_count = [...importent_vote, important];
    const support_conut = [...support_vote, support];
    const consumer_count = [...consumer_vote, consumer];
    const voteinfo = {
      voteCount: newvoteCount,
      voterEmail: votarEmail,
      importent_vote: importent_count,
      support_vote: support_conut,
      consumer_vote: consumer_count,
    };
    const res = await axiosSecure.patch(`/api/v1/surveyvote/${_id}`, voteinfo);
    refetch();
    console.log(res.data);
  };

  // time set...........
  useEffect(() => {
    const startDate = new Date(date);
    const presentDate = new Date();
    const endDate = new Date(expired_date);
    const timeDefference = endDate - startDate;
    const remainingDay = endDate - presentDate;
    const dayDeffernce = parseInt(timeDefference / (1000 * 60 * 60 * 24));
    const dayRemaing = parseInt(remainingDay / (1000 * 60 * 60 * 24));
    const parsentige = parseInt((dayRemaing / dayDeffernce) * 100);
    setDay(parsentige);
  }, [date, expired_date]);

  return (
    <Container>
      <div className="my-10  font-bold font-cinzel rounded-md flex">
        <Link
          to={-1}
          className="flex items-center gap-3 border px-6 py-2 rounded-md hover:bg-primary_Colors hover:text-white hover:animate-pulse"
        >
          <TiArrowBackOutline className="text-2xl" />
          <p>Back</p>
        </Link>
      </div>
      <div className="border rounded-xl  md: p-5 mb-20">
        {/* author */}
        <div className="flex  justify-between ">
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
          <div className="mt-5 mr-5 font-bold">Total Vote : {voteCount} </div>
        </div>
        {/* image and chart */}
        <div className="md:flex gap-10 relative">
          <div className="flex-1">
            <img src={image} className="rounded-xl w-full" alt="" />
            <div className="flex items-center justify-between md:px-5 py-5 border-b">
              <div className="flex items-center gap-3 text-sm lg:text-2xl">
                <div className="flex items-center gap-2 font-bold  ">
                  <BiSolidLike
                    onClick={handleLike}
                    className={`cursor-pointer  ${count && "text-green"}`}
                  />
                  <p className="text-sm">{likeCount}</p>
                </div>
                <div className="flex items-center gap-2 font-bold">
                  <BiSolidDislike
                    onClick={handleDisLike}
                    className={`cursor-pointer  ${disCount && "text-red-500"}`}
                  />
                  <p className="text-sm">{disLike}</p>
                </div>
              </div>
              <div onClick={handleComment} className="relative ">
                <h4 className="pl-1 lg:pl-4 text-xs lg:text-base pr-6 py-1 rounded-full border cursor-pointer">
                  Comment....
                </h4>
                <FaRegCommentDots className="absolute top-1 lg:top-2 right-2 " />
              </div>

              <div className="flex items-center gap-3">
                <FaEye className="lg:text-2xl" />
                <p className="text-xs lg:text-base font-bold">1.2M</p>
              </div>
            </div>
            <div className="h-44 md:h-80 lg:h-44 overflow-y-scroll md:p-5 ">
              {comment && (
                <div className="flex gap-5 my-2">
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                  <div className="relative w-full">
                    <textarea
                      onChange={handleCommentbox}
                      className="border p-2 rounded-xl text-xs md:min-h-[100px] w-full outline-none "
                    />
                    <HiOutlinePaperAirplane
                      onClick={handleCommentSibmite}
                      className="text-xl text-green absolute bottom-3 right-3 cursor-pointer"
                    />
                  </div>
                </div>
              )}

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
          {/* chart */}
          <div className="flex-1 border rounded-xl p-5 my-20 md:my-0">
            <div
              className={feedback ? "flex justify-end mr-10 -mt-2" : "hidden"}
            >
              <h1 className="text-xs text-primary_Colors "> {feedback}</h1>
            </div>
            <div className={`relative ${reportuser ? "block" : "hidden"}`}>
              <textarea
                onChange={handleReportMessage}
                name="repo"
                className={` border w-full mr-10 outline-none rounded-2xl  mt-5 p-2 text-xs `}
                placeholder="Report......."
              ></textarea>
              <HiOutlinePaperAirplane
                onClick={handleSubmitRepo}
                className="text-xl text-green absolute right-3 bottom-3 cursor-pointer"
              />
            </div>
            <h2 className="my-5 text-center  font-bold">Chart</h2>
            {day < 0 ? (
              <h1 className="text-xl font-bold text-center my-8  font-cinzel">
                final result
              </h1>
            ) : (
              <div className="flex items-center gap-3 mb-10">
                <p className="text-xs lg:text-sm font-bold w-1/4">
                  Complete Day :{" "}
                </p>
                <ProgressBar className=" w-3/4 flex-1" completed={100 - day} />
              </div>
            )}
            {day < 0 && (
              <>
                {/* one */}
                <div className="">
                  <div className="flex items-center gap-5 my-5 font-bold">
                    <HiOutlinePaperAirplane className="text-xl text-green" />
                    <h1>Extremely Important</h1>
                  </div>
                  <div className="ml-10">
                    <div className=" flex flex-col gap-2">
                      <h1 className="font-bold text-xs">1. Important</h1>
                      <Progress
                        value={parsentageimportant}
                        size="lg"
                        label="vote"
                      />
                    </div>
                    <div className="my-4 flex flex-col gap-2 ">
                      <h1 className="font-bold text-xs">
                        2. Roughly important
                      </h1>
                      <Progress
                        value={parsentagemidume}
                        className="w-full"
                        size="lg"
                        label="vote"
                      />
                    </div>
                    <div className=" my-4 flex flex-col gap-2">
                      <h1 className="font-bold text-xs flex-1">
                        3. Not Important
                      </h1>
                      <Progress
                        className="w-full"
                        value={parsentagelow}
                        size="lg"
                        label="vote"
                      />
                    </div>
                  </div>
                </div>
                {/* two */}
                <div className="">
                  <div className="flex items-center gap-5 my-5 font-bold">
                    <HiOutlinePaperAirplane className="text-xl text-green" />
                    <h1>Support for Sustainable Brands</h1>
                  </div>
                  <div className="ml-10">
                    <div className=" flex flex-col gap-2">
                      <h1 className="font-bold text-xs">1. Always</h1>
                      <Progress value={vote_4} size="lg" label="vote" />
                    </div>
                    <div className="my-4 flex flex-col gap-2 ">
                      <h1 className="font-bold text-xs">2. Occasionally</h1>
                      <Progress
                        value={vote_5}
                        className="w-full"
                        size="lg"
                        label="vote"
                      />
                    </div>
                    <div className=" my-4 flex flex-col gap-2">
                      <h1 className="font-bold text-xs flex-1">3. Never</h1>
                      <Progress
                        className="w-full"
                        value={vote_6}
                        size="lg"
                        label="vote"
                      />
                    </div>
                  </div>
                </div>
                {/* three */}
                <div className="">
                  <div className="flex items-center gap-5 my-5 font-bold">
                    <HiOutlinePaperAirplane className="text-xl text-green" />
                    <h1>Consumer Choices</h1>
                  </div>
                  <div className="ml-10">
                    <div className=" flex flex-col gap-2">
                      <h1 className="font-bold text-xs">1. Very Important</h1>
                      <Progress value={vote_7} size="lg" label="vote" />
                    </div>
                    <div className="my-4 flex flex-col gap-2 ">
                      <h1 className="font-bold text-xs">
                        2. Slightly Important
                      </h1>
                      <Progress
                        value={vote_8}
                        className="w-full"
                        size="lg"
                        label="vote"
                      />
                    </div>
                    <div className=" my-4 flex flex-col gap-2">
                      <h1 className="font-bold text-xs flex-1">
                        3. Not Important at All
                      </h1>
                      <Progress
                        className="w-full"
                        value={vote_9}
                        size="lg"
                        label="vote"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
            {/* vote */}
            {day < 0 ? (
              ""
            ) : matchVoterEmail ? (
              <div className="mt-20 md:mt-40">
                {" "}
                <h1 className="text-4xl text-center my-5 font-cinzel font-bold">
                  Thank you very much for your valuable vote{" "}
                </h1>
                <div className="flex items-center gap-5  mt-10">
                  <HiOutlinePaperAirplane className="text-4xl text-green" />
                  <p className=" text-xl font-bold">
                    The result will be publicized when the date is over
                  </p>
                </div>
                <div className="flex items-center gap-8  mt-10">
                  <MdPublishedWithChanges className="text-2xl" />
                  <p className="font-bold">
                    Result publishe date : {expired_date}
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div>
                  <ul className="steps w-full my-5">
                    <li className={`${important && "step-primary"} step `}></li>
                    <li className={`${support && "step-primary"} step `}></li>
                    <li className={`${consumer && "step-primary"} step `}></li>
                  </ul>
                </div>
                <div className="flex items-center gap-5">
                  <HiOutlinePaperAirplane className="text-xl text-green" />
                  <h1>Extremely Important</h1>
                </div>
                <div className="text-xs ml-10 mt-">
                  <div className="flex items-center gap-5 my-2">
                    <p
                      onClick={() => setImportant("Very Important")}
                      className={`${
                        important === "Very Important" && "bg-red-500"
                      } p-2 border rounded-full cursor-pointer bg-gray-200 hover:bg-red-500 `}
                    ></p>
                    <p>Very Important</p>
                  </div>
                  <div className="flex items-center gap-5 my-2">
                    <p
                      onClick={() => setImportant("Moderately Important")}
                      className={`${
                        important === "Moderately Important" && "bg-red-500"
                      } p-2 border rounded-full cursor-pointer bg-gray-200 hover:bg-red-500 `}
                    ></p>
                    <p> Moderately Important</p>
                  </div>
                  <div className="flex items-center gap-5 my-2">
                    <p
                      onClick={() => setImportant("Not Important at All")}
                      className={`${
                        important === "Not Important at All" && "bg-red-500"
                      } p-2 border rounded-full cursor-pointer bg-gray-200 hover:bg-red-500 `}
                    ></p>
                    <p> Not Important at All</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <HiOutlinePaperAirplane className="text-xl text-green" />
                  <h1>Support for Sustainable Brands</h1>
                </div>
                <div className="text-xs ml-10 mt-">
                  <div className="flex items-center gap-5 my-2">
                    <p
                      onClick={() => setSupport("Always")}
                      className={`${
                        support === "Always" && "bg-red-500"
                      } p-2 border rounded-full cursor-pointer bg-gray-200 hover:bg-red-500 `}
                    ></p>
                    <p>Always</p>
                  </div>
                  <div className="flex items-center gap-5 my-2">
                    <p
                      onClick={() => setSupport("Occasionally")}
                      className={`${
                        support === "Occasionally" && "bg-red-500"
                      } p-2 border rounded-full cursor-pointer bg-gray-200 hover:bg-red-500 `}
                    ></p>
                    <p> Occasionally</p>
                  </div>
                  <div className="flex items-center gap-5 my-2">
                    <p
                      onClick={() => setSupport("Never")}
                      className={`${
                        support === "Never" && "bg-red-500"
                      } p-2 border rounded-full cursor-pointer bg-gray-200 hover:bg-red-500 `}
                    ></p>
                    <p>Never</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <HiOutlinePaperAirplane className="text-xl text-green" />
                  <h1>Consumer Choices</h1>
                </div>
                <div className="text-xs ml-10 mt-">
                  <div className="flex items-center gap-5 my-2">
                    <p
                      onClick={() => setConsumer("Very Important")}
                      className={`${
                        consumer === "Very Important" && "bg-red-500"
                      } p-2 border rounded-full cursor-pointer bg-gray-200 hover:bg-red-500 `}
                    ></p>
                    <p>Very Important</p>
                  </div>
                  <div className="flex items-center gap-5 my-2">
                    <p
                      onClick={() => setConsumer("Slightly Important")}
                      className={`${
                        consumer === "Slightly Important" && "bg-red-500"
                      } p-2 border rounded-full cursor-pointer bg-gray-200 hover:bg-red-500 `}
                    ></p>
                    <p> Slightly Important</p>
                  </div>
                  <div className="flex items-center gap-5 my-2">
                    <p
                      onClick={() => setConsumer("Not Important at All")}
                      className={`${
                        consumer === "Not Important at All" && "bg-red-500"
                      } p-2 border rounded-full cursor-pointer bg-gray-200 hover:bg-red-500 `}
                    ></p>
                    <p>Not Important at All</p>
                  </div>
                  <div className="text-right mt-5">
                    <button
                      onClick={handleVoteSubmit}
                      className=" px-4 py-2 bg-gray-200 rounded-md font-bold cursor-pointer"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
          <TbMessageReport
            onClick={() => handleReport(true)}
            className={`absolute top-3 right-5 text-xl cursor-pointer ${
              reportuser && "text-primary_Colors"
            }`}
          />
        </div>
        {/* details information */}
        <div className="my-20 ">
          <h2 className="text-xl font-bold ">{title}</h2>
          <p className="my-5">{discription}</p>
          <p>{summary}</p>
        </div>
      </div>
    </Container>
  );
};

export default SurveyDetails;
