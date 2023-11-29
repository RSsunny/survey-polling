import { Link } from "react-router-dom";
import Container from "../../Shared/Container";
import image_1 from "../../assets/Images/participate.jpg";
import image_2 from "../../assets/Images/payment.png";
import image_3 from "../../assets/Images/signupnow.png";
import { RiLoginCircleFill } from "react-icons/ri";

const HowItWork = () => {
  return (
    <Container>
      <h1 className="text-4xl font-cinzel font-bold my-5 text-center pt-20 pb-16">
        How it Works
      </h1>
      <div className=" flex flex-col md:flex-row justify-evenly">
        <div className="flex justify-evenly">
          <div>
            <div className="h-[200px] md:w-[200px]">
              <img className="h-full w-full" src={image_3} alt="" />
            </div>
            <Link
              to={"/signup"}
              className="flex items-center gap-4 text-center my-5"
            >
              <RiLoginCircleFill className="text-3xl text-purple-600" />

              <h1 className="text-2xl font-cinzel font-bold">Sign Up</h1>
            </Link>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div>
            <div className="h-[200px] md:w-[200px]">
              <img className="h-full w-full" src={image_2} alt="" />
            </div>
            <Link
              to={"/subscribe"}
              className="flex items-center gap-4 text-center my-5"
            >
              <RiLoginCircleFill className="text-3xl text-purple-600" />

              <h1 className="text-2xl font-cinzel font-bold">Subscribe now</h1>
            </Link>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div>
            <div className="h-[200px] md:w-[200px]">
              <img className="h-full w-full" src={image_1} alt="" />
            </div>
            <Link
              to={"/surveys"}
              className="flex items-center gap-4 text-center my-5"
            >
              <RiLoginCircleFill className="text-3xl text-purple-600" />

              <h1 className="text-2xl font-cinzel font-bold">Join community</h1>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HowItWork;
