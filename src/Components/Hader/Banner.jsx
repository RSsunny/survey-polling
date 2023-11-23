import banner from "../../../public/Images/banner2.jpg";
import Slider from "./Slider";
const Banner = () => {
  return (
    <div
      className="relative bg-center bg-cover bg-no-repeat h-screen w-full -mt-24 z-10"
      style={{ backgroundImage: `url("${banner}")` }}
    >
      <div className="flex justify-center items-center absolute  inset-0">
        <div className="md:w-[800px] lg:w-[1000px] md:h-[400px] lg:h-[500px]   border-white rounded-3xl mb-10 overflow-hidden">
          <Slider></Slider>
        </div>
      </div>
      <div className="absolute inset-0  bg-black opacity-80"></div>
    </div>
  );
};

export default Banner;
//
