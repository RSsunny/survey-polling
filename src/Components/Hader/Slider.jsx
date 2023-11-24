import { Swiper, SwiperSlide } from "swiper/react";
import { BsFillTriangleFill } from "react-icons/bs";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slider1 from "../../assets/Images/banner.png";
import { FaArrowRight } from "react-icons/fa";

const Slider = () => {
  return (
    <div className="w-full h-full z-50 cursor-pointer relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 9500,
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
            className="bg-center bg-cover  h-[400px] lg:h-[500px] w-full font-bold relative"
            style={{ backgroundImage: `url("${slider1}")` }}
          >
            <div className="absolute inset-0 z-10  bg-black opacity-50"></div>
            <div className="pl-2 md:pl-10 lg:pl-20 pt-10 lg:pt-20 text-white absolute z-20 mt-20 md:mt-0">
              <h2 className="text-primary_Colors">BEST IT SOLUTION</h2>
              <h1 className="text-3xl md:text-6xl font-cinzel my-3 md:my-5">
                Get Fast <br /> Business Solution
              </h1>
              <p className="font-normal">
                Since 1985 Reed has pioneered specialist recruitment, sourcing
                Knowledge
              </p>
              <button className="bg-primary_Colors p-4 rounded-full mt-8 hover:scale-110 transition uppercase flex items-center gap-3">
                pro user <FaArrowRight />
              </button>
            </div>
            <div
              className="hidden  bottom-10 absolute right-10 z-30 md:flex gap-5 
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
        {/* <SwiperSlide className="">
          <div
            className="bg-center bg-cover  h-[400px] lg:h-[500px] w-full font-bold relative"
            style={{ backgroundImage: `url("${slider1}")` }}
          >
            <div className="absolute inset-0 z-10  bg-black opacity-50"></div>
            <div className="pl-10 lg:pl-20 pt-10 lg:pt-20 text-white absolute z-20">
              <h2 className="text-primary_Colors">BEST IT SOLUTION</h2>
              <h1 className="text-6xl font-cinzel my-5">
                Get Fast <br /> Business Solution
              </h1>
              <p className="font-normal">
                Since 1985 Reed has pioneered specialist recruitment, sourcing
                Knowledge
              </p>
              <button className="bg-primary_Colors p-4 rounded-full mt-8 hover:scale-110 transition">
                Get Started
              </button>
            </div>
            <div
              className="bottom-10 absolute right-10 z-30 flex gap-5 
            "
            >
              <button className="px-4 py-3 rounded-full bg-white text-black hover:bg-primary_Colors hover:text-white">
                product design
              </button>
              <button className="px-4 py-3 rounded-full bg-white text-black hover:bg-primary_Colors hover:text-white">
                product design
              </button>
              <button className="px-4 py-3 rounded-full bg-white text-black hover:bg-primary_Colors hover:text-white">
                product design
              </button>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;
