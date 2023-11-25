import { useForm } from "react-hook-form";

import loginimage from "../../assets/Images/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

import useAxiosPublic from "../../Hooks/useAxiosPublic";
const image_hosting_ky = import.meta.env.VITE_HOSTING_IMGBB_KEY;
const img_hosting_API = `https://api.imgbb.com/1/upload?key=${image_hosting_ky}`;
const SignUp = () => {
  const { createUser, updateUser } = useAuth();
  const axios = useAxiosPublic();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const email = data?.email;
    const password = data?.password;
    const image = { image: data.image[0] };

    const res = await axios.post(img_hosting_API, image, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const imageurl = res.data?.data.display_url;
      createUser(email, password)
        .then(() => {
          updateUser(data.name, imageurl)
            .then(() => {
              const userinfo = {
                name: data.name,
                email: email,
                roll: "user",
              };
              axios
                .post("/api/v1/users", userinfo)
                .then((res) => {
                  console.log(res.data);
                })
                .catch((err) => {
                  console.log(err);
                });
              navigate("/");
            })
            .catch();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="  h-screen w-full  grid grid-cols-12 overflow-hidden">
      <div className="col-span-12 md:col-span-6 lg:col-span-4 border-r-2  p-5 md:p-10">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            {" "}
            <h1 className="text-2xl md:text-4xl font-cinzel font-bold   ">
              Sur
              <span className="text-primary_Colors text-3xl md:text-5xl">
                v
              </span>
              ey
            </h1>
          </Link>
          <p className="text-xs mr-5 text-right">
            Dont have an account ?{" "}
            <Link to={"/signin"} className="text-primary_Colors font-bold">
              Signin
            </Link>
          </p>
        </div>
        <h1 className="text-5xl font-cinzel font-bold text-center mb-5 mt-10 md:mt-32">
          Sig<span className="text-7xl text-primary_Colors">n</span>up
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="font-medium mb-3">Name : </h1>
          <input
            {...register("name", { required: true })}
            type="text"
            className="outline-none border border-black w-full mb-5 p-3 rounded-md "
          ></input>
          <h1 className="font-medium mb-3">Email : </h1>
          <input
            {...register("email", { required: true })}
            type="text"
            className="outline-none border border-black w-full mb-5 p-3 rounded-md "
          ></input>
          <h1 className="font-medium mb-3">Password : </h1>
          <input
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
            type="password"
            className="outline-none border border-black w-full mb-5 p-3 rounded-md "
          ></input>
          <h1 className="font-medium mb-3">Confirm Password : </h1>
          <input
            {...register("confirm_password", {
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
            type="password"
            className="outline-none border border-black w-full mb-5 p-3 rounded-md "
          ></input>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input  file-input-bordered border-black w-full mb-5 p-3 rounded-md outline-none "
          />
          <input
            className="w-full text-xl font-cinzel font-bold bg-primary_Colors p-3 rounded-full text-white hover:bg-opacity-90 cursor-pointer"
            type="submit"
            value="Signup"
          />
        </form>
      </div>
      <div className="hidden md:block md:col-span-6 lg:col-span-8">
        <img
          src={loginimage}
          className="h-full w-full md:mt-20 lg:mt-20"
          alt=""
        />
      </div>
    </div>
  );
};

export default SignUp;
