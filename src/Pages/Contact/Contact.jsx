import React from "react";
import Container from "../../Shared/Container";
import { FcBusinesswoman } from "react-icons/fc";
import { BsFillQuestionDiamondFill } from "react-icons/bs";
import { IoChatboxEllipses } from "react-icons/io5";

const Contact = () => {
  return (
    <Container>
      <div className="min-h-screen w-full flex items-center justify-center gap-10 mb-20">
        <div className="flex flex-col md:flex-row justify-between gap-20 lg:gap-64 ">
          <div className="text-center font-extrabold">
            <FcBusinesswoman className="text-7xl mx-auto" />
            <h2 className="text-xl font-bold my-5">By Phone</h2>
            <p className="text-xs ">(Monday to fryday )</p>
            <p className="text-sm mb-2">9 am to 8 pm</p>
            <p className="text-xs">Bangladesh Tool free :</p>
            <p className="text-xl font-cinzel  my-2">+880 017589445</p>
          </div>
          <div className="text-center font-extrabold">
            <BsFillQuestionDiamondFill className="text-7xl mx-auto text-purple-500" />
            <h2 className="text-xl font-bold my-5">Start a new Case</h2>
            <p className="text-xs ">just send us your question</p>
            <p className="text-sm mb-2">9 am to 8 pm</p>
            <p className="text-xs">
              new case and we will give you <br /> the help you need{" "}
            </p>
          </div>
          <div className="text-center font-extrabold">
            <IoChatboxEllipses className="text-7xl mx-auto text-primary_Colors" />
            <h2 className="text-xl font-bold my-5">Live Chat</h2>
            <p className="text-xs ">(Monday to fryday )</p>
            <p className="text-sm mb-2">9 am to 8 pm</p>
            <p className="text-xs">Bangladesh Tool free :</p>
            <p className="text-xl font-cinzel  my-2">+880 017589445</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
