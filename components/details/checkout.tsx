"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { handleUserData } from "@/libs/action";
import { CartType } from "@/libs/definitions";
import { GoBack } from "../buttons";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export default function Checkout({
  cart,
  clientSecret,
}: {
  cart: CartType[];
  clientSecret: string;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage]: any = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  let total = 0;
  const itemName = {
    "yx1-earphones": "yx1",
    "xx59-headphones": "xx59",
    "zx7-speaker": "zx7",
    "xx99-mark-one-headphones": "xx99 mk I",
    "xx99-mark-two-headphones": "xx99 mk II",
    "zx9-speaker": "zx9",
  };

  cart && cart.map((c: CartType) => (total += c.price * c.qty));
  let vat = (total * 20) / 100;

  const amount_to_pay = Math.round((total + 50 + vat) * 100);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe, amount_to_pay, clientSecret]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setMessage(submitError.message);
      setIsLoading(false);
      return;
    }
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url:
          "https://audiophile-phi-eight.vercel.app/checkout/completed",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <form
      className="mx-6 md:mx-[40px] lg:mx-[165px] lg:flex justify-between overflow-hidden items-start text-[14px] caret-primary-brown"
      action={handleUserData}
      onSubmit={handleSubmit}
    >
      <section className="text-[14px] font-bold lg:w-[100%] ">
        <GoBack />

        <fieldset className="bg-secondary-white rounded-lg pb-[31px] lg:mt-[38px] mt-6">
          <h1 className="text-secondary-dark mb-8 mx-6 lg:mx-12 lg:mt-[54px] md:mt-[30px] mt-6 md:mx-7 font-bold md:text-[32px] text-ml leading-normal md:tracking-[1.14px] tracking-[1px] md:leading-9">
            CHECKOUT
          </h1>
          <h2 className="text-sm text-primary-brown font-bold tracking-[0.93px] leading-[25px] mb-4 mx-6 md:mx-7 lg:mx-12">
            BILLING DETAILS
          </h2>

          <div className="mx-6 lg:mx-12 md:mx-7 md:grid grid-cols-2 grid-rows-2">
            <div className="md:mr-4">
              <label
                className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px]"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="border-solid border required:border-red-500 outline-primary-brown border-primary-gray rounded-lg w-[100%] py-[18px] bg-secondary-white pl-6 "
                id="name"
                type="text"
                name="name"
                placeholder="Alexei Ward"
                required
                autoComplete="on"
              />
            </div>
            <div>
              <label
                className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px] md:mt-0 mt-6"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="border-solid border border-primary-gray outline-primary-brown rounded-lg w-[100%] py-[18px] bg-secondary-white pl-6 "
                id="email"
                type="email"
                name="email"
                placeholder="alexei@mail.com"
                required
                autoComplete="on"
              />
            </div>
            <div className="lg:mr-4">
              <label
                className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px] mt-6"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="border-solid border border-primary-gray outline-primary-brown rounded-lg w-[100%] py-[18px] bg-secondary-white pl-6 "
                id="phone"
                type="number"
                name="number"
                placeholder="+1 202-555-0136"
                required
                autoComplete="on"
              />
            </div>
          </div>

          <h2 className="text-sm text-primary-brown font-bold tracking-[0.93px] md:mx-7 leading-[25px] mb-4 mx-6 lg:mx-12 mt-[32px]">
            SHIPPING INFO
          </h2>

          <div className="mx-6 lg:mx-12 md:mx-7">
            <label
              className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px]"
              htmlFor="address"
            >
              Your Address
            </label>
            <input
              className="border-solid border border-primary-gray outline-primary-brown rounded-lg w-[100%] py-[18px] bg-secondary-white pl-6 "
              id="address"
              type="text"
              name="address"
              placeholder="1137 Williams Avenue"
              required
              autoComplete="on"
            />
            <div className="md:grid grid-cols-2 grid-rows-2">
              <div className="md:mr-4">
                <label
                  className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px] mt-6"
                  htmlFor="zipcode"
                >
                  ZIP Code
                </label>
                <input
                  className="border-solid border outline-primary-brown border-primary-gray rounded-lg w-[100%] py-[18px] bg-secondary-white pl-6 "
                  id="zipcode"
                  type="text"
                  name="zipcode"
                  placeholder="10001"
                  required
                  autoComplete="on"
                />
              </div>
              <div>
                <label
                  className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px] mt-6 "
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  className="border-solid border outline-primary-brown border-primary-gray rounded-lg w-[100%] py-[18px] bg-secondary-white pl-6 "
                  id="city"
                  type="text"
                  name="city"
                  placeholder="New York"
                  required
                  autoComplete="on"
                />
              </div>
              <div className="md:mr-4">
                <label
                  className="block text-[12px] text-secondary-dark font-bold leading-normal tracking-[-0.21px] mb-[9px] mt-6"
                  htmlFor="country"
                >
                  Country
                </label>
                <input
                  className="border-solid border outline-primary-brown border-primary-gray rounded-lg w-[100%] py-[18px] bg-secondary-white pl-6 "
                  id="country"
                  type="text"
                  name="country"
                  placeholder="United States"
                  required
                  autoComplete="on"
                />
              </div>
            </div>
          </div>
          <h2 className="text-sm lg:mx-12 md:mx-7 text-primary-brown font-bold tracking-[0.93px] leading-[25px] mb-4 mx-6 mt-[32px]">
            PAYMENT DETAILS
          </h2>
        </fieldset>
      </section>

      <article className="bg-secondary-white rounded-lg pb-[32px] lg:ml-[30px] mt-8 lg:mt-[145px] shrink-0 lg:w-[350px]">
        <h1 className="font-bold mx-6 pt-8 pb-[8px] leading-normal tracking-[1.29px] text-[18px]">
          SUMMARY
        </h1>
        {cart &&
          cart.map(
            (
              value: { name: string; price: number; qty: number },
              index: number
            ) => (
              <div key={index} className="flex items-center">
                <Image
                  src={`/assets/cart/image-${value.name}.jpg`}
                  alt="headphone"
                  width={84}
                  height={104}
                  className=" w-auto h-auto ml-6 rounded-lg mt-6"
                  quality={100}
                />
                <div className="mr-6 md:mr-0 ml-4 flex justify-between items-center">
                  <div>
                    <h1 className="font-bold text-[15px] text-secondary-dark mr-[70px] inline-block leading-[25px] ">
                      {itemName[value.name as keyof typeof itemName]}
                    </h1>

                    <p className="font-bold text-[14px] text-secondary-dark leading-[25px] opacity-50">
                      $ {new Intl.NumberFormat().format(Number(value.price))}
                    </p>
                  </div>
                  <h1 className="font-bold md:mr-6 absolute lg:right-[165px] right-[48px] text-[15px] text-secondary-dark leading-[25px] inline-block opacity-50 ">
                    X{value.qty}
                  </h1>
                </div>
              </div>
            )
          )}
        <div className="mx-6">
          <article className="flex justify-between  items-start">
            <article className="mt-[35px] text-secondary-dark opacity-50 font-medium text-md leading-[25px] ">
              <h2>TOTAL</h2>
              <h2 className="my-2">SHIPPING</h2>
              <h2>VAT (INCLUDED)</h2>
              <h2 className="mt-[30px]">GRAND TOTAL</h2>
            </article>

            <article className="font-bold text-[18px] text-secondary-dark mt-[32px] pb-[19px] leading-normal ">
              <h1>$ {new Intl.NumberFormat().format(Number(total))}</h1>
              <h1 className="my-2">$ 50</h1>
              <h1>$ {new Intl.NumberFormat().format(Number(vat))}</h1>
              <h1 className="mt-6 text-primary-brown text-right">
                $ {new Intl.NumberFormat().format(total + vat + 50)}
              </h1>
            </article>
          </article>
          <h2 className="text-sm text-primary-brown font-bold tracking-[0.93px] leading-[25px] mb-4  mt-[32px]">
            PAYMENT DETAILS
          </h2>

          <div className="">
            <PaymentElement options={{ layout: "accordion" }} />
          </div>

          <button
            disabled={cart ? false : true}
            type="submit"
            className="h-12 w-[100%] mt-[32px] bg-primary-brown hover:bg-secondary-light-brown tracking-[1px] leading-normal text-secondary-white font-bold text-sm"
          >
            {isLoading ? "Processing..." : "CONTINUE & PAY"}
          </button>
          {message && <div id="payment-message">{message}</div>}
        </div>
      </article>
    </form>
  );
}
