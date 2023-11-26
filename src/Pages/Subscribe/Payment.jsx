import { BsCurrencyDollar } from "react-icons/bs";
import image from "../../assets/Images/subscribe.png";
import { MdVerifiedUser } from "react-icons/md";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentCard from "../../Components/Payment/PaymentCard";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center gap-10 bg-cover bg-center min-h-screen -mt-24 z-10 pt-52 lg:pt-24 md:px-10 lg:px-32 pb-10 lg:pb-0"
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div>
        <div className="bg-white   p-10 rounded-xl ">
          <h1 className="text-xl font-bold  mb-5 font-cinzel">
            Subcribe to Unlimited Feature
          </h1>
          <div className=" flex my-5">
            <BsCurrencyDollar className=" text-3xl  " />
            <p className="text-5xl font-bold">150</p>
            <p className="mt-6 font-bold text-primary_Colors">/month</p>
          </div>
          <div className="capitalize flex flex-col space-y-3 my-5 border-b pb-5">
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
            <p className="text-xs pt-5 font-bold">
              <span className="text-primary_Colors">5%</span> VAT Included = 7.5
              $
            </p>
          </div>

          <p className="text-3xl font-cinzel font-bold">Total: 157.5 $</p>
        </div>
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <PaymentCard></PaymentCard>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
