import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import Container from "../../Shared/Container";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { FaEye, FaRegCommentDots } from "react-icons/fa";
import { Progress } from "../../Utility/MaterialClass";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

import { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import useAuth from "../../Hooks/useAuth";
const SurveyDetails = () => {
  const [day, setDay] = useState("");
  const [important, setImportant] = useState("");
  const [support, setSupport] = useState("");
  const [consumer, setConsumer] = useState("");
  const [comment, setComment] = useState("");
  const [like, setLike] = useState("");
  const [dislike, setDislike] = useState("");
  const [colorLike, setColorLike] = useState("");
  const axios = useAxiosPublic();
  const id = useParams();
  const { user } = useAuth();

  const { data } = useQuery({
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
  } = data || {};
  const handleLike = () => {
    setLike(1);
    setColorLike("like");
  };

  const handleDisLike = () => {
    setDislike(1);
    setColorLike("disLike");
  };
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

  console.log(like, dislike, colorLike);
  return (
    <Container>
      <div className="border rounded-xl  m-5 p-5">
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
          <div className="mt-5 mr-5 font-bold">Total Vote : 1.5k </div>
        </div>
        {/* image and chart */}
        <div className="md:flex gap-10 ">
          <div className="flex-1">
            <img src={image} className="rounded-xl w-full" alt="" />
            <div className="flex items-center justify-between px-5 py-5 border-b">
              <div className="flex items-center gap-3 text-sm lg:text-2xl">
                <div className="flex items-center gap-2 font-bold  ">
                  <BiSolidLike
                    onClick={handleLike}
                    className={`cursor-pointer  ${
                      colorLike === "like" && "text-green"
                    }`}
                  />
                  <p className="text-sm">1.5k</p>
                </div>
                <div className="flex items-center gap-2 font-bold">
                  <BiSolidDislike
                    onClick={handleDisLike}
                    className={`cursor-pointer  ${
                      colorLike === "disLike" && "text-red-500"
                    }`}
                  />
                  <p className="text-sm">1k</p>
                </div>
              </div>
              <div onClick={() => setComment(!comment)} className="relative ">
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
            <div className="h-44 overflow-y-scroll p-5 ">
              {comment && (
                <div className="flex gap-5">
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                  <textarea className="border p-2 rounded-xl text-xs min-h-[100px] w-full outline-none " />
                </div>
              )}
              <div className="flex gap-5 my-5">
                <div className="avatar">
                  <div className="w-12 h-12 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <h2 className="border p-2 rounded-xl text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore molestias sequi quisquam, deleniti doloribus debitis ab
                  saepe eveniet
                </h2>
              </div>
              <div className="flex gap-5 my-5">
                <div className="avatar">
                  <div className="w-12 h-12 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <h2 className="border p-2 rounded-xl text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore molestias sequi quisquam, deleniti doloribus debitis ab
                  saepe eveniet
                </h2>
              </div>
            </div>
          </div>
          {/* chart */}
          <div className="flex-1 border rounded-xl p-5 my-20 md:my-0">
            <h2 className="my-5 text-center  font-bold">Chart</h2>
            <div className="flex items-center gap-3 mb-10">
              <p className="text-xs lg:text-sm font-bold w-1/4">
                Complete Day :{" "}
              </p>
              <ProgressBar className=" w-3/4 flex-1" completed={100 - day} />
            </div>
            {day > 100 && (
              <div className="flex w-full flex-col gap-4">
                <Progress value={20} size="lg" label="vote" />
                <Progress value={50} size="lg" label="vote" />
                <Progress value={75} size="lg" label="vote" />
              </div>
            )}
            {/* vote */}
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
              <div className="text-right ">
                <button className=" px-4 py-2 bg-gray-200 rounded-md font-bold cursor-pointer">
                  Submit
                </button>
              </div>
            </div>
          </div>
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
