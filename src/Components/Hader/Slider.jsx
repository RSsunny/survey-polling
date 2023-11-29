import { Swiper, SwiperSlide } from "swiper/react";
import { BsFillTriangleFill } from "react-icons/bs";
import banner2 from "../../assets/Images/istock-613672992-3 (1).jpg";
import banner3 from "../../assets/Images/etape_2-1.jpg";
import banner4 from "../../assets/Images/Reporting.jpg";
import banner5 from "../../assets/Images/faq.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slider1 from "../../assets/Images/banner.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import useUserRoll from "../../Hooks/useUserRoll";
const Slider = () => {
  const { roll } = useUserRoll();
  console.log(roll);
  return (
    <div className="w-full h-full z-50 cursor-pointer relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <div
            className="bg-center bg-cover h-screen  md:h-[400px] lg:h-[550px] w-full font-bold relative flex md:block justify-center items-center"
            style={{ backgroundImage: `url("${banner2}")` }}
          >
            <div className="absolute inset-0 z-10  bg-black opacity-50"></div>
            <div className="pl-2 md:pl-10 lg:pl-20 md:pt-10 lg:pt-20 text-white absolute z-20 mt-20 md:mt-0">
              <h2 className="text-primary_Colors ">BEST IT SOLUTION</h2>
              <h1 className="text-5xl lg::text-6xl font-cinzel my-3 md:my-5 ">
                Get Fast <br /> Participate in our Surveys Today!
              </h1>
              <p className="font-normal py-5 md:py-0">
                Since 1985 Reed has pioneered specialist recruitment, sourcing
                Knowledge
              </p>
              <div className=" flex gap-5">
                <Link
                  to={
                    roll === "user" || roll == ""
                      ? "/subscribe"
                      : "/deshbord/profile"
                  }
                  className="bg-primary_Colors text-xs md:text-base p-2 md:p-4 rounded-full mt-8 hover:scale-110 transition uppercase flex items-center gap-3 "
                >
                  pro user <FaArrowRight />
                </Link>
                <Link
                  to={"/"}
                  className="text-xs md:text-base p-2 md:p-4 rounded-full mt-8  transition uppercase flex items-center gap-3 border-primary_Colors border hover:bg-primary_Colors"
                >
                  explore more <FaArrowRight />
                </Link>
              </div>
            </div>
            <div
              className="hidden  bottom-10 absolute right-10 z-30 lg:flex gap-5 
            "
            >
              <div className="relative hover:bg-primary_Colors hover:text-primary_Colors bg-white rounded-full group-hover:text-primary_Colors transition ease-linear duration-500">
                <button className="px-4 py-3   text-black hover:text-white ">
                  product design
                </button>
                <BsFillTriangleFill className="absolute -top-3 left-8 text-2xl -z-10  " />
              </div>
              <div className="relative hover:bg-primary_Colors hover:text-primary_Colors bg-white rounded-full group-hover:text-primary_Colors transition ease-linear duration-500">
                <button className="px-4 py-3   text-black hover:text-white ">
                  product design
                </button>
                <BsFillTriangleFill className="absolute -top-3 left-8 text-2xl -z-10  text-transparent" />
              </div>
              <div className="relative hover:bg-primary_Colors hover:text-primary_Colors bg-white rounded-full group-hover:text-primary_Colors transition ease-linear duration-500">
                <button className="px-4 py-3   text-black hover:text-white ">
                  product design
                </button>
                <BsFillTriangleFill className="absolute -top-3 left-8 text-2xl -z-10  text-transparent" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div
            className="bg-center bg-cover h-screen  md:h-[400px] lg:h-[550px] w-full font-bold relative flex md:block justify-center items-center"
            style={{ backgroundImage: `url("${banner3}")` }}
          >
            <div className="absolute inset-0 z-10  bg-black opacity-50"></div>
            <div className="pl-2 md:pl-10 lg:pl-20 md:pt-10 lg:pt-20 text-white absolute z-20 mt-20 md:mt-0">
              <h2 className="text-primary_Colors ">BEST IT SOLUTION</h2>
              <h1 className="text-5xl lg::text-6xl font-cinzel my-3 md:my-5 ">
                Get Fast <br /> Participate in our Surveys Today!
              </h1>
              <p className="font-normal py-5 md:py-0">
                Since 1985 Reed has pioneered specialist recruitment, sourcing
                Knowledge
              </p>
              <div className=" flex gap-5">
                <Link
                  to={
                    roll === "user" || roll == ""
                      ? "/subscribe"
                      : "/deshbord/profile"
                  }
                  className="bg-primary_Colors text-xs md:text-base p-2 md:p-4 rounded-full mt-8 hover:scale-110 transition uppercase flex items-center gap-3 "
                >
                  pro user <FaArrowRight />
                </Link>
                <Link
                  to={"/"}
                  className="text-xs md:text-base p-2 md:p-4 rounded-full mt-8  transition uppercase flex items-center gap-3 border-primary_Colors border hover:bg-primary_Colors"
                >
                  explore more <FaArrowRight />
                </Link>
              </div>
            </div>
            <div
              className="hidden  bottom-10 absolute right-10 z-30 lg:flex gap-5 
            "
            >
              <div className="relative hover:bg-primary_Colors hover:text-primary_Colors bg-white rounded-full group-hover:text-primary_Colors transition ease-linear duration-500">
                <button className="px-4 py-3   text-black hover:text-white ">
                  product design
                </button>
                <BsFillTriangleFill className="absolute -top-3 left-8 text-2xl -z-10  " />
              </div>
              <div className="relative hover:bg-primary_Colors hover:text-primary_Colors bg-white rounded-full group-hover:text-primary_Colors transition ease-linear duration-500">
                <button className="px-4 py-3   text-black hover:text-white ">
                  product design
                </button>
                <BsFillTriangleFill className="absolute -top-3 left-8 text-2xl -z-10  text-transparent" />
              </div>
              <div className="relative hover:bg-primary_Colors hover:text-primary_Colors bg-white rounded-full group-hover:text-primary_Colors transition ease-linear duration-500">
                <button className="px-4 py-3   text-black hover:text-white ">
                  product design
                </button>
                <BsFillTriangleFill className="absolute -top-3 left-8 text-2xl -z-10  text-transparent" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div
            className="bg-center bg-cover h-screen  md:h-[400px] lg:h-[550px] w-full font-bold relative flex md:block justify-center items-center"
            style={{ backgroundImage: `url("${banner4}")` }}
          >
            <div className="absolute inset-0 z-10  bg-black opacity-50"></div>
            <div className="pl-2 md:pl-10 lg:pl-20 md:pt-10 lg:pt-20 text-white absolute z-20 mt-20 md:mt-0">
              <h2 className="text-primary_Colors ">BEST IT SOLUTION</h2>
              <h1 className="text-5xl lg::text-6xl font-cinzel my-3 md:my-5 ">
                Get Fast <br /> Participate in our Surveys Today!
              </h1>
              <p className="font-normal py-5 md:py-0">
                Since 1985 Reed has pioneered specialist recruitment, sourcing
                Knowledge
              </p>
              <div className=" flex gap-5">
                <Link
                  to={
                    roll === "user" || roll == ""
                      ? "/subscribe"
                      : "/deshbord/profile"
                  }
                  className="bg-primary_Colors text-xs md:text-base p-2 md:p-4 rounded-full mt-8 hover:scale-110 transition uppercase flex items-center gap-3 "
                >
                  pro user <FaArrowRight />
                </Link>
                <Link
                  to={"/"}
                  className="text-xs md:text-base p-2 md:p-4 rounded-full mt-8  transition uppercase flex items-center gap-3 border-primary_Colors border hover:bg-primary_Colors"
                >
                  explore more <FaArrowRight />
                </Link>
              </div>
            </div>
            <div
              className="hidden  bottom-10 absolute right-10 z-30 lg:flex gap-5 
            "
            >
              <div className="relative hover:bg-primary_Colors hover:text-primary_Colors bg-white rounded-full group-hover:text-primary_Colors transition ease-linear duration-500">
                <button className="px-4 py-3   text-black hover:text-white ">
                  product design
                </button>
                <BsFillTriangleFill className="absolute -top-3 left-8 text-2xl -z-10  " />
              </div>
              <div className="relative hover:bg-primary_Colors hover:text-primary_Colors bg-white rounded-full group-hover:text-primary_Colors transition ease-linear duration-500">
                <button className="px-4 py-3   text-black hover:text-white ">
                  product design
                </button>
                <BsFillTriangleFill className="absolute -top-3 left-8 text-2xl -z-10  text-transparent" />
              </div>
              <div className="relative hover:bg-primary_Colors hover:text-primary_Colors bg-white rounded-full group-hover:text-primary_Colors transition ease-linear duration-500">
                <button className="px-4 py-3   text-black hover:text-white ">
                  product design
                </button>
                <BsFillTriangleFill className="absolute -top-3 left-8 text-2xl -z-10  text-transparent" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div
            className="bg-center bg-cover h-screen  md:h-[400px] lg:h-[550px] w-full font-bold relative flex md:block justify-center items-center"
            style={{ backgroundImage: `url("${banner5}")` }}
          >
            <div className="absolute inset-0 z-10  bg-black opacity-50"></div>
            <div className="pl-2 md:pl-10 lg:pl-20 md:pt-10 lg:pt-20 text-white absolute z-20 mt-20 md:mt-0">
              <h2 className="text-primary_Colors ">BEST IT SOLUTION</h2>
              <h1 className="text-5xl lg::text-6xl font-cinzel my-3 md:my-5 ">
                Get Fast <br /> Participate in our Surveys Today!
              </h1>
              <p className="font-normal py-5 md:py-0">
                Since 1985 Reed has pioneered specialist recruitment, sourcing
                Knowledge
              </p>
              <div className=" flex gap-5">
                <Link
                  to={
                    roll === "user" || roll == ""
                      ? "/subscribe"
                      : "/deshbord/profile"
                  }
                  className="bg-primary_Colors text-xs md:text-base p-2 md:p-4 rounded-full mt-8 hover:scale-110 transition uppercase flex items-center gap-3 "
                >
                  pro user <FaArrowRight />
                </Link>
                <Link
                  to={"/"}
                  className="text-xs md:text-base p-2 md:p-4 rounded-full mt-8  transition uppercase flex items-center gap-3 border-primary_Colors border hover:bg-primary_Colors"
                >
                  explore more <FaArrowRight />
                </Link>
              </div>
            </div>
            <div
              className="hidden  bottom-10 absolute right-10 z-30 lg:flex gap-5 
            "
            >
              <div className="relative hover:bg-primary_Colors hover:text-primary_Colors bg-white rounded-full group-hover:text-primary_Colors transition ease-linear duration-500">
                <button className="px-4 py-3   text-black hover:text-white ">
                  product design
                </button>
                <BsFillTriangleFill className="absolute -top-3 left-8 text-2xl -z-10  " />
              </div>
              <div className="relative hover:bg-primary_Colors hover:text-primary_Colors bg-white rounded-full group-hover:text-primary_Colors transition ease-linear duration-500">
                <button className="px-4 py-3   text-black hover:text-white ">
                  product design
                </button>
                <BsFillTriangleFill className="absolute -top-3 left-8 text-2xl -z-10  text-transparent" />
              </div>
              <div className="relative hover:bg-primary_Colors hover:text-primary_Colors bg-white rounded-full group-hover:text-primary_Colors transition ease-linear duration-500">
                <button className="px-4 py-3   text-black hover:text-white ">
                  product design
                </button>
                <BsFillTriangleFill className="absolute -top-3 left-8 text-2xl -z-10  text-transparent" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div
            className="bg-center bg-cover h-screen  md:h-[400px] lg:h-[550px] w-full font-bold relative flex md:block justify-center items-center"
            style={{ backgroundImage: `url("${slider1}")` }}
          >
            <div className="absolute inset-0 z-10  bg-black opacity-50"></div>
            <div className="pl-2 md:pl-10 lg:pl-20 md:pt-10 lg:pt-20 text-white absolute z-20 mt-20 md:mt-0">
              <h2 className="text-primary_Colors ">BEST IT SOLUTION</h2>
              <h1 className="text-5xl lg::text-6xl font-cinzel my-3 md:my-5 ">
                Get Fast <br /> Participate in our Surveys Today!
              </h1>
              <p className="font-normal py-5 md:py-0">
                Since 1985 Reed has pioneered specialist recruitment, sourcing
                Knowledge
              </p>
              <div className=" flex gap-5">
                <Link
                  to={
                    roll === "user" || roll == ""
                      ? "/subscribe"
                      : "/deshbord/profile"
                  }
                  className="bg-primary_Colors text-xs md:text-base p-2 md:p-4 rounded-full mt-8 hover:scale-110 transition uppercase flex items-center gap-3 "
                >
                  pro user <FaArrowRight />
                </Link>
                <Link
                  to={"/"}
                  className="text-xs md:text-base p-2 md:p-4 rounded-full mt-8  transition uppercase flex items-center gap-3 border-primary_Colors border hover:bg-primary_Colors"
                >
                  explore more <FaArrowRight />
                </Link>
              </div>
            </div>
            <div
              className="hidden  bottom-10 absolute right-10 z-30 lg:flex gap-5 
            "
            >
              <div className="relative hover:bg-primary_Colors hover:text-primary_Colors bg-white rounded-full group-hover:text-primary_Colors transition ease-linear duration-500">
                <button className="px-4 py-3   text-black hover:text-white ">
                  product design
                </button>
                <BsFillTriangleFill className="absolute -top-3 left-8 text-2xl -z-10  " />
              </div>
              <div className="relative hover:bg-primary_Colors hover:text-primary_Colors bg-white rounded-full group-hover:text-primary_Colors transition ease-linear duration-500">
                <button className="px-4 py-3   text-black hover:text-white ">
                  product design
                </button>
                <BsFillTriangleFill className="absolute -top-3 left-8 text-2xl -z-10  text-transparent" />
              </div>
              <div className="relative hover:bg-primary_Colors hover:text-primary_Colors bg-white rounded-full group-hover:text-primary_Colors transition ease-linear duration-500">
                <button className="px-4 py-3   text-black hover:text-white ">
                  product design
                </button>
                <BsFillTriangleFill className="absolute -top-3 left-8 text-2xl -z-10  text-transparent" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
