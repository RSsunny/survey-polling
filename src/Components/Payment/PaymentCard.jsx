import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
const PaymentCard = () => {
  const { user } = useAuth() || {};

  const axios = useAxiosPublic();
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setclientSecret] = useState("");
  const [cardError, setCaerdError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    if (!stripe || !elements) {
      setCaerdError("somthing wrong..!");
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      setCaerdError("card not found");
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCaerdError("internal server problem");
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: data?.name,
            email: data?.email,
          },
        },
      });
    if (paymentIntent) {
      console.log(paymentIntent);
      const userinfo = {
        roll: "pro user",
        transitionId: paymentIntent?.id,
      };
      axios
        .patch(`/api/v1/users/${user?.email}`, userinfo)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      setCaerdError("");
      setSuccess("pament success full");
    } else {
      console.log(confirmError);
    }
  };
  useEffect(() => {
    const amount = 157.5;
    axios
      .post("/create-payment-intent", { price: amount })
      .then((res) => {
        console.log(res.data);
        setclientSecret(res.data.clientSecret);
      })
      .catch((errors) => {
        console.log(errors);
      });
  }, [axios]);
  console.log(user);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-10 rounded-xl"
    >
      <h1 className="font-medium mb-3">Name : </h1>
      <input
        {...register("name", { required: true })}
        defaultValue={user?.displayName}
        type="text"
        className="outline-none border border-black  mb-5 p-3 rounded-md w-[250px] md:w-[300px] "
      ></input>
      <h1 className="font-medium mb-3">Email : </h1>
      <input
        {...register("email", {
          required: true,
        })}
        defaultValue={user?.email}
        readOnly
        type="text"
        className="outline-none border border-black w-full mb-5 p-3 rounded-md "
      ></input>

      <h1 className="font-medium mb-3">phone : </h1>
      <input
        {...register("phone", { required: true })}
        type="number"
        className="outline-none border border-black w-full mb-5 p-3 rounded-md "
      ></input>
      <h1 className="font-medium mb-3">Payment : </h1>
      <CardElement
        className="outline-none border border-black w-full mb-5 p-3 rounded-md"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      <input
        className="w-full text-xl font-cinzel font-bold bg-primary_Colors p-3 rounded-full text-white hover:bg-opacity-90 cursor-pointer"
        type="submit"
        value="Pay"
        disabled={!stripe}
      />
      {cardError && (
        <p className="text-xs text-red-500 mt-2 text-primary_Colors">
          {cardError}
        </p>
      )}
      {success && (
        <p className="text-xs text-red-500 mt-2 text-primary_Colors">
          {success}
        </p>
      )}
    </form>
  );
};

export default PaymentCard;
