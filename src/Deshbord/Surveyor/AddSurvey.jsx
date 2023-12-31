import { useForm } from "react-hook-form";
import { SiSubtitleedit } from "react-icons/si";
import { MdCategory, MdUpdate } from "react-icons/md";
import { FcExpired } from "react-icons/fc";
import { TfiWrite } from "react-icons/tfi";
import { TbListDetails } from "react-icons/tb";
import { FaImage } from "react-icons/fa6";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FiRefreshCcw } from "react-icons/fi";
import { useState } from "react";

const img_hosting_key = import.meta.env.VITE_HOSTING_IMGBB_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;
const AddSurvey = () => {
  const [lodingsubmit, setLodingSubmit] = useState(false);
  const axios = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLodingSubmit(true);
    const photo = { image: data?.image[0] };
    const imgRes = await axiosPublic.post(img_hosting_api, photo, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const image = imgRes?.data?.data.display_url;

    const surveyinfo = {
      title: data?.title,
      email: user?.email,
      discription: data?.description,
      summary: data?.summary,
      date: data?.date,
      expired_date: data?.expired_date,
      category: data?.category,
      image,
      author: {
        author_image: user.photoURL,
        author_name: user.displayName,
      },
    };
    const res = await axios.post("/api/v1/survey", surveyinfo);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "survey add complete",
      showConfirmButton: false,
      timer: 1500,
    });
    setLodingSubmit(false);
    reset();
    console.log(res.data);
  };

  return (
    <div>
      <h1 className="text-4xl font-cinzel font-bold text-center my-20">
        Shape the <span className="text-primary_Colors">Feature</span> Survey
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border h-screen md:mx-5 lg:mx-20 p-10 rounded-xl mb-10"
      >
        <div className="flex items-center gap-32 my-5">
          <div className="flex items-center gap-5  font-bold font-cinzel">
            <SiSubtitleedit />
            <h3> Title:</h3>
          </div>
          <input
            {...register("title", { required: true })}
            type="text"
            className="w-full border outline-none border-black p-2 rounded-md "
            placeholder="Title ..."
          />
        </div>
        <div className="flex items-center gap-16 my-5">
          <div className="flex items-center gap-5  font-bold font-cinzel">
            <TfiWrite />
            <h3> Description:</h3>
          </div>
          <textarea
            {...register("description", { required: true })}
            type="text"
            className="w-full border outline-none border-black p-2 rounded-md "
            placeholder="Description ..."
          />
        </div>
        <div className="flex items-center gap-24 my-5">
          <div className="flex items-center gap-5  font-bold font-cinzel">
            <TbListDetails />

            <h3> summary:</h3>
          </div>
          <textarea
            {...register("summary", { required: true })}
            type="text"
            className="w-full border outline-none border-black p-2 rounded-md "
            placeholder="Summary ..."
          />
        </div>
        <div className="flex items-center gap-24 my-5">
          <div className="flex items-center gap-5  font-bold font-cinzel my-5">
            <MdCategory />

            <h3> Category:</h3>
          </div>
          <div className="w-72">
            {" "}
            <input
              {...register("category", { required: true })}
              type="text"
              className="w-full border outline-none border-black p-2 rounded-md "
              placeholder="Category ..."
            />
          </div>
        </div>
        <div className="flex items-center gap-36 my-5">
          <div className="flex items-center gap-5  font-bold font-cinzel">
            <MdUpdate />

            <h3> date:</h3>
          </div>
          <input
            {...register("date", { required: true })}
            type="date"
            name="date"
            className="border  py-2 px-4 rounded-md border-black "
          />
        </div>
        <div className="flex items-center gap-20 my-5">
          <div className="flex items-center gap-5  font-bold font-cinzel">
            <FcExpired />

            <h3>expired date:</h3>
          </div>
          <input
            {...register("expired_date", { required: true })}
            type="date"
            name="expired_date"
            className="border  py-2 px-4 rounded-md border-black "
          />
        </div>
        <div className="flex items-center gap-32 my-5">
          <div className="flex items-center gap-5  font-bold font-cinzel">
            <FaImage />

            <h3>Photo:</h3>
          </div>

          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input w-full max-w-xs"
          />
        </div>

        <button className="btn mt-10 font-bold font-cinzel" type="submit">
          {lodingsubmit ? (
            <FiRefreshCcw className="animate-spin mx-auto " />
          ) : (
            <span>Submit</span>
          )}
        </button>

        <input
          type="Reset"
          onClick={() => reset()}
          className="btn ml-5 mt-10 font-bold font-cinzel"
        />
      </form>
    </div>
  );
};

export default AddSurvey;
