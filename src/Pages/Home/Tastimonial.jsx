import { HiOutlinePaperAirplane } from "react-icons/hi2";

import image from "../../assets/Images/faq.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
const Tastimonial = () => {
  const [open, setOpen] = useState(0);
  AOS.init({
    duration: 400,
    easing: "ease",
    mirror: false,
    animatedClassName: "aos-animate",
    initClassName: "aos-init",
    delay: 0,
  });
  const handleFAQ = (faq) => {
    switch (faq) {
      case 1:
        setOpen(1);
        break;
      case 2:
        setOpen(2);
        break;
      case 3:
        setOpen(3);
        break;
      case 4:
        setOpen(4);
        break;
      case 5:
        setOpen(5);
        break;
      case 6:
        setOpen(6);
        break;
      case 7:
        setOpen(7);
        break;
      case 8:
        setOpen(8);
        break;
      case 9:
        setOpen(9);
        break;
      case 10:
        setOpen(10);
        break;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center my-40">
      <div className="flex-1">
        <img
          className="md:h-[500px] lg:h-full"
          src={image}
          alt=""
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        />
      </div>
      <div className="flex-1">
        <div
          onClick={() => handleFAQ(1)}
          className="flex items-center gap-3 pb-2"
        >
          <HiOutlinePaperAirplane className="text-xl text-green   cursor-pointer" />
          <h2 className="  cursor-pointer font-bold text-xl border-black">
            How do I create a survey on your platform?
          </h2>
        </div>
        <hr className="border-black" />
        <p
          className={`text-sm py-4 duration-500 ease-linear  ${
            open == 1 ? "block transition" : "hidden"
          }`}
        >
          To create a survey, log in to your account and click on "Create New
          Survey" from your dashboard. Follow the prompts to set your
          objectives, add questions, and customize the design.
        </p>
        <div
          onClick={() => handleFAQ(2)}
          className="flex items-center gap-3 pb-2 mt-5 "
        >
          <HiOutlinePaperAirplane className="text-xl text-green  cursor-pointer" />
          <h2 className=" cursor-pointer font-bold text-xl border-black">
            What types of questions can I include in my survey?
          </h2>
        </div>
        <hr className="border-black" />
        <p
          className={`text-sm py-4 duration-500 ease-linear  ${
            open == 2 ? "block transition" : "hidden"
          }`}
        >
          Our platform supports various question types, including
          multiple-choice, open-ended, rating scales, and more. Choose the
          question types that best suit your survey goals.
        </p>
        <div
          onClick={() => handleFAQ(3)}
          className="flex items-center gap-3 pb-2 mt-5"
        >
          <HiOutlinePaperAirplane className="text-xl text-green  cursor-pointer" />
          <h2 className=" cursor-pointer font-bold text-xl border-black">
            How can I distribute my survey to participants?
          </h2>
        </div>
        <hr className="border-black" />
        <p
          className={`text-sm py-4 duration-500 ease-linear  ${
            open == 3 ? "block transition" : "hidden"
          }`}
        >
          You can share your survey via email, social media, or by embedding it
          on your website. Use the platform's sharing options for seamless
          distribution.
        </p>
        <div
          onClick={() => handleFAQ(4)}
          className="flex items-center gap-3 pb-2 mt-5"
        >
          <HiOutlinePaperAirplane className="text-xl text-green  cursor-pointer" />
          <h2 className=" cursor-pointer font-bold text-xl border-black">
            Are the survey responses confidential?
          </h2>
        </div>
        <hr className="border-black" />
        <p
          className={`text-sm py-4 duration-500 ease-linear  ${
            open == 4 ? "block transition" : "hidden"
          }`}
        >
          Yes, we prioritize the confidentiality and privacy of survey
          responses. Our platform implements security measures to protect
          participant data.
        </p>
        <div
          onClick={() => handleFAQ(5)}
          className="flex items-center gap-3 pb-2 mt-5"
        >
          <HiOutlinePaperAirplane className="text-xl text-green  cursor-pointer" />
          <h2 className=" cursor-pointer font-bold text-xl border-black">
            Can I track responses in real-time?
          </h2>
        </div>
        <hr className="border-black" />
        <p
          className={`text-sm py-4 duration-500 ease-linear  ${
            open == 5 ? "block transition" : "hidden"
          }`}
        >
          Absolutely! Our platform provides a real-time analytics dashboard
          where you can monitor responses, track demographics, and analyze
          trends as they happen.
        </p>
        <div
          onClick={() => handleFAQ(6)}
          className="flex items-center gap-3 pb-2 mt-5"
        >
          <HiOutlinePaperAirplane className="text-xl text-green  cursor-pointer" />
          <h2 className=" cursor-pointer font-bold text-xl border-black">
            What happens if participants don't complete the survey?
          </h2>
        </div>
        <hr className="border-black" />
        <p
          className={`text-sm py-4 duration-500 ease-linear  ${
            open == 6 ? "block transition" : "hidden"
          }`}
        >
          You can set up automated reminders to prompt participants who haven't
          completed the survey. This feature helps maximize response rates.
        </p>
        <div
          onClick={() => handleFAQ(7)}
          className="flex items-center gap-3 pb-2 mt-5"
        >
          <HiOutlinePaperAirplane className="text-xl text-green  cursor-pointer" />
          <h2 className=" cursor-pointer font-bold text-xl border-black">
            How do I analyze survey results?
          </h2>
        </div>
        <hr className="border-black" />
        <p
          className={`text-sm py-4 duration-500 ease-linear  ${
            open == 7 ? "block transition" : "hidden"
          }`}
        >
          Generate comprehensive reports with visualizations and insights
          directly from the platform. You can also export data in various
          formats for further analysis.
        </p>
        <div
          onClick={() => handleFAQ(8)}
          className="flex items-center gap-3 pb-2 mt-5"
        >
          <HiOutlinePaperAirplane className="text-xl text-green  cursor-pointer" />
          <h2 className=" cursor-pointer font-bold text-xl border-black">
            Is customer support available if I need assistance?
          </h2>
        </div>
        <hr className="border-black" />
        <p
          className={`text-sm py-4 duration-500 ease-linear  ${
            open == 8 ? "block transition" : "hidden"
          }`}
        >
          Yes, our dedicated customer support team is available to assist you.
          Reach out for any inquiries, technical issues, or guidance on
          optimizing your survey experience.
        </p>
        <div
          onClick={() => handleFAQ(9)}
          className="flex items-center gap-3 pb-2 mt-5"
        >
          <HiOutlinePaperAirplane className="text-xl text-green  cursor-pointer" />
          <h2 className=" cursor-pointer font-bold text-xl border-black">
            Can I customize the appearance of my survey?
          </h2>
        </div>
        <hr className="border-black" />
        <p
          className={`text-sm py-4 duration-500 ease-linear  ${
            open == 9 ? "block transition" : "hidden"
          }`}
        >
          Absolutely! You can personalize the appearance of your survey by
          adjusting colors, fonts, and adding your logo. Explore different
          themes to match your brand or preferences.
        </p>
        <div
          onClick={() => handleFAQ(10)}
          className="flex items-center gap-3 pb-2 mt-5"
        >
          <HiOutlinePaperAirplane className="text-xl text-green  cursor-pointer" />
          <h2 className=" cursor-pointer font-bold text-xl border-black">
            {" "}
            Is public sharing of survey results possible?
          </h2>
        </div>
        <hr className="border-black" />
        <p
          className={`text-sm py-4 duration-500 ease-linear  ${
            open == 10 ? "block transition" : "hidden"
          }`}
        >
          Yes, you can choose to share aggregated survey results publicly. This
          is an excellent option for contributing valuable information to your
          community or audience.
        </p>
      </div>
    </div>
  );
};

export default Tastimonial;
