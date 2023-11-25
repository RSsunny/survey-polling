import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

import loginimage from "../../assets/Images/login.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const Signin = () => {
  const { userlogin, midealogin } = useAuth();
  const axios = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    userlogin(data.email, data.password)
      .then(() => {
        // console.log(result.user);
        navigate(location.state.from ? location.state.from : "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dandleMidea = (midea) => {
    midea()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          roll: "user",
        };
        axios
          .post("/api/v1/users", userInfo)
          .then(() => {
            // console.log(res.data);
            navigate(location.state.from ? location.state.from : "/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
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
            Don't have an account ?{" "}
            <Link to={"/signup"} className="text-primary_Colors font-bold">
              SignUp
            </Link>
          </p>
        </div>
        <h1 className="text-5xl font-cinzel font-bold text-center mb-5 mt-10 md:mt-32">
          Sig<span className="text-7xl text-primary_Colors">n</span>in
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <input
            className="w-full text-xl font-cinzel font-bold bg-primary_Colors p-3 rounded-full text-white hover:bg-opacity-90 cursor-pointer"
            type="submit"
            value="Signin"
          />
        </form>
        <div className="flex gap-5 my-10 items-center">
          <div className="border-2 flex-1"></div>
          <p className="text-xl font-cinzel font-bold text-primary_Colors">
            Or
          </p>
          <div className="border-2 flex-1"></div>
        </div>
        <div className="flex flex-col gap-5">
          <div
            onClick={() => dandleMidea(midealogin)}
            className="flex items-center gap-5 border px-4 py-2 text-xl font-bold rounded-md hover:bg-primary_Colors  hover:text-white duration-500 cursor-pointer w-full text-center justify-center"
          >
            <FaGoogle className=" text-3xl"></FaGoogle>
            <h1>Google</h1>
          </div>

          <div className="flex items-center gap-5 border px-4 py-2 text-xl font-bold rounded-md hover:bg-primary_Colors  hover:text-white duration-500 cursor-pointer w-full text-center justify-center">
            <FaFacebook className=" text-3xl"></FaFacebook>
            <h1>Facebook</h1>
          </div>

          <div className="flex items-center gap-5 border px-4 py-2 text-xl font-bold rounded-md hover:bg-primary_Colors hover:text-white duration-500 cursor-pointer w-full text-center justify-center">
            <FaGithub className=" text-3xl"></FaGithub>
            <h1>Github</h1>
          </div>
        </div>
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

export default Signin;
