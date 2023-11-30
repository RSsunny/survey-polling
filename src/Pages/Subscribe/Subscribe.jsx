import { FaArrowRight, FaSatelliteDish } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdVerifiedUser } from "react-icons/md";

import image from "../../assets/Images/subscribe.png";
import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-between items-center gap-10 bg-cover bg-center min-h-screen -mt-24 z-10 pt-52 lg:pt-24 md:px-10 lg:px-32 pb-10 lg:pb-0"
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div className="flex-1 text-white text-center lg:text-left md:px-20 lg:px-0 mb-10 lg:mb-0">
        <h2 className="px-6 py-2 bg-white text-primary_Colors font-bold rounded-full border text-center inline-block">
          INTERNET FOR HOME
        </h2>
        <h1 className="text-5xl font-cinzel  font-bold  my-10">
          Discount Up to{" "}
          <span className="text-primary_Colors text-6xl">30% </span>For PRO
          Members.
        </h1>
        <p className="text-xl font-bold mb-10">
          Since 1985 Reed has pioneered specialist recruitment, sourcing
          Knowledgeable
        </p>
        <div className="flex gap-5 items-center">
          <div className="flex gap-3 items-center">
            <FaSatelliteDish></FaSatelliteDish>
            <p>Behind our Digital Marketing</p>
          </div>
          <div className="flex gap-3 items-center">
            <FaSatelliteDish></FaSatelliteDish>
            <p>Behind our Digital Marketing</p>
          </div>
        </div>
        <div className="inline-block">
          <Link
            to={"/payment"}
            className="bg-primary_Colors p-4 rounded-full mt-8 hover:scale-110 transition uppercase flex items-center gap-3 font-bold"
          >
            Get Start <FaArrowRight />
          </Link>
        </div>
      </div>
      <div className="flex-1 flex flex-col md:flex-row gap-10 ">
        <div className="bg-white py-10 px-16 rounded-3xl relative overflow-hidden cursor-pointer">
          <div className="  text-4xl font-bold text-primary_Colors text-center font-cinzel">
            FREE
          </div>
          <p className="mt-5 mb-10 text-center font-bold ">Genarel Member</p>

          <div className="capitalize flex flex-col space-y-3">
            <p className="flex items-center gap-5 text-sm font-medium">
              <MdVerifiedUser className="text-xl  text-green" /> read and
              reaction
            </p>
            <p className="flex items-center gap-5 text-sm font-medium">
              <MdVerifiedUser className="text-xl  " /> post comment
            </p>
            <p className="flex items-center gap-5 text-sm font-medium">
              <MdVerifiedUser className="text-xl  " /> privet post show
            </p>
            <p className="flex items-center gap-5 text-sm font-medium">
              <MdVerifiedUser className="text-xl  " /> extra feature
            </p>
            <p className="flex items-center gap-5 text-sm font-medium">
              <MdVerifiedUser className="text-xl  text-green" /> visit Dashbord
            </p>
            <p className="flex items-center gap-5 text-sm font-medium">
              <MdVerifiedUser className="text-xl  " /> attend survey and post
            </p>
          </div>
          <div className="text-center mb-5">
            <h4 className="mt-10">
              <span className="text-primary_Colors">0%</span> VAT Included
            </h4>
            <p>Installation Charge: 00 $</p>
          </div>
          <Link
            to={"/signup"}
            className="text-center mt-10 text-xl font-cinzel font-bold hover:bg-primary_Colors hover:text-white absolute bottom-0  w-full left-0 py-2"
          >
            Get Start
          </Link>
        </div>
        <div className="bg-white py-10 px-16 rounded-3xl relative overflow-hidden cursor-pointer">
          <div className=" flex">
            <BsCurrencyDollar className=" text-3xl  " />
            <p className="text-5xl font-bold">150</p>
            <p className="mt-6 font-bold text-primary_Colors">/month</p>
          </div>
          <p className="mt-5 mb-10 text-center font-bold ">Pro Member</p>

          <div className="capitalize flex flex-col space-y-3">
            <p className="flex items-center gap-5 text-sm font-medium">
              <MdVerifiedUser className="text-xl  text-green" /> read and
              reaction
            </p>
            <p className="flex items-center gap-5 text-sm font-medium">
              <MdVerifiedUser className="text-xl  text-green" /> post comment
            </p>
            <p className="flex items-center gap-5 text-sm font-medium">
              <MdVerifiedUser className="text-xl text-green " /> privet post
              show
            </p>
            <p className="flex items-center gap-5 text-sm font-medium">
              <MdVerifiedUser className="text-xl  text-green" /> extra feature
            </p>
            <p className="flex items-center gap-5 text-sm font-medium">
              <MdVerifiedUser className="text-xl  text-green" /> visit Dashbord
            </p>
            <p className="flex items-center gap-5 text-sm font-medium">
              <MdVerifiedUser className="text-xl  text-green" /> attend survey
              and post
            </p>
          </div>
          <div className="text-center mb-5">
            <h4 className="mt-10">
              <span className="text-primary_Colors">5%</span> VAT Included
            </h4>
            <p>Installation Charge: 1500 $</p>
          </div>
          <Link
            to={"/payment"}
            className="text-center mt-10 text-xl font-cinzel font-bold hover:bg-primary_Colors hover:text-white absolute bottom-0  w-full left-0 py-2"
          >
            Get Start
          </Link>
          <p className="absolute -rotate-45 bg-primary_Colors  text-white w-[200px] top-0 -left-12 pl-12 ">
            pro
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
